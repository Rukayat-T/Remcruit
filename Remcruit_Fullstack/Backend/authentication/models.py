from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin
from django.db.models.signals import post_save
from django.conf import settings
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

from django.utils.translation import gettext_lazy as _


# Create your models here.
class User(AbstractUser):
    email = models.CharField( max_length=150, blank=False, unique=True)
    first_name = models.CharField(_('first name'), max_length=150, blank=False)
    last_name = models.CharField(_('last name'), max_length=150, blank=False)
    is_employer = models.BooleanField(default=False)
    is_jobSeeker = models.BooleanField(default=False)
 
     
    def __str__(self):
        return self.username
    
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

class Employer(models.Model):

    FEMALE = "Female"
    MALE = "Male"

    GENDER_CHOICES = (
        ("FEMALE", "Female"),
        ("MALE", "Male")
    )
   



    user = models.OneToOneField(User, related_name="employer", on_delete=models.CASCADE)
    title = models.CharField(max_length=225)
    gender = models.CharField(max_length=200, choices=GENDER_CHOICES, default=FEMALE)
    job_title = models.CharField(max_length=225)
    phone_number = models.CharField(max_length=12)
    organisation_name = models.CharField(max_length=225)
    office_address = models.CharField(max_length=225)
    organisation_description = models.CharField(max_length=225,null=True, blank=True)
    website = models.CharField(max_length=225,null=True, blank=True)
    employees = models.IntegerField()
    recruitment_agency = models.BooleanField(max_length=200, default=False,null=True, blank=True)
    industry = models.CharField(max_length=225)
    company_logo = models.ImageField(upload_to='images/',null=True, blank=True)
    terms_and_conditions = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'gender', 'title', 'phone_number',
                       'organisation_name', 'recruitment_agency', 'terms_and_conditions', 'job_title', 'office_address','industry']

    def __str__(self):
        return self.organisation_name

class JobSeeker(models.Model):

    BABCOCK_UNIVERSITY = "babcock_university"
    UNILAG = "unilag"
    UNIBEN = "uniben"
    ABUAD = "abuad"
    YABATECH = "yabatech"
    BOWEN = "bowen"

    UNIVERSITY_CHOICES = (
        ("BABCOCK_UNIVERSITY", "Babcock University"),
        ("UNILAG", "University of Lagos"),
        ("UNIBEN", "University of Benin"),
        ("ABUAD", "Afe Babalola University Ado-Ekiti"),
        ("YABATECH", "Yaba College Of Technology"),
        ("BOWEN", "Bowen University"),
    )


    COMPUTER_SCIENCE = ""
    PETROLEUM_ENGINEERING = ""
    PHARMACY = ""
    ECONOMICS = ""
    LAW = ""

    SUBJECT_OF_STUDY_CHOICES = (
        ("COMPUTER_SCIENCE", "Computer Science"),
        ("PETROLEUM_ENGINEERING", "Petroleum Engineering"),
        ("PHARMACY", "Pharmacy"),
        ("ECONOMICS", "Economics"),
        ("LAW", "Law"),  
    )


    YEAR_OF_GRADUATION_CHOICES = (
        ("2017", "2017"),
        ("2018", "2018"),
        ("2019", "2019"),
        ("2020", "2020"),
        ("2021", "2021"),
    )


    FIRST = "first"
    SECOND_UPPER = "second_upper"
    SECOND_LOWER = "second_lower"
    THIRD = "third"

    DEGREE_CLASSIFICATION_CHOICES = (
        ("FIRST", "First Class Honours"),
        ("SECOND_UPPER", "Second Class Honours(upper)"),
        ("SECOND_LOWER", "Second Class Honours(lower)"),
        ("THIRD", "Third Class Honours"),
    )

    
    UNDERGRADUATE = "UNDERGRADUATE"
    POSTGRADUATE_T = "POSTGRADUATE(T)"
    POSTGRADUATE_R = "POSTGRADUATE(R)"
    OLEVEL = "OLEVEL"
    HND = "HND"

    HIGHEST_QUALIFICATION_CHOICES = (
        ("UNDERGRADUATE", "Bachelors"),
        ("POSTGRADUATE(T)", "Masters"),
        ("POSTGRADUATE(R)", "Doctorate"),
        ("OLEVEL", "Senior Secondary Certificate"),
        ("HND", "Higher National Diploma"),
    )


    FEMALE = "Female"
    MALE = "Male"

    GENDER_CHOICES = (
        ("FEMALE", "Female"),
        ("MALE", "Male")
    )

    user = models.OneToOneField(User, related_name="jobSeeker", on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=12)
    university_name = models.CharField(max_length=200, choices=UNIVERSITY_CHOICES, null=True, blank=True)
    subject_of_study = models.CharField(max_length=200, choices=SUBJECT_OF_STUDY_CHOICES,null=True, blank=True)
    year_of_graduation = models.CharField(max_length=200, choices=YEAR_OF_GRADUATION_CHOICES,null=True, blank=True)
    degree_classification = models.CharField(max_length=200, choices=DEGREE_CLASSIFICATION_CHOICES, null=True, blank=True)
    highest_qualification = models.CharField(max_length=200, choices=HIGHEST_QUALIFICATION_CHOICES, null=True, blank=True)
    gender = models.CharField(max_length=200, choices=GENDER_CHOICES, default=FEMALE)
    terms_and_conditions = models.BooleanField(default=False)
    profile_picture = models.ImageField(upload_to='images/')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'gender', 'title', 'phone_number',
                        'terms_and_conditions']
    
    def __str__(self):
        return self.user.first_name + ' ' + self.user.last_name
