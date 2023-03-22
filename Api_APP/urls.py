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
    path('get_list_personnes_res/', views.personnes_lists_view.as_view()),
    path('post_create_personnes_res/', views.personnes_create_view.as_view()),
    #path('get_list/', views.api_home_list),
    #path('get_details/<str:pk>/', views.api_home_details),
    #path('post_create/', views.api_home_create),
    #path('update/', views.api_home_update),
    #path('get_agent_controleur/<str:users>/<str:password>/', views.api_check_agent_controlleur)
    path('get_agents_user_info/<str:categorie>/', views.agent_user_persennel_info.as_view()),
    path('get_zones_info/<str:categorie>/', views.zones_details_view.as_view()),
    path('groups/', include(router.urls)),
    path('auth/',obtain_auth_token)

]