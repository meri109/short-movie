from django.contrib import admin
from  .models import Studio, Movie, Genre

# Register your models here.

admin.site.register(Studio)
admin.site.register(Movie)
admin.site.register(Genre)
