from django.contrib import admin

from .models import QrCode 


@admin.register(QrCode)
class QrCodeAdmin(admin.ModelAdmin):
    list_display = ['id', 'name','active']
    list_editable = ['name', 'active']
    prepopulated_fields =  {"slug": ["name"]}
