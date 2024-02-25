from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField
    done=models.BooleanField(default=False)
    creat_at = models.DateTimeField(auto_now_add=True)
