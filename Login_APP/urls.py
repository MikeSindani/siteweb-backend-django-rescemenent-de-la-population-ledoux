from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from . import views


urlpatterns = [
    path('',views.logIn,name="connexion"),
    path('post_login',views.post_logIn,name="post_login"),
    path('dashbord',views.dashbord,name="dashbord"),
    path('logout',views.logOut,name="logout")
] 
