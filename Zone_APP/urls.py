from django.urls import path ,include
from . import views

urlpatterns = [
    path('creations__zones/', views.creation__zones),
    path('verifier__zones/', views.verifier__nom__zones),  
    path('get__nombres__zones/', views.get__nombres__zones),
    path('get__lists__of__zones/<int:num_avis>/', views.get__lists__of__zones), 
    path('get__lists__of__zones__on__modal/<str:type__d__agent>/', views.get__list__of__zone__non__attribut), 
    

]