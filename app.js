const content = {
    en: {
        home: {
            title: "Welcome to our Farm!",
            content: "Discover our accommodations and products. We are a farm focused on sustainability and nature."
        },
        apartment: {
            title: "Apartment",
            content: "A beautiful and spacious apartment with all the comforts. Ideal for families or groups of friends."
        },
        'tiny-house': {
            title: "Tiny House",
            content: "A cozy and romantic tiny house, perfect for a couple's getaway. Immersed in nature."
        },
        roulotte: {
            title: "Roulotte",
            content: "A vintage caravan for a unique and adventurous stay. Equipped with everything you need."
        },
        piazzola: {
            title: "Camping Pitch",
            content: "Spacious pitches for tents, campers, or caravans. Enjoy the tranquility of our farm."
        },
        philosophy: {
            title: "Our Philosophy",
            content: "We believe in sustainable agriculture and respecting nature. Our goal is to live in harmony with the environment."
        },
        products: {
            title: "Agricultural Products",
            content: "We produce organic olive oil, wine, honey, and fresh vegetables. All available for our guests to purchase."
        },
        activities: {
            title: "Things To Do",
            content: "Explore the surroundings with hiking or biking trails. Participate in our farm activities, or just relax and enjoy the peace."
        },
        contacts: {
            title: "Contacts",
            content: "You can find us at: 123 Farm Road, Countryside. Email: info@farm.com, Phone: +123456789"
        }
    },
    it: {
        home: {
            title: "Benvenuti nella nostra Azienda Agricola!",
            content: "Scopri i nostri alloggi e prodotti. Siamo un'azienda agricola focalizzata sulla sostenibilità e la natura."
        },
        apartment: {
            title: "Appartamento",
            content: "Un bellissimo e spazioso appartamento con tutti i comfort. Ideale per famiglie o gruppi di amici."
        },
        'tiny-house': {
            title: "Tiny House",
            content: "Una piccola casa accogliente e romantica, perfetta per una fuga di coppia. Immersa nella natura."
        },
        roulotte: {
            title: "Roulotte",
            content: "Una roulotte vintage per un soggiorno unico e avventuroso. Dotata di tutto il necessario."
        },
        piazzola: {
            title: "Piazzola",
            content: "Ampie piazzole per tende, camper o roulotte. Goditi la tranquillità della nostra azienda agricola."
        },
        philosophy: {
            title: "La Nostra Filosofia",
            content: "Crediamo nell'agricoltura sostenibile e nel rispetto della natura. Il nostro obiettivo è vivere in armonia con l'ambiente."
        },
        products: {
            title: "Prodotti Agricoli",
            content: "Produciamo olio d'oliva biologico, vino, miele e verdure fresche. Tutti disponibili per l'acquisto da parte dei nostri ospiti."
        },
        activities: {
            title: "Cose da Fare",
            content: "Esplora i dintorni con sentieri per escursioni a piedi o in bicicletta. Partecipa alle nostre attività agricole, o semplicemente rilassati e goditi la pace."
        },
        contacts: {
            title: "Contatti",
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

    const pageContent = content[lang][pageId];
    if (pageContent) {
        document.getElementById('content-title').innerText = pageContent.title;
        document.getElementById('content-body').innerText = pageContent.content;
        document.title = pageContent.title;
    }

    // Update language links
    const otherLang = lang === 'en' ? 'it' : 'en';
    const currentPath = window.location.pathname;
    document.getElementById('lang-en').href = `${currentPath}?lang=en`;
    document.getElementById('lang-it').href = `${currentPath}?lang=it`;
}

window.addEventListener('DOMContentLoaded', renderContent);
