from .models import Task
from rest_framework import serializers

class TaskS(serializers.Serializer):
    class Meta:
        model=Task
        field=('id','title','description','done','created_at')
        read_only = ('id','created_at')
