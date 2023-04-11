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
