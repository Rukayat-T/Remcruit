from django.core.mail import EmailMessage, get_connection, send_mail
from django.conf import settings
import uuid

def send(subject, message, recipients):
  send_mail(
    		subject=subject,
    		message=message,
    		from_email=settings.EMAIL_HOST_USER,
    		recipient_list=recipients)
  


# def send_forget_password_mail(email,token ):
  
# token = str (uuid.uuid4())
# subject = 'Your forget password link'
# message = f'Hi , click on the link to reset your password http://127.0.0.1:8000/api/reset/<uidb64>/{token}/'
# email_from = settings.EMAIL_HOST_USER
# recipient_list = [recipients]
# send_mail(subject, message, email_from, recipient_list)
# return True  