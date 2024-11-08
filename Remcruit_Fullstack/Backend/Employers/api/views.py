from django.shortcuts import render, get_object_or_404

from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse
from django.contrib import messages
from JobSeekers.api.serializers import *

from rest_framework.decorators import api_view

from .serializers import *


class AllEmployers(APIView):
    serializer_class = EmployerSerializer

    def get(self, request):
        if request.method == 'GET':
            employers = Employer.objects.all()
            serializer = EmployerSerializer(employers, many=True)
            return Response(serializer.data)


class EmployerView(generics.GenericAPIView):
    serializer_class = EmployerSerializer

    def get(self, request, id):
        if request.method == "GET":
            if id:
                employer = Employer.objects.get(id=id)
                serializer = EmployerSerializer(employer)
                if employer:
                    return Response(serializer.data)
                else:
                    messages.error(request, "This employer does not exist")
                    return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, id):
        employer = Employer.objects.get(id=id)
        if employer:
            serializer = EmployerSerializer(
                employer, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors)
        else:
            messages.error(request, "This employer does not exist")
            return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, id):
        employer = get_object_or_404(Employer, id=id)
        if employer:
            employer.delete()
            messages.error(request, "Employer deleted")
            return Response(status=status.HTTP_200_OK)
        else:
            messages.error(request, "Employer could not be deleted")
            return Response(status=status.HTTP_404_NOT_FOUND)


class getEmployerByUserId(APIView):
    serializer_class = ViewEmployerSerializer
    #  get employer by id

    def get(self, request, userid):
        if request.method == "GET":
            message = {}
            if userid:
                employer = Employer.objects.get(user=userid)
                serializer = ViewEmployerSerializer(employer)
                if employer:
                    message['response'] = "employer found"
                    return Response(serializer.data, status=status.HTTP_200_OK)
                else:
                    message['response'] = "employer with user id not found"
                    return Response(message, status=status.HTTP_404_NOT_FOUND)


class CreateJobView(generics.GenericAPIView):
    serializer_class = JobSerializer

    def post(self, request):
        if request.method == 'POST':
            serializer = self.serializer_class(
                data=request.data, context={'request': request})
            data = {}
            if serializer.is_valid():
                job = serializer.save()
                data['response'] = "Job created"
                return Response(data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class saveAJob(generics.GenericAPIView):
#     serializer_class = SavedJobSerializer

#     def post(self, request):
#         if request.method == 'POST':
#             serializer = self.serializer_class(
#                 data=request.data, context={'request': request}
#             )
#             data = {}
#             if serializer.is_valid():
#                 savedJob = serializer.save()
#                 data['response'] = "job saved"
#                 return Response(serializer.data, status.HTTP_200_OK)
#             else:
#                 return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class GetAllJobs(APIView):
    serializer_class = ViewJobSerializer

    def get(self, request):
        if request.method == 'GET':
            jobs = Job.objects.all()
            serializer = ViewJobSerializer(jobs, many=True)
            return Response(serializer.data)

class JobView(generics.GenericAPIView):
    serializer_class = ViewJobSerializer

    def get(self, request, id):
        if request.method == 'GET':
            data = {}
            if id:
                job = Job.objects.get(id=id)
                serializer = ViewJobSerializer(job)
                if job:
                    return Response(serializer.data, status=status.HTTP_200_OK)
                else:
                    data['response'] = "This job does not exist"
                    return Response(data, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        job = get_object_or_404(Job, id=id)
        data = {}
        if job:
            job.delete()
            data['response'] = "Job deleted"
            return Response(data, status=status.HTTP_200_OK)
        else:
            data['response'] = "Job not found"
            return Response(data, status=status.HTTP_404_NOT_FOUND)


class GetJobByCompanyIdView(APIView):
    serializer_class = ViewJobSerializer

    def get(self, request, companyId):
        if request.method == "GET":
            message = {}
            if companyId:
                job = Job.objects.filter(company=companyId)
                serializer = ViewJobSerializer(job, many=True)
                if job:
                    message['response'] = "job found"
                    return Response(serializer.data, status=status.HTTP_200_OK)
                else:
                    message['response'] = "job with company id not found"
                    return Response(message, status=status.HTTP_404_NOT_FOUND)

class GetLatestJobsView(APIView):
    serializer_class = ViewJobSerializer

    def get(self, request, companyId):
        if request.method == "GET":
            message = {}
            if companyId:
                jobs = Job.objects.filter(company=companyId).order_by('-application_deadline')[:3]
                serializer = ViewJobSerializer(jobs, many=True)
                if jobs:
                    message['response'] = "jobs found"
                    return Response(serializer.data, status=status.HTTP_200_OK)
                else:
                    message['response'] = "job with company id not found"
                    return Response(message, status=status.HTTP_404_NOT_FOUND)


class GetAllCandidatesByJobId(APIView):
    serializer_class = JobApplicationSerializer

    def get(self, request, jobId):
        if request.method == "GET":
            message = {}
            
            if jobId:
                application = JobApplication.objects.filter(job=jobId)
                serializer = JobApplicationSerializer(application, many=True)
                
                if application:
                    message['response'] = "Application found"
                    return Response(serializer.data, status=status.HTTP_200_OK)
                    
                else:
                    message['response'] = "No Application with ID Found"
                    return Response(message, status=status.HTTP_404_NOT_FOUND)
                
class GetCandidateById(APIView):
    serializer_class = ViewJobApplicationSerializer

    def get(self, request, id):
        if request.method == "GET":
            message = {}
            
            if id:
                application = JobApplication.objects.get(id=id)
                serializer = ViewJobApplicationSerializer(application)
                
                if application:
                    message['response'] = "Application found"
                    return Response(serializer.data, status=status.HTTP_200_OK)
                    
                else:
                    message['response'] = "No Application with ID Found"
                    return Response(message, status=status.HTTP_404_NOT_FOUND)

class GetCandidatesByJobIdAndStatus(APIView):
    serializer_class = ViewJobApplicationSerializer 

    def get(self, request, jobId, applicationStatus):
        if request.method == "GET":
            message = {}
            if jobId:
                application = JobApplication.objects.filter(job=jobId, status = applicationStatus)
                serializer = ViewJobApplicationSerializer(application, many=True)
                if application:
                    message['response'] = "Applications found"
                    return Response(serializer.data, status=status.HTTP_200_OK)
                else:
                    message['response'] = "No Applications Found"
                    return Response(message, status=status.HTTP_404_NOT_FOUND)
                

class GetCandidatesForAllJobsByCompany(APIView):
    # get candidates count for all the jobs
    #get all jobs for an employer and its count 
    #for every job, get the candidate count and push it into a list
    serializer_class = JobSerializer
    def get(self, request, companyId):
        if request.method == 'GET':
            jobsIdList =[]
            candidatesCountList = []
            jobs = Job.objects.filter(company=companyId).values("id")
            for job in jobs:
                print(job)
                jobsIdList.append(job["id"])
            for jobId in jobsIdList:
                candidatesCount = JobApplication.objects.filter(job=jobId).count()
                candidatesCountList.append(candidatesCount)
            print(candidatesCountList)
            
            return Response(candidatesCountList, status=status.HTTP_200_OK)


class GetLatestCandidatesByCompany(APIView):
    # get the last 3 candidates for company
   
    serializer_class = JobSerializer
    # def get(self, request, companyId):
    #     if request.method == 'GET':
    #         candidates = JobApplication.objects.filter(status = "In Review", job =  )
                
    #         serializer = ViewJobApplicationSerializer(candidates, many=True)
            
           
            
    #         return Response(serializer.data, status=status.HTTP_200_OK)



class GetCandidatesCount(APIView):
    serializer_class = JobApplicationSerializer

    def get(self, request, jobId):
        if request.method == "GET":
            message = {}
            
            if jobId:
                application = JobApplication.objects.filter(job=jobId)
                candidatesCount = JobApplication.objects.filter(job=jobId).count()
                serializer = JobApplicationSerializer(application, many=True)
               
                if application:
                    message['response'] = "Application found"
                    return Response(candidatesCount, status=status.HTTP_200_OK)
                    
                else:
                    message['response'] = "No Application with ID Found"
                    candidatesCount = 0
                    return Response(candidatesCount, status=status.HTTP_200_OK)


class UpdateApplicationByStatus(generics.GenericAPIView):
    serializer_class = JobApplicationSerializer

    def patch(self, request, id):
        application = JobApplication.objects.get(id=id)
        message = {}
        if application:
            serializer = JobApplicationSerializer(
                application, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                message['message'] = "status updated"
                return Response(message, status=status.HTTP_200_OK)
            else:
                message['message'] = "status could not be updated"
                return Response(message, serializer.error_messages)
        else:
            message['message'] = "This application does not exist"
            return Response(message, status=status.HTTP_404_NOT_FOUND)

# get job by employer /companyid
# get all applicants of an employer/ job/ company
# update job or application by status


