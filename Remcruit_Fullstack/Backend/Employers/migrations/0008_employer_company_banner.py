# Generated by Django 4.1.7 on 2023-05-30 19:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Employers', '0007_alter_employer_company_logo'),
    ]

    operations = [
        migrations.AddField(
            model_name='employer',
            name='company_banner',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
