from django.http import HttpResponse
from django.shortcuts import redirect

def unauthentificated_user(view_funct):
    def wrapper_func(request,*arg,**kwargs):
        if request.user.is_authenticated:
            return redirect('h')
        else:
            return view_funct(request,*arg,**kwargs)
    return wrapper_func