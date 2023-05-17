from rest_framework import permissions

class isAgentControleur(permissions.DjangoModelPermissions):
    def has_permission(self, request, view):
        #agent = request.user
        #if agent.type_agent == "1" or  agent.type_agent == "3" :
            return True
        #return False