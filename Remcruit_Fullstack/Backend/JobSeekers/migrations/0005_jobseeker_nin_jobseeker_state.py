# Generated by Django 4.1.7 on 2023-04-19 18:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('JobSeekers', '0004_remove_jobapplication_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='jobseeker',
            name='nin',
            field=models.IntegerField(max_length=11, null=True),
        ),
        migrations.AddField(
            model_name='jobseeker',
            name='state',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
