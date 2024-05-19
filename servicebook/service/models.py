from django.db import models
from car.models import Car


class Service(models.Model):
    car = models.ForeignKey(Car, related_name='services', on_delete=models.CASCADE)
    date = models.DateField()
    service_type = models.CharField(max_length=100)
    description = models.TextField()
    distance = models.DecimalField(max_digits=10, decimal_places=2)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return self.service_type
