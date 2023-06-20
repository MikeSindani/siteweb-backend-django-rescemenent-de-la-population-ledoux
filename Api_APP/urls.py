from django.urls import path ,include
from . import views
from rest_framework import routers
router = routers.DefaultRouter()
from rest_framework.authtoken.views import obtain_auth_token
#router.register(r'users', views.UserViewSet)
#router.register(r'groups', views.GroupViewSet)
urlpatterns = [
    
    #path('get', views.api_home_get),
    #path('post', views.api_home_post),
    
    #path('get_list/', views.api_home_list),
    #path('get_details/<str:pk>/', views.api_home_details),
    #path('post_create/', views.api_home_create),
    #path('update/', views.api_home_update),
    #path('get_agent_controleur/<str:users>/<str:password>/', views.api_check_agent_controlleur),
    #path('groups/', include(router.urls)),
    path('auth/',obtain_auth_token),# ces liens en dessous ne demande pas d'authentification avec les token fait une demande 
    path('get_list_personnes_res/', views.personnes_lists_view.as_view()),
    path('post_create_personnes_res/', views.personnes_create_view.as_view()),# lien pour ajout les personnes avec leur manages et tous 
    path('get_agents_user_info/<str:username>/', views.agent_user_persennel_info),# recupere l'info des agents 
    path('get_zones_info/<str:pk>/', views.zones_details_view_by_agent_resc),# recupere l'info de l'zone 
     path('get_zones_info_by_agent_controleur/<str:pk>/', views.zones_details_view_by_agent_controleur),
    
    path('update_zone/<str:pk>/', views.api_zone_update),#chaque fois qu'on ajouter un manage a la zone 
    path('get_info_agent_resc_by_agent_controleur/<str:pk>/', views.api_get__agent__res_by_agent_controleur),
    path('get_info_agent_controleur_by_agent_resc/<str:pk>/', views.api_get_agent_controleur__by__agent__res),
    path('get_info_person_by_agent_controleur/<str:pk>/', views.api_get_person_by_agent_controleur), # il faut envoye la zone pas l'id de la personne 
    path('get__manage__id/<str:pk>/', views.api_get__manage__id),
    path('post__menage__for__creation/', views.api__post__menage__for__creation),

] 