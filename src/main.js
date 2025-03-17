// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    return;
  }
  
  if (currentScroll > lastScroll) {
    // Scrolling down
    navbar.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up
    navbar.style.transform = 'translateY(0)';
    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
  }
  
  lastScroll = currentScroll;
});

// Form submission handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Here you would typically send this data to a server
  console.log('Form submitted:', { name, email, message });
  
  // Clear form
  contactForm.reset();
  
  // Show success message
  alert('Thank you for your message! I will get back to you soon.');
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
};

// Project cards animation
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

projectCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'all 0.5s ease-out';
  projectObserver.observe(card);
});

// Skill tags animation
const skillTags = document.querySelectorAll('.skill-tags span');
skillTags.forEach((tag, index) => {
  tag.style.transitionDelay = `${index * 0.1}s`;
});

// Section animations
const animatedSections = document.querySelectorAll('.about, .education, .contact, .skills-section, .experience, .achievements-section');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

animatedSections.forEach(section => {
  sectionObserver.observe(section);
});

// Education cards animation
const educationCards = document.querySelectorAll('.education-card');
const educationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

educationCards.forEach(card => {
  educationObserver.observe(card);
});

// Skills progress animation
const skillItems = document.querySelectorAll('.skill-item');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progress = entry.target.querySelector('.skill-progress');
      if (progress) {
        progress.style.width = progress.style.width || '0%';
      }
    }
  });
}, observerOptions);

skillItems.forEach(item => {
  skillObserver.observe(item);
});

// Timeline animation
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateX(0)';
    }
  });
}, observerOptions);

timelineItems.forEach((item, index) => {
  item.style.opacity = '0';
  item.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
  item.style.transition = 'all 0.5s ease-out';
  timelineObserver.observe(item);
});

// Achievement cards animation
const achievementCards = document.querySelectorAll('.achievement-card');
const achievementObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

achievementCards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'all 0.5s ease-out';
  card.style.transitionDelay = `${index * 0.2}s`;
  achievementObserver.observe(card);
});