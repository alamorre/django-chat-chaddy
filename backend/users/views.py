from django.shortcuts import render

from rest_framework import generics
from rest_framework import permissions

from rest_framework.views import APIView
from rest_framework.response import Response

from django.contrib.auth.models import User
from .serializers import UserSerializer

class UserList(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class Login(APIView):
    permissions=[permissions.IsAuthenticated]
    def get(self, request, format=None):
        serializer = UserSerializer(request.user, many=False)
        return Response(serializer.data)
    

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