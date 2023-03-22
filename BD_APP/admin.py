
from django.contrib import admin

# Register your models here.
from .models import *

# Register your models here.
admin.site.register(TypeAgent)
admin.site.register(UserAgent)
admin.site.register(Zones)
admin.site.register(Personnes)
