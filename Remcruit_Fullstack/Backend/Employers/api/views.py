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

            
        
        

        
 