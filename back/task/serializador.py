from .models import Task
from rest_framework import serializers


class TaskS(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'title', 'description', 'done', 'create_at')
        read_only_fields = ('id', 'created_at')
