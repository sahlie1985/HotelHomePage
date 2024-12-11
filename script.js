document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    const slideInterval = 20000; // 20 secondes
    let hotelData = null;

    // Charger les données JSON
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            hotelData = data;
            updateContent();
        })
        .catch(error => console.error('Erreur de chargement des données:', error));

    // Fonction pour mettre à jour le contenu
    function updateContent() {
        if (!hotelData) return;

        // Mise à jour du message de bienvenue
        document.querySelector('.welcome-message h1').textContent = hotelData.hotel.welcome.title;
        document.querySelector('.welcome-message p').textContent = hotelData.hotel.welcome.subtitle;

        // Mise à jour de la température
        document.querySelector('.temperature').textContent = `${hotelData.weather.current}${hotelData.weather.unit}`;

        // Mise à jour des événements
        const eventsList = document.querySelector('.events-list');
        eventsList.innerHTML = hotelData.events.map(event => `
            <div class="event">
                <time>${event.time}</time>
                <div class="event-details">
                    <h3>${event.name}</h3>
                    <p>${event.location}</p>
                </div>
            </div>
        `).join('');

        // Mise à jour du menu
        const menuTheme = document.querySelector('.menu-theme h3');
        menuTheme.textContent = hotelData.dinner.theme;

        const menuItems = document.querySelector('.menu-items');
        menuItems.innerHTML = `
            <div class="menu-item">
                <h4>Entrées</h4>
                ${hotelData.dinner.starters.map(item => `<p>${item}</p>`).join('')}
            </div>
            <div class="menu-item">
                <h4>Plats Principaux</h4>
                ${hotelData.dinner.mainCourses.map(item => `<p>${item}</p>`).join('')}
            </div>
            <div class="menu-item">
                <h4>Suggestion du Chef</h4>
                <p>${hotelData.dinner.chefSpecial}</p>
            </div>
        `;

        // Mise à jour des services
        const servicesGrid = document.querySelector('.services-grid');
        servicesGrid.innerHTML = `
            ${Object.entries(hotelData.services).map(([key, items]) => `
                <div class="service-card">
                    <img src="${items[0].image}" alt="${items[0].name}">
                    <h3>${items[0].name}</h3>
                    <p>Horaires: ${items[0].hours}</p>
                </div>
            `).join('')}
        `;
    }

    // Fonction pour mettre à jour l'heure et la date
    function updateDateTime() {
        const now = new Date();
        const dateOptions = { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' };
        const timeOptions = { hour: '2-digit', minute: '2-digit' };

        document.querySelector('.date').textContent = now.toLocaleDateString('fr-FR', dateOptions);
        document.querySelector('.time').textContent = now.toLocaleTimeString('fr-FR', timeOptions);
    }

    // Fonction pour changer de slide
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
    }

    // Fonction pour passer au slide suivant
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Initialisation
    showSlide(0);
    updateDateTime();

    // Mise à jour de l'heure toutes les secondes
    setInterval(updateDateTime, 1000);

    // Défilement automatique des slides
    setInterval(nextSlide, slideInterval);

    // Animation des transitions
    slides.forEach(slide => {
        slide.addEventListener('transitionend', function() {
            if (this.classList.contains('active')) {
                this.style.zIndex = '1';
            } else {
                this.style.zIndex = '0';
            }
        });
    });

    // Gestion des indicateurs de slide
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
});
