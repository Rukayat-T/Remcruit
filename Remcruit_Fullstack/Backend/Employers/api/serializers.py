from rest_framework import serializers
from ..models import *
from JobSeekers.api.serializers import *

class EmployerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employer
        fields = '__all__'

class ViewEmployerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employer
        fields = '__all__'
        depth = 1

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = "__all__"
class ViewJobSerializer(serializers.ModelSerializer):
    company = EmployerSerializer(many = False)
    class Meta:
        model = Job
        fields = ['id', 
                  'title', 
                  'description', 
                  'job_type', 
                  'company',  
                  'job_post_duration', 
                  'salary', 
                  'pay_rate', 
                  'skills_required', 
                  'job_type', 
                  'open_spots', 
                  'application_deadline', 
                  'degree_classification', 
                  'is_available', 
                  'cv_requirement', 
                  'resumption', 
                  'is_remote_opportunity', 
                  'created_at', 
                  'urgency'
        ]
        read_only_fields = ["id"]

recruiter = models.ForeignKey('authentication.User', related_name='user', on_delete=models.CASCADE)
   