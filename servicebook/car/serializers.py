from rest_framework import serializers
from .models import Car
from service.serializers import ServiceSerializer

class CarSerializer(serializers.ModelSerializer):
    services = ServiceSerializer(many=True)
    
    class Meta:
        model = Car
        fields = "__all__"