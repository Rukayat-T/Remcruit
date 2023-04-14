from django.urls import path
from .views import  *

urlpatterns = [
      path('allJobseekers/', AllJobSeekers.as_view(), name = 'AllJobSeekers'),
      path('something/<str:id>/', JobSeekerView.as_view(), name = 'JobSeeker'),
      path('jobapplication/', JobApplicationView.as_view(), name='JobApplication')
]