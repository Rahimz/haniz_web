from django.contrib import admin


from .models import Video


@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'video_file', 'uuid']
    prepopulated_fields = {
        'slug': ['name']
    }
