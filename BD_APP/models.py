from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from datetime import date
 


class UserAgent(AbstractUser):
  username = models.CharField(max_length = 50, blank = True, null = True)
  email = models.EmailField('email address', unique = True)
  Matricule = models.CharField(max_length = 15,null = True,unique = True)
  code_agent = models.CharField(max_length = 10, unique = True)
  phone_no = models.CharField(max_length = 10, unique = True)
  type_agent = models.ForeignKey('TypeAgent', on_delete=models.CASCADE,null=True)
  
  USERNAME_FIELD = 'code_agent'
  REQUIRED_FIELDS = ['username','email','phone_no','Matricule']
  def __str__(self):
      return "{} - {} : {}".format(self.username,self.email,self.phone_no)

class TypeAgent(models.Model):
    AGENT_CHOICES = (
        ('Admin', 'Admin'),
        ('Agent_codificateur', 'Agent_codificateur'),
        ('Agent_controleur', 'Agent_controleur'),
        ('Agent_rescenseur', 'Agent_rescenseur'),
        ('None', 'None'),
    )
    name = models.CharField(max_length=50,null=True,choices=AGENT_CHOICES)
    def __str__(self):
       return self.name

    class Meta:
        managed = True
        verbose_name = 'type d\' agent'
        verbose_name_plural = 'type d\' agents'
    


class Statistique(models.Model):
    categorie = models.CharField(max_length=25,unique=True)
    commune = models.CharField(max_length=30,unique=True)
    quartier = models.CharField(max_length=30,unique=True)
    nbrs_homme = models.PositiveIntegerField()
    nbrs_femme = models.PositiveIntegerField()

    def __str__(self):
       return "{}".format(self.categorie)

    @property
    def total_persons(self): 
        return "%.d" %(self.nbrs_femme + self.nbrs_homme)
    


class Personnes(models.Model):
    SEXE_CHOICES = (
        ('M', 'Masculin'),
        ('F', 'Feminin'),
        
    )
    #----------------------------------------------------------------
    nom = models.CharField(max_length=100,null=True)
    prenom = models.CharField(max_length=100,null=True)
    postnom = models.CharField(max_length=100,null=True)
    sexe = models.CharField(max_length=2,null=True,choices=SEXE_CHOICES)
    date_de_naissance = models.DateField(null=True)
    lien_parente= models.CharField(max_length=100,null=True)
    age = models.CharField(max_length=100,null=True)
    activite = models.CharField(max_length=100,null=True)
    #----------------------------------------------------------------
    province = models.CharField(max_length=100,null=True)
    commune = models.CharField(max_length=100,null=True)
    quartier = models.CharField(max_length=100,null=True)
    avenue = models.CharField(max_length=100,null=True)
    ville = models.CharField(max_length=100,null=True)
    zones = models.ForeignKey("Zones",related_name='Zones',null=True,on_delete=models.SET_NULL)
    #----------------------------------------------------------------
    nationalite = models.CharField(max_length=100,null=True)
    niveau_d_etude = models.CharField(max_length=100,null=True)
    profession = models.CharField(max_length=100,null=True)
    etat_civil  = models.CharField(max_length=100,null=True)
    classe = models.CharField(max_length=100,null=True)
    comprendreLire = models.CharField(max_length=100,null=True)
    #----------------------------------------------------------------
    situatioResidence = models.CharField(max_length=100,null=True)
    numero = models.CharField(max_length=100,null=True)
    nombre_ocupant = models.CharField(max_length=100,null=True)
    menage = models.CharField(max_length=100,null=True)
    indexDataOcupant = models.CharField(max_length=100,null=True)
    
    #verifie  = 
    
    def __str__(self):
       return "{} {}".format(self.nom, self.prenom)
   
class Zones(models.Model):
    nom = models.CharField(max_length=100,null=True,unique=True)
    agent_codificateur = models.ForeignKey(UserAgent,related_name='agent_codificateur',null=True,on_delete=models.SET_NULL)
    agent_controleur = models.ForeignKey(UserAgent,related_name='agent_controleur',null=True,on_delete=models.SET_NULL)
    agent_rescenseur = models.ForeignKey(UserAgent,related_name='agent_rescenseur',null=True,on_delete=models.SET_NULL)
    etat = models.IntegerField(null=True)
    statut = models.BooleanField(null=True)


    def __str__(self):
       return f" Zone -- ({self.id}) Agent-controlleur ({self.agent_controleur}) -- Agent-rescenseur ({self.agent_rescenseur}) "

    def save(self, *args, **kwargs):
        # Ajoutez votre propre logique ici
        self.etat = self.id 
        super(Zones, self).save(*args, **kwargs)


'''
lien d'authentification 
lien de demande si c'est agent rescenseur 
lien de agent resenseur est ca zone 
'''