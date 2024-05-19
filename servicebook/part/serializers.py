from rest_framework import serializers
from .models import Part


class PartSerializers(serializers.ModelSerializer):
    class Meta:
        model = Part
        fields = '__all__'