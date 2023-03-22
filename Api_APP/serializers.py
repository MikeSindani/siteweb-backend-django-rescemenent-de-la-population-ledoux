from rest_framework import serializers
from BD_APP.models import *
from django.contrib.auth.models import User, Group

class table_personnes_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Personnes 
        fields = [
        '--All--'
        ]
class table_user_agent_Serializer(serializers.ModelSerializer):
    class Meta:
        model = UserAgent 
        fields = [
        '--All--'
        ]
class table_zones_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Zones
        fields = [
        '--All--'
        ]


        