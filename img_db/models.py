from django.db import models

# Create your models here.
class IMG(models.Model):
    img = models.ImageField(upload_to='upload')
    name = models.CharField(max_length=20)