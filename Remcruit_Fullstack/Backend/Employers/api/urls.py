from django.urls import path
from .views import  *

urlpatterns = [
      path('view', EmployerView.as_view(), name = 'employerList'),
]