from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework import permissions

from django.contrib.auth.models import User
from .serializers import UserSerializer

class UserList(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class IsOwner(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object
    """
    def has_object_permission(self, request, view, obj):
        return obj == request.user

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsOwner]
    queryset = User.objects.all()
    serializer_class = UserSerializer