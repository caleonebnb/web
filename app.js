const content = {
    en: {
        // Navigation (for all pages)
        home: {
            nav: "Home",
            title: "Azienda Agricola - Home",
            heroTitle: "Experience the authentic Italian countryside",
            heroSubtitle: "Discover our unique accommodations and organic farm products.",
            aboutTitle: "Our Story",
            aboutContent: "Zooform is an Architecture and Design studio with a strong passion for storytelling through visual means. Founded by Alessandro Consorti in 2005 as a photo studio, Zooform has evolved and expanded its services, thanks to the collaboration of a team of professionals, becoming a reality that provides its clients with a complete and integrated product. We create unique experiences in harmony with nature.",
            aboutReadMore: "Read More About Our Philosophy",
            featuredAccommodationsTitle: "Our Unique Accommodations",
            apartmentTitle: "Apartment",
            apartmentDescription: "A spacious and comfortable apartment.",
            tinyHouseTitle: "Tiny House",
            tinyHouseDescription: "A cozy and romantic retreat.",
            roulotteTitle: "Roulotte",
            roulotteDescription: "A charming vintage caravan.",
            featuredProductsTitle: "Our Organic Products",
            productsTitle: "Farm Products",
            productsDescription: "Taste the freshness of our organic produce.",
            featuredActivitiesTitle: "Things To Do",
            activitiesTitle: "Activities",
            activitiesDescription: "Explore nature and local traditions.",
            viewDetails: "View Details"
        },
        apartment: {
            nav: "Apartment",
            title: "Azienda Agricola - Apartment",
            content: "A beautiful and spacious apartment with all the comforts. Ideal for families or groups of friends."
        },
        'tiny-house': {
            nav: "Tiny House",
            title: "Azienda Agricola - Tiny House",
            content: "A cozy and romantic tiny house, perfect for a couple's getaway. Immersed in nature."
        },
        roulotte: {
            nav: "Roulotte",
            title: "Azienda Agricola - Roulotte",
            content: "A vintage caravan for a unique and adventurous stay. Equipped with everything you need."
        },
        piazzola: {
            nav: "Piazzola",
            title: "Azienda Agricola - Camping Pitch",
            content: "Spacious pitches for tents, campers, or caravans. Enjoy the tranquility of our farm."
        },
        philosophy: {
            nav: "Philosophy",
            title: "Azienda Agricola - Our Philosophy",
            content: "We believe in sustainable agriculture and respecting nature. Our goal is to live in harmony with the environment."
        },
        products: {
            nav: "Prodotti Agricoli",
            title: "Azienda Agricola - Agricultural Products",
            content: "We produce organic olive oil, wine, honey, and fresh vegetables. All available for our guests to purchase."
        },
        activities: {
            nav: "Things To Do",
            title: "Azienda Agricola - Things To Do",
            content: "Explore the surroundings with hiking or biking trails. Participate in our farm activities, or just relax and enjoy the peace."
        },
        contacts: {
            nav: "Contacts",
            title: "Azienda Agricola - Contacts",
            content: "You can find us at: 123 Farm Road, Countryside. Email: info@farm.com, Phone: +123456789"
        }
    },
    it: {
        // Navigation (for all pages)
        home: {
            nav: "Home",
            title: "Azienda Agricola - Home",
            heroTitle: "Vivi l'autentica campagna italiana",
            heroSubtitle: "Scopri le nostre sistemazioni uniche e i prodotti biologici della fattoria.",
            aboutTitle: "La Nostra Storia",
            aboutContent: "Zooform è uno studio di Architettura e Design con una forte passione per lo storytelling attraverso i mezzi visivi. Fondato da Alessandro Consorti nel 2005 come studio fotografico, Zooform si è evoluto e ha ampliato i suoi servizi, grazie alla collaborazione di un team di professionisti, diventando una realtà che fornisce ai propri clienti un prodotto completo e integrato. Creiamo esperienze uniche in armonia con la natura.",
            aboutReadMore: "Maggiori informazioni sulla nostra filosofia",
            featuredAccommodationsTitle: "Le Nostre Sistemazioni Uniche",
            apartmentTitle: "Appartamento",
            apartmentDescription: "Un appartamento spazioso e confortevole.",
            tinyHouseTitle: "Tiny House",
            tinyHouseDescription: "Un rifugio accogliente e romantico.",
            roulotteTitle: "Roulotte",
            roulotteDescription: "Un'affascinante roulotte vintage.",
            featuredProductsTitle: "I Nostri Prodotti Biologici",
            productsTitle: "Prodotti Agricoli",
            productsDescription: "Assapora la freschezza dei nostri prodotti biologici.",
            featuredActivitiesTitle: "Cose da Fare",
            activitiesTitle: "Attività",
            activitiesDescription: "Esplora la natura e le tradizioni locali.",
            viewDetails: "Visualizza Dettagli"
        },
        apartment: {
            nav: "Appartamento",
            title: "Azienda Agricola - Appartamento",
            content: "Un bellissimo e spazioso appartamento con tutti i comfort. Ideale per famiglie o gruppi di amici."
        },
        'tiny-house': {
            nav: "Tiny House",
            title: "Azienda Agricola - Tiny House",
            content: "Una piccola casa accogliente e romantica, perfetta per una fuga di coppia. Immersa nella natura."
        },
        roulotte: {
            nav: "Roulotte",
            title: "Azienda Agricola - Roulotte",
            content: "Una roulotte vintage per un soggiorno unico e avventuroso. Dotata di tutto il necessario."
        },
        piazzola: {
            nav: "Piazzola",
            title: "Azienda Agricola - Piazzola Campeggio",
            content: "Ampie piazzole per tende, camper o roulotte. Goditi la tranquillità della nostra azienda agricola."
        },
        philosophy: {
            nav: "Filosofia",
            title: "Azienda Agricola - La Nostra Filosofia",
            content: "Crediamo nell'agricoltura sostenibile e nel rispetto della natura. Il nostro obiettivo è vivere in armonia con l'ambiente."
        },
        products: {
            nav: "Prodotti Agricoli",
            title: "Azienda Agricola - Prodotti Agricoli",
            content: "Produciamo olio d'oliva biologico, vino, miele e verdure fresche. Tutti disponibili per l'acquisto da parte dei nostri ospiti."
        },
        activities: {
            nav: "Cose da Fare",
            title: "Azienda Agricola - Cose da Fare",
            content: "Esplora i dintorni con sentieri per escursioni a piedi o in bicicletta. Partecipa alle nostre attività agricole, o semplicemente rilassati e goditi la pace."
        },
        contacts: {
            nav: "Contatti",
            title: "Azienda Agricola - Contatti",
            content: "Ci puoi trovare a: Via della Fattoria 123, Campagna. Email: info@fattoria.com, Telefono: +123456789"
        }
    }
};

function getPageId() {
    const path = window.location.pathname;
    const page = path.split("/").pop().replace(".html", "");
    if (page === "" || page === "index") {
        return "home";
    }
    return page;
}

function renderContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'en';
    const pageId = getPageId();

    // Update document title
    const titleElement = document.querySelector('title');
    if (titleElement) {
        titleElement.innerText = content[lang][pageId].title;
    }

    // Update elements with data-localize-key
    document.querySelectorAll('[data-localize-key]').forEach(element => {
        const key = element.getAttribute('data-localize-key');
        const keys = key.split('.');
        let text = content[lang];
        for (let i = 0; i < keys.length; i++) {
            if (text && text.hasOwnProperty(keys[i])) {
                text = text[keys[i]];
            } else {
                text = null;
                break;
            }
        }
        if (text) {
            if (element.tagName === 'A' || element.tagName === 'BUTTON') {
                element.innerText = text;
            } else if (element.tagName === 'TITLE') {
                 // Already handled by specific title update
            }
            else {
                element.innerText = text;
            }
        }
    });

    // For non-home pages, update h1 and p
    if (pageId !== 'home') {
        const pageContent = content[lang][pageId];
        if (pageContent) {
            const h1Element = document.getElementById('content-title');
            const pElement = document.getElementById('content-body');
            if (h1Element) h1Element.innerText = pageContent.title;
            if (pElement) pElement.innerText = pageContent.content;
        }
    }

    // Update language links
    const currentPath = window.location.pathname;
    document.getElementById('lang-en').href = `${currentPath}?lang=en`;
    document.getElementById('lang-it').href = `${currentPath}?lang=it`;
}

window.addEventListener('DOMContentLoaded', renderContent);

// Mobile navigation toggle
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

if (hamburgerMenu && navLinks) {
    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburgerMenu.classList.toggle('open'); // Optional: for animating hamburger icon
    });

    // Close menu when a link is clicked (for single-page navigation)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                hamburgerMenu.classList.remove('open');
            }
        });
    });
}

// Homepage header scroll effect
const header = document.querySelector('header');
const heroSection = document.querySelector('.hero-section');

if (header && heroSection && document.body.classList.contains('home-page')) {
    window.addEventListener('scroll', () => {
        const heroHeight = heroSection.offsetHeight; // Get the height of the hero section
        if (window.scrollY > heroHeight - header.offsetHeight) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}
