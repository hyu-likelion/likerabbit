# Generated by Django 3.2.3 on 2021-05-31 10:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kkuuk', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='is_deleted',
            field=models.BooleanField(default=False),
        ),
    ]