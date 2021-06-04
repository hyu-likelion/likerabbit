from django.contrib import admin

from .models import MemberShip, Store, User, History

admin.site.register(Store)
admin.site.register(User)
admin.site.register(History)
admin.site.register(MemberShip)