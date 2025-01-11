from django.contrib import admin

from .models import Image 


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ['id', 'image_file', 'rank']
    list_editable = ['rank']