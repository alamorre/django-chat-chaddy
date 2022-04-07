from django.db import models
from django.db.models.signals import post_save, pre_delete
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
    chat_engine_user_id = models.CharField(null=True, blank=True, max_length=100)
    
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    json = {
        'username': instance.username,
        'email': instance.email,
        'secret': instance.password,
        'first_name': instance.first_name,
        'last_name': instance.last_name
    }

    if created:
        r = requests.post('https://api.chatengine.io/users/', headers=headers, json=json)
        data = r.json()
        print('Create', data)
        Profile.objects.create(user=instance, chat_engine_user_id=data['id'])
    
    else:
        id = instance.profile.chat_engine_user_id
        r = requests.patch('https://api.chatengine.io/users/{}/'.format(id), headers=headers, json=json)
        print('Patch', r.json())


@receiver(pre_delete, sender=User)
def delete_chat_engine_user(sender, instance, **kwargs):
    id = instance.profile.chat_engine_user_id
    r = requests.delete('https://api.chatengine.io/users/{}/'.format(id), headers=headers)
    print('Delete', r.json())
