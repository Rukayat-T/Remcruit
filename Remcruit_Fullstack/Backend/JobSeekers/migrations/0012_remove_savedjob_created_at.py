# Generated by Django 4.1.7 on 2023-04-24 23:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('JobSeekers', '0011_remove_savedjob_date_posted_remove_savedjob_user_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='savedjob',
            name='created_at',
        ),
    ]
