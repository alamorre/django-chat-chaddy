from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):
    custom_json = serializers.JSONField(required=False)
    class Meta:
        model = User
        fields = [
            'id', 
            'username', 
            'email', 
            'password',
            'first_name',
            'last_name',
            'custom_json'
        ]

    def create(self, validated_data):
        custom_json = validated_data.pop('custom_json')
        validated_data['password'] = make_password(validated_data.get('password'))
        user = super(UserSerializer, self).create(validated_data)
        user.profile.custom_json = custom_json
        user.profile.save()
        return user

    def update(self, instance, validated_data):
        instance.username = validated_data['username']
        instance.email = validated_data['email']
        instance.email = validated_data['first_name']
        instance.email = validated_data['last_name']
        password = validated_data.get('password', None)
        if password is not None:
            instance.password = make_password(validated_data.get('password'))
        instance.save()
        return instance
