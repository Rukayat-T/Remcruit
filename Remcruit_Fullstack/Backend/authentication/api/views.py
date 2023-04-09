from email import message
from profile import Profile
from django.contrib import messages
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
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
from .helpers import send_forget_password_mail


from rest_framework.response import Response
from django.contrib.auth.models import User




from .serializers import *
from .permissions import IsEmployerUser, IsJobSeekerUser

# from ..models import User


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
    


import uuid
def ForgetPassword(request):
    try:
        if request.method == 'POST':
            username = request.POST.get('username')
            
            if not User.objects.filter(username=username).first():
                messages.success(request, 'Not user found with this username.')
                return redirect('/forget-password/')
            
            user_obj = User.objects.get(username = username)
            token = str(uuid.uuid4())
            profile_obj= Profile.objects.get(user = user_obj)
            profile_obj.forget_password_token = token
            profile_obj.save()
            send_forget_password_mail(user_obj.email , token)
            messages.success(request, 'An email is sent.')
            return redirect('/forget-password/')
                
    
    
    except Exception as e:
        print(e)
    return render(request , 'forget-password.html')    


def ChangePassword(request , token):
    context = {}
    
    
    try:
        profile_obj = Profile.objects.filter(forget_password_token = token).first()
        context = {'user_id' : profile_obj.user.id}
        
        if request.method == 'POST':
            new_password = request.POST.get('new_password')
            confirm_password = request.POST.get('reconfirm_password')
            user_id = request.POST.get('user_id')
            
            if user_id is  None:
                messages.success(request, 'No user id found.')
                return redirect(f'/change-password/{token}/')
                
            
            if  new_password != confirm_password:
                messages.success(request, 'both should  be equal.')
                return redirect(f'/change-password/{token}/')
                         
            
            user_obj = User.objects.get(id = user_id)
            user_obj.set_password(new_password)
            user_obj.save()
            return redirect('/login/')
            
            
            
        
        
    except Exception as e:
        print(e)
    return render(request , 'change-password.html' , context)


        




"""
----- My logic for account activation -----
send a link to user.email on register. 
The link would be the domain(the current site, 
which is our site)/their uid encrypted (to protect it)
/their token also encrypted. In the email template :
http://{{domain}}{% url 'activateEmail' uid64 token%} is the link
in the urls.py:
path('activate/<uid64>/<token>', views.activateEmail(), name = "activateEmail")
in the activate function:
decode the uid and token, then check to make sure they are the same ones we sent. 
and then set user.is_active = True. the link will bring them to a page that will 
display the message account activated or something if the link is valid, 
and then they'll be taken to to the home page.
i think i should add a button that will redirect them to home.

question:
if their account is not active, they cant log in so call the activate email function.
then they can log in?.

----- End -----
"""