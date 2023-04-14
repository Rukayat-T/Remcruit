# Generated by Django 4.1.7 on 2023-04-14 14:32

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('JobSeekers', '0002_jobseeker_alter_applicantcredential_job_seeker'),
        ('Employers', '0002_remove_jobapplication_credential_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='application_deadline',
            field=models.DateTimeField(default=None),
        ),
        migrations.AddField(
            model_name='job',
            name='cv_requirement',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='job',
            name='degree_classification',
            field=models.TextField(choices=[('First Class Honours', 'First'), ('Second Class Honours(upper)', 'Second Upper'), ('Second Class Honours(lower)', 'Second Lower'), ('Third Class Honours', 'Third')], default=None),
        ),
        migrations.AddField(
            model_name='job',
            name='is_available',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='job',
            name='is_remote_opportunity',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='job',
            name='job_post_duration',
            field=models.DateField(default=None),
        ),
        migrations.AddField(
            model_name='job',
            name='open_spots',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='job',
            name='pay_rate',
            field=models.TextField(choices=[('Monthly', 'Monthly'), ('Yearly', 'Yearly'), ('Hourly', 'Hourly')], default='Monthly'),
        ),
        migrations.AddField(
            model_name='job',
            name='resumption',
            field=models.DateField(default=None),
        ),
        migrations.AddField(
            model_name='job',
            name='urgency',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='jobapplication',
            name='credential',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='JobSeekers.applicantcredential'),
        ),
        migrations.AlterField(
            model_name='job',
            name='job_type',
            field=models.TextField(choices=[('Full Time', 'Full Time'), ('Part Time', 'Part Time'), ('Internship', 'Internship')], default=None),
        ),
        migrations.AlterField(
            model_name='jobapplication',
            name='job_seeker',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='JobSeekers.jobseeker'),
        ),
        migrations.CreateModel(
            name='Employer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=225)),
                ('gender', models.TextField(choices=[('Female', 'Female'), ('Male', 'Male')])),
                ('job_title', models.CharField(max_length=225)),
                ('phone_number', models.CharField(max_length=12)),
                ('organisation_name', models.CharField(max_length=225)),
                ('office_address', models.CharField(max_length=225)),
                ('organisation_description', models.CharField(blank=True, max_length=225, null=True)),
                ('website', models.CharField(blank=True, max_length=225, null=True)),
                ('employees', models.IntegerField()),
                ('recruitment_agency', models.BooleanField(blank=True, default=False, max_length=200, null=True)),
                ('industry', models.CharField(max_length=225)),
                ('company_logo', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('terms_and_conditions', models.BooleanField(default=False)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='employer', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AlterField(
            model_name='job',
            name='company',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='jobs', to='Employers.employer'),
        ),
    ]
