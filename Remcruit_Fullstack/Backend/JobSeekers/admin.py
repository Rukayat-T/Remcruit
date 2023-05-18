from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(ApplicantCredential)
admin.site.register(JobSeeker)
admin.site.register(JobApplication)
admin.site.register(SavedJob)
admin.site.register(ArchivedJob)
