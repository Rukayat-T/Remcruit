from rest_framework import serializers
from ..models import *

class JobSeekerSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobSeeker
        fields = '__all__'

class JobApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplication
        fields = '__all__'

class SavedJobSerializer(serializers.ModelSerializer):
    class Meta: 
        model = SavedJob
        fields = '__all__'

class ArchivedJobSerializer(serializers.ModelSerializer):
    class Meta: 
        model = ArchivedJob
        fields = '__all__'