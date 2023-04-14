from django.db import models
from authentication.models import *
from JobSeekers.models import *

# Create your models here.

class PayRate(models.TextChoices):
        MONTHLY = 'Monthly'
        YEARLY = 'Yearly'
        HOURLY = 'Hourly'
class JobType(models.TextChoices):
        FULL_TIME = 'Full Time'
        PART_TIME = 'Part Time'
        INTERNSHIP = 'Internship'

class Job(models.Model):
    recruiter = models.ForeignKey('authentication.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    description = models.TextField()
    company = models.ForeignKey('authentication.Employer', on_delete=models.CASCADE, related_name='jobs')
    location = models.CharField(max_length=30)
    job_post_duration = models.DateField()
    salary = models.FloatField()
    pay_rate = models.TextField(choices=PayRate.choices)
    skills_required = models.CharField(max_length=200)
    job_type = models.TextField(choices=JobType.choices)
    open_spots = models.IntegerField()
    application_deadline = models.DateTimeField()
    degree_classification = models.TextField(choices=DegreeClassification.choices, null=False)
    is_available = models.BooleanField()
    cv_requirement = models.BooleanField()
    resumption = models.DateField()
    is_remote_opportunity = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)
    urgency = models.BooleanField()
    
    def __str__(self):
        return self.title

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
    credential = models.ForeignKey('JobSeekers.ApplicantCredential', on_delete=models.CASCADE)
    applicationStatus = models.CharField(max_length=30, choices=statusChoices, default = 'new')

    def __str__(self):
        return str(self.job_seeker) + 'applied for' + str(self.job)





# class JobSeekerProfile(models.Model):
#     pass
