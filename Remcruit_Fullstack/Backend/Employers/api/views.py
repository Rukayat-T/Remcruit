from django.shortcuts import render

from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse


from .serializers import *

class EmployerView(generics.GenericAPIView):
    serializer_class = EmployerSerializer
    def get(self, request):
        if request.method == 'GET':
            employers = Employer.objects.all()
            serializer = EmployerSerializer(employers, many=True)
            return Response(serializer.data)
 