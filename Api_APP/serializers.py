from rest_framework import serializers
from BD_APP.models import *
from django.contrib.auth.models import User, Group

class table_personnes_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Personnes 
        fields = [
        'nom',
        "prenom",
        "postnom",
        "sexe",
        "date_de_naissance",
        "province",
        "lien_parente",
        'activite',
        "commune",
        "quartier",
        "avenue",
        "ville",
        "zones",
        "nationalite",
        "niveau_d_etude",
        "profession",
        "etat_civil",
        "classe",
        "comprendreLire",
        "situatioResidence",
        "numero",
        "nombre_ocupant",
        "numero_parcelle",
        "menager",
        "zones",
        'indexDataOcupant',
        "etverifie",

        ]
class table_user_agent_Serializer(serializers.ModelSerializer):
    class Meta:
        model = UserAgent 
        fields = [
        'id',
        "username" ,
        "password",
        'email' ,
        'Matricule',
        'code_agent', 
        'phone_no' ,
        'type_agent',
        ]
class table_user_agent_without_password_Serializer(serializers.ModelSerializer):
    class Meta:
        model = UserAgent 
        fields = [
        'id',
        "username" ,
        "password",
        'email' ,
        'Matricule',
        'code_agent', 
        'phone_no' ,
        'type_agent',
        ]
class table_zones_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Zones
        fields = [
        'id',
        "nom",
        "agent_codificateur",
        "agent_controleur",
        "agent_rescenseur",
        "etat",
        'statut',
        ]

class table_menager_Serializer(serializers.ModelSerializer):
    class Meta:
        model = menager 
        fields = [
        'nombre_ocupant',
        'numero',
        'province',
        'commune',
        'quartier',
        'avenue',
        'zones',
        "type_menage",
        ]
       