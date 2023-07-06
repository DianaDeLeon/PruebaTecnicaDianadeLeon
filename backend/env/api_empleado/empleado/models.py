from django.db import models

# Create your models here.
class Empleado(models.Model):
    nombre = models.CharField(max_length=200)
    idEmpleado = models.CharField(max_length=5,unique=True)
    salarioBase =models.CharField(max_length=20)
    horasTrabajadas = models.CharField(max_length=5)
    creacion = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.nombre