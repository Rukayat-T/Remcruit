from django.db import models
from authentication.models import *

# Create your models here.
class Job(models.Model):

    FULL_TIME = "Full Time"
    PART_TIME = "Part Time"
    REMOTE = 'Remote'
    ENTRY_LEVEL = 'Entry Level'
    INTERNSHIP = 'Internship'

    JOB_TYPE = (
        ("FULL_TIME", "Full Time"),
        ("PART_TIME", "Part Time"),
        ("REMOTE", "Remote"),
        ("ENTRY_LEVEL", "Entry Level"),
        ("INTERNSHIP", "Internship"),
    )
    recruiter = models.ForeignKey('authentication.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    description = models.TextField()
    company = models.ForeignKey('authentication.Employer', on_delete=models.CASCADE)
    location = models.CharField(max_length=30)
    salary = models.FloatField()
    skills_required = models.CharField(max_length=200)
    job_type = models.CharField(max_length=20, choices=JOB_TYPE, default='Full Time')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    

class ApplicantCredential(models.Model):

    job_seeker = models.ForeignKey('authentication.JobSeeker', on_delete=models.CASCADE)
    credential_name = models.CharField(max_length=30) 
    credential = models.FileField(upload_to='credentials/')

    def __str__(self):
        return self.credential_name
class JobApplication(models.Model):

    ACCEPTED = 'accepted' #job has been accepted by job seeker
    INTERVIEW = "interview" # application has been progressed to interview stage by employer
    OFFER_SENT = 'offer sent' # job offer has been sent by employer
    DECLINED = 'declined' # application has been declined by employer 
    OFFER_DECLINED = 'offer unaccepted' #offer had been declined by job seeker
    IN_REVIEW = 'in review' # new job application. employer is reviewing application

    statusChoices = (
        ("ACCEPTED", "accepted"),
        ("INTERVIEW", "interview"),
        ("OFFER_SENT", "offer sent"),
        ("DECLINED", "declined"),
        ("OFFER_DECLINED", "offer unaccepted"),
        ("IN_REVIEW", "in review"),
    )

    job_seeker = models.ForeignKey('authentication.JobSeeker', on_delete=models.CASCADE)
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    credential = models.ForeignKey(ApplicantCredential, on_delete=models.CASCADE)
    applicationStatus = models.CharField(max_length=30, choices=statusChoices, default = 'new')

    def __str__(self):
        return str(self.job_seeker) + 'applied for' + str(self.job)





# class JobSeekerProfile(models.Model):
#     pass