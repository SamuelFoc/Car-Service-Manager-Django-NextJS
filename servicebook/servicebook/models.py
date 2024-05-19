from django.db import models

class ServiceBook(models.Model):
    name = models.CharField(max_length=150)
    description = models.CharField(max_length=500)

    def __str__(self):
        return f"{self.name} - {self.description}"