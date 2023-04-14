from django.shortcuts import render

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
            

            
        
        

        
 