from django.urls import path ,include
from . import views

urlpatterns = [
   path('get__nombres__zones_suivi/', views.get__nombres__zones__suivi),
   path('get__lists__of__zones_suivi/<int:num_avis>/', views.get_listes__of__zones__suivi),
    
]