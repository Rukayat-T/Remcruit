from django.urls import path
from .views import  *


urlpatterns = [
    # path('register/employer/',EmployerRegisterView.as_view()),
    path('register/jobseeker/',JobSeekerRegisterView),
    
    path('login/', LoginAuthToken.as_view(), name='login'),
    path('logout/',LogoutView.as_view(), name='logout' ),
    path('employer/home/', EmployerOnlyView.as_view(), name='employerhome'),
    path('jobseeker/home/', JobSeekerOnlyView.as_view(), name='jobseekerhome'),
]
