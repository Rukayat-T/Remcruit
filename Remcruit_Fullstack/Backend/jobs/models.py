from django.db import models
from django.utils.translation import gettext_lazy as _
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
    
class JobApplication(models.Model):

   LAGOS = "lagos"
   ABUJA = "Abuja"
   ABIA = "Abia"
   ADAMAWA = "Adamawa"
   AKWA_IBOM = "Akwa_Ibom"
   ANAMBRA = "Anambra"
   BAUCHI = "Bauchi"
   BAYELSA =  "Bayelsa"
   BENUE  = "Benue"
   BORNO = "Borno"
   CROSS_RIVER = "Cross_River"
   DELTA = "Delta"
   EBONYI  = "Ebonyi"
   EDO = "Edo"
   EKITI = "Ekiti"
   ENUGU = "Enugu"
   GOMBE = "Gombe"
   IMO = "Imo"
   JIGAWA = "Jigawa"
   KADUNA = "Kaduna"
   KANO = "Kano"
   KATSINA = "Katsina"
   KEBBI = "Kebbi"
   KOGI  = "Kogi"
   KWARA = "Kwara"
   NASSARAWA = "Nassarawa"
   NIGER = "Niger"
   OGUN = "Ogun"
   ONDO = "Ondo"
   OSUN = "Osun"
   OYO = "Oyo"
   PLATEAU = "Plateau"
   RIVERS = "Rivers"
   SOKOTO = "Sokoto"
   TARABA = "Taraba"
   YOBE = "Yobe"
   ZAMFARA = "Zamfara"


STATE_CHOICES = (
       ("LAGOS", "lagos"),
       ("ABUJA" , "Abuja"),
       ("ABIA" ,"Abia"),
       ("ADAMAWA" , "Adamawa"),
       ("AKWA_IBOM ", "Akwa_Ibom"),
       ( "ANAMBRA" ,"Anambra"),
       ("BAUCHI" , "Bauchi"),
       ("BAYELSA" , "Bayelsa"),
       ("BENUE " , "Benue"),
       ("BORNO" , "Borno"),
       ("CROSS_RIVER" , "Cross_River"),
       ("DELTA" , "Delta"),
       ( "EBONYI " , "Ebonyi"),
       ("EDO" , "Edo"),
       ("EKITI" , "Ekiti"),
       ("ENUGU ", "Enugu"),
       ("GOMBE" , "Gombe"),
       ( "IMO" , "Imo"),
       ("JIGAWA" , "Jigawa"),
       ("KADUNA" , "Kaduna"),
       ("KANO" , "Kano"),
       ("KATSINA" , "Katsina"),
       ("KEBBI" , "Kebbi"),
       ("KOGI" , "Kogi"),
       ("KWARA" , "Kwara"),
       ("NASSARAWA" , "Nassarawa"),
       ("NIGER", "Niger"),
       ("OGUN" , "Ogun"),
       ("ONDO" , "Ondo"),
       ("OSUN" ,"Osun"),
       ("OYO" , "Oyo"),
       ("PLATEAU" ,"Plateau"),
       ("RIVERS","Rivers"),
       ("SOKOTO" ,"Sokoto"),
       ("TARABA" , "Taraba"),
       ("YOBE" ,"Yobe"),
       ("ZAMFARA" ,"Zamfara"),

   )


# first_name = models.CharField(_('first name'), max_length=150, blank=False)
# last_name = models.CharField(_('last name'), max_length=150, blank=False)
# phone_number = models.CharField(max_length=12)
# nin = models.CharField(max_length=11)
# cv = models.FileField(upload_to='cv', null=True, blank=True)
# email = models.CharField( max_length=150, blank=False, unique=True)
# state = models.CharField(max_length=200, choices=STATE_CHOICES)

