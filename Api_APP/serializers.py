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
        "commune",
        "quartier",
        "avenue",
        "nationalite",
        "niveau_d_etude",
        "profession",
        "etat_civil",
        "numero_parcelle",
        "menage",
        "zones",

        ]
class table_user_agent_Serializer(serializers.ModelSerializer):
    class Meta:
        model = UserAgent 
        fields = [
        'id',
        "username" ,
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
        "agent_codificateur",
        "agent_controleur",
        "agent_rescenseur",
        "etat",
        'statut',
        ]


        