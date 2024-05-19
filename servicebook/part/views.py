from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .models import Part
from .serializers import PartSerializers


@api_view(['GET', 'POST'])
def part_list(request):
    if request.method == "GET":
        services = Part.objects.all()
        serializer = PartSerializers(services, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    if request.method == 'POST':
        serializer = PartSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PATCH', 'DELETE'])
def part_detail(request, pk):
    try:
        car = Part.objects.get(pk=pk)
    except Part.DoesNotExist:
        return Response({'error': 'Part not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PartSerializers(car)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == "PATCH":
        serializer = PartSerializers(car, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == "DELETE":
        Part.delete()
        return Response({"message": "The Part has been deleted"}, status=status.HTTP_204_NO_CONTENT)
