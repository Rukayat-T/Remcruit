from django.urls import path
from .views import  *

urlpatterns = [
      path('allEmployers/', AllEmployers.as_view(), name = 'employers'),
      path('Employer/<str:id>/', EmployerView.as_view(), name = 'employer'),
      path('getEmployerByUserid/<str:userid>/', getEmployerByUserId.as_view(), name='employerByUserId'),
      path('createJob/', CreateJobView.as_view(), name = 'createJob'),
      path('AllJobs/', GetAllJobs.as_view(), name='jobs'),
      path('job/<str:id>/', JobView.as_view(), name='job'),
      path('getJobByCompanyId/<str:companyId>/', GetJobByCompanyIdView.as_view(), name='jobByCompanyId'),
      path('updateApplicationStatus/<str:id>/', UpdateApplicationByStatus.as_view(), name='updateApplicationStatus'),

      # path('getJobByUserId/<str:userId>/', GetJobByEmployerIdView.as_view(), name='jobByUserId'),
]