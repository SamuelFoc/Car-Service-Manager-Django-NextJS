from django.urls import path
from .views import part_list, part_detail


urlpatterns = [
    path("", part_list),
    path("<int:pk>/", part_detail)
]