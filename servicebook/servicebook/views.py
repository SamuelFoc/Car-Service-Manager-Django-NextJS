from rest_framework.response import Response
from rest_framework import status
from .models import ServiceBook
from .serializers import ServiceBookSerializer
from rest_framework.decorators import api_view

@api_view(["GET", "POST"])
def servicebook_list(request):
    if request.method == "GET":
        servicebooks = ServiceBook.objects.all()
        serializer = ServiceBookSerializer(servicebooks, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    if request.method == "POST":
        serializer = ServiceBookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)
    
@api_view(["GET", "PATCH", "DELETE"])    
def servicebook_detail(request, pk):
    try:
        servicebook = ServiceBook.objects.get(pk=pk)
    except ServiceBook.DoesNotExist:
        return Response({"message": "The ServiceBook does not exist"}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == "GET":
        serializer = ServiceBookSerializer(servicebook)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    elif request.method == "PATCH":
        serializer = ServiceBookSerializer(servicebook, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == "DELETE":
        servicebook.delete()
        return Response({"message": "The ServiceBook has been deleted"}, status=status.HTTP_204_NO_CONTENT)