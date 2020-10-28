from django.db import models

# Create your models here.
class CustomModels(models.Model):
    name = models.CharField(max_length = 100)
    customid = models.CharField(max_length = 13,primary_key = True)
    pw = models.CharField(max_length = 13)
    def __str__(self):
        return self.name
