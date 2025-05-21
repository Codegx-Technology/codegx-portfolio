# Peter Oduor Oluoch - Professional Portfolio

A sleek, modern, and professional portfolio website built with Django, Bootstrap, Tailwind CSS, and more.

## Features

- Responsive design that works on all devices
- Modern and elegant UI with corporate aesthetics
- Dynamic content management through Django admin
- Contact form with database storage
- Skills and projects showcase
- SEO optimized

## Technologies Used

### Backend
- Django
- Python
- PostgreSQL

### Frontend
- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Tailwind CSS

### Additional Technologies
- React (for interactive components)
- Flutter (for mobile app development)
- Font Awesome (for icons)
- Google Fonts (for typography)

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/professional-portfolio.git
cd professional-portfolio
```

2. Create a virtual environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies
```bash
pip install -r requirements.txt
```

4. Set up the database
```bash
python manage.py migrate
```

5. Create a superuser
```bash
python manage.py createsuperuser
```

6. Run the development server
```bash
python manage.py runserver
```

7. Visit `http://127.0.0.1:8000/` in your browser

## Project Structure

```
professional-portfolio/
├── portfolio/            # Django project settings
├── core/                 # Main app for portfolio
├── contact/              # App for contact form
├── static/               # Static files (CSS, JS, images)
│   ├── css/
│   ├── js/
│   └── images/
├── templates/            # HTML templates
│   ├── core/
│   └── contact/
├── media/                # User-uploaded files
├── manage.py             # Django management script
├── requirements.txt      # Project dependencies
└── README.md             # Project documentation
```

## Usage

### Admin Panel

1. Navigate to `http://127.0.0.1:8000/admin/`
2. Log in with your superuser credentials
3. Manage your skills, projects, and contact messages

### Adding Content

#### Skills
- Go to the admin panel
- Click on "Skills"
- Add new skills with categories, levels, and descriptions

#### Projects
- Go to the admin panel
- Click on "Projects"
- Add new projects with images, descriptions, and links

## Deployment

This project is configured for easy deployment to various platforms:

### Heroku
```bash
heroku create
git push heroku main
heroku run python manage.py migrate
heroku run python manage.py createsuperuser
```

### PythonAnywhere
1. Create a PythonAnywhere account
2. Set up a new web app with Django
3. Clone your repository
4. Set up a virtual environment and install dependencies
5. Configure your WSGI file

## License

This project is licensed under the MIT License with the following additional restrictions:

- You may not use this code for personal portfolios without explicit permission
- You may not redistribute this code as your own work
- You may use this code for educational purposes

## Contact

Peter Oduor Oluoch - contact@peteroduor.com

Project Link: [https://github.com/yourusername/professional-portfolio](https://github.com/yourusername/professional-portfolio)
