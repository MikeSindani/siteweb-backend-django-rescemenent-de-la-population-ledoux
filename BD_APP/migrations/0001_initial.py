# Generated by Django 4.1.7 on 2023-03-22 20:44

from django.conf import settings
import django.contrib.auth.models
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Statistique',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('categorie', models.CharField(max_length=25, unique=True)),
                ('commune', models.CharField(max_length=30, unique=True)),
                ('quartier', models.CharField(max_length=30, unique=True)),
                ('nbrs_homme', models.PositiveIntegerField()),
                ('nbrs_femme', models.PositiveIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='TypeAgent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(choices=[('Admin', 'Admin'), ('Agent_codificateur', 'Agent_codificateur'), ('Agent_controleur', 'Agent_controleur'), ('Agent_rescenseur', 'Agent_rescenseur'), ('None', 'None')], max_length=50, null=True)),
            ],
            options={
                'verbose_name': "type d' agent",
                'verbose_name_plural': "type d' agents",
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='UserAgent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('username', models.CharField(blank=True, max_length=50, null=True)),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email address')),
                ('Matricule', models.CharField(max_length=15, null=True, unique=True)),
                ('code_agent', models.CharField(max_length=10, unique=True)),
                ('phone_no', models.CharField(max_length=10, unique=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('type_agent', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='BD_APP.typeagent')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Zones',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('etat', models.IntegerField(null=True)),
                ('statut', models.BooleanField(null=True)),
                ('agent_codificateur', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='agent_codificateur', to=settings.AUTH_USER_MODEL)),
                ('agent_controleur', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='agent_controleur', to=settings.AUTH_USER_MODEL)),
                ('agent_rescenseur', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='agent_rescenseur', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Personnes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=100, null=True)),
                ('prenom', models.CharField(max_length=100, null=True)),
                ('postnom', models.CharField(max_length=100, null=True)),
                ('commune', models.CharField(max_length=100, null=True)),
                ('quartier', models.CharField(max_length=100, null=True)),
                ('date_de_naissance', models.CharField(max_length=100, null=True)),
                ('province', models.CharField(max_length=100, null=True)),
                ('avenue', models.CharField(max_length=100, null=True)),
                ('nationalite', models.CharField(max_length=100, null=True)),
                ('niveau_d_etude', models.CharField(max_length=100, null=True)),
                ('profession', models.CharField(max_length=100, null=True)),
                ('etat_civil', models.CharField(max_length=100, null=True)),
                ('numero_parcelle', models.CharField(max_length=100, null=True)),
                ('menage', models.CharField(max_length=100, null=True)),
                ('zones', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='Zones', to='BD_APP.zones')),
            ],
        ),
    ]
