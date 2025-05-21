from django.db import models

class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('programming', 'Programming'),
        ('database', 'Database'),
        ('ai_ml', 'AI/ML'),
        ('blockchain', 'Blockchain'),
        ('other', 'Other'),
    ]

    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    level = models.IntegerField(default=0)  # 0-100 scale
    icon = models.CharField(max_length=50, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['category', 'order']

class Project(models.Model):
    CATEGORY_CHOICES = [
        ('ai', 'AI & ML'),
        ('blockchain', 'Blockchain'),
        ('data', 'Smart City'),
        ('web', 'Web Development'),
        ('mobile', 'Mobile Development'),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/')
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    technologies = models.CharField(max_length=255)  # Comma-separated list
    github_url = models.URLField(blank=True, null=True)
    live_url = models.URLField(blank=True, null=True)
    featured = models.BooleanField(default=False)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.title

    def get_technologies_list(self):
        return [tech.strip() for tech in self.technologies.split(',')]

    class Meta:
        ordering = ['-featured', 'order']
