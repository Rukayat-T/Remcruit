from django.db import models
from authentication.models import *
from django.utils import timezone
# Create your models here.

class Gender(models.TextChoices):
     FEMALE = "Female"
     MALE = "Male"
class DegreeClassification(models.TextChoices):
    FIRST = "First Class Honours"
    SECOND_UPPER = "Second Class Honours(upper)"
    SECOND_LOWER = "Second Class Honours(lower)"
    THIRD = "Third Class Honours"

class Status(models.TextChoices):
    ACCEPTED = 'Accepted' #offer has been accepted by job seeker (accepted by jobseeker)
    OFFER_SENT = 'Offer Sent' # job offer has been sent by employer (accepted by employer)
    INTERVIEW = "Interview" # application has been progressed to interview stage by employer
    DECLINED = 'Declined' # application has been declined by employer (declined by employer)
    OFFER_DECLINED = 'Offer Declined' # job offer has been declined by jobseeker(declined by jobseeker)
    IN_REVIEW = 'In Review' # new job application. employer is reviewing application

class JobType(models.TextChoices):
        FULL_TIME = 'Full Time'
        PART_TIME = 'Part Time'
        INTERNSHIP = 'Internship'

class UniversityName(models.TextChoices):
    AMERICAN_UNIVERSITY_OF_NIGERIA = "American University of Nigeria"
    AMBROSE_ALLI_UNIVERSITY ="Ambrose Alli University"
    BAZE_UNIVERSITY = "Baze University"
    BELLS_UNIVERSITY_OF_TECHNOLOGY = "Bells University of Technology"
    BENSON_IDAHOSA_UNIVERSITY = "Benson Idahosa University"
    CALEB_UNIVERSITY = "Caleb University"
    COVENANT_UNIVERSITY = "Covenant University"
    BABCOCK_UNIVERSITY = "Babcock University"
    UNIVERSITY_OF_LAGOS = "University of Lagos"
    UNIVERSITY_OF_BENIN = "University of Benin"
    AFE_BABALOLA_UNIVERSITY_ADO_EKITI = "Afe Babalola University Ado-Ekiti"
    YABA_COLLEGE_OF_TECHNOLOGY = "Yaba College Of Technology"
    BOWEN_UNIVERSITY = "Bowen University"
    NILE_UNIVERSITY_OF_NIGERIA = "Nile University of Nigeria"
    OBAFEMI_AWOLOWO_UNIVERSITY = "Obafemi Awolowo University"
    REDEEMERS_UNIVERITY_NIGERIA = "Redeemer's University Nigeria"
    UNIVERSITY_OF_CALABAR = "University of Calabar"
    UNIVERSITY_OF_DELTA = "University of Delta"
    UNIVERSITY_OF_PORT_HARCOURT = "University of Port Harcourt"
    ADELEKE_UNIVERSITY = "Adeleke University"

class Industry(models.TextChoices):
        ACCOUNTING_AND_FINANCE = "Accounting And Finance"
        BUSINESS_CONSULTING_AND_MANAGEMENT = 'Business Consulting And Management'
        CHARITY_AND_VOLUNTARY_WORK= 'Charity And Voluntary Work'
        CONSUMER_GOODS_AND_RETAIL = 'Consumer Goods and etail'
        ENGINEERING_AND_CONSTRUCTION = 'Engineering and Construction'
        ENTERTAINMENT = 'Entertainment'
        ENVIRONMENT_AND_AGRICULTURE = 'Environment and Agriculture'
        ENERGY_AND_UTILITIES = 'Energy and Utilities'
        
class JobSeeker(models.Model):

    def delete(self, *args, **kwargs):
        self.user.delete()
        return super(self.__class__, self).delete(*args, **kwargs)

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
    #Classes take in the right side and display left side in title and underscore as space. while choices in the
    #model take in left and display right

    user = models.OneToOneField(User, related_name="user_jobSeeker", on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=12)
    university_name = models.TextField(choices=UniversityName.choices, null=True, blank=True)
    subject_of_study = models.CharField(max_length=200, choices=SUBJECT_OF_STUDY_CHOICES,null=True, blank=True)
    year_of_graduation = models.CharField(max_length=200, choices=YEAR_OF_GRADUATION_CHOICES,null=True, blank=True)
    degree_classification = models.TextField(choices=DegreeClassification.choices, null=False)
    highest_qualification = models.CharField(max_length=200, choices=HIGHEST_QUALIFICATION_CHOICES, null=True)
    gender = models.TextField(choices=Gender.choices)
    terms_and_conditions = models.BooleanField(default=False)
    profile_picture = models.ImageField(upload_to='images/', null=True, blank=True)
    state = models.CharField(max_length=200, null=True)
    nin = models.CharField(max_length=11, null = True)
    professional_summary = models.TextField(max_length=400, default='Old')
    role_type = models.TextField(choices=JobType.choices, default='Old')
    industry = models.TextField(choices=Industry.choices, default='Old')
    

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'gender', 'title', 'phone_number',
                        'terms_and_conditions']
    
    def __str__(self):
        return self.user.get_full_name()

class ApplicantCredential(models.Model):
    job_seeker = models.ForeignKey(JobSeeker, on_delete=models.CASCADE, related_name='job_seeker')
    credential_name = models.CharField(max_length=30) 
    credential = models.FileField(upload_to='credentials/',  blank=True, null=True)

    def __str__(self):
        return self.credential_name
    
class JobApplication(models.Model):
    job_seeker = models.ForeignKey(JobSeeker, on_delete=models.CASCADE, related_name='Job_Seeker')
    job = models.ForeignKey('Employers.Job', on_delete=models.CASCADE, related_name='Job')
    credential = models.ForeignKey(ApplicantCredential, on_delete=models.CASCADE, default=None,  blank=True, null=True, related_name='jobseeker_credential')
    status = models.TextField(choices=Status.choices, default=Status.IN_REVIEW, blank=True)
    def __str__(self):
        return str(self.job_seeker) + ' applied for ' + str(self.job)

class SavedJob(models.Model):
    job = models.ForeignKey('Employers.Job', related_name='saved_job', on_delete=models.CASCADE)
    job_seeker = models.ForeignKey(JobSeeker, on_delete=models.CASCADE, related_name='saved_jobseeker')
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.job.title + ' - ' + str(self.job.company) + " saved by " + str(self.job_seeker)

class ArchivedJob(models.Model):
    job = models.ForeignKey('Employers.Job', related_name='archived_job', on_delete=models.CASCADE)
    job_seeker = models.ForeignKey(JobSeeker, on_delete=models.CASCADE, related_name='archived_jobseeker')
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.job.title + ' - ' + str(self.job.company)
    

