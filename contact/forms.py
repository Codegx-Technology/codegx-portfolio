from django import forms
from .models import ContactMessage

class ContactForm(forms.ModelForm):
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'company', 'position', 'subject', 'message']
        widgets = {
            'name': forms.TextInput(attrs={
                'class': 'form-control bg-light border-0 shadow-sm',
                'placeholder': 'Your Name',
            }),
            'email': forms.EmailInput(attrs={
                'class': 'form-control bg-light border-0 shadow-sm',
                'placeholder': 'Your Email',
            }),
            'company': forms.TextInput(attrs={
                'class': 'form-control bg-light border-0 shadow-sm',
                'placeholder': 'Your Company (Optional)',
            }),
            'position': forms.TextInput(attrs={
                'class': 'form-control bg-light border-0 shadow-sm',
                'placeholder': 'Your Position (Optional)',
            }),
            'subject': forms.TextInput(attrs={
                'class': 'form-control bg-light border-0 shadow-sm',
                'placeholder': 'Subject',
            }),
            'message': forms.Textarea(attrs={
                'class': 'form-control bg-light border-0 shadow-sm',
                'placeholder': 'Your Message',
                'rows': 5,
            }),
        }
