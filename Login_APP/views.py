from django.shortcuts import render , redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User, Group
from .decorations import unauthentificated_user
from django.contrib.auth import logout

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
                
                return render(request,"dashbord/dashbord.html")
        else:
                return HttpResponse("password incorrect ou username")
    else:
           return render(request,"connexion/connexion.html")
    
@login_required(login_url='connexion')
def dashbord(request):
      return render(request,"dashbord/dashbord.html")

def logOut(request):
      logout(request)
      return redirect('connexion')