from django.urls import path

from . import views

app_name = 'users'

urlpatterns = [
    path('', views.Users.as_view()),
    path('me/', views.MyAccount.as_view()),
]
