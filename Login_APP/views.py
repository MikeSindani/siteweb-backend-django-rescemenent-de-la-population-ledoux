from django.shortcuts import render , redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User, Group
from .decorations import unauthentificated_user
from django.contrib.auth import logout
from BD_APP.models import *

# Create your views here.
@unauthentificated_user
def logIn(request):
    return render(request,"connexion/connexion.html")

@unauthentificated_user
def post_logIn(request):
    if request.method == "POST" : 
        
        username = request.POST.get("user")
        password  = request.POST.get("password")
        user = authenticate(request, username=username, password=password)
        if user is not None:
                login(request,user)
                
                return redirect("dashbord")
        else:
                return HttpResponse("password incorrect ou username")
    else:
           return render(request,"connexion/connexion.html")
    
@login_required(login_url='connexion')
def dashbord(request):
      nombre_population_total = Personnes.objects.all().count()
      nombre_homme = Personnes.objects.filter(sexe='M').count()
      nombre_femme = Personnes.objects.filter(sexe='F').count()
      list_des_communes = Personnes.objects.all()

      return render(request,"dashbord/dashbord.html",{'nombre_population_total':nombre_population_total, 'nombre_homme': nombre_homme,'nombre_femme': nombre_femme,"list_des_communes":list_des_communes})

def logOut(request):
      logout(request)
      return redirect('connexion')

