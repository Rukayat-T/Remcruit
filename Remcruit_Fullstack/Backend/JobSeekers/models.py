from django.db import models
from authentication.models import *
# Create your models here.

class Gender(models.TextChoices):
     FEMALE = "Female"
     MALE = "Male"
class DegreeClassification(models.TextChoices):
    FIRST = "First Class Honours"
    SECOND_UPPER = "Second Class Honours(upper)"
    SECOND_LOWER = "Second Class Honours(lower)"
    THIRD = "Third Class Honours"
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

    user = models.OneToOneField(User, related_name="jobSeeker", on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=12)
    university_name = models.CharField(max_length=200, choices=UNIVERSITY_CHOICES, null=True, blank=True)
    subject_of_study = models.CharField(max_length=200, choices=SUBJECT_OF_STUDY_CHOICES,null=True, blank=True)
    year_of_graduation = models.CharField(max_length=200, choices=YEAR_OF_GRADUATION_CHOICES,null=True, blank=True)
    degree_classification = models.TextField(choices=DegreeClassification.choices, null=False)
    highest_qualification = models.CharField(max_length=200, choices=HIGHEST_QUALIFICATION_CHOICES, null=True)
    gender = models.TextField(choices=Gender.choices)
    terms_and_conditions = models.BooleanField(default=False)
    profile_picture = models.ImageField(upload_to='images/')
    

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'gender', 'title', 'phone_number',
                        'terms_and_conditions']
    
    def __str__(self):
        return self.user.first_name + ' ' + self.user.last_name

class ApplicantCredential(models.Model):
    job_seeker = models.ForeignKey(JobSeeker, on_delete=models.CASCADE)
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

    job_seeker = models.ForeignKey(JobSeeker, on_delete=models.CASCADE)
    job = models.ForeignKey('Employers.Job', on_delete=models.CASCADE)
    credential = models.ForeignKey(ApplicantCredential, on_delete=models.CASCADE, default=None)
    applicationStatus = models.CharField(max_length=30, choices=statusChoices, default = 'new')

    def __str__(self):
        return str(self.job_seeker) + 'applied for' + str(self.job)
