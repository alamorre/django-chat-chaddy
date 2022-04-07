from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User

import requests
headers = {
  'PRIVATE-KEY': '2d316c69-15d1-47bb-b38d-1e4c764c6d97'
}


class Profile(models.Model):
    user = models.OneToOneField(User, related_name="profile", on_delete=models.CASCADE)
    avatar = models.ImageField(null=True, blank=True)
    custom_json = models.JSONField(null=True, blank=True)
    
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
    json = {
        'username': instance.username,
        'email': instance.email,
        'secret': instance.password,
        'first_name': instance.first_name,
        'last_name': instance.last_name
    }
    r = requests.post('https://api.chatengine.io/users/', headers=headers, json=json)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
