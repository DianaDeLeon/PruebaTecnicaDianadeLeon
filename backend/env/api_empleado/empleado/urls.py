from django.urls import path
from empleado import views

urlpatterns = [
    path('crear/', views.CrearEmpleadoView.as_view()),
    path('listar/', views.ListarEmpleadoView.as_view()),
    path('actualizar/<int:pk>/', views.UpdateEmpleado.as_view()),
    path('eliminar/<int:pk>/', views.EliminarEmpleadoView.as_view()),
    path('detalle/<int:pk>/', views.DetalleEmpleadoView.as_view()),
]