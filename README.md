# Écran d'Accueil Hôtel - TV Display

## Description
Site web single-page conçu pour être affiché sur les écrans TV de l'hôtel, avec défilement automatique des informations essentielles et des services.

## Technologies
- HTML5 pur
- CSS3 
- JavaScript vanille (sans framework)

## Interface Principale
1. **En-tête**
   - Logo de l'hôtel
   - Horloge digitale
   - Icônes d'état

2. **Zone Centrale**
   - Image de fond panoramique de l'hôtel
   - Message de bienvenue centré
   - Contenu dynamique selon la rubrique active

3. **Rubriques (Défilement Automatique)**
   - Température du Jour
     * Affichage en temps réel
     * Température actuelle
     * Prévisions du jour
   
   - Services de l'Hôtel
     * Restaurants
       - Photos des restaurants
       - Horaires d'ouverture
       - Spécialités
     * Bars
       - Photos des bars
       - Ambiances
       - Happy hours
     * Piscines & Spas
       - Photos des installations
       - Horaires d'accès
       - Services disponibles
     * Boutiques
       - Photos des boutiques
       - Types de produits
       - Horaires d'ouverture
   
   - Événements du Jour
     * Liste des activités
     * Horaires
     * Lieux des événements
   
   - Menu de Soirée
     * Thème du jour
     * Plats principaux
     * Suggestions du chef

## Animation et Transitions
- Défilement automatique toutes les 20 secondes
- Transitions fluides entre les contenus
- Effets de fondu entre les pages
- Galerie photos avec transition douce
- Indicateur visuel de la rubrique active

## Structure du Projet
```
HotelHomePage/
├── index.html       # Page principale affichée sur la TV
├── admin.html       # Page d'administration
├── styles.css       # Styles pour les pages
├── admin.css        # Styles spécifiques à l'administration
├── script.js        # Logique de la page principale et animations
├── admin.js         # Logique de la page d'administration
├── data.json        # Fichier de stockage des éléments
└── assets/         # Dossier des ressources
    ├── images/     # Images et photos
    │   ├── restaurants/  # Photos des restaurants
    │   ├── bars/        # Photos des bars
    │   ├── spa/         # Photos des spas et piscines
    │   └── shops/       # Photos des boutiques
    ├── icons/      # Icônes météo et autres
    └── transitions/# Effets de transition
```

## Configuration des Transitions
```json
{
  "slideshow": {
    "defaultDuration": 20,
    "transitionEffect": "fade",
    "autoPlay": true,
    "slides": [
      {
        "name": "temperature",
        "duration": 20,
        "content": {
          "current": -2,
          "unit": "°C",
          "date": "Tuesday, 12/1/2020",
          "forecast": {
            "min": -4,
            "max": 3
          }
        }
      },
      {
        "name": "hotelServices",
        "duration": 30,
        "content": {
          "restaurants": [
            {
              "name": "Le Grand Restaurant",
              "description": "Restaurant gastronomique",
              "hours": "19:00 - 23:00",
              "images": ["restaurant1.jpg", "restaurant2.jpg"],
              "specialties": ["Cuisine française", "Vins fins"]
            }
          ],
          "bars": [
            {
              "name": "Le Piano Bar",
              "description": "Bar lounge avec musique live",
              "hours": "17:00 - 02:00",
              "images": ["bar1.jpg", "bar2.jpg"],
              "happyHour": "18:00 - 20:00"
            }
          ],
          "spaAndPools": [
            {
              "name": "Spa Bien-être",
              "description": "Centre de relaxation",
              "hours": "09:00 - 20:00",
              "images": ["spa1.jpg", "spa2.jpg"],
              "services": ["Massages", "Sauna", "Hammam"]
            }
          ],
          "shops": [
            {
              "name": "Boutique Luxe",
              "description": "Articles de luxe",
              "hours": "10:00 - 19:00",
              "images": ["shop1.jpg", "shop2.jpg"],
              "products": ["Mode", "Accessoires", "Souvenirs"]
            }
          ]
        }
      },
      {
        "name": "events",
        "duration": 20,
        "content": {
          "events": [
            {
              "name": "Petit-déjeuner",
              "time": "07:00 - 10:00",
              "location": "Restaurant Principal"
            },
            {
              "name": "Spa Ouvert",
              "time": "09:00 - 20:00",
              "location": "2ème étage"
            }
          ]
        }
      },
      {
        "name": "dinner",
        "duration": 20,
        "content": {
          "theme": "Soirée Méditerranéenne",
          "mainCourses": [
            "Risotto aux fruits de mer",
            "Dorade grillée aux herbes"
          ],
          "chefSpecial": "Bouillabaisse Marseillaise"
        }
      }
    ]
  }
}
```

## Configuration Requise
- Navigateur web moderne
- Écran TV LG ou similaire
- Résolution minimale 1920x1080
- Support des animations CSS3

## Installation
1. Ouvrir `index.html` pour l'écran TV
2. Ouvrir `admin.html` pour la page d'administration
3. Configurer les durées de transition dans `data.json`

## Administration
- Configuration des durées d'affichage
- Mise à jour des informations météo
- Gestion des services de l'hôtel et photos
- Gestion des événements du jour
- Édition du menu de soirée
- Personnalisation des transitions
- Gestion de la galerie photos

## Sécurité
- Système d'authentification pour la page admin
- Validation des données JSON
- Limitation de l'accès à la page d'administration
- Validation des formats d'images
