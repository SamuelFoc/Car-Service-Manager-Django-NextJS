from django.contrib import admin
from django.urls import path, include
from servicebook import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/servicebooks/', views.servicebook_list),
    path("api/servicebooks/<int:pk>/", views.servicebook_detail),
    path("api/cars/", include("car.urls")),
    path("api/services/", include("service.urls")),
    path("api/parts/", include("part.urls"))
]
