from rest_framework import permissions

class isAgentControleur(permissions.DjangoModelPermissions):
    def has_permission(self, request, view):
        user = request.user
        if user.username == "ledoux" :
            return True
        return False