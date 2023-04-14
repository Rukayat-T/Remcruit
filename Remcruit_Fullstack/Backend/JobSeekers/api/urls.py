from django.urls import path
from .views import  *

urlpatterns = [
      path('allJobseekers/', AllJobSeekers.as_view(), name = 'AllJobSeekers'),
      path('<str:id>/', JobSeekerView.as_view(), name = 'JobSeeker'),
]