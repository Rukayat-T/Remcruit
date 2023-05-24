from rest_framework import serializers
from ..models import *
from Employers.api.serializers import JobSerializer

class JobSeekerSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobSeeker
        fields = '__all__'

class JobApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplication
        fields = '__all__'

class CreateJobApplicationSerializer(serializers.ModelSerializer):
    # job_seeker = JobSeekerSerializer
    # job = JobSerializer
    credential_name = serializers.CharField(required = False) 
    credential = serializers.FileField(required = False)
    class Meta:
        model = JobApplication
        fields = [
            'id',
            'job',
            'credential',
            'status',
            'job_seeker',
            'credential_name',
            'credential',
        ]
        read_only_fields = ["id"]

    def create(self, validated_data):
        job_seeker = validated_data.pop('job_seeker')
        credential_name = validated_data.pop('credential_name')
        credential = validated_data.pop('credential')
        status = validated_data.pop('status')
        job = validated_data.pop('job')

        applicantCredential = ApplicantCredential(job_seeker=job_seeker, credential_name=credential_name, credential=credential)
        applicantCredential.save()
        
        jobApplication = JobApplication.objects.create(job_seeker=job_seeker, job=job, credential=applicantCredential, status=status)
        return jobApplication

class ViewJobApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplication
        fields = '__all__'
        depth = 2

class SavedJobSerializer(serializers.ModelSerializer):
    class Meta: 
        model = SavedJob
        fields = '__all__'

class ArchivedJobSerializer(serializers.ModelSerializer):
    class Meta: 
        model = ArchivedJob
        fields = '__all__'

class ViewSavedJobsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavedJob
        fields = '__all__'
        depth = 2


  