from django.urls import path
from .views import  *

urlpatterns = [
      path('allJobseekers/', AllJobSeekers.as_view(), name = 'AllJobSeekers'),
      path('something/<str:id>/', JobSeekerView.as_view(), name = 'JobSeeker'),
      path('job/<str:id>/application', jobApp.as_view(), name='jobApp'),
      path('alljobapplications/', AllJobApplications.as_view(), name='JobApplications'),
      path('jobapplication/<str:id>/', JobApplicationView.as_view(), name='JobApplication'),
      path('jobseekerbyuserid/<str:userid>/', getJobSeekerByUserId.as_view(), name='')
]