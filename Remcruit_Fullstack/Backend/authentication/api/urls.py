from django.urls import path
from .views import  EmployerRegisterView, JobSeekerRegisterView



urlpatterns = [
    path('Register/employer/',EmployerRegisterView.as_view()),
    path('Register/jobseeker/',JobSeekerRegisterView.as_view()),
]
