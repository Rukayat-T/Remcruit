# Generated by Django 4.1.7 on 2023-04-19 18:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('JobSeekers', '0006_alter_jobseeker_nin'),
    ]

    operations = [
        migrations.AddField(
            model_name='jobapplication',
            name='status',
            field=models.TextField(choices=[('Accepted', 'Accepted'), ('Interview', 'Interview'), ('Declined', 'Declined'), ('In Review', 'In Review')], default='In Review'),
        ),
    ]
