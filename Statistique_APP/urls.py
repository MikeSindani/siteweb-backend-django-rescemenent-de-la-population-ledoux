from django.urls import path ,include
from . import views

urlpatterns = [
    path('home_section/', views.home_section),
    path('stats_home_section/', views.stats_home_section),
    path('agent_home_section/', views.agent_home_section),
    

]