# Generated by Django 4.2.10 on 2024-02-25 12:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0003_task_description'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='creat_at',
            new_name='create_at',
        ),
    ]
