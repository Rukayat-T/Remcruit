# Generated by Django 4.1.7 on 2023-04-17 18:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Employers', '0001_initial'),
        ('JobSeekers', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='applicant',
            name='job_application',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='JobSeekers.jobapplication'),
        ),
    ]
