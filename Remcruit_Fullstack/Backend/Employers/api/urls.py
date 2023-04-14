from django.urls import path
from .views import  *

urlpatterns = [
      path('allEmployers/', AllEmployers.as_view(), name = 'employers'),
      path('something/<str:id>', EmployerView.as_view(), name = 'employer'),
      path('Jobs/', AllJobs.as_view(), name='jobs'),
      path('job/<str:id>', JobView.as_view(), name='job'),
]