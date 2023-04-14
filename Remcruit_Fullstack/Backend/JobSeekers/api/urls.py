from django.urls import path
from .views import  *

urlpatterns = [
      path('view', JobSeekerView.as_view(), name = 'jobSeekerList'),
]