from django.db import models
from servicebook.models import ServiceBook


class Car(models.Model):
    # Evidence
    first_evidence = models.DateField(blank=True, null=True)
    vin = models.CharField(max_length=20, blank=True, null=True)
    owner = models.CharField(max_length=100, blank=True, null=True)
    evidence_number = models.CharField(max_length=20, blank=True, null=True)
    # Service
    service_book = models.ForeignKey(ServiceBook, on_delete=models.CASCADE, null=True)
    # Car
    manufacturer = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.IntegerField()
    color = models.CharField(max_length=50)
    foil = models.BooleanField(default=False)
    weight = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    number_of_seats = models.IntegerField(blank=True, null=True)
    hitch = models.BooleanField(default=False)
    # Engine
    engine_type = models.CharField(max_length=50)
    engine_power = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    engine_oil = models.CharField(max_length=50, blank=True)
    engine_code = models.CharField(max_length=50, blank=True)
    # Transmission
    transmission_type = models.CharField(max_length=50)
    transmission_code = models.CharField(max_length=20, blank=True)
    transmission_oil = models.CharField(max_length=20, blank=True)
    # Fuel
    fuel_type = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    last_service = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    
    def __str__(self):
        return f"{self.manufacturer} {self.model}"
