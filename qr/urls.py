from django.urls import path
from . import views

app_label = 'qr'

urlpatterns = [
    path('<str:slug>/', views.QrShowView, name='qr_show')
]
