from django.db import models
from django.utils.translation import gettext_lazy as _
from tools.models import TimeStampedModel


class QrCode(TimeStampedModel):
    name = models.CharField(
        _("Name"),
        max_length=150,
        unique=True
    )
    slug = models.SlugField(
        _("Slug"),
        allow_unicode=True,
    )
    redirect = models.URLField(
        null=True,
        blank=True
    )
    description = models.TextField(
        blank=True
    )
    file = models.FileField(
        upload_to='qr/files',
        null=True, 
        blank=True
    )
    active = models.BooleanField(
        _("Active"),
        default=True
    )
    
    def __str__(self):
        return self.name
    
    
