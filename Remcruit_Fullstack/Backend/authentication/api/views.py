
from rest_framework import generics, permissions
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from django.utils.encoding import force_bytes, force_str, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.core.mail import EmailMessage
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.http import HttpResponse
from django.contrib.auth import get_user_model
from django.shortcuts import render

from .serializers import *
from .permissions import IsEmployerUser, IsJobSeekerUser


def send_confirmation_email(user, request):
    current_site = get_current_site(request)
    email_subject = "Confirm your Email"
    email_body = render_to_string('authentication/confirmEmail.html', {'user': user, 'domain':current_site, 'uid': urlsafe_base64_encode(force_bytes(user.pk)), 'token': Token.objects.get(user_id=user.pk).key, })
    print(user)
    print(user.email)
    print(email_subject)
    email = EmailMessage(subject=email_subject, body=email_body, from_email='contact@remcruit.com', to=[user.username])
    email.content_subtype = "html"
    email.send(fail_silently=False)


@api_view(['POST',])
def JobSeekerRegisterView(request):
    if request.method == 'POST':
        serializer = JobSeekerRegisterSerializer(data=request.data)
        data = {}

        if serializer.is_valid():
            jobseeker = serializer.save()
            data['response'] = "Please confirm your email address to complete the registration"
            data['email'] = jobseeker.user.email
            data['username'] = jobseeker.user.username
            send_confirmation_email(jobseeker.user, request)
            return Response(data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST',])
def EmployerRegisterView(request):
    if request.method == 'POST':
        serializer = EmployerRegisterSerializer(data=request.data)
        data = {}

        if serializer.is_valid():
            employer = serializer.save()
            data['response'] = "Please confirm your email address to complete the registration"
            data['email'] = employer.user.email
            data['username'] = employer.user.username
            send_confirmation_email(employer.user, request)
            return Response(data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created= Token.objects.get_or_create(user=user)
        return Response({
            'token':token.key,
            'user_id': user.pk,
            'username': user.username,
            "is_jobSeeker": user.is_jobSeeker,
            "is_employer": user.is_employer
        })
    

class LogoutView(APIView):
    def post(self, request, format=None):
        request.auth.delete()
        return Response(status=status.HTTP_200_OK)


class EmployerOnlyView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated&IsEmployerUser]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class JobSeekerOnlyView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated&IsJobSeekerUser]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
    
    # 



def activate_user(request, uid64, token):
    User = get_user_model()  
    try:
        uid = force_str(urlsafe_base64_decode(uid64))
        user = User.objects.get(pk = uid)
    except(User.DoesNotExist):  
        user = None
    
    if user is not None:
        user.is_active = True
        user.save()
        return  render(request, "authentication/activatePage.html", {"user" : user,} )
    #HttpResponse('Thank you for your email confirmation. Your account is ready now')  
    else:  
        return HttpResponse('Activation link is invalid!')  
