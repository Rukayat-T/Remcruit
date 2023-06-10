import datetime
from django.db import models
from authentication.models import *
from JobSeekers.models import *

# Create your models here.
class Gender(models.TextChoices):
     FEMALE = "Female"
     MALE = "Male"

class DegreeClassification(models.TextChoices):
    FIRST = "First Class Honours"
    SECOND_UPPER = "Second Class Honours(upper)"
    SECOND_LOWER = "Second Class Honours(lower)"
    THIRD = "Third Class Honours"


class Employer(models.Model):

    def delete(self, *args, **kwargs):
        self.user.delete()
        return super(self.__class__, self).delete(*args, **kwargs)
    
    user = models.OneToOneField(User, related_name='Employer_user', on_delete=models.CASCADE)
    title = models.CharField(max_length=225)
    gender = models.TextField(choices=Gender.choices)
    job_title = models.CharField(max_length=225)
    phone_number = models.CharField(max_length=12)
    organisation_name = models.CharField(max_length=225)
    office_address = models.CharField(max_length=225)
    city = models.CharField(max_length=20, blank=True)
    state = models.CharField(max_length=20, blank=True)
    organisation_description = models.CharField(max_length=1000,null=True, blank=True)
    website = models.CharField(max_length=225,null=True, blank=True)
    employees = models.IntegerField()
    recruitment_agency = models.BooleanField(max_length=200, default=False,null=True, blank=True)
    industry = models.CharField(max_length=225)
    company_logo = models.ImageField(null=True, blank=True)
    company_banner = models.ImageField(null=True, blank=True)
    terms_and_conditions = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'gender', 'title', 'phone_number',
                       'organisation_name', 'city', 'state', 'recruitment_agency', 'terms_and_conditions', 'job_title', 'office_address','industry']

    def __str__(self):
        return self.organisation_name

class PayRate(models.TextChoices):
        MONTHLY = 'Monthly'
        YEARLY = 'Yearly'
        HOURLY = 'Hourly'
class JobType(models.TextChoices):
        FULL_TIME = 'Full Time'
        PART_TIME = 'Part Time'
        INTERNSHIP = 'Internship'

class Job(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()
    company = models.ForeignKey(Employer, related_name='employer', on_delete=models.CASCADE)
    city = models.CharField(max_length=200, blank=True)
    state = models.CharField(max_length=200, blank=True)
    job_post_duration = models.DateField( default=None)
    salary = models.FloatField()
    pay_rate = models.TextField(choices=PayRate.choices, default=PayRate.MONTHLY)
    skills_required = models.CharField(max_length=200)
    job_type = models.TextField(choices=JobType.choices, default=None)
    open_spots = models.IntegerField(default=0)
    application_deadline = models.DateField(default=None) 
    degree_classification = models.TextField(choices=DegreeClassification.choices, default=None)
    is_available = models.BooleanField(default=False)
    cv_requirement = models.BooleanField(default=False)
    resumption = models.DateField(default=None)
    is_remote_opportunity = models.BooleanField(default=False)
    created_at = models.DateField(default=datetime.date.today) 
    urgency = models.BooleanField(default=False)
    
    def __str__(self):
        return self.title

# class Applicant(models.Model):
#      job_application = models.ForeignKey("JobSeekers.JobApplication", on_delete=models.CASCADE)
#      status = models.TextField(choices=Status.choices, default=Status.IN_REVIEW)

#      def __str__(self):
#           return self.status