from django.contrib import admin
from .models import Skill, Project

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'level', 'order')
    list_filter = ('category',)
    search_fields = ('name', 'description')
    list_editable = ('level', 'order')

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'featured', 'order')
    list_filter = ('category', 'featured')
    search_fields = ('title', 'description', 'technologies')
    list_editable = ('featured', 'order')
