from django.shortcuts import render, get_object_or_404

from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse
from django.contrib import messages


from .serializers import *

class AllEmployers(generics.GenericAPIView):
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
            serializer = EmployerSerializer(employer, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.error_messages)
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


class AllJobs(generics.GenericAPIView):
    serializer_class = JobSerializer
    def post(self, request):
        if request.method == 'POST':
            serializer = self.serializer_class (data=request.data, context ={'request':request})
            data = {}
            if serializer.is_valid():
                job = serializer.save()
                data['response'] = "E don create"
                return Response(data, status = status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
                
    def get(self, request):
        if request.method == 'GET':
                jobs = Job.objects.all()
                serializer = JobSerializer(jobs, many=True)
                return Response(serializer.data)
        
class JobView(generics.GenericAPIView):
    serializer_class = JobSerializer
    def get(self, request, id):
        if request.method == 'GET':
            data = {}
            if id:
                job = Job.objects.get(id=id)
                serializer = JobSerializer(job)
                if job:
                    return Response(serializer.data, status = status.HTTP_200_OK)
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



        
 