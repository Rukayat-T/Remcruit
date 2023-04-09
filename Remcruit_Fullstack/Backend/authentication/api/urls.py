from django import views
from django.urls import path
from .views import  *




urlpatterns = [
    path('register/employer/',EmployerRegisterView),
    path('register/jobseeker/',JobSeekerRegisterView),

    # path('activateUser/<uid64>/<token>', activate_user, name="activate" ),
     path('activate/(?P<uid64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/',  
        activate_user, name='activate'),  
    
    path('login/', LoginAuthToken.as_view(), name='login'),
    path('logout/',LogoutView.as_view(), name='logout' ),

    path('employer/home/', EmployerOnlyView.as_view(), name='employerhome'),
    path('jobseeker/home/', JobSeekerOnlyView.as_view(), name='jobseekerhome'),

    path('forget-password/' , ForgetPassword , name="forget_password"),
    path('change-password/<token>/' , ChangePassword , name="change_password"),
]