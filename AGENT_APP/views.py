from django.shortcuts import render
from django.http import JsonResponse
from BD_APP.models import *
from django.db.models import Q

import random
import string
def nom_de_la_zone(variable__nombres__totals__des__zones):
  variable__nombres__totals__des__zones = int(variable__nombres__totals__des__zones)
  if variable__nombres__totals__des__zones < 10 :
     return  "ZD-00"
  if variable__nombres__totals__des__zones  >= 10 and  variable__nombres__totals__des__zones  < 100:
     return  "ZD-0"
  if variable__nombres__totals__des__zones  >= 100 :
     return  "ZD-"

def generer_mot_de_passe(longueur):
    caracteres = string.ascii_letters + string.digits
    mot_de_passe = ''.join(random.choice(caracteres) for i in range(longueur))
    return mot_de_passe

def generer_code__agent(longueur):
    caracteres = string.digits
    generer = ''.join(random.choice(caracteres) for i in range(longueur))
    return generer

def get__nombres__agents__totals(request,type__d__agent):
    print("✔"*100)
    print(type__d__agent)
    if type__d__agent == "Controleur":
        nombres__agent__total = UserAgent.objects.filter(type_agent=2).count()
    else:
        nombres__agent__total = UserAgent.objects.filter(type_agent=4).count()
        
    context = {
                'nombres__agents':nombres__agent__total, 

            }      
    return JsonResponse(context)

# Create your views here.
def creations__agents(request,type__d__agent):
    #variable local 
    
    zone__id = 0
    context = {}
    message__systeme =""

    if type__d__agent == "Controleur":
        name__agent = "Agent_controleur"
    else: 
        name__agent = "Agent_rescenseur"
       
  
    if request.method  =='POST':
        print(request.POST)
        type__d__agent = TypeAgent.objects.get(name=name__agent)
        username = request.POST['nom_complet']
        print(username)
        password = generer_mot_de_passe(5) # 
        print(password)
        if name__agent == "Agent_controleur":
           code_agent =f"AC-{generer_code__agent(4)}"   # 9999
        if name__agent == "Agent_rescenseur":
           code_agent =f"AR-{generer_code__agent(4)}"
        email = request.POST['email']
        print(code_agent)
        phone_no = request.POST['phone_no']
        print(phone_no)
        Matricule = request.POST['Matricule']
        print(Matricule)
        Zone = request.POST['Zone']
        print(Zone)
        try:
            modal__user = UserAgent.objects.create(username=username,email=email, password=password,code_agent=code_agent,phone_no=phone_no,type_agent=type__d__agent,Matricule=Matricule)
        except:
            context = {
                        'message_systeme':"les entres doivent etre unique!",
                        'etat': "echec"
                        }      
            return JsonResponse(context)

        #user.type_agent.add(type__d__agent)
        #! for update modal and add agent controleur 5 
        #!-------------------------- IMPORTANT --------------------
        n = 0 
        get__user__agent__in__modal = UserAgent.objects.get(code_agent=code_agent)
        if name__agent == "Agent_controleur":
            for i in range(0,4):
                #if Zones.objects.filter(agent_controleur=None).first():
                zone__id = int(Zone)
                    #Zones.objects.filter(agent_controleur=None).values_list('id', flat=True).first()
                    #print("-"*100)
                try:
                    zone_id_i = zone__id + int(i)
                    print(f"ZONE ID : {zone_id_i}")
                    #print("-"*100)
                    p = Zones.objects.get(id=zone_id_i)
                    print(p)
                    p.agent_controleur = get__user__agent__in__modal
                    p.save()
                    print(f"sucess")
                    message__systeme = f"L'agent controleur {username}  a été créé"   
                    zone__id = f"{nom_de_la_zone(zone__id+1)+str(zone__id)} - {nom_de_la_zone(zone__id+5)+str(zone__id+i)}"
                except:
                
                #else:
                   #message__systeme = f"l'agent {name__agent} {username}  a été créé mais plus de zone." 
                       
                    message__systeme = f"L'agent controleur {username}  a été créé mais il y a plus de zone disponible."   
                    zone__id = f"{nom_de_la_zone(zone__id)+str(zone__id)} à {nom_de_la_zone(zone__id)+str(zone__id+i)}" 
            
        else: 
                #if Zones.objects.filter(agent_rescenseur=None).first():
                    zone__id = Zone
                    #Zones.objects.filter(agent_rescenseur=None).values_list('id', flat=True).first()
                    print("-"*100)
                    print(f"ZONE ID : {zone__id}")
                    print("-"*100)
                    p = Zones.objects.get(id=zone__id)
                    print(p)
                    p.agent_rescenseur = get__user__agent__in__modal
                    p.save()
                    print(f"sucess")
                    zone__id = f"{nom_de_la_zone(zone__id)+str(zone__id)}"
                #else:
                   #message__systeme = f"l'agent {name__agent} {username}  a été créé mais plus de zone."
                       
                    message__systeme = f"L'agent rescenseur {username}  a été créé"
                

        
    context = {
                        'message_systeme':message__systeme, 
                        'agent__password': password,  
                        'agent__user':  code_agent,
                        "agent__zone": zone__id,
                        'etat': "sucessed"    
        }
    print("👍")      
    return JsonResponse(context)

def get__lists__of__agents(request,num_avis,type__d__agent):
    if type__d__agent == "Controleur":
        variable__listes__des__agents  = list(UserAgent.objects.filter(type_agent=2).values()) 
    else: 
        variable__listes__des__agents  = list(UserAgent.objects.filter(type_agent=4).values()) 

    print("*"*100)
    print(num_avis)
    if num_avis > 3 :
      upper = num_avis + 3 
      lower = num_avis - 1 
    else : 
      upper = num_avis 
      lower = 0
    print(variable__listes__des__agents)
    print(variable__listes__des__agents[0])
   
    
    if variable__listes__des__agents == False:
        variable__listes__des__agents = []
        size = 0
    else:
        size = len(variable__listes__des__agents)
        
    context = {
               'listes__agents':variable__listes__des__agents[lower:upper], 'size': size
            }      
    return JsonResponse(context)