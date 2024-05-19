from rest_framework import serializers
from .models import ServiceBook
from car.models import Car
from car.serializers import CarSerializer


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ['id', 'manufacturer', 'model', 'year', 'color', 'engine_type', 'transmission_type', 'fuel_type', 'price', 'last_service']

        
class ServiceBookSerializer(serializers.ModelSerializer):
    cars = serializers.SerializerMethodField()

    class Meta:
        model = ServiceBook
        fields = ["id", "name", "description", "cars"]

    def get_cars(self, obj):
        cars = Car.objects.filter(service_book=obj)
        return CarSerializer(cars, many=True).data