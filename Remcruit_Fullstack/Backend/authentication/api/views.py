from rest_framework import generics, permissions
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from .serializers import *

from rest_framework.decorators import api_view
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.views import APIView
from rest_framework import status
from .permissions import IsEmployerUser, IsJobSeekerUser
from rest_framework.permissions import IsAuthenticated


@api_view(['POST',])
def JobSeekerRegisterView(request):
    if request.method == 'POST':
        serializer = JobSeekerRegisterSerializer(data=request.data)
        data = {}

        if serializer.is_valid():
            jobseeker = serializer.save()
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