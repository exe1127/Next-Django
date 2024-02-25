from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import Task
from .serializador import TaskS 
# Create your views here.

class TaskView(viewsets.ModelViewSet):
    queryset=Task.objects.all()
    permisos=[permissions.AllowAny]
    serializer_class=TaskS
