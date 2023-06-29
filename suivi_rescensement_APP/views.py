from django.shortcuts import render
from django.shortcuts import render
from django.http import JsonResponse
from BD_APP.models import *
from django.db.models import Q

# Create your views here.
def get__nombres__zones__suivi(request):
    nombres__totals__des__zones  = Zones.objects.all().count()
    
    
    nombres__totals__des__zones__valide  = Zones.objects.filter(etat=200).count()
    context = {     
                  'nombres__totals__des__zones': nombres__totals__des__zones,
                  'nombres__totals__des__zones__valide': nombres__totals__des__zones__valide,  
                }      
    return JsonResponse(context)
def get_listes__of__zones__suivi(request,num_avis):
    variable__listes__des__zones  = list() 
    nombres__totals__des__zones  = Zones.objects.all().count()
    id__of__zone  = Zones.objects.all().values_list('id', flat=True).order_by("id")
    dictionnaire = {}
    for id in id__of__zone:
      variable__listes__des__zones.append({
        "nom":Zones.objects.values_list("nom",flat=True).get(pk=id),
        "agent_controleur__username":menager.objects.filter(zones=id).values_list("zones__agent_controleur__username", flat=True).first(),
        "agent_rescenseur__username":menager.objects.filter(zones=id).values_list("zones__agent_rescenseur__username", flat=True).first(),
        "statut":menager.objects.filter(zones=id).values_list("zones__statut", flat=True).first(),
        "etat":menager.objects.filter(zones=id).count(),
      })  
    print("*"*100)
    print("suivi rescensement")
    print("*"*100)
    #print(num_avis)
    if num_avis > 3 or num_avis == 0 :
      upper = num_avis + 3 
      lower = 0 #num_avis - 1 
    else : 
      upper = num_avis 
      lower = 0
    print(variable__listes__des__zones)
 
    if variable__listes__des__zones == False:
        variable__listes__des__zones = []
        size = 0
    else:
        size = len(variable__listes__des__zones)
    print("*"*100)    
    context = {
               'listes__zones':variable__listes__des__zones[lower:upper],
                'size': size,
                'nombres__totals__par__zones': 200,
                'm':num_avis,
            }      
    return JsonResponse(context)