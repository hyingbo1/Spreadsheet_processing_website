# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-05-12 15:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CustomModels',
            fields=[
                ('name', models.CharField(max_length=100)),
                ('customid', models.CharField(max_length=1, primary_key=True, serialize=False)),
                ('pw', models.CharField(max_length=13)),
            ],
        ),
    ]
