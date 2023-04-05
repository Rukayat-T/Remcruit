from rest_framework import generics, permissions
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from .serializers import *

from rest_framework.decorators import api_view
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.views import APIView
from rest_framework import status

from django.utils.encoding import force_bytes, force_str, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.core.mail import EmailMessage, get_connection, send_mail
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string

from .permissions import IsEmployerUser, IsJobSeekerUser
from rest_framework.permissions import IsAuthenticated

def send_confirmation_email(userEmail, request):
    current_site = get_current_site(request)
    email_subject = "Confirm your Email"
    email_body = render_to_string('authentication/confirmEmail.html', {'user': request.user, 'domain':current_site, 'uid': urlsafe_base64_encode(force_bytes(user.pk)), 'token': Token.objects.get(user=user).key, })

    email = EmailMessage(subject=email_subject, body=email_body, from_email='contact@remcruit.com', to=[userEmail])
    email.content_subtype = "html"
    email.send()

@api_view(['POST',])
def JobSeekerRegisterView(request):
    if request.method == 'POST':
        serializer = JobSeekerRegisterSerializer(data=request.data)
        data = {}

        if serializer.is_valid():
            jobseeker = serializer.save()
            userEmail = jobseeker.user.email
            send_confirmation_email(userEmail, request)
            data['response'] = "You have been successfully registered"
            data['email'] = jobseeker.user.email
            data['username'] = jobseeker.user.username
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
            userEmail = employer.user.email
            send_confirmation_email(userEmail, request)
            data['response'] = "You have been successfully registered"
            data['email'] = employer.user.email
            data['username'] = employer.user.username
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
            'email': user.email,
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

"""
----- My logic for account activation -----
send a link to user.email on register. 
The link would be the domain(the current site, 
which is our site)/their uid encrypted (to protect it)
/their token also encrypted.In the template 
{% url 'activateEmail' uid64 token%} https://{{domain}}/{{uid64}}/{{token}}
the url: path('activate/<uid64>/<token>', views.activateEmail(), name = "activateEmail")
the link will bring them to a page with that url.on that page, 
there will be just a button that they'd click to activate the account 
it will create a post which will decode the uid and token, then check to 
make sure they are the same ones we sent. and then user.is_active = True
 and then they'll be taken to to the home page.

if their account is not active, they cant log in so call the activate email function.
then they can log in.

----- End -----
"""


# def activate_user(request, uid64, token):
#     try:
#         uid = force_str(urlsafe_base64_decode(uid64))

#         user = User.objects.get(pk = uid)
#     except Exception as e:
#         user = None
    
#     if user:
#         user.is_active = True
#         return redirect(reverse('activate'))
    
    # return render(request, 'authentication/failed.html', {'user': user})
