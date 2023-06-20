from django.shortcuts import render
from django.http import JsonResponse
from BD_APP.models import *
from django.db.models import Q
from .listOfArea import LubumbashiArea

      
def home_section(request):
      nombre_population_total = Personnes.objects.all().count()
      nombre_homme = Personnes.objects.filter(sexe='M').count()
      nombre_femme = Personnes.objects.filter(sexe='F').count()
      nombre_Migration_total = Personnes.objects.exclude(nationalite__icontains='congolaise').count()
      nombre_niveau_d_etude = Personnes.objects.exclude(niveau_d_etude__icontains='illetree').count()

      lire_et_comprendre = Personnes.objects.filter(niveau_d_etude__icontains='oui').count()
      lire_et_comprendre_homme_oui = Personnes.objects.filter(niveau_d_etude__icontains='oui',sexe='M').count()
      lire_et_comprendre_homme_non = Personnes.objects.filter(niveau_d_etude__icontains='non',sexe='M').count()
      lire_et_comprendre_femme_oui = Personnes.objects.filter(niveau_d_etude__icontains='oui',sexe='F').count()
      lire_et_comprendre_femme_non = Personnes.objects.filter(niveau_d_etude__icontains='non',sexe='F').count()

      nombre_etat_civil = Personnes.objects.filter(etat_civil__icontains='marie').count()
      nombre_etat_civil_celibataire = Personnes.objects.filter(etat_civil__icontains='celibataire').count()
      nombre_etat_civil_separe = Personnes.objects.filter(etat_civil__icontains='separe').count()
      nombre_etat_civil_veuve = Personnes.objects.filter(etat_civil__icontains='veuve').count()
      nombre_etat_civil_divorce = Personnes.objects.filter(etat_civil__icontains='divorce').count()
      print(nombre_Migration_total)
      context = {
      'nombre_population_total':nombre_population_total, 
      'nombre_homme': nombre_homme,
      'nombre_femme': nombre_femme,
      "lire_et_comprendre":lire_et_comprendre,
      'lire_et_comprendre_homme_oui':lire_et_comprendre_homme_oui,
      'lire_et_comprendre_homme_non':lire_et_comprendre_homme_non,
      'lire_et_comprendre_femme_oui':lire_et_comprendre_femme_oui,
      'lire_et_comprendre_femme_non':lire_et_comprendre_femme_non,
      "nombre_etat_civil":nombre_etat_civil,
      "nombre_etat_civil_celibataire":nombre_etat_civil_celibataire,
      "nombre_etat_civil_separe":nombre_etat_civil_separe,
      "nombre_etat_civil_veuve":nombre_etat_civil_veuve,
      "nombre_etat_civil_divorce":nombre_etat_civil_divorce,
      }
      return JsonResponse(context)
def stats_home_section(request):
      nombre_population_total = Personnes.objects.all().count()
      nombre_migration = Personnes.objects.exclude(nationalite__icontains='congolais').count()
      nbrs_education = Personnes.objects.filter(niveau_d_etude__icontains='licencie').count()
      etat_civil = Personnes.objects.filter(etat_civil__icontains="mariée").count()

      context = {
                  'nombre_population_total':nombre_population_total, 
                  'nbrs_migration': nombre_migration,
                  'nbrs_education': nbrs_education,
                  "etat_civil":etat_civil
                }      
      return JsonResponse(context)
def agent_home_section(request):
      nombres__agent__total = UserAgent.objects.filter(type_agent__name="Agent_rescenseur") | UserAgent.objects.filter(type_agent__name='Agent_controleur')#2 for rescenseur and 4 for controlleur
      nombres__agent__total = nombres__agent__total.count()
      nombres__agent__rescenseur__total = UserAgent.objects.filter(type_agent__name='Agent_controleur').count()
      nombres__agent__controlleur__total = UserAgent.objects.filter(type_agent__name="Agent_rescenseur").count()
      

      context = {
                  'nombres__agent__total':nombres__agent__total, 
                  'nombres__agent__rescenseur': nombres__agent__rescenseur__total,
                  'nombres__agent__controlleur': nombres__agent__controlleur__total,
                }      
      return JsonResponse(context)

def get__listes__of__commune(request):
      
      list__of__commune = LubumbashiArea.funct__list__of__commune()

      context = {
                  'list__of__commune': list__of__commune,
                }      
      return JsonResponse(context)

def get__resencement__population__stats_section(request,commune,categorie):
      context = {}
      if categorie == "Population":
            stat__population__total = Personnes.objects.filter(commune=commune).count()
            stat__population__total__homme = Personnes.objects.filter(sexe="M",commune=commune).count()
            stat__population__total__femme = Personnes.objects.filter(sexe="F",commune=commune).count()
     
            context = {
                        'stat__population__total':stat__population__total, 
                        'stat__population__total__homme': stat__population__total__homme,
                        'stat__population__total__femme': stat__population__total__femme,
                  }
      if categorie == "Education":
            stat__population__total = Personnes.objects.filter(commune=commune).count()
            Statistique__by__aera__Alphabetisation = Personnes.objects.filter(commune=commune,comprendreLire__icontains="Facilement").count()
            Statistique__by__aera__Analphabetisation = Personnes.objects.exclus(commune=commune,comprendreLire__icontains="Facilement").count()
     
            context = {
                        'stat__population__total':stat__population__total, 
                        'Statistique__by__aera__Alphabetisation': Statistique__by__aera__Alphabetisation,
                        'Statistique__by__aera__Analphabetisation': Statistique__by__aera__Analphabetisation,
                  }
      if categorie == "Migration":
            stat__population__total = Personnes.objects.filter(commune=commune).count()
            Statistique__by__aera__nationaux = Personnes.objects.filter(Q(nationalite__icontains="Congolais") & Q(commune=commune)).count()
            Statistique__by__aera__etrangere = Personnes.objects.filter(~Q(nationalite__icontains="Congolais") & Q(commune=commune)).count()
     
            context = {
                        'stat__population__total':stat__population__total, 
                        "Statistique__by__aera__nationaux":Statistique__by__aera__nationaux,
                       "Statistique__by__aera__etrangere":Statistique__by__aera__etrangere,
                  }
      if categorie == "Etat-Civil":
             
            
              stat__population__totals = Personnes.objects.filter(commune=commune).count()
              Statistique__by__aera__Celibataire = Personnes.objects.filter(Q(etat_civil__icontains="Celibataire") & Q(commune=commune)).count()
              Statistique__by__aera__Marié = Personnes.objects.filter(Q(etat_civil__icontains="Marié") & Q(commune=commune)).count()
              Statistique__by__aera__Union_Libre = Personnes.objects.filter(Q(etat_civil__icontains="Union Libre") & Q(commune=commune)).count()
              Statistique__by__aera__Veuf = Personnes.objects.filter(Q(etat_civil__icontains="Veuf") & Q(commune=commune)).count()
              Statistique__by__aera__Divorcé = Personnes.objects.filter(Q(etat_civil__icontains="Divorcé") & Q(commune=commune)).count()
              Statistique__by__aera__Separé = Personnes.objects.filter(Q(etat_civil__icontains="Separé") & Q(commune=commune)).count()
              
              context = {'stat__population__totals':stat__population__totals,
                     'name__aera':i,
                     "Statistique__by__aera__Celibataire":Statistique__by__aera__Celibataire,
                        "Statistique__by__aera__Marié":Statistique__by__aera__Marié,
                        'Statistique__by__aera__Union_Libre':Statistique__by__aera__Union_Libre,
                        "Statistique__by__aera__Veuf":Statistique__by__aera__Veuf,
                        'Statistique__by__aera__Divorcé':Statistique__by__aera__Divorcé,
                        'Statistique__by__aera__Separé':Statistique__by__aera__Separé,
                  }
                   
      return JsonResponse(context)

def get__statistique__otherwise__quartier(request,categorie,commune):
      #nombres__agent__total = UserAgent.objects.filter(type_agent__name="Agent_rescenseur") | UserAgent.objects.filter(type_agent__name='Agent_controleur')#2 for rescenseur and 4 for controlleur4
      list__of__quartier = []
      list__result = []
      Statistique__by__aera = ""
      context = {}


      if categorie == "Population":
            list__of__quartier = LubumbashiArea.funct__list__of__aera(commune=commune)
            for i in  list__of__quartier:
              Statistique__by__aera = Personnes.objects.filter(quartier=i).count()
              Statistique__by__aera__homme = Personnes.objects.filter(quartier=i,sexe="M").count()
              Statistique__by__aera__femme = Personnes.objects.filter(quartier=i,sexe="F").count()
              tup = {'Statistique__by__aera':Statistique__by__aera,
                     'name__aera':i,
                  "Statistique__by__aera__homme":Statistique__by__aera__homme,
                  "Statistique__by__aera__femme":Statistique__by__aera__femme}
              list__result.append(tup)
              

      if categorie == "Education":
            list__of__quartier = LubumbashiArea.funct__list__of__aera(commune=commune)
            for i in  list__of__quartier:
              Statistique__by__aera = Personnes.objects.filter(quartier=i).count()
              Statistique__by__aera__Alphabetisation = Personnes.objects.filter(quartier=i,comprendreLire="Facilement").count()
              Statistique__by__aera__Analphabetisation = Personnes.objects.filter(~Q(comprendreLire="Facilement") & Q(quartier=i)).count()
              tup = {'Statistique__by__aera':Statistique__by__aera,
                     'name__aera':i,
                  "Statistique__by__aera__Alphabetisation":Statistique__by__aera__Alphabetisation,
                  "Statistique__by__aera__Analphabetisation":Statistique__by__aera__Analphabetisation}
              list__result.append(tup)


      if categorie == "Migration":
            list__of__quartier = LubumbashiArea.funct__list__of__aera(commune=commune)
            for i in  list__of__quartier:
              Statistique__by__aera = Personnes.objects.filter(quartier=i).count()
              Statistique__by__aera__nationaux = Personnes.objects.filter(Q(nationalite__icontains="Congolais") & Q(quartier=i)).count()
              Statistique__by__aera__etrangere = Personnes.objects.filter(~Q(nationalite__icontains="Congolais") & Q(quartier=i)).count()
              tup = {'Statistique__by__aera':Statistique__by__aera,
                     'name__aera':i,
                  "Statistique__by__aera__nationaux":Statistique__by__aera__nationaux,
                  "Statistique__by__aera__etrangere":Statistique__by__aera__etrangere}
              list__result.append(tup)

      if categorie == "Etat-Civil":
            list__of__quartier = LubumbashiArea.funct__list__of__aera(commune=commune)
            for i in  list__of__quartier:
              Statistique__by__aera = Personnes.objects.filter(quartier=i).count()
              Statistique__by__aera__Celibataire = Personnes.objects.filter(Q(etat_civil__icontains="Celibataire") & Q(quartier=i)).count()
              Statistique__by__aera__Marié = Personnes.objects.filter(Q(etat_civil__icontains="Marié") & Q(quartier=i)).count()
              Statistique__by__aera__Union_Libre = Personnes.objects.filter(Q(etat_civil__icontains="Union Libre") & Q(quartier=i)).count()
              Statistique__by__aera__Veuf = Personnes.objects.filter(Q(etat_civil__icontains="Veuf") & Q(quartier=i)).count()
              Statistique__by__aera__Divorcé = Personnes.objects.filter(Q(etat_civil__icontains="Divorcé") & Q(quartier=i)).count()
              Statistique__by__aera__Separé = Personnes.objects.filter(Q(etat_civil__icontains="Separé") & Q(quartier=i)).count()
              
              tup = {'Statistique__by__aera':Statistique__by__aera,
                     'name__aera':i,
                     "Statistique__by__aera__Celibataire":Statistique__by__aera__Celibataire,
                        "Statistique__by__aera__Marié":Statistique__by__aera__Marié,
                        'Statistique__by__aera__Union_Libre':Statistique__by__aera__Union_Libre,
                        "Statistique__by__aera__Veuf":Statistique__by__aera__Veuf,
                        'Statistique__by__aera__Divorcé':Statistique__by__aera__Divorcé,
                        'Statistique__by__aera__Separé':Statistique__by__aera__Separé,
                  }
              list__result.append(tup)

      if categorie == "Pauvrete":
            list__of__quartier = LubumbashiArea.funct__list__of__aera(commune=commune)
            for i in  list__of__quartier:
              Statistique__by__aera = Personnes.objects.filter(quartier=i).count()
              Statistique__by__aera__nationaux = Personnes.objects.filter(Q(nationalite__icontains="Congolais") & Q(quartier=i)).count()
              Statistique__by__aera__etrangere = Personnes.objects.filter(~Q(nationalite__icontains="Congolais") & Q(quartier=i)).count()
              tup = {'Statistique__by__aera':Statistique__by__aera,
                     'name__aera':i,
                  "Statistique__by__aera__nationaux":Statistique__by__aera__nationaux,
                  "Statistique__by__aera__etrangere":Statistique__by__aera__etrangere}
              list__result.append(tup)

      context = { 
                  'list__result': list__result,
                }      
      return JsonResponse(context)

