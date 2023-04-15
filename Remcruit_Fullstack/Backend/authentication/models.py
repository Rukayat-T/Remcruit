from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin
from django.db.models.signals import post_save
from django.conf import settings
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

from django.utils.translation import gettext_lazy as _

from django.dispatch import receiver
from django.urls import reverse
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import send_mail  



# Create your models here.

class User(AbstractUser):
    email = models.CharField( max_length=150, blank=False)
    first_name = models.CharField(_('first name'), max_length=150, blank=False)
    last_name = models.CharField(_('last name'), max_length=150, blank=False)
    is_employer = models.BooleanField(default=False)
    is_jobSeeker = models.BooleanField(default=False)
 
    def __str__(self):
        return self.first_name + ' ' + self.last_name
    
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):

    email_plaintext_message = "http://127.0.0.1:8000/api/change-password/"

    send_mail(
        # title:
        "Password Reset for {title}".format(title="Remcruit"),
        # message:
        email_plaintext_message,
        # from:
        "contact@remcruit.com",
        # to:
        [reset_password_token.user.email]
    )
    
    Token.objects.create(user=instance)
