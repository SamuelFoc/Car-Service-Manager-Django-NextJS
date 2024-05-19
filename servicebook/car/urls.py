from django.urls import path
from .views import car_list, car_detail


urlpatterns = [
    path("", car_list),
    path("<int:pk>/", car_detail)
]