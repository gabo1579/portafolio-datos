document.addEventListener('DOMContentLoaded', () => {
    // === Carousel Logic ===
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        if (index >= slides.length) currentSlide = 0;
        if (index < 0) currentSlide = slides.length - 1;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        currentSlide++;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide--;
        showSlide(currentSlide);
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    // Auto advance carousel
    function startInterval() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    startInterval();

    // === Navbar Scroll Effect ===
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
            navbar.style.padding = '1rem 5%';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '1.5rem 5%';
        }
    });

    // === Smooth Scrolling for Nav Links ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Adjust for navbar height
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // === Particles Background Initialization ===
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#3b82f6" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.3, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#8b5cf6",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1.5,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 0.8 } },
                    "push": { "particles_nb": 3 }
                }
            },
            "retina_detect": true
        });
    }

    // === Intersection Observer for Fade-In Effects ===
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Apply fade-in to specific elements if they have the class
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // === Translation System ===
    const translations = {
        es: {
            "nav-home": "Inicio",
            "nav-about": "Sobre Mí",
            "nav-projects": "Proyectos",
            "nav-contact": "Contacto",
            "hero-1-title": "Transformando Datos en Decisiones",
            "hero-1-sub": "Especialista en SQL, Power BI y Excel",
            "hero-2-title": "Visualizaciones de Impacto",
            "hero-2-sub": "Descubre historias ocultas en los números con Power BI",
            "hero-3-title": "Análisis Preciso y Profundo",
            "hero-3-sub": "Modelado de datos complejos con SQL y Excel",
            "about-title": "Sobre Mí",
            "about-text-1": "¡Hola! Soy un Analista de Datos con experiencia en inteligencia de negocios (BI), validación de bases de datos, desarrollo de dashboards y reportes estratégicos en entornos corporativos y educativos. Competente en SQL, Excel, Power BI y metodologías de análisis de datos para transformar conjuntos de datos complejos en información de negocio accionable.",
            "about-text-2": "Experimentado en la colaboración con equipos multidisciplinarios, apoyando procesos de toma de decisiones y comunicando hallazgos analíticos a las partes interesadas. Trayectoria en coordinación de proyectos, relaciones con stakeholders y desarrollo de estrategias basadas en datos. Bilingüe en español e inglés, con nivel avanzado de portugués y familiaridad con herramientas de IA como ChatGPT, Claude y Antigravity.",
            "skill-sql": "SQL",
            "skill-pbi": "Power BI",
            "skill-excel": "Excel",
            "skill-data-analysis": "Análisis de Datos",
            "projects-title": "Mis Proyectos",
            "proj-1-cat": "Análisis de Datos",
            "proj-1-title": "Análisis Mundial de Fútbol",
            "proj-1-desc": "Limpieza y normalización de 22 bases de datos para analizar el rendimiento de equipos a nivel global.",
            "proj-btn-read": "Leer Artículo <i class=\"fas fa-arrow-right\" style=\"margin-left: 5px;\"></i>",
            "proj-2-cat": "Desarrollo con IA",
            "proj-2-title": "CRM en Tiempo Real con IA",
            "proj-2-desc": "CRM ligero para un pequeño negocio, construido con Firebase y GitHub Pages, desarrollado junto a un asistente de IA.",
            "proj-3-cat": "SQL",
            "proj-3-title": "Optimización de Consultas",
            "proj-3-desc": "Análisis de millones de registros para optimizar el rendimiento de consultas y generar reportes analíticos.",
            "proj-btn-view": "Ver Proyecto <i class=\"fas fa-arrow-right\" style=\"margin-left: 5px;\"></i>",
            "proj-4-cat": "Excel",
            "proj-4-title": "Modelo de Datos Predictivo",
            "proj-4-desc": "Uso de fórmulas avanzadas y tablas dinámicas para proyectar y modelar diferentes escenarios.",
            "contact-title": "Contáctame",
            "contact-desc": "¿Interesado en colaborar o aprender más sobre mis proyectos?",
            "footer-copy": "&copy; 2026 Gabo. Todos los derechos reservados."
        },
        en: {
            "nav-home": "Home",
            "nav-about": "About",
            "nav-projects": "Projects",
            "nav-contact": "Contact",
            "hero-1-title": "Transforming Data into Decisions",
            "hero-1-sub": "Specialist in SQL, Power BI, and Excel",
            "hero-2-title": "Impactful Visualizations",
            "hero-2-sub": "Discover hidden stories in numbers with Power BI",
            "hero-3-title": "Precise and Deep Analysis",
            "hero-3-sub": "Complex data modeling with SQL and Excel",
            "about-title": "About Me",
            "about-text-1": "Data Analyst with experience in business intelligence, database validation, dashboard development, and strategic reporting across corporate and educational environments. Skilled in SQL, Excel, Power BI, and data analysis methodologies to transform complex datasets into actionable business insights.",
            "about-text-2": "Experienced collaborating with cross-functional teams, supporting decision-making processes, and communicating analytical findings to stakeholders. Background in project coordination, stakeholder engagement, and data-driven strategy development. Bilingual in Spanish and English, with advanced Portuguese proficiency and familiarity with AI tools including ChatGPT, Claude, and Antigravity.",
            "skill-sql": "SQL",
            "skill-pbi": "Power BI",
            "skill-excel": "Excel",
            "skill-data-analysis": "Data Analysis",
            "projects-title": "My Projects",
            "proj-1-cat": "Data Analysis",
            "proj-1-title": "World Cup Soccer Analysis",
            "proj-1-desc": "Cleaning and normalization of 22 datasets to analyze team performance globally.",
            "proj-btn-read": "Read Article <i class=\"fas fa-arrow-right\" style=\"margin-left: 5px;\"></i>",
            "proj-2-cat": "AI Development",
            "proj-2-title": "Real-Time CRM with AI",
            "proj-2-desc": "Lightweight CRM for a small business, built with Firebase and GitHub Pages, developed alongside an AI assistant.",
            "proj-3-cat": "SQL",
            "proj-3-title": "Query Optimization",
            "proj-3-desc": "Analysis of millions of records to optimize query performance and generate analytical reports.",
            "proj-btn-view": "View Project <i class=\"fas fa-arrow-right\" style=\"margin-left: 5px;\"></i>",
            "proj-4-cat": "Excel",
            "proj-4-title": "Predictive Data Model",
            "proj-4-desc": "Use of advanced formulas and pivot tables to project and model different scenarios.",
            "contact-title": "Contact Me",
            "contact-desc": "Interested in collaborating or learning more about my projects?",
            "footer-copy": "&copy; 2026 Gabo. All rights reserved."
        },
        pt: {
            "nav-home": "Início",
            "nav-about": "Sobre Mim",
            "nav-projects": "Projetos",
            "nav-contact": "Contato",
            "hero-1-title": "Transformando Dados em Decisões",
            "hero-1-sub": "Especialista em SQL, Power BI e Excel",
            "hero-2-title": "Visualizações de Impacto",
            "hero-2-sub": "Descubra histórias ocultas nos números com o Power BI",
            "hero-3-title": "Análise Precisa e Profunda",
            "hero-3-sub": "Modelagem de dados complexos com SQL e Excel",
            "about-title": "Sobre Mim",
            "about-text-1": "Analista de Dados com experiência em inteligência de negócios (BI), validação de bancos de dados, desenvolvimento de dashboards e relatórios estratégicos em ambientes corporativos e educacionais. Competente em SQL, Excel, Power BI e metodologias de análise de dados para transformar conjuntos de dados complexos em insights de negócios acionáveis.",
            "about-text-2": "Experiência em colaborar com equipes multifuncionais, apoiando processos de tomada de decisão e comunicando descobertas analíticas a stakeholders. Histórico em coordenação de projetos, engajamento de partes interessadas e desenvolvimento de estratégias orientadas por dados. Bilingue em espanhol e inglês, com proficiência avançada em português e familiaridade com ferramentas de IA, incluindo ChatGPT, Claude e Antigravity.",
            "skill-sql": "SQL",
            "skill-pbi": "Power BI",
            "skill-excel": "Excel",
            "skill-data-analysis": "Análise de Dados",
            "projects-title": "Meus Projetos",
            "proj-1-cat": "Análise de Dados",
            "proj-1-title": "Análise da Copa do Mundo",
            "proj-1-desc": "Limpeza e normalização de 22 conjuntos de dados para analisar o desempenho das seleções globalmente.",
            "proj-btn-read": "Ler Artigo <i class=\"fas fa-arrow-right\" style=\"margin-left: 5px;\"></i>",
            "proj-2-cat": "Desenvolvimento com IA",
            "proj-2-title": "CRM em Tempo Real com IA",
            "proj-2-desc": "CRM leve para um pequeno negócio, desenvolvido com Firebase e GitHub Pages em parceria com um assistente de IA.",
            "proj-3-cat": "SQL",
            "proj-3-title": "Otimização de Consultas",
            "proj-3-desc": "Análise de milhões de registros para otimizar o desempenho de consultas e gerar relatórios analíticos.",
            "proj-btn-view": "Ver Projeto <i class=\"fas fa-arrow-right\" style=\"margin-left: 5px;\"></i>",
            "proj-4-cat": "Excel",
            "proj-4-title": "Modelo de Dados Preditivo",
            "proj-4-desc": "Uso de fórmulas avançadas e tabelas dinâmicas para projetar e modelar diferentes cenários.",
            "contact-title": "Contato",
            "contact-desc": "Interessado em colaborar ou saber mais sobre meus projetos?",
            "footer-copy": "&copy; 2026 Gabo. Todos os direitos reservados."
        }
    };

    function setLanguage(lang) {
        localStorage.setItem('portfolio-lang', lang);
        
        // Update language buttons active class
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Translate all elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    }

    // Attach click listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Initialize Language
    const initialLang = localStorage.getItem('portfolio-lang') || 'es';
    setLanguage(initialLang);
});
