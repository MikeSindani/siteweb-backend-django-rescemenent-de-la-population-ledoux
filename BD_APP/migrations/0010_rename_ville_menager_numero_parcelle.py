# Generated by Django 4.1.7 on 2023-06-24 16:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('BD_APP', '0009_rename_manager_menager_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='menager',
            old_name='ville',
            new_name='numero_parcelle',
        ),
    ]