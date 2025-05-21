/**
 * Enhanced 3D Effects for Professional Portfolio
 * Provides interactive 3D effects, parallax scrolling, and animations
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize 3D effects
    initHero3DEffects();
    initProjectCard3DEffects();
    initParallaxScrolling();
    initSmoothScrolling();
});

/**
 * Initialize 3D effects for hero section
 */
function initHero3DEffects() {
    const heroSection = document.querySelector('#home');
    if (!heroSection) return;
    
    const hero3dImages = document.querySelectorAll('.hero-3d-image');
    const techIcons3d = document.querySelectorAll('.tech-icon-3d');
    
    // Enhanced mouse move parallax effect with depth
    heroSection.addEventListener('mousemove', function(e) {
        // Get mouse position relative to the container
        const rect = heroSection.getBoundingClientRect();
        const xPos = (e.clientX - rect.left) / rect.width - 0.5;
        const yPos = (e.clientY - rect.top) / rect.height - 0.5;
        
        // Apply parallax effect to 3D images with different depths
        hero3dImages.forEach((image, index) => {
            // Calculate depth factor based on index for layered effect
            const depthFactor = 1 - (index * 0.2);
            
            // Calculate rotation based on mouse position with depth
            const rotateX = yPos * -15 * depthFactor; // Inverse Y axis for natural feel
            const rotateY = xPos * 15 * depthFactor;
            const translateZ = 50 * depthFactor;
            
            // Apply transform with perspective and mouse-based rotation
            image.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
            image.style.transition = 'transform 0.1s ease-out';
        });
        
        // Apply parallax effect to 3D tech icons with different movement
        techIcons3d.forEach((icon, index) => {
            // Alternate movement direction for varied effect
            const direction = index % 2 === 0 ? 1 : -1;
            
            // Calculate rotation based on mouse position
            const rotateX = yPos * -8 * direction;
            const rotateY = xPos * 8 * direction;
            const translateX = xPos * 20 * direction;
            const translateY = yPos * 20 * direction;
            
            // Apply transform
            icon.style.transform = `perspective(500px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateX(${translateX}px) translateY(${translateY}px)`;
            icon.style.transition = 'transform 0.1s ease-out';
        });
    });
    
    // Reset transforms when mouse leaves the section
    heroSection.addEventListener('mouseleave', function() {
        hero3dImages.forEach(image => {
            image.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
            image.style.transition = 'transform 0.5s ease-out';
        });
        
        techIcons3d.forEach(icon => {
            icon.style.transform = 'perspective(500px) rotateY(0deg) rotateX(0deg) translateX(0) translateY(0)';
            icon.style.transition = 'transform 0.5s ease-out';
        });
    });
    
    // Enhanced carousel slide transitions
    const carousel = document.getElementById('hero3dSlider');
    if (carousel) {
        carousel.addEventListener('slide.bs.carousel', function(e) {
            const outgoingSlide = e.from;
            const incomingSlide = e.to;
            const slides = carousel.querySelectorAll('.carousel-item');
            
            // Determine direction
            const direction = outgoingSlide < incomingSlide ? -1 : 1;
            
            // Add exit animation to outgoing slide
            if (slides[outgoingSlide]) {
                const outgoingImage = slides[outgoingSlide].querySelector('.hero-3d-image');
                if (outgoingImage) {
                    outgoingImage.style.transform = `perspective(1000px) rotateY(${direction * 30}deg) scale(0.8) translateZ(-100px)`;
                    outgoingImage.style.opacity = '0.5';
                    outgoingImage.style.transition = 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.6s ease';
                }
            }
            
            // Add entrance animation to incoming slide
            carousel.addEventListener('slid.bs.carousel', function onSlide() {
                if (slides[incomingSlide]) {
                    const incomingImage = slides[incomingSlide].querySelector('.hero-3d-image');
                    if (incomingImage) {
                        incomingImage.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0)';
                        incomingImage.style.opacity = '1';
                        incomingImage.style.transition = 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.6s ease';
                    }
                }
                
                // Remove the event listener to prevent multiple calls
                carousel.removeEventListener('slid.bs.carousel', onSlide);
            });
        });
    }
}

/**
 * Initialize 3D effects for project cards
 */
function initProjectCard3DEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPos = (x / rect.width - 0.5) * 2;
            const yPos = (y / rect.height - 0.5) * 2;
            
            // Apply subtle 3D rotation
            card.style.transform = `perspective(1000px) rotateX(${yPos * -5}deg) rotateY(${xPos * 5}deg) translateZ(10px)`;
            card.style.transition = 'transform 0.1s ease-out';
            
            // Add highlight effect
            const highlight = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)`;
            card.querySelector('.card').style.backgroundImage = highlight;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            card.style.transition = 'transform 0.5s ease-out';
            card.querySelector('.card').style.backgroundImage = 'none';
        });
    });
}

/**
 * Initialize parallax scrolling effects
 */
function initParallaxScrolling() {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-parallax-speed') || 0.5;
            const offset = scrollTop * speed;
            element.style.transform = `translateY(${offset}px)`;
        });
    });
}

/**
 * Initialize smooth scrolling with 3D effects
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            // Add 3D rotation effect during scroll
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                section.style.transform = 'perspective(1000px) rotateX(1deg)';
                section.style.transition = 'transform 0.5s ease';
            });
            
            // Smooth scroll to target
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Reset sections after scrolling
            setTimeout(() => {
                sections.forEach(section => {
                    section.style.transform = 'perspective(1000px) rotateX(0)';
                });
            }, 500);
        });
    });
}
