from django.urls import path
from .views import  *
from django.contrib.auth import views as auth_views


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

    path('reset_password/',auth_views.PasswordResetView.as_view(), name='password_reset'),
    path('reset_password_sent/',auth_views.PasswordResetDoneView.as_view(), name='password_reset_done'),
    path('reset/<uidb64>/<token>/',auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('reset_password_complete/',auth_views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),
]
