from django.db import models

# Create your models here.
class ApplicantCredential(models.Model):

    job_seeker = models.ForeignKey('authentication.JobSeeker', on_delete=models.CASCADE)
    credential_name = models.CharField(max_length=30) 
    credential = models.FileField(upload_to='credentials/')

    def __str__(self):
        return self.credential_name