from django.urls import path
from .views import  *

urlpatterns = [
      path('allEmployers/', AllEmployers.as_view(), name = 'employers'),
      path('<str:id>', EmployerView.as_view(), name = 'employer'),
]