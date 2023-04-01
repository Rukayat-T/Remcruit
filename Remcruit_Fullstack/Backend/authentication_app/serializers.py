from rest_framework import serializers
from authentication_app.models import User, Employer, JobSeeker


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=[ 'email', 'is_jobSeeker']


class EmployerRegisterSerializer(serializers.ModelSerializer):
    password2=serializers.CharField(style={"input_type":"password"}, write_only=True)
    class Meta:
        model=User
        fields=[ 'email', 'password', 'password2']
        extra_Kwargs={
            'password':{'write_only':True}
        }


class JobSeekerRegisterSerializer(serializers.ModelSerializer):
    password2=serializers.CharField(style={"input_type":"password"}, write_only=True)
    class Meta:
        model=User
        fields=[ 'email', 'password', 'password2']
        extra_Kwargs={
            'password':{'write_only':True}
        }
        