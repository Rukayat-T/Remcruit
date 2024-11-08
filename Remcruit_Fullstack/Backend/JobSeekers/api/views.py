from django.shortcuts import render, get_object_or_404
from rest_framework import status, filters, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import JsonResponse
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .serializers import *
from Employers.models import *
from Employers.api.serializers import *
import json

class AllJobSeekers(APIView):
    serializer_class = JobSeekerSerializer

    def get(self, request):
        if request.method == 'GET':
            jobSeekers = JobSeeker.objects.all()
            serializer = JobSeekerSerializer(jobSeekers, many=True)
            return Response(serializer.data)

class ApplicantCredentialsView(generics.GenericAPIView):
    serializer_class = ApplicantCredentialSerializer

    def get(self, request, id):
        if request.method == 'GET':
            if id:
                applicant_credential = ApplicantCredential.objects.get(id=id)
                serializer = ApplicantCredentialSerializer(applicant_credential)
                if applicant_credential:
                    return Response(serializer.data)
                else:
                    messages.error(request, "This credential does not exist")
                    return Response(status=status.HTTP_404_NOT_FOUND)
                
    def put(self, request, id):
        applicant_credential = ApplicantCredential.objects.get(id=id)
        if applicant_credential:
            serializer = ApplicantCredentialSerializer(applicant_credential, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
        else:
            messages.error(request, "This credential does not exist")
            return Response(status=status.HTTP_404_NOT_FOUND)
        
    def delete(self, request, id):
        applicant_credential = get_object_or_404(ApplicantCredential, id=id)
        data = {}
        if applicant_credential:
            applicant_credential.delete()
            data['response'] = "Credential Deleted"
            return Response(data, status=status.HTTP_200_OK)
        else:
            data['response'] = "No credential"
            return Response(data, status=status.HTTP_204_NO_CONTENT)    

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
        if jobseeker:
            serializer = JobSeekerSerializer(
                jobseeker, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
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


class getJobSeekerByUserId(APIView):
    serializer_class = JobSeekerSerializer

    def get(self, request, userid):
        if request.method == "GET":
            message = {}
            if userid:
                job_seeker = JobSeeker.objects.get(user=userid)
                serializer = JobSeekerSerializer(job_seeker)
                if job_seeker:
                    message['response'] = "Okay, you have tried"
                    return Response(serializer.data, status=status.HTTP_200_OK)
                else:
                    return Response(status=status.HTTP_404_NOT_FOUND)


class jobApp(generics.GenericAPIView):
    serializer_class = CreateJobApplicationSerializer 
    # serializer_class = JobApplicationSerializer 

    def post(self, request, id):
        if request.method == 'POST':
            job = Job.objects.get(id=id)
            data = request.data
            serializer = self.serializer_class(
                data=data, context={'request': request})
            message = {}
            if serializer.is_valid():
                jobApplication = serializer.save()
                message['response'] = "Job application created"
                return Response(message, status=status.HTTP_201_CREATED)
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


class GetJobApplicationByStatus(APIView):
    serializer_class = JobApplicationSerializer

    def get(self, request, applicationStatus):
        if request.method == "GET":
            message = {}
            if status:
                application = JobApplication.objects.filter(
                    status=applicationStatus)
                serializer = JobApplicationSerializer(application, many=True)
                if application:
                    message['response'] = "Application found"
                    return Response(serializer.data, status=status.HTTP_200_OK)
                else:
                    message['response'] = "No Application with status Found"
                    return Response(message, status=status.HTTP_404_NOT_FOUND)


class GetApplicationByJobSeekerId(APIView):
    serializer_class = ViewJobApplicationSerializer

    def get(self, request, job_seeker_id):
        if request.method == "GET":
            message = {}
            if job_seeker_id:
                application = JobApplication.objects.filter(
                    job_seeker=job_seeker_id)
                serializer = ViewJobApplicationSerializer(application, many=True)
                if application:
                    message['response'] = "Application found"
                    return Response(serializer.data, status=status.HTTP_200_OK)
                else:
                    message['response'] = "No Application with Jobseeker Found"
                    return Response(message, status=status.HTTP_404_NOT_FOUND)


class GetApplicationByJobId(APIView):
    serializer_class = JobApplicationSerializer

    def get(self, request, job_id):
        if request.method == "GET":
            message = {}
            if job_id:
                application = JobApplication.objects.filter(job=job_id)
                serializer = JobApplicationSerializer(application, many=True)
                if application:
                    message['response'] = "Application found"
                    return Response(serializer.data, status=status.HTTP_200_OK)
                else:
                    message['response'] = "No Application with ID Found"
                    return Response(message, status=status.HTTP_404_NOT_FOUND)
 



class saveAJob(generics.GenericAPIView):
    serializer_class = SavedJobSerializer

    def post(self, request):
        if request.method == 'POST':
            serializer = self.serializer_class(
                data=request.data, context={'request': request}
            )
            data = {}
            if serializer.is_valid():
                savedJob = serializer.save()
                data['response'] = "job saved"
                return Response(serializer.data, status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SavedJobsView(APIView):
    serializer_class = ViewSavedJobsSerializer
    
#     def post (self, request, id):
#         if request.method == 'POST':
#             saved = SavedJob.objects.get(id=id)
#             data = request.data
#             serializer = self.serializer_class(data=data, context={'request': request})
#             message = {}
#             if serializer.is_valid():
#                 saved = serializer.save()
#                 message['response'] = "Job Saved"
#                 return Response(message, status=status.HTTP_201_CREATED)
#             else:
#                 return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
    def get(self, request, id):
        if request.method == "GET":
            if id:
                saved = SavedJob.objects.get(id=id)
                serializer = ViewSavedJobsSerializer(saved)
                if saved:
                    return Response(serializer.data)
                else:
                    messages.error(request, "This job does not exist")
                    return Response(status=status.HTTP_404_NOT_FOUND)

class GetCredentialByJobSeeker(APIView):   
    serializers_class = ApplicantCredentialSerializer

    def get(self, request, job_seeker_id):
        if request.method == "GET":
            message = {}
            if job_seeker_id:
                credential = ApplicantCredential.objects.filter(job_seeker=job_seeker_id)
                serializer = ApplicantCredentialSerializer(credential, many=True)
                if credential:
                    message['response'] = "Credential found"
                    return Response(serializer.data, status=status.HTTP_200_OK)
                else:
                    message['response'] = "No Credential with Jobseeker Found"
                    return Response(message, status=status.HTTP_404_NOT_FOUND)
class GetSavedJobsByJobSeeker(APIView):
    serializer_class = ViewSavedJobsSerializer

    def get(self, request, job_seeker_id):
        if request.method == "GET":
            message = {}
            if job_seeker_id:
                saved = SavedJob.objects.filter(job_seeker=job_seeker_id)
                serializer = ViewSavedJobsSerializer(saved, many=True)
                if saved:
                    message['response'] = "Saved Job(s) found"
                    return Response(serializer.data, status=status.HTTP_200_OK)
                else:
                    message['response'] = "No Saved Jobs with Jobseeker Found"
                    return Response(message, status=status.HTTP_404_NOT_FOUND)


class DeleteSavedJobByJobSeeker(APIView):
    serializers = SavedJobSerializer

    def delete(self, request, job_seeker_id, id):
        saved = get_object_or_404(SavedJob, job_seeker=job_seeker_id, id=id)
        data = {}
        if saved:
            saved.delete()
            data['response'] = "Saved Job Deleted"
            return Response(data, status=status.HTTP_200_OK)
        else:
            data['response'] = "Saved Job Could Not be Deleted"
            return Response(data, status=status.HTTP_204_NO_CONTENT)


class ArchivedJobsView(APIView):
    serializer_class = ArchivedJobSerializer

    def get(self, request, id):
        if request.method == "GET":
            if id:
                archived = ArchivedJob.objects.get(id=id)
                serializer = ArchivedJobSerializer(archived)
                if archived:
                    return Response(serializer.data)
                else:
                    messages.error(request, "This job does not exist")
                    return Response(status=status.HTTP_404_NOT_FOUND)


class GetArchivedJobsByJobSeeker(APIView):
    serializer_class = ArchivedJobSerializer

    def get(self, request, job_seeker_id):
        if request.method == "GET":
            message = {}
            if job_seeker_id:
                archived = SavedJob.objects.filter(job_seeker=job_seeker_id)
                serializer = ArchivedJobSerializer(archived, many=True)
                if archived:
                    message['response'] = "Archived Job(s) found"
                    return Response(serializer.data, status=status.HTTP_200_OK)
                else:
                    message['response'] = "No Archived Jobs with Jobseeker Found"
                    return Response(message, status=status.HTTP_404_NOT_FOUND)


class DeleteArchivedJobByJobSeeker(APIView):
    serializers = ArchivedJobSerializer

    def delete(self, request, job_seeker_id, id):
        archived = get_object_or_404(
            ArchivedJob, job_seeker=job_seeker_id, id=id)
        data = {}
        if archived:
            archived.delete()
            data['response'] = "Archived Job Deleted"
            return Response(data, status=status.HTTP_200_OK)
        else:
            data['response'] = "Archived Job Could Not be Deleted"
            return Response(data, status=status.HTTP_204_NO_CONTENT)


def get_choices(request):
    university_choices = UniversityName.choices
    degree_choices = DegreeClassification.choices
    year_choices = JobSeeker.YEAR_OF_GRADUATION_CHOICES
    gender_choices = Gender.choices
    role_choices = JobType.choices
    industry_choices = Industry.choices
    subject_choices = SubjectOfStudy.choices
    qualification_choices = JobSeeker.HIGHEST_QUALIFICATION_CHOICES
    context = {
        "university_choices": university_choices,
        "year_choices": year_choices,
        'degree_choices': degree_choices,
        'gender_choices':  gender_choices,
        'role_choices': role_choices,
        'industry_choices': industry_choices,
        'subject_choices': subject_choices,
        'qualification_choices': qualification_choices
    }
    return JsonResponse(context, safe=False)


class SearchJobs(generics.ListCreateAPIView):
    serializer_class = ViewJobSerializer
    search_fields = ['title', 'company__organisation_name']
    filter_backends = (filters.SearchFilter,)
    queryset = Job.objects.all()


