from django.urls import path ,include
from . import views

urlpatterns = [
    path('home_section/', views.home_section),
    path('stats_home_section/', views.stats_home_section),
    path('agent_home_section/', views.agent_home_section),
    path('get__lists__of__commune/', views.get__listes__of__commune),
    path('get__stats__of__commune/<str:commune>/<str:categorie>/',views.get__resencement__population__stats_section),
    path("get__statistique__otherwise__quartier/<str:categorie>/<str:commune>/",views.get__statistique__otherwise__quartier)

]