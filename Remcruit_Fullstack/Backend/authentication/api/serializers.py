from rest_framework import serializers
from authentication.models import User, Employer, JobSeeker


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=[ 'email', 'is_jobSeeker']


class EmployerRegisterSerializer(serializers.ModelSerializer):
    password2=serializers.CharField(style={"input_type":"password"}, write_only=True)
    class Meta:
        model=User
        fields=['__all__']
        extra_Kwargs={
            'password':{'write_only':True}
        }
    
    def save(self,  **kwargs):
        user=User(
            username=self.validated_data['username'],
            email=self.validated_data['email']
        )
        password=self.validated_data['password']
        password2=self.validated_data['password2']
        if password !=password2:
            raise serializers.ValidationError({"error":"password do not match"})
        user.set_password(password)
        user.is_employer=True
        user.save()
        Employer.objects.create(user=user)
        return user  

class JobSeekerRegisterSerializer(serializers.ModelSerializer):
    password2=serializers.CharField(style={"input_type":"password"}, write_only=True)
    class Meta:
        model=User
        fields=['username','email','password','password2']
        extra_Kwargs={
            'password':{'write_only':True}
        }
        
    def save(self,  **kwargs):
        user=User(
            username=self.validated_data['username'],
            email=self.validated_data['email']
        )
        password=self.validated_data['password']
        password2=self.validated_data['password2']
        if password !=password2:
            raise serializers.ValidationError({"error":"password do not match"})
        user.set_password(password)
        user.is_jobSeeker=True
        user.save()
        JobSeeker.objects.create(user=user)
        return user  


   