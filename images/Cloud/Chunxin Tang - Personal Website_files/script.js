// Typing Animation Function
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Special typing function for multi-line text
function typeWriterMultiLine(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

function initTypingAnimations() {
    const type = (el, text, speed=50, onDone=()=>{}) => {
      let i=0; el.textContent='';
      const tick=()=>{ if(i<text.length){ el.textContent += text[i++]; setTimeout(tick, speed); } else onDone(); };
      tick();
    };
  
    // Headline first
    const mainHeadline = document.querySelector('.main-headline .typing-text');
    if (mainHeadline){
      const text = mainHeadline.getAttribute('data-text');
      setTimeout(()=> type(mainHeadline, text, 50), 400); // small delay after load
    }
  
    // Subline after headline
    const subline = document.querySelector('.subline.typing-text');
    if (subline){
      const text = subline.getAttribute('data-text');
      setTimeout(()=> type(subline, text, 45), 2400);
    }
  
    // Section titles: animate when they enter view
    const titles = document.querySelectorAll('.section-title.typing-text');
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(!e.isIntersecting) return;
        const el = e.target;
        io.unobserve(el);
        const text = el.getAttribute('data-text') || el.textContent;
        type(el, text, 45);
      });
    }, { threshold: 0.35 });
  
    titles.forEach(t=> io.observe(t));
  
    // Footer last
    const footerText = document.querySelector('.footer-text.typing-text');
    if (footerText){
      const text = footerText.getAttribute('data-text');
      setTimeout(()=> type(footerText, text, 50), 5000);
    }
  }
  
// // Initialize typing animations
// function initTypingAnimations() {
//     const typingElements = document.querySelectorAll('.typing-text[data-text]');
    
//     // Only animate the main headline and section titles
//     const mainHeadline = document.querySelector('.main-headline .typing-text');
//     const sectionTitles = document.querySelectorAll('.section-title.typing-text');
//     const footerText = document.querySelector('.footer-text.typing-text');
    
//     // Animate main headline first
//     if (mainHeadline) {
//         const text = mainHeadline.getAttribute('data-text');
//         setTimeout(() => {
//             typeWriterMultiLine(mainHeadline, text, 50);
//         }, 500);
//     }
    
//     // Animate subline after main headline
//     const subline = document.querySelector('.subline.typing-text');
//     if (subline) {
//         const text = subline.getAttribute('data-text');
//         setTimeout(() => {
//             typeWriter(subline, text, 50);
//         }, 3000); // Start after main headline finishes
//     }
    
//     // Animate section titles when they come into view
//     sectionTitles.forEach((title, index) => {
//         const text = title.getAttribute('data-text');
//         const delay = 4000 + (index * 500); // Start after subline
        
//         setTimeout(() => {
//             typeWriter(title, text, 50);
//         }, delay);
//     });
    
//     // Animate footer text last
//     if (footerText) {
//         const text = footerText.getAttribute('data-text');
//         setTimeout(() => {
//             typeWriter(footerText, text, 50);
//         }, 6000);
//     }
// }

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Only prevent default for same-page anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
            // For external links (like ../index.html#home), let them work normally
        });
    });
}

// Active navigation highlighting
function initActiveNavigation() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Section animations on scroll
function initScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Mobile navigation toggle
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Contact form handling
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would typically send the data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
        });
    }
}

// Parallax effect for vinyl player
function initParallaxEffect() {
    const vinylPlayer = document.querySelector('.vinyl-player');
    
    if (vinylPlayer) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            vinylPlayer.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Typing placeholder effect for contact form
function initTypingPlaceholders() {
    const placeholders = document.querySelectorAll('.typing-placeholder');
    
    placeholders.forEach(input => {
        const originalPlaceholder = input.placeholder;
        input.placeholder = '';
        
        let i = 0;
        function typePlaceholder() {
            if (i < originalPlaceholder.length) {
                input.placeholder += originalPlaceholder.charAt(i);
                i++;
                setTimeout(typePlaceholder, 100);
            }
        }
        
        // Start typing when input is focused
        input.addEventListener('focus', () => {
            if (input.placeholder === '') {
                typePlaceholder();
            }
        });
        
        // Clear placeholder when input loses focus
        input.addEventListener('blur', () => {
            if (input.value === '') {
                input.placeholder = '';
                i = 0;
            }
        });
    });
}

// Project card hover effects
function initProjectCardEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Blog post hover effects
function initBlogPostEffects() {
    const blogPosts = document.querySelectorAll('.blog-post');
    
    blogPosts.forEach(post => {
        post.addEventListener('mouseenter', () => {
            post.style.transform = 'translateX(10px)';
            post.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        });
        
        post.addEventListener('mouseleave', () => {
            post.style.transform = 'translateX(0)';
            post.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        });
    });
}

// Photo frame hover effects
function initPhotoFrameEffects() {
    const photoFrames = document.querySelectorAll('.photo-frame');
    
    photoFrames.forEach(frame => {
        frame.addEventListener('mouseenter', () => {
            frame.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        frame.addEventListener('mouseleave', () => {
            frame.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Loading screen
function initLoadingScreen() {
    // Create loading screen
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    loadingScreen.innerHTML = `
        <div class="loading-content">
            <div class="vinyl-loader">
                <div class="vinyl-disc-loader"></div>
            </div>
            <p class="loading-text">Loading...</p>
        </div>
    `;
    
    // Add loading screen styles
    const loadingStyles = document.createElement('style');
    loadingStyles.textContent = `
        .loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #ff69b4 0%, #ff7f50 50%, #ffb3d9 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        }
        
        .loading-content {
            text-align: center;
            color: white;
        }
        
        .vinyl-loader {
            width: 100px;
            height: 100px;
            margin: 0 auto 20px;
            position: relative;
        }
        
        .vinyl-disc-loader {
            width: 80px;
            height: 80px;
            background: #000;
            border-radius: 50%;
            animation: spin 2s linear infinite;
            position: relative;
        }
        
        .vinyl-disc-loader::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 20px;
            height: 20px;
            background: #e6b3ff;
            border-radius: 50%;
        }
        
        .loading-text {
            font-family: 'Special Elite', cursive;
            font-size: 1.2rem;
        }
    `;
    
    document.head.appendChild(loadingStyles);
    document.body.appendChild(loadingScreen);
    
    // Remove loading screen after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.remove();
                initTypingAnimations();
            }, 500);
        }, 1000); // Reduced from 2000ms to 1000ms
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen();
    initSmoothScrolling();
    initActiveNavigation();
    initScrollAnimations();
    initMobileNavigation();
    initContactForm();
    initParallaxEffect();
    initTypingPlaceholders();
    initProjectCardEffects();
    initBlogPostEffects();
    initPhotoFrameEffects();
    
    // Add some random rotation to polaroids
    const polaroids = document.querySelectorAll('.polaroid');
    polaroids.forEach(polaroid => {
        const randomRotation = (Math.random() - 0.5) * 6; // Random rotation between -3 and 3 degrees
        polaroid.style.transform = `rotate(${randomRotation}deg)`;
    });
});

// Add some ambient background music (optional)
function initAmbientAudio() {
    // This would be implemented if you want to add background music
    // For now, it's commented out to avoid autoplay issues
    /*
    const audio = new Audio('path-to-your-ambient-music.mp3');
    audio.loop = true;
    audio.volume = 0.1;
    
    document.addEventListener('click', () => {
        audio.play();
    }, { once: true });
    */
}

// Add some particle effects for extra ambiance
function initParticleEffects() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    canvas.style.opacity = '0.3';
    
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 105, 180, ${this.opacity})`;
            ctx.fill();
        }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Resize canvas on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Initialize particle effects after a delay
setTimeout(initParticleEffects, 3000);
