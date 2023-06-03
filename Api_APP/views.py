#from django.http import JsonResponse
import json 
from BD_APP.models import *
from rest_framework.response import Response 
from rest_framework.decorators import api_view
from django.forms.models import model_to_dict
from .serializers import *
from rest_framework.generics import RetrieveAPIView ,CreateAPIView
from tinydb import TinyDB, Query
db = TinyDB('db.json')
from django.http import JsonResponse
from rest_framework.permissions import IsAuthenticated , DjangoModelPermissions
from rest_framework import generics, authentication
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from .permissions import isAgentControleur
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes,authentication_classes
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework.authentication import SessionAuthentication, BasicAuthentication,TokenAuthentication

'''
@api_view(["GET"])
def api_home_list (request,*args,**kwargs):
    print("😁"*5,"list api ","😁"*5)
    instance  = table_statistique.objects.all()
    serializer_class = table_stat_Serializer(instance,many=True)
    
    return Response(serializer_class.data)
@api_view(["GET"])
def api_home_details (request,pk,*args,**kwargs):
    count = 0 
    count = count + 1
    print(count)
    instance  = table_statistique.objects.get(id=pk)
    serializer_class = table_stat_Serializer(instance,many=False)
    print(serializer_class.data)
    return Response(serializer_class.data)

@api_view(["POST"])
def api_home_create (request,*args,**kwargs):
    serializer_class = table_stat_Serializer(data=request.data)
    if serializer_class.is_valid():
        serializer_class.save()

    return Response(serializer_class.data)
@api_view(["PUT"])
def api_home_update (request,pk,*args,**kwargs):
    instance  = table_statistique.objects.get(id=pk)
    serializer_class = table_stat_Serializer(data=request.data,instance=instance)
    if serializer_class.is_valid():
        serializer_class.save()

    return Response(serializer_class.data)
'''

'''@api_view(["GET"])
def api_check_agent_controlleur (request,users,password,*args,**kwargs):
    instance  = agent_controlleur.objects.filter(nom_complet=users,password=password).values()
    
    if not instance:
        return Response({"msg":"empty"},status=404)
    else:
        print("✔"*10)
        print(instance)
        serializer_class = agent_controlleur_Serializer(instance,many=True)
        print(serializer_class.data)
        return Response({"msg":"ok"},status=200)
        
@api_view(["GET"])
def api_home_get (request,*args,**kwargs):
    instance  = table_statistique.objects.all().order_by("?").last()
    data = {}
    if instance :
        #data = model_to_dict(instance, fields=['id','categorie','nbrs_femme','nbrs_homme','total_persons'])
        data = table_stat_Serializer(instance).data
    return Response(data)

@api_view(["POST"])
def api_home_post (request,*args,**kwargs):
    serializer = table_stat_Serializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        #serializer.save()
        print(serializer.data)
        
        return Response(serializer.data)
    return Response({"invalide":"not good data"},status=400)

    class agent_user_persennel_info (RetrieveAPIView):
    authentication_classes = [authentication.SessionAuthentication,authentication.TokenAuthentication]
    queryset = UserAgent.objects.all()
    serializer_class = table_user_agent_Serializer
    name = 'Agent'
'''   
@api_view(["GET"])
@authentication_classes([SessionAuthentication, BasicAuthentication,TokenAuthentication])
@permission_classes([permissions.IsAuthenticated])
def agent_user_persennel_info(request,username,*args,**kwargs):
    instance  = UserAgent.objects.filter(code_agent=username)
    serializer_class = table_user_agent_Serializer(instance=instance,many=True)
    if instance :
        print(request.user)
        return Response(serializer_class.data,status=200)
    else:
        return Response({"error": "Aucune Info trouvée pour cette personne"}, status=404) # Renvoyer un message d'erreur avec un code 404
class personnes_lists_view(generics.ListAPIView):
    permission_classes = [isAgentControleur]
    authentication_classes = [authentication.SessionAuthentication,authentication.TokenAuthentication]
    queryset = Personnes.objects.all()
    serializer_class = table_personnes_Serializer

class personnes_create_view(CreateAPIView):
    permission_classes = [isAgentControleur]
    authentication_classes = [authentication.SessionAuthentication,authentication.TokenAuthentication]
    queryset = Personnes.objects.all()
    serializer_class = table_personnes_Serializer

@api_view(["GET"])
@authentication_classes([SessionAuthentication, BasicAuthentication,TokenAuthentication])
@permission_classes([permissions.IsAuthenticated])
def zones_details_view(request,pk,*args,**kwargs):
    instance  = Zones.objects.filter(agent_rescenseur=pk)
    serializer_class = table_zones_Serializer(instance=instance,many=True)
    if instance :
        print(serializer_class.data)
        return Response(serializer_class.data,status=200)
    else:
        return Response({"error": "Aucune personne trouvée pour cette zone"}, status=404)

@api_view(["PUT"])
@authentication_classes([SessionAuthentication, BasicAuthentication,TokenAuthentication])
@permission_classes([permissions.IsAuthenticated])
def api_zone_update (request,pk,*args,**kwargs):
    instance  = Zones.objects.get(id=pk)
    instance.etat = instance.etat + 1 
    print(instance.etat)
    print(instance.statut)
    serializer_class = table_zones_Serializer(data=request.data,instance=instance)
    if serializer_class.is_valid():
        serializer_class.save()

    return Response(serializer_class.data)

@api_view(["GET"])
@authentication_classes([SessionAuthentication, BasicAuthentication,TokenAuthentication])
@permission_classes([permissions.IsAuthenticated])
def api_get__agent__res_by_agent_controleur(request,pk,*args,**kwargs):
    instance  = UserAgent.objects.filter(id=pk)
    serializer_class = table_user_agent_without_password_Serializer(instance=instance,many=True)
    if instance :
        print(serializer_class.data)
        return Response(serializer_class.data,status=200)
    else:
        return Response({"error": "Aucune personne trouvée pour cette zone"}, status=404)
        
@api_view(["GET"])
@authentication_classes([SessionAuthentication, BasicAuthentication,TokenAuthentication])
@permission_classes([permissions.IsAuthenticated])
def api_get_agent_controleur__by__agent__res  (request,pk,*args,**kwargs):
    instance  = UserAgent.objects.filter(id=pk)
    serializer_class = table_user_agent_without_password_Serializer(instance=instance,many=True)
    if instance :
        print(serializer_class.data)
        return Response(serializer_class.data,status=200)
    else:
        return Response({"error": "Aucune personne trouvée pour cette zone"}, status=404)

@api_view(["GET"])
@authentication_classes([SessionAuthentication, BasicAuthentication,TokenAuthentication])
@permission_classes([permissions.IsAuthenticated])
def api_get_person_by_agent_controleur (request,pk,*args,**kwargs):
    instance  = Personnes.objects.filter(zone=pk)
    serializer_class = table_personnes_Serializer(instance,many=True)
    if instance :
        print(serializer_class.data)
        return Response(serializer_class.data)
    else:
        return Response({"error": "Aucune personne trouvée pour cette zone"}, status=404) # Renvoyer un message d'erreur avec un code 404
