from django.shortcuts import render
from django.http import JsonResponse
from BD_APP.models import *
from django.db.models import Q

# Create your views here.

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
      }
      return JsonResponse(context)
def stats_home_section(request):
      nombre_population_total = Personnes.objects.all().count()
      nombre_migration = Personnes.objects.exclude(nationalite__icontains='congolaise').count()
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
      nombres__agent__total = UserAgent.objects.filter(type_agent=2) | UserAgent.objects.filter(type_agent=4)#2 for rescenseur and 4 for controlleur
      nombres__agent__total = nombres__agent__total.count()
      nombres__agent__rescenseur__total = UserAgent.objects.filter(type_agent=4).count()
      nombres__agent__controlleur__total = UserAgent.objects.filter(type_agent=2).count()
      

      context = {
                  'nombres__agent__total':nombres__agent__total, 
                  'nombres__agent__rescenseur': nombres__agent__rescenseur__total,
                  'nombres__agent__controlleur': nombres__agent__controlleur__total,
                }      
      return JsonResponse(context)


