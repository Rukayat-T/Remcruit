from django.shortcuts import render
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

from .serializers import *
from .permissions import IsEmployerUser, IsJobSeekerUser

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['id'] = user.id
        token['username'] = user.username
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        # ...

        return token
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    

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


# @api_view(['POST',])
class JobSeekerRegister(generics.GenericAPIView):
  serializer_class = JobSeekerRegisterSerializer
  def post(self, request):
    if request.method == 'POST':
        serializer = self.serializer_class(data=request.data, context={'request': request})
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

class EmployerRegister(generics.GenericAPIView):
    serializer_class = EmployerRegisterSerializer
    def post(self, request):
   
        if request.method == 'POST':
            serializer = self.serializer_class(data=request.data, context={'request': request})
        # serializer = EmployerRegisterSerializer(data=request.data)
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
    else:  
        return HttpResponse('Activation link is invalid!')  
    


class ChangePasswordView(generics.UpdateAPIView):
    
    serializer_class = ChangePasswordSerializer
    model = User
    permission_classes = (IsAuthenticated,)

    def get_object(self, queryset=None):
        obj = self.request.user
        return obj

    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            # Check old password
            if not self.object.check_password(serializer.data.get("old_password")):
                return Response({"old_password": ["Wrong password."]}, status=status.HTTP_400_BAD_REQUEST)
            # set_password also hashes the password that the user will get
            self.object.set_password(serializer.data.get("new_password"))
            self.object.save()
            response = {
                'status': 'success',
                'code': status.HTTP_200_OK,
                'message': 'Password updated successfully',
                'data': []
            }

            return Response(response)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
  

# def send_passwordreset_email(user, request):
#     current_site = get_current_site(request)
#     email_subject = "Change your Password"
#     email_body = render_to_string('templates/changepassword.html', {'user': user, 'domain':current_site, 'uid': urlsafe_base64_encode(force_bytes(user.pk)), 'token': Token.objects.get(user_id=user.pk).key, })
#     print(user)
#     print(user.email)
#     print(email_subject)
#     email = EmailMessage(subject=email_subject, body=email_body, from_email='contact@remcruit.com', to=[user.username])
#     email.content_subtype = "html"
#     email.send(fail_silently=False)
    
   
            
            
        
        
   


        




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
