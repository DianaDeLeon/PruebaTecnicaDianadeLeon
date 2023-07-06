from django.shortcuts import render
from rest_framework import generics
from empleado.serializer import EmpleadoSerializer
from empleado.models import Empleado

# Create your views here.

class CrearEmpleadoView(generics.CreateAPIView):
    serializer_class=EmpleadoSerializer
    queryset=Empleado.objects.all()

class ListarEmpleadoView(generics.ListAPIView):
    serializer_class=EmpleadoSerializer
    
    def get_queryset(self):
        return Empleado.objects.all()

class UpdateEmpleado(generics.RetrieveUpdateAPIView):
     serializer_class=EmpleadoSerializer
     queryset=Empleado.objects.all()

class EliminarEmpleadoView(generics.DestroyAPIView):
    serializer_class=EmpleadoSerializer
    queryset=Empleado.objects.all()
 
class DetalleEmpleadoView(generics.RetrieveAPIView):
    queryset=Empleado.objects.all()
    serializer_class=EmpleadoSerializer
