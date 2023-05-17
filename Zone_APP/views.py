from django.shortcuts import render,HttpResponse
from django.http import JsonResponse
from BD_APP.models import *
from django.db.models import Q
def nom_de_la_zone():
   return  "RDC-HKAT-LUSHI-"
# Create your views here.
def verifier__nom__zones(request):
      variable__nombres__totals__des__zones  = Zones.objects.all().count()
      variable__nombres__totals__des__zones = variable__nombres__totals__des__zones + 1
      variable__nom__de__la__zones = nom_de_la_zone()+str(variable__nombres__totals__des__zones)   
     
      context = {
                  
                  'nom__de__la__zones': variable__nom__de__la__zones,
                  
                }      
      return JsonResponse(context)
def creation__zones(request):
    context = {}
    if request.method  =='POST':
        nom__de__zone = request.POST['nom_de_zone']
        print('+'*20)
        print(nom__de__zone)
        variable__nombres__totals__des__zones  = Zones.objects.all().count()
        variable__nombres__totals__des__zones = variable__nombres__totals__des__zones + 1
        variable__nom__de__la__zones = nom_de_la_zone()+str(variable__nombres__totals__des__zones ) 
        z = Zones(nom=variable__nom__de__la__zones,etat=0)
        z.save()
        context = {
                        'message_systeme':f"la zone {variable__nombres__totals__des__zones } a été créé", 
                        'nom__de__la__zones': variable__nom__de__la__zones,        
                        }      
    return JsonResponse(context)

def get__nombres__zones(request):
    variable__nombres__totals__des__zones  = Zones.objects.all().count()
        
    context = {
                  'nombres__zones':variable__nombres__totals__des__zones, 
            }      
    return JsonResponse(context)
    
def get__lists__of__zones(request,num_avis):
    variable__listes__des__zones  = list(Zones.objects.all().values()) 
    variable__listes__des__zones__new = list()
    dictionnaire = {}
    print("*"*100)
    print(num_avis)
    if num_avis > 3 :
      upper = num_avis + 3 
      lower = num_avis - 1 
    else : 
      upper = num_avis 
      lower = 0
    print(variable__listes__des__zones)
    print(variable__listes__des__zones[0])
   
    
    if variable__listes__des__zones == False:
        variable__listes__des__zones = []
        size = 0
    else:
        size = len(variable__listes__des__zones)
        
    context = {
               'listes__zones':variable__listes__des__zones[lower:upper], 'size': size
            }      
    return JsonResponse(context)