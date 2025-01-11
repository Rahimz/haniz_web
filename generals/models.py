from django.db import models
from tools.models import TimeStampedModel


class Image(TimeStampedModel):
    image_file = models.ImageField(
        upload_to='images/'
    )
    rank = models.PositiveSmallIntegerField(
        default=1,
    )
    
    def __str__(self):
        return f"{self.id}"