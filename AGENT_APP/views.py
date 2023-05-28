from django.shortcuts import render
from django.http import JsonResponse
from BD_APP.models import *
from django.db.models import Q

import random
import string

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

    if type__d__agent == "Controleur":
        
        name__agent = "Agent_controleur"
    else: 
        name__agent = "Agent_rescenseur"
       
  
    if request.method  =='POST':
        print(request.POST)
        type__d__agent = TypeAgent.objects.get(name=name__agent)
        username = request.POST['nom_complet']
        print(username)
        password = generer_mot_de_passe(10)
        print(password)
        code_agent =  generer_code__agent(10)
        email = request.POST['email']
        print(code_agent)
        phone_no = request.POST['phone_no']
        print(phone_no)
        Matricule = request.POST['Matricule']
        print(Matricule)
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
        if  type__d__agent == "Controleur":
            for i in range(1,3):
                if Zones.objects.filter(agent_controleur=None).first():
                    zone__id = Zones.objects.filter(agent_controleur=None).values_list('id', flat=True).first()
                    print("-"*100)
                    print(f"ZONE ID : {zone__id}")
                    print("-"*100)
                    p = Zones.objects.get(id=zone__id)
                    print(p)
                    p.agent_controleur = get__user__agent__in__modal
                    p.save()
                    print(f"sucess")
                else:
                   message__systeme = f"l'agent {name__agent} {username}  a été créé mais plus de zone." 
                       
            message__systeme = f"l'agent {name__agent} {username}  a été créé"    
            
        else:
           
            for i in range(1,3):
                if Zones.objects.filter(agent_rescenseur=None).first():
                    zone__id = Zones.objects.filter(agent_rescenseur=None).values_list('id', flat=True).first()
                    print("-"*100)
                    print(f"ZONE ID : {zone__id}")
                    print("-"*100)
                    p = Zones.objects.get(id=zone__id)
                    print(p)
                    p.agent_rescenseur = get__user__agent__in__modal
                    p.save()
                    print(f"sucess")
                else:
                   message__systeme = f"l'agent {name__agent} {username}  a été créé mais plus de zone." 
                       
            message__systeme = f"l'agent {name__agent} {username}  a été créé"

        
    context = {
                        'message_systeme':message__systeme, 
                        'agent__password': password,  
                        'agent__user':  code_agent,
                        "agent__zone": f"{zone__id} - {zone__id+2}",
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