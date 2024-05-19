from django.db import models
from service.models import Service


class Part(models.Model):
    services = models.ManyToManyField(Service, related_name='parts')
    name = models.CharField(max_length=100)
    manufacturer = models.CharField(max_length=100)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.name} - {self.manufacturer}"


