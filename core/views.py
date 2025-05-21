from django.shortcuts import render
from .models import Skill, Project
from contact.forms import ContactForm

def home(request):
    # Initialize variables with default values
    programming_skills = []
    database_skills = []
    ai_ml_skills = []
    blockchain_skills = []
    other_skills = []
    featured_projects = []
    all_projects = []

    # Try to get data from database, handle case when tables don't exist
    try:
        # Get skills grouped by category
        programming_skills = Skill.objects.filter(category='programming')
        database_skills = Skill.objects.filter(category='database')
        ai_ml_skills = Skill.objects.filter(category='ai_ml')
        blockchain_skills = Skill.objects.filter(category='blockchain')
        other_skills = Skill.objects.filter(category='other')

        # Get projects
        featured_projects = Project.objects.filter(featured=True)
        all_projects = Project.objects.all()
    except Exception as e:
        print(f"Error loading data: {e}")

    # Contact form
    contact_form = ContactForm()

    context = {
        'programming_skills': programming_skills,
        'database_skills': database_skills,
        'ai_ml_skills': ai_ml_skills,
        'blockchain_skills': blockchain_skills,
        'other_skills': other_skills,
        'featured_projects': featured_projects,
        'all_projects': all_projects,
        'contact_form': contact_form,
        'name': 'Peter Oduor Oluoch',
        'title': 'Software Engineer & Developer',
    }

    return render(request, 'core/home.html', context)



