
from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Task
from .serializador import TaskS
# Create your views here.


class TaskView(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    permisos = [permissions.AllowAny]
    serializer_class = TaskS
    @action(detail=True, methods=['POST'])
    def done(self, pk=None):
        task=self.get_object()
        task.done = not task.done
        task.save()
        return Response({'status':'tarea marcada como hecha' if task.done else 'tarea marcada como no hecha'},status=status.HTTP_200_OK)