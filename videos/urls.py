from django.urls import path
from . import views

app_name = 'videos'


urlpatterns = [
    path('<uuid:id>/', views.VideoShowView, name="video_show")
]
