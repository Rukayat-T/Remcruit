from django.shortcuts import render, get_object_or_404
from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse
from django.contrib import messages
from .serializers import *

class AllJobSeekers(generics.GenericAPIView):
    serializer_class = JobSeekerSerializer
    def get(self, request):
        if request.method == 'GET':
            jobSeekers = JobSeeker.objects.all()
            serializer = JobSeekerSerializer(jobSeekers, many=True)
            return Response(serializer.data)
        
class JobSeekerView(generics.GenericAPIView):
    serializer_class = JobSeekerSerializer
    
    def get(self, request, id):
        if request.method == "GET":
            if id:
                jobSeeker = JobSeeker.objects.get(id=id)
                serializer = JobSeekerSerializer(jobSeeker)
                if jobSeeker:
                    return Response(serializer.data)
                else:
                    messages.error(request, "This jobseeker does not exist")
                    return Response(status=status.HTTP_404_NOT_FOUND)
    
    def put(self, request, id): 
        jobseeker = JobSeeker.objects.get(id=id)
        data = {}
        if jobseeker:
            serializer = JobSeekerSerializer(jobseeker, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                data['response'] = "Edit Successful"
                return Response(data, serializer.data)
            else:
                return Response(serializer.error_messages)
        else:
            messages.error(request, "This jobseeker does not exist")
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def delete(self, request, id):
        jobseeker = get_object_or_404(JobSeeker, id=id)
        data = {}
        if jobseeker:
            jobseeker.delete()
            data['response'] = "Jobseeker Deleted"             
            return Response(data, status=status.HTTP_200_OK)
        else:
            data['response'] = "Please confirm your email address to complete the registration"
            return Response(data, status=status.HTTP_204_NO_CONTENT)


class AllJobApplications(generics.GenericAPIView):
    serializer_class = JobApplicationSerializer
    def get(self, request):
        if request.method == 'GET':
            job_application = JobApplication.objects.all()
            serializer = JobApplicationSerializer(job_application, many=True)
            return Response(serializer.data)
     
    def post(self, request):
        if request.method == 'POST':
            serializer = self.serializer_class(data=request.data, context={'request': request})
            data = {}
            if serializer.is_valid():
                job_application = serializer.save()
                data['response'] = "Okay, you have tried"
                data['job title'] = job_application.job.title
                data['job company'] = job_application.job.company.organisation_name
                data['job location'] = job_application.job.location
                data['applicationStatus'] = job_application.applicationStatus
                return Response(data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class JobApplicationView(generics.GenericAPIView):
    serializer_class = JobApplicationSerializer

   
    
    def get(self, request, id):
        if request.method == "GET":
            message = {}
            if id:
                job_application = JobApplication.objects.get(id=id)
                serializer = JobApplicationSerializer(job_application)
                if job_application:
                    message['response'] = "Okay, you have tried"
                    return Response(serializer.data)
                else:
                    return Response(status=status.HTTP_404_NOT_FOUND)
    
    def delete(self, request, id):
        job_application = get_object_or_404(JobApplication, id=id)
        data = {}
        if job_application:
            job_application.delete()
            data['response'] = "Job Application Deleted"             
            return Response(data, status=status.HTTP_200_OK)
        else:
            data['response'] = "Unable to delete Job Application"
            return Response(data, status=status.HTTP_204_NO_CONTENT)