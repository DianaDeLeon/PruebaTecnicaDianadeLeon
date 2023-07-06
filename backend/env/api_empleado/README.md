# Sistema de control de nómina de control de empleados.

### Crear entorno virtual 
py -m venv env

Activamos el entorno virtual (Scripts/activate)

### Instalacion de Django
pip install django
pip install djangorestframework

### Creación del Proyecto
django-admin startproject api_empleado

### Creación del la app
python manage.py startapp empleado

### Creación del superusuario
python manage.py createsuperuser
User: Admin
Password: admin123

Luego de crear la app creamos el modelo para poder hacer las migraciones.
También agregamos urls.py y serializer.py

### Migraciones
python manage.py makemigrations
python manage.py migrate


### Correr el proyecto
python manage.py runserver

###URLS
admin/
empleado/ crear/
empleado/ listar/
empleado/ actualizar/id/
empleado/ eliminar/id/
empleado/ detalle/id/

Ejemplo:
http://localhost:8000/empleado/actualizar/5/
http://localhost:8000/empleado/detalle/4/


