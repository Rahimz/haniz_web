from django.db import models
import uuid

from tools.models import TimeStampedModel

class Video(TimeStampedModel):
    name = models.CharField(
        max_length = 100,
        unique=True
    )
    slug = models.SlugField(
        allow_unicode=True
    )
    uuid = models.UUIDField(
        default=uuid.uuid4, 
        editable=False,
        unique=True
    )
    video_file = models.FileField(
        upload_to='videos/'
    )
    
    def __str__(self):
        return self.name
