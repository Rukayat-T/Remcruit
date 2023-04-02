from django.urls import path
from .views import  EmployerRegisterView, JobSeekerRegisterView



urlpatterns = [
    path('register/employer/',EmployerRegisterView.as_view()),
    path('register/jobseeker/',JobSeekerRegisterView.as_view()),
]
