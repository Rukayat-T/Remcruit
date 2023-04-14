from django.shortcuts import render

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
                    messages.error(request, "This employer does not exist")
                    return Response(status=status.HTTP_404_NOT_FOUND)