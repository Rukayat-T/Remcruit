from django.shortcuts import render

from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse


from .serializers import *

class JobSeekerView(generics.GenericAPIView):
    serializer_class = JobSeekerSerializer
    def get(self, request):
        if request.method == 'GET':
            jobSeekers = JobSeeker.objects.all()
            serializer = JobSeekerSerializer(jobSeekers, many=True)
            return Response(serializer.data)