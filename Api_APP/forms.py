from django import forms
from BD_APP.models import table_statistique

class table_stat_forms(forms.ModelForm):
    class Meta:
        model = table_statistique 
        fiedls = [
        'categorie',
        'quartier',
        'nbrs_homme',
        'nbrs_femme'
        ]