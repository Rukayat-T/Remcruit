from rest_framework import serializers
from authentication.models import *

from Employers.models import *
from JobSeekers.models import *

from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from rest_framework.exceptions import AuthenticationFailed
from django.utils.encoding import smart_str, force_str, smart_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode


from Employers.models import *
from JobSeekers.models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=[ 'first_name', 'last_name',  'email', 'is_jobSeeker']

class JobSeekerRegisterSerializer(serializers.ModelSerializer):
    password2=serializers.CharField(style={"input_type":"password"}, write_only=True)
    year_of_graduation = serializers.ChoiceField(choices=JobSeeker.YEAR_OF_GRADUATION_CHOICES, required=True)
    university_name = serializers.ChoiceField(choices=UniversityName.choices, required=True)
    subject_of_study = serializers.ChoiceField(choices=SubjectOfStudy.choices, required=True)
    degree_classification = serializers.ChoiceField(choices=DegreeClassification.choices,required=True)
    profile_picture = serializers.ImageField(required=False)
    credential_name = serializers.CharField(required=False)
    credential = serializers.FileField(required=False)
    highest_qualification = serializers.ChoiceField(choices=JobSeeker.HIGHEST_QUALIFICATION_CHOICES, required=True)
    gender = serializers.ChoiceField(choices=Gender.choices, required=True)
    terms_and_conditions = serializers.BooleanField(required=True)

    class Meta:
        model = User
        fields = [
            'id',
            'email',
            'first_name',
            'last_name',
            'password',
            'password2',
            'subject_of_study',
            'university_name',
            'year_of_graduation',
            'credential_name',
            'credential',
            'profile_picture',
            'degree_classification',
            'highest_qualification',
            'gender',
            'terms_and_conditions',
        ]
        read_only_fields = ["id"]
        extra_Kwargs={
            'password':{'write_only':True},
            'password2':{'write_only':True}
        }

    def validate(self, attrs):
        if attrs["password"] != attrs["password2"]:
            raise serializers.ValidationError({"error":"password do not match"})

        validate_password(attrs["password"])
        attrs.pop("password2")
        return attrs
        

    def create(self, validated_data):
        username= validated_data.pop('email')
        first_name = validated_data.pop('first_name')
        last_name = validated_data.pop('last_name')
        password = validated_data.pop('password')
        credential = validated_data.pop('credential')
        credential_name = validated_data.pop('credential_name')

        user = User(username=username, first_name=first_name, last_name=last_name)
        user.set_password(password)
        user.is_active= False
        user.is_jobSeeker=True
        user.save()

        job_seeker = JobSeeker.objects.create(**validated_data, user=user)
        applicationCredential = ApplicantCredential(job_seeker=job_seeker, credential=credential, credential_name=credential_name)
        applicationCredential.save()
        return job_seeker
        

class EmployerRegisterSerializer(serializers.ModelSerializer):
    password2=serializers.CharField(style={"input_type":"password"}, write_only=True)
    job_title = serializers.CharField(required=True)
    title = serializers.CharField(required=True)
    organisation_name = serializers.CharField(required=True)
    office_address = serializers.CharField(required=True)
    industry = serializers.CharField(required=True)
    employees = serializers.CharField(required=True)
    phone_number = serializers.CharField(required=True)
    organisation_description = serializers.CharField(required=True)
    recruitment_agency = serializers.BooleanField(required=True)
    gender = serializers.ChoiceField(choices=Gender.choices, required=True)
    terms_and_conditions = serializers.BooleanField(required=True)
    company_logo = serializers.ImageField(required=False)

    class Meta:
        model = User
        fields = [
            'id',
            'email',
            'first_name',
            'last_name',
            'password',
            'password2',
            'company_logo',
            'title',
            'gender',
            'job_title',
            'phone_number',
            'organisation_name',
            'office_address',
            'organisation_description',
            'employees',
            'recruitment_agency',
            'industry',
            'terms_and_conditions',
        ]
        read_only_fields = ["id"]
        extra_Kwargs={
            'password':{'write_only':True},
            'password2':{'write_only':True}
        }

    def validate(self, attrs):
        if attrs["password"] != attrs["password2"]:
            raise serializers.ValidationError({"error":"password do not match"})

        validate_password(attrs["password"])
        attrs.pop("password2")
        return attrs
        

    def create(self, validated_data):
        username= validated_data.pop('email')
        first_name = validated_data.pop('first_name')
        last_name = validated_data.pop('last_name')
        password = validated_data.pop('password')

        user = User(username=username, first_name=first_name, last_name=last_name)
        user.set_password(password)
        user.is_active= False
        user.is_employer=True
        user.save()


        employer = Employer.objects.create(**validated_data, user=user)
        return employer
        


class ChangePasswordSerializer(serializers.Serializer):
    model = User


    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
    


    