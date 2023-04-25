from django.urls import path
from .views import  *

urlpatterns = [
      path('allJobseekers/', AllJobSeekers.as_view(), name = 'AllJobSeekers'),
      path('something/<str:id>/', JobSeekerView.as_view(), name = 'JobSeeker'),
      path('job/<str:id>/application', jobApp.as_view(), name='jobApp'),
      path('alljobapplications/', AllJobApplications.as_view(), name='JobApplications'),
      path('jobapplication/<str:id>/', JobApplicationView.as_view(), name='JobApplication'),
      path('jobseekerbyuserid/<str:userid>/', getJobSeekerByUserId.as_view(), name=''),
      path('<str:job_seeker_id>/application/', GetApplicationByJobSeekerId.as_view(), name=''),
      path('(?Pjob_id\d+)/application/', GetApplicationByJobId.as_view(), name=''),
      path('savedjobs/<str:id>/', SavedJobsView.as_view()),
      path('<str:job_seeker_id>/savedjobs', GetSavedJobsByJobSeeker.as_view()),
      path('archivedjobs/<str:id>/', ArchivedJobsView.as_view()),
      path('<str:job_seeker_id>/archivedjobs', GetArchivedJobsByJobSeeker.as_view()),
      path('<str:job_seeker_id>/<str:id>/deletesaved/', DeleteSavedJobByJobSeeker.as_view(), name=''),
      path('<str:job_seeker_id>/<str:id>/deletearchived/', DeleteArchivedJobByJobSeeker.as_view(), name=''),

]