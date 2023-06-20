from django.urls import path ,include
from . import views

urlpatterns = [
    path('creations__agents/<str:type__d__agent>/', views.creations__agents),
    path('get__lists__of__agents/<int:num_avis>/<str:type__d__agent>/', views.get__lists__of__agents),
    path('get__nombres__agents__totals/<str:type__d__agent>/', views.get__nombres__agents__totals),
    path('delete__agent/<str:agent>/',views.delete__agent),
    
]