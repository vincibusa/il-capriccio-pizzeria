import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // CallToActionButtons texts
      reservationButton: "Book a Table",
      viewMenuButton: "View Menu",
      // Navbar texts
      "navbar.logoAlt": "Il Capriccio Pizzeria",
      "navbar.toggleMenu": "Toggle menu",
      "navbar.home": "Home",
      "navbar.menu": "Menu",
      "navbar.gallery": "Gallery",
      "navbar.press": "Press",
      "navbar.reservation": "Reservation",
      // HistorySection texts
      "historySection.title": "OUR STORY",
      "historySection.paragraph1":
        "Il Capriccio opens its doors in Canicattini Bagni: a journey through flavors and traditions. The world of gastronomy is enriched with a new star: on April 14, Canicattini Bagni, in the province of Syracuse, will welcome the second location of \"Il Capriccio\", the famous pizzeria born in Avola in February 2021. An important milestone for Paolo Di Pietro, the beating heart of this adventure, who with love and passion has conquered the palates of pizza lovers, becoming a real reference point in the region.",
      "historySection.paragraph2":
        "The pizzas of \"Il Capriccio\" are a celebration of Sicilian and Neapolitan culinary tradition, a perfect blend of flavors that makes every bite a unique experience. But it's the <b>pistachio specialty</b> and <b>gourmet pizzas</b> that make the restaurant shine, making it an icon for those looking for not just a simple pizza, but a <b>gastronomic journey</b> that tells stories and emotions.",
      "historySection.paragraph3":
        "The inauguration of this new adventure will be an unmissable event, full of surprises and unforgettable moments. Among the special guests, there will be actor Tony Sperandeo, who will bring his charisma and his presence to make the evening even more special. Don't miss the opportunity to taste the specialties of Il Capriccio, to meet Paolo and to celebrate this new opening. The Canicattini Bagni location also expands its kitchen as a restaurant, already experiencing great success with Easter lunch being SOLD OUT in just 24 hours.",
      "historySection.quote":
        "Make people discover the true taste of pizza and bring a piece of Naples to everyone's heart.",
      "historySection.shortParagraph1":
        "Il Capriccio opens its doors in Canicattini Bagni: a journey through flavors and traditions. An important milestone for Paolo Di Pietro, the beating heart of this adventure, who with love and passion has conquered the palates of pizza lovers since the first location opened in Avola in February 2021.",
      "historySection.shortParagraph2":
        "The pizzas of \"Il Capriccio\" are a celebration of Sicilian and Neapolitan culinary tradition, a perfect blend of flavors with specialties like the <b>pistachio pizza</b> and various <b>gourmet options</b>. The Canicattini Bagni location also expands as a <b>full restaurant</b>, already experiencing great success.",
      "historySection.image.alt": "Il Capriccio Pizzeria Team",
      "historySection.image.caption": "The team behind Il Capriccio Pizzeria",
      // Cookie consent texts
      "cookieConsent.text":
        "We use cookies to improve your browsing experience. Please choose your preferences.",
      "cookieConsent.acceptAll": "Accept All",
      "cookieConsent.acceptEssential": "Only Essential",
      // CulinaryPhilosophySection texts
      "culinaryPhilosophy.item1.title": "Servizio e accoglienza",
      "culinaryPhilosophy.item1.description":
        "Amiamo prenderci cura dei nostri clienti con calore e professionalità, offrendo un'esperienza di gusto indimenticabile in un ambiente accogliente",
      "culinaryPhilosophy.item2.title": "Ingredienti di qualità",
      "culinaryPhilosophy.item2.description":
        "Selezioniamo le migliori farine e i migliori prodotti stagionali siciliani",
      "culinaryPhilosophy.item3.title": "Abbinamenti perfetti",
      "culinaryPhilosophy.item3.description":
        "Studiamo gli ingredienti e creiamo abbinamenti perfetti per esaltare i sapori",
      "culinaryPhilosophy.title": "LA NOSTRA FILOSOFIA CULINARIA",
      "culinaryPhilosophy.subtitle": "Crediamo che una pizza eccezionale nasca dalla passione, dalla tradizione e dai migliori ingredienti siciliani.",
      "culinaryPhilosophy.quote": "Una pizza ben preparata è un'arte che bilancia semplicità ed eccellenza - il nostro impegno è onorare i metodi tradizionali mentre deliziamo il vostro palato ad ogni morso.",
      "culinaryPhilosophy.quoteAuthor": "Il Capriccio Pizzeria Team",
      // Footer texts
      "footer.tagline": "Taste and Tradition in every bite.",
      "footer.description":
        "Our passion for traditional Sicilian pizza is reflected in every dish we serve!",
      "footer.quickLinksHeader": "Quick Links",
      "footer.contactHeader": "Contact",
      "footer.address.line1": "Via Isidoro La Lumia, 32",
      "footer.address.line2": "90139, Palermo, PA",
      "footer.phone": "Tel: +39 091 611 9472",
      "footer.email": "info@ilcapricciopizzeria.it",
      "footer.hours.weekdays": "Tuesday-Sunday: 18:00-24:00",
      "footer.hours.monday": "Monday: Closed",
      "footer.copyright":
        "Il Capriccio Pizzeria. All rights reserved.",
      "footer.about": "About Us",
      "footer.newsletter.title": "Subscribe to Our Newsletter",
      "footer.newsletter.description": "Get updates about special events, new menu items, and seasonal offers!",
      "footer.newsletter.placeholder": "Your email address",
      "footer.newsletter.button": "Subscribe",
      // LocationSection texts
      "locationSection.title": "WHERE ARE WE",
      "locationSection.subtitle": "Come visit us at one of our two locations to taste our delicious artisan pizzas.",
      "locationSection.hours": "Opening Hours",
      "locationSection.contact": "Contacts",
      "locationSection.directions": "Street Directions",
      "locationSection.note": "We're waiting for you for an authentic and unforgettable gastronomic experience. For reservations, please contact us by phone.",
      // PressSection texts
      "pressSection.heading": "PRESS & RECOGNITIONS",
      "pressSection.subtitle": "What the critics and food enthusiasts say about our innovative molecular pizza",
      "pressSection.award": "Innovation Award",
      "pressSection.leftArticle.title":
        "Awarded for Innovation in Sicilian Pizza Making with Molecular Techniques",
      "pressSection.leftArticle.preview":
        "Il Capriccio Pizzeria in Palermo has been recognized for its innovative approach to pizza making using molecular gastronomy techniques. Their creative menu featuring items like 'Fluorescent Il Capriccio' and 'Three Cheese Consistencies' has garnered attention from food critics and enthusiasts alike, praising their dedication to pushing the boundaries of traditional pizza.",
      "pressSection.leftArticle.imageAlt": "Il Capriccio Innovation Award",
      "pressSection.leftArticle.source": "SiciliaGourmet - December 2023",
      "pressSection.article.readMore": "Read full article",
      "pressSection.readMoreArticles": "Read more articles",
      // Team gallery texts
      "teamGallerySection.heading": "GALLERY",
      "teamGallerySection.viewGallery": "View Full Gallery",
      "teamGallerySection.description": "Meet the people behind Il Capriccio Pizzeria's success. Our talented team works together to create unforgettable dining experiences through molecular innovation.",

      // ReservationModal texts
      "reservationModal.title": "Book Your Table",
      "reservationModal.firstNameLabel": "First Name",
      "reservationModal.firstNamePlaceholder": "Enter your first name",
      "reservationModal.lastNameLabel": "Last Name",
      "reservationModal.lastNamePlaceholder": "Enter your last name",
      "reservationModal.phoneLabel": "Phone Number",
      "reservationModal.phonePlaceholder": "Enter your phone number",
      "reservationModal.dateLabel": "Date",
      "reservationModal.timeLabel": "Time",
      "reservationModal.timePlaceholder": "Select time",
      "reservationModal.noTimeSlots": "No time slot available",
      "reservationModal.peopleLabel": "Number of People",
      "reservationModal.personSingular": "person",
      "reservationModal.personPlural": "people",
      "reservationModal.specialRequestsLabel": "Special Requests",
      "reservationModal.specialRequestsPlaceholder": "Any special requests...",
      "reservationModal.submitting": "Booking in progress...",
      "reservationModal.submitButton": "Book Now",
      "reservationModal.error.firstNameRequired": "First name is required",
      "reservationModal.error.lastNameRequired": "Last name is required",
      "reservationModal.error.phoneRequired": "Phone number is required",
      "reservationModal.error.dateRequired": "Date is required",
      "reservationModal.error.timeRequired": "Time is required",
      "reservationModal.error.general": "Error during reservation",
      "reservationModal.successTitle": "Booking Confirmed!",
      "reservationModal.successMessage": "Thank you for choosing Il Capriccio Pizzeria",
      "reservationModal.holdTimeMessage": "Your table will be held for 15 minutes after the booking time",
      "reservationModal.closeButton": "Close",
      "reservationModal.contactInfo": "Contact us by phone: +39 375 5600 247",
      "reservationModal.emailLabel": "Email",
      "reservationModal.emailPlaceholder": "Enter your email",
      "reservationModal.error.emailRequired": "Email is required",
      "reservationModal.error.emailInvalid": "Please enter a valid email",
      "reservationModal.locationLabel": "Location",
      "reservationModal.locationPlaceholder": "Select location",
      "reservationModal.error.locationRequired": "Location is required",

      // Hero Section / VideoBackground
      "heroSection.subtitle": "A unique experience of taste and innovation in the heart of Palermo",
      "scrollDown": "Scroll Down",
      
      // Gallery Page
      "gallery.title": "EXPERIENCE IL CAPRICCIO",
      "gallery.subtitle": "Traditional Sicilian recipes, quality ingredients, and a warm, welcoming atmosphere.",
      "gallery.imageAlt": "Gallery image",
      "gallery.close": "Close",
      "gallery.next": "Next image",
      "gallery.previous": "Previous image",
      
      // VideoBackground Carousel
      "carousel.prevImage": "Previous image",
      "carousel.nextImage": "Next image",
      "carousel.goToImage": "Go to image {{number}}",
      "carousel.pizzaAlt": "Artisanal Italian pizza",
      "carousel.ingredientsAlt": "Fresh ingredients pizza",
      "carousel.restaurantAlt": "Il Capriccio Pizzeria interior",
      
      // Error messages and states
      "error.generic": "An error occurred. Please try again.",
      "error.loading": "Error loading data. Please refresh the page.",
      "loading": "Loading...",
      
      // Common actions
      "action.close": "Close",
      "action.confirm": "Confirm",
      "action.cancel": "Cancel",
      "action.submit": "Submit",
      "action.readMore": "Read More",
      
      // Gallery section
      "gallery.preparation": "Pizza Preparation",
      "gallery.preparation.description": "Artisanal dough crafting",
      "gallery.ambiance": "Restaurant Ambiance",
      "gallery.ambiance.description": "Modern and welcoming atmosphere",
      "gallery.oven": "Wood-fired Oven",
      "gallery.oven.description": "Traditional cooking methods",
      "gallery.pizza": "Molecular Pizza",
      "gallery.pizza.description": "Innovative creations",
      
      // Gallery categories
      "gallery.categories.all": "All",
      "gallery.categories.pizza": "Pizzas",
      "gallery.categories.ingredients": "Ingredients",
      "gallery.categories.restaurant": "Restaurant",
      "gallery.categories.preparation": "Preparation",
      "gallery.description": "Discover our passion for molecular pizza through images of our venue, dishes, and preparation methods."
    },
  },
  it: {
    translation: {
      // CallToActionButtons texts
      reservationButton: "Prenota il tavolo",
      viewMenuButton: "Visualizza il Menù",
      // Navbar texts
      "navbar.logoAlt": "Il Capriccio Pizzeria",
      "navbar.toggleMenu": "Mostra/Nascondi menu",
      "navbar.home": "Home",
      "navbar.menu": "Menu",
      "navbar.gallery": "Galleria",
      "navbar.press": "Press",
      "navbar.reservation": "Prenotazioni",
      // HistorySection texts
      "historySection.title": "LA NOSTRA STORIA",
      "historySection.paragraph1":
        "Il Capriccio apre le porte a Canicattini Bagni: un viaggio tra sapori e tradizioni. Il mondo della gastronomia si arricchisce di una nuova stella: il 14 aprile, Canicattini Bagni, in provincia di Siracusa, accoglierà la seconda sede de \"Il Capriccio\", la celebre pizzeria nata ad Avola nel febbraio del 2021. Un traguardo importante per Paolo Di Pietro, il cuore pulsante di questa avventura, che con amore e passione ha saputo conquistare i palati degli amanti della pizza, diventando un vero e proprio punto di riferimento nella regione.",
      "historySection.paragraph2":
        "Le pizze de \"Il Capriccio\" sono una celebrazione della tradizione culinaria siciliana e napoletana, un perfetto connubio di sapori che rende ogni morso un'esperienza unica. Ma è la specialità al <b>pistacchio</b> e le <b>pizze gourmet</b> a far brillare il ristorante, rendendolo un'icona per chi cerca non solo una semplice pizza, ma un <b>viaggio gastronomico</b> che racconta storie e emozioni.",
      "historySection.paragraph3":
        "L'inaugurazione di questa nuova avventura sarà un evento imperdibile, ricco di sorprese e momenti indimenticabili. Tra gli ospiti d'eccezione, ci sarà l'attore Tony Sperandeo, che porterà il suo carisma e la sua presenza per rendere la serata ancora più speciale. Non perdere l'occasione di assaporare le specialità del Capriccio, di incontrare Paolo e di festeggiare questa nuova apertura. Nella sede di Canicattini Bagni, Il Capriccio amplia la sua cucina anche come ristorante, riscontrando prima ancora dell'apertura già un grande successo con il pranzo di Pasqua andato SOLDOUT in sole 24 Ore.",
      "historySection.quote":
        "Far scoprire il vero gusto della pizza e portare un pezzo di Napoli nel cuore di tutti.",
      "historySection.shortParagraph1":
        "Il Capriccio apre le porte a Canicattini Bagni: un viaggio tra sapori e tradizioni. Un traguardo importante per Paolo Di Pietro, il cuore pulsante di questa avventura, che ha saputo conquistare i palati con la prima sede aperta ad Avola nel febbraio del 2021.",
      "historySection.shortParagraph2":
        "Le pizze de \"Il Capriccio\" sono una celebrazione della tradizione culinaria siciliana e napoletana, con specialità come la pizza al <b>pistacchio</b> e varie <b>opzioni gourmet</b>. La sede di Canicattini Bagni si espande anche come <b>ristorante completo</b>, riscontrando già un grande successo.",
      "historySection.image.alt": "Team Il Capriccio Pizzeria",
      "historySection.image.caption": "Il team di Il Capriccio Pizzeria",
      // Cookie consent texts
      "cookieConsent.text":
        "Utilizziamo i cookie per migliorare la tua esperienza di navigazione. Scegli le tue preferenze.",
      "cookieConsent.acceptAll": "Accetta Tutti",
      "cookieConsent.acceptEssential": "Solo Essenziali",
      // CulinaryPhilosophySection texts
      "culinaryPhilosophy.item1.title": "Servizio e accoglienza",
      "culinaryPhilosophy.item1.description":
        "Amiamo prenderci cura dei nostri clienti con calore e professionalità",
      "culinaryPhilosophy.item2.title": "Ingredienti di qualità",
      "culinaryPhilosophy.item2.description":
        "Selezioniamo le migliori farine e i migliori prodotti stagionali siciliani",
      "culinaryPhilosophy.item3.title": "Abbinamenti perfetti",
      "culinaryPhilosophy.item3.description":
        "Studiamo gli ingredienti e creiamo abbinamenti perfetti per esaltare i sapori",
      "culinaryPhilosophy.title": "IL NOSTRO CONCEPT",
      "culinaryPhilosophy.subtitle": "Lavoriamo con passione ed attenzione, studiando i prodotti e trasformando la materia per esaltare il gusto di ogni ingrediente.",
      "culinaryPhilosophy.quote": "La nostra pizza è il risultato di una perfetta fusione di sapori, consistenze ed emozioni. Un'esperienza completa da gustare con tutti i sensi.",
      "culinaryPhilosophy.quoteAuthor": "Team Il Capriccio Pizzeria",
      // Footer texts
      "footer.tagline": "Gusto e Tradizione in ogni morso.",
      "footer.description":
        "La nostra passione per la pizza artigianale si riflette in ogni piatto che serviamo!",
      "footer.quickLinksHeader": "Link Rapidi",
      "footer.contactHeader": "Contatti",
      "footer.address.line1": "Via Giuseppe Velasquez, 29/35",
      "footer.address.line2": "90141, Palermo, PA",
      "footer.phone": "Tel: +39 375 5600 247",
      "footer.email": "info@ilcapricciopizzeria.it",
      "footer.hours.weekdays": "Martedì-Domenica: 18:00-24:00",
      "footer.hours.monday": "Lunedì: Chiuso",
      "footer.copyright":
        "Il Capriccio Pizzeria. Tutti i diritti riservati.",
      "footer.about": "Chi Siamo",
      "footer.newsletter.title": "Iscriviti alla Newsletter",
      "footer.newsletter.description": "Ricevi aggiornamenti su eventi speciali, nuovi piatti e offerte stagionali!",
      "footer.newsletter.placeholder": "Il tuo indirizzo email",
      "footer.newsletter.button": "Iscriviti",
      // LocationSection texts
      "locationSection.title": "Dove Siamo",
      "locationSection.subtitle": "Vieni a trovarci in una delle nostre due sedi per assaporare le nostre deliziose pizze artigianali.",
      "locationSection.hours": "Orari di Apertura",
      "locationSection.contact": "Contatti",
      "locationSection.directions": "Indicazioni Stradali",
      "locationSection.note": "Ti aspettiamo per un'esperienza gastronomica autentica e indimenticabile. Per prenotazioni, ti invitiamo a contattarci telefonicamente.",
      // PressSection texts
      "pressSection.heading": "RICONOSCIMENTI E PRESS",
      "pressSection.subtitle": "Cosa dicono critici e appassionati di gastronomia sulla nostra innovativa pizza molecolare",
      "pressSection.award": "Premio Eccellenza",
      "pressSection.leftArticle.title":
        "Premiato per l'Eccellenza nella Pizza Siciliana Tradizionale",
      "pressSection.leftArticle.preview":
        "Il Capriccio Pizzeria a Palermo è stato riconosciuto per il suo approccio tradizionale alla pizza siciliana. Il loro menu creativo, che include specialità come la 'Pizza Capriccio' e la 'Pizza ai Tre Formaggi', ha attirato l'attenzione di critici e appassionati di cibo, lodando la loro dedizione nel preservare e valorizzare le tradizioni della pizza siciliana.",
      "pressSection.leftArticle.imageAlt": "Premio Eccellenza Il Capriccio",
      "pressSection.leftArticle.source": "SiciliaGourmet - Dicembre 2023",
      "pressSection.article.readMore": "Leggi l'articolo completo",
      "pressSection.readMoreArticles": "Leggi altri articoli",
      // Team gallery texts
      "teamGallerySection.heading": "GALLERIA",
      "teamGallerySection.viewGallery": "Visualizza Gallería Completa",
      "teamGallerySection.description": "Conosci le persone dietro il successo della Pizzeria Il Capriccio. Il nostro talentuoso team lavora insieme per creare esperienze gastronómiche inolvidables a través de la innovación molecular.",

      // ReservationModal texts
      "reservationModal.title": "Prenota il tuo tavolo",
      "reservationModal.firstNameLabel": "Nome",
      "reservationModal.firstNamePlaceholder": "Inserisci il nome",
      "reservationModal.lastNameLabel": "Cognome",
      "reservationModal.lastNamePlaceholder": "Inserisci il cognome",
      "reservationModal.phoneLabel": "Numero di Telefono",
      "reservationModal.phonePlaceholder": "Inserisci il numero di telefono",
      "reservationModal.dateLabel": "Data",
      "reservationModal.timeLabel": "Ora",
      "reservationModal.timePlaceholder": "Seleziona ora",
      "reservationModal.noTimeSlots": "Nessuna fascia disponibile",
      "reservationModal.peopleLabel": "Numero di Persone",
      "reservationModal.personSingular": "persona",
      "reservationModal.personPlural": "persone",
      "reservationModal.specialRequestsLabel": "Richieste Speciali",
      "reservationModal.specialRequestsPlaceholder": "Eventuali richieste speciali...",
      "reservationModal.submitting": "Prenotazione in corso...",
      "reservationModal.submitButton": "Prenota Ora",
      "reservationModal.error.firstNameRequired": "Nome richiesto",
      "reservationModal.error.lastNameRequired": "Cognome richiesto",
      "reservationModal.error.phoneRequired": "Numero di telefono richiesto",
      "reservationModal.error.dateRequired": "Data richiesta",
      "reservationModal.error.timeRequired": "Ora richiesta",
      "reservationModal.error.general": "Errore durante la prenotazione",
      "reservationModal.successTitle": "Prenotazione Confermata!",
      "reservationModal.successMessage": "Grazie per aver scelto Il Capriccio Pizzeria",
      "reservationModal.holdTimeMessage": "Il tavolo rimarrà riservato per 15 minuti oltre l'orario di prenotazione",
      "reservationModal.closeButton": "Chiudi",
      "reservationModal.contactInfo": "Contáctanos por teléfono: +39 375 5600 247",
      "reservationModal.emailLabel": "Email",
      "reservationModal.emailPlaceholder": "Inserisci la tua email",
      "reservationModal.error.emailRequired": "L'email è obbligatoria",
      "reservationModal.error.emailInvalid": "Inserisci un'email valida",
      "reservationModal.locationLabel": "Località",
      "reservationModal.locationPlaceholder": "Seleziona località",
      "reservationModal.error.locationRequired": "La località è obbligatoria",

      // Hero Section / VideoBackground
      "heroSection.subtitle": "Un'esperienza unica di gusto e innovazione nel cuore della Sicilia",
      "scrollDown": "Scorri Giù",
      
      // Gallery Page
      "gallery.title": "QUESTO È IL CAPRICCIO",
      "gallery.subtitle": "Tecniche molecolari innovative, ingredienti di prima scelta e un'atmosfera moderna e accogliente.",
      "gallery.imageAlt": "Immagine galleria",
      "gallery.close": "Chiudi",
      "gallery.next": "Immagine successiva",
      "gallery.previous": "Immagine precedente",
      
      // VideoBackground Carousel
      "carousel.prevImage": "Immagine precedente",
      "carousel.nextImage": "Immagine successiva",
      "carousel.goToImage": "Vai all'immagine {{number}}",
      "carousel.pizzaAlt": "Pizza artigianale italiana",
      "carousel.ingredientsAlt": "Pizza con ingredienti freschi",
      "carousel.restaurantAlt": "Interno pizzeria Il Capriccio",
      
      // Error messages and states
      "error.generic": "Si è verificato un errore. Riprova.",
      "error.loading": "Errore durante il caricamento dei dati. Aggiorna la pagina.",
      "loading": "Caricamento...",
      
      // Common actions
      "action.close": "Chiudi",
      "action.confirm": "Conferma",
      "action.cancel": "Annulla",
      "action.submit": "Invia",
      "action.readMore": "Leggi di più",
      
      // Gallery section
      "gallery.preparation": "Preparazione Pizza",
      "gallery.preparation.description": "Impasto artigianale creativo",
      "gallery.ambiance": "Restaurant Ambiance",
      "gallery.ambiance.description": "Modern and welcoming atmosphere",
      "gallery.oven": "Forno a Legna",
      "gallery.oven.description": "Traditional cooking methods",
      "gallery.pizza": "Molecular Pizza",
      "gallery.pizza.description": "Innovative creations",
      
      // Gallery categories
      "gallery.categories.all": "All",
      "gallery.categories.pizza": "Pizzas",
      "gallery.categories.ingredients": "Ingredients",
      "gallery.categories.restaurant": "Restaurant",
      "gallery.categories.preparation": "Preparation",
      "gallery.description": "Scopri la nostra passione per la pizza attraverso immagini del nostro locale, dei piatti e dei metodi di preparazione."
    },
  },
  es: {
    translation: {
      // CallToActionButtons texts
      reservationButton: "Reservar una Mesa",
      viewMenuButton: "Ver Menú",
      // Navbar texts
      "navbar.logoAlt": "Il Capriccio Pizzeria",
      "navbar.toggleMenu": "Alternar menú",
      "navbar.home": "Inicio",
      "navbar.menu": "Menú",
      "navbar.gallery": "Galería",
      "navbar.press": "Prensa",
      "navbar.reservation": "Reservaciones",
      // HistorySection texts
      "historySection.title": "NUESTRA HISTORIA",
      "historySection.paragraph1":
        "En el corazón del centro de Palermo, a pocos pasos de la Plaza Politeama, Il Capriccio es el proyecto innovador que nació con el objetivo de ofrecer una experiencia única de sabor y experimentación centrada en la pizza molecular.",
      "historySection.paragraph2":
        "En un local con estilo moderno y carácter personal, la <b>pizza</b> ofrecida habla un lenguaje contemporáneo. Utilizando una <b>mezcla de harinas seleccionadas</b> y un proceso especial de fermentación, nace una masa ligera con textura única, capaz de satisfacer incluso los paladares más exigentes. No solo una pizza sino una <b>historia gastronómica</b> que trae a la mesa todos los sabores de Sicilia.",
      "historySection.paragraph3":
        "Hay opciones alternativas como el <b>Crunch</b>, con su característico crujiente, o los <b>Padellini</b> (pizzas de sartén pequeñas) que utilizan técnicas especiales de preparación de masa antes de ser cocinadas y cubiertas, haciendo justicia a los <b>ingredientes de alta calidad</b> cuidadosamente seleccionados de productores locales.",
      "historySection.shortParagraph1":
        "En el corazón del centro de Palermo, a pocos pasos de la Plaza Politeama, Il Capriccio es el proyecto innovador que nació con el objetivo de ofrecer una experiencia única de sabor y experimentación centrada en la pizza molecular.",
      "historySection.shortParagraph2":
        "En un local con estilo moderno y carácter personal, la <b>pizza</b> ofrecida habla un lenguaje contemporáneo. La masa única y ligera satisface incluso los paladares más exigentes, haciendo justicia a los <b>ingredientes de alta calidad</b>. No solo una pizza sino una <b>historia gastronómica</b> que trae a la mesa todos los sabores de Sicilia.",
      "historySection.image.alt": "Equipo de Il Capriccio Pizzeria",
      "historySection.image.caption": "El equipo de Il Capriccio Pizzeria",
      // Cookie consent texts
      "cookieConsent.text":
        "Utilizamos cookies para mejorar tu experiencia de navegación. Por favor, elige tus preferencias.",
      "cookieConsent.acceptAll": "Aceptar Todo",
      "cookieConsent.acceptEssential": "Solo Esenciales",
      // CulinaryPhilosophySection texts
      "culinaryPhilosophy.item1.title": "Servicio y Hospitalidad",
      "culinaryPhilosophy.item1.description":
        "Nos encanta cuidar a nuestros clientes",
      "culinaryPhilosophy.item2.title": "Ingredientes de Calidad",
      "culinaryPhilosophy.item2.description":
        "Seleccionamos las mejores harinas y elegimos los productos de temporada más finos",
      "culinaryPhilosophy.item3.title": "Maridajes Perfectos",
      "culinaryPhilosophy.item3.description":
        "Nuestra carta de vinos offre muchas opciones, no solo locales",
      "culinaryPhilosophy.title": "NUESTRA FILOSOFÍA CULINARIA",
      "culinaryPhilosophy.subtitle": "Creemos que una pizza excepcional proviene de la innovación, las técnicas moleculares y los mejores ingredientes.",
      "culinaryPhilosophy.quote": "Una pizza bien preparada es más que comida; es una fusión científica de sabores, texturas y emociones - una experiencia completa para saborear con todos tus sentidos.",
      "culinaryPhilosophy.quoteAuthor": "Equipo de Il Capriccio Pizzeria",
      // Footer texts
      "footer.tagline": "Sabor y Tradición en cada bocado.",
      "footer.description":
        "¡Nuestra pasión por la pizza artesanal se refleja en cada plato que servimos!",
      "footer.quickLinksHeader": "Enlaces Rápidos",
      "footer.contactHeader": "Contacto",
      "footer.address.line1": "Via Giuseppe Velasquez, 29/35",
      "footer.address.line2": "90141, Palermo, PA",
      "footer.phone": "Tel: +39 375 5600 247",
      "footer.email": "info@ilcapricciopizzeria.it",
      "footer.hours.weekdays": "Martes-Domingo: 18:00-23:30",
      "footer.hours.monday": "Lunes: Cerrado",
      "footer.copyright":
        "Il Capriccio Pizzeria. Todos los derechos reservados.",
      "footer.about": "Sobre Nosotros",
      "footer.newsletter.title": "Suscríbete a Nuestro Boletín",
      "footer.newsletter.description": "¡Recibe actualizaciones sobre eventos especiales, nuevos platos y ofertas de temporada!",
      "footer.newsletter.placeholder": "Tu dirección de correo electrónico",
      "footer.newsletter.button": "Suscribirse",
      // LocationSection texts
      "locationSection.title": "DOVE SIAMO",
      "locationSection.subtitle": "Vieni a trovarci in una delle nostre due sedi per assaporare le nostre deliziose pizze artigianali.",
      "locationSection.hours": "Orari di Apertura",
      "locationSection.contact": "Contatti",
      "locationSection.directions": "Indicazioni Stradali",
      "locationSection.note": "Ti aspettiamo per un'esperienza gastronomica autentica e indimenticabile. Per prenotazioni, ti invitiamo a contattarci telefonicamente.",
      // PressSection texts
      "pressSection.heading": "PRENSA Y RECONOCIMIENTOS",
      "pressSection.subtitle": "Lo que dicen los críticos y entusiastas gastronómicos sobre nuestra innovadora pizza molecular",
      "pressSection.award": "Premio a la Innovación",
      "pressSection.leftArticle.title":
        "Premiados por la Innovación en la Elaboración de Pizza Siciliana con Técnicas Moleculares",
      "pressSection.leftArticle.preview":
        "Il Capriccio Pizzeria en Palermo ha sido reconocida por su enfoque innovante en la elaboración de pizzas utilizando técnicas de gastronomía molecular. Su creativo menú que incluye elementos como 'Il Capriccio Fluorescente' y 'Tres Consistencias de Quesos' ha captado la atención de críticos gastronomiques y entusiastas, elogiando su dedicación para superar los límites de la pizza tradicional.",
      "pressSection.leftArticle.imageAlt": "Premio de Innovación Il Capriccio",
      "pressSection.leftArticle.source": "SiciliaGourmet - Diciembre 2023",
      "pressSection.article.readMore": "Leer artículo completo",
      "pressSection.readMoreArticles": "Leer más artículos",
      // Team gallery texts
      "teamGallerySection.heading": "GALERÍA",
      "teamGallerySection.viewGallery": "Visualizza Gallería Completa",
      "teamGallerySection.description": "Conoce a las personas detrás del éxito de Il Capriccio Pizzeria. Nuestro talentoso equipo trabaja junto para crear experiencias gastronómicas inolvidables a través de la innovación molecular.",

      // ReservationModal texts
      "reservationModal.title": "Reserva Tu Mesa",
      "reservationModal.firstNameLabel": "Nombre",
      "reservationModal.firstNamePlaceholder": "Ingresa tu nombre",
      "reservationModal.lastNameLabel": "Apellido",
      "reservationModal.lastNamePlaceholder": "Ingresa tu apellido",
      "reservationModal.phoneLabel": "Número de Teléfono",
      "reservationModal.phonePlaceholder": "Ingresa tu número de teléfono",
      "reservationModal.dateLabel": "Fecha",
      "reservationModal.timeLabel": "Hora",
      "reservationModal.timePlaceholder": "Selecciona la hora",
      "reservationModal.noTimeSlots": "No hay franjas horarias disponibles",
      "reservationModal.peopleLabel": "Número de Personas",
      "reservationModal.personSingular": "persona",
      "reservationModal.personPlural": "personas",
      "reservationModal.specialRequestsLabel": "Peticiones Especiales",
      "reservationModal.specialRequestsPlaceholder": "Cualquier petición especial...",
      "reservationModal.submitting": "Reservando...",
      "reservationModal.submitButton": "Reservar Ahora",
      "reservationModal.error.firstNameRequired": "El nombre es obligatorio",
      "reservationModal.error.lastNameRequired": "El apellido es obligatorio",
      "reservationModal.error.phoneRequired": "El número de teléfono es obligatorio",
      "reservationModal.error.dateRequired": "La fecha es obligatoria",
      "reservationModal.error.timeRequired": "La hora es obligatoria",
      "reservationModal.error.general": "Error durante la reserva",
      "reservationModal.successTitle": "¡Reserva Confirmada!",
      "reservationModal.successMessage": "Gracias por elegir Il Capriccio Pizzeria",
      "reservationModal.holdTimeMessage": "Tu mesa se mantendrá por 15 minutos después de la hora de reserva",
      "reservationModal.closeButton": "Cerrar",
      "reservationModal.contactInfo": "Contáctanos por teléfono: +39 375 5600 247",
      "reservationModal.emailLabel": "Email",
      "reservationModal.emailPlaceholder": "Ingresa tu email",
      "reservationModal.error.emailRequired": "El email es obligatorio",
      "reservationModal.error.emailInvalid": "Por favor ingresa un email válido",
      "reservationModal.locationLabel": "Ubicación",
      "reservationModal.locationPlaceholder": "Selecciona ubicación",
      "reservationModal.error.locationRequired": "La ubicación es obligatoria",

      // Hero Section / VideoBackground
      "heroSection.subtitle": "Una experiencia única de sabor e innovación en el corazón de Palermo",
      "scrollDown": "Desplazarse hacia Abajo",
      
      // Gallery Page
      "gallery.title": "ESTO ES IL CAPRICCIO",
      "gallery.subtitle": "Masa única, ingredientes de calidad y un ambiente cálido y accogliente.",
      "gallery.imageAlt": "Imagen de galería",
      "gallery.close": "Cerrar",
      "gallery.next": "Siguiente imagen",
      "gallery.previous": "Imagen anterior",
      
      // VideoBackground Carousel
      "carousel.prevImage": "Imagen anterior",
      "carousel.nextImage": "Siguiente imagen",
      "carousel.goToImage": "Ir a la imagen {{number}}",
      "carousel.pizzaAlt": "Pizza artesanal italiana",
      "carousel.ingredientsAlt": "Pizza con ingredientes frescos",
      "carousel.restaurantAlt": "Interior de la pizzería Il Capriccio",
      
      // Error messages and states
      "error.generic": "Ocurrió un error. Por favor, inténtalo de nuevo.",
      "error.loading": "Error al cargar datos. Por favor, actualiza la página.",
      "loading": "Cargando...",
      
      // Common actions
      "action.close": "Cerrar",
      "action.confirm": "Confirmar",
      "action.cancel": "Cancelar",
      "action.submit": "Enviar",
      "action.readMore": "Leer Más",
      
      // Gallery section
      "gallery.preparation": "Preparación de Pizza",
      "gallery.preparation.description": "Elaboración artesanal de masa",
      "gallery.ambiance": "Ambiente del Restaurante",
      "gallery.ambiance.description": "Atmósfera moderna y acogedora",
      "gallery.oven": "Horno de Leña",
      "gallery.oven.description": "Métodos de cuisson traditionnelles",
      "gallery.pizza": "Pizza Molecular",
      "gallery.pizza.description": "Creaciones innovantes",
      
      // Gallery categories
      "gallery.categories.all": "Todos",
      "gallery.categories.pizza": "Pizzas",
      "gallery.categories.ingredients": "Ingredientes",
      "gallery.categories.restaurant": "Restaurante",
      "gallery.categories.preparation": "Preparación",
      "gallery.description": "Descubre nuestra pasión por la pizza molecular a través de imágenes de nuestro local, platos y métodos de preparación."
    },
  },
  fr: {
    translation: {
      // CallToActionButtons texts
      reservationButton: "Réserver une table",
      viewMenuButton: "Voir le Menu",
      // Navbar texts
      "navbar.logoAlt": "Il Capriccio Pizzeria",
      "navbar.toggleMenu": "Basculer le menu",
      "navbar.home": "Accueil",
      "navbar.menu": "Menu",
      "navbar.gallery": "Galerie",
      "navbar.press": "Presse",
      "navbar.reservation": "Réservations",
      // HistorySection texts
      "historySection.title": "NOTRE HISTOIRE",
      "historySection.paragraph1":
        "Au cœur du centre de Palerme, à deux pas de la Place Politeama, Il Capriccio est le projet innovant né avec l'intention de faire vivre une expérience de goût et d'expérimentation unique centrée sur la pizza moléculaire.",
      "historySection.paragraph2":
        "Dans un lieu au style moderne et au caractère personnel, la <b>pizza</b> proposée parle un langage contemporain. À partir d'un <b>mélange de farines sélectionnées</b> et un processus de fermentation spécial, une pâte légère à la texture unique naît, capable de satisfaire même les palais les plus exigeants. Ce n'est pas une simple pizza mais une <b>histoire gustative</b> qui apporte à table toutes les saveurs de la Sicile.",
      "historySection.paragraph3":
        "Des options alternatives ne manquent pas, comme la <b>pizza à texture croquante</b>, ou les <b>Padellini</b> qui utilisent des techniques spéciales de préparation de la pâte avant d'être cuits et garnis, rendant hommage aux <b>ingrédients de haute qualité</b> soigneusement sélectionnés auprès de producteurs locaux.",
      "historySection.shortParagraph1":
        "Au cœur du centre de Palerme, à deux pas de la Place Politeama, Il Capriccio est le projet innovant né avec l'intention de faire vivre une expérience de goût et d'expérimentation unique centrée sur la pizza moléculaire.",
      "historySection.shortParagraph2":
        "Dans un lieu au style moderne et au caractère personnel, la <b>pizza</b> proposée parle un langage contemporain. La pâte unique et légère satisfait même les palais les plus exigeants, rendant hommage aux <b>ingrédients de haute qualité</b>. Ce n'est pas une simple pizza mais une <b>histoire gustative</b> qui apporte à table toutes les saveurs de la Sicile.",
      "historySection.image.alt": "Équipe de Il Capriccio Pizzeria",
      "historySection.image.caption": "L'équipe de Il Capriccio Pizzeria",
      // Cookie consent texts
      "cookieConsent.text":
        "Nous utilisons des cookies pour améliorer votre expérience de navigation. Veuillez choisir vos préférences.",
      "cookieConsent.acceptAll": "Tout accepter",
      "cookieConsent.acceptEssential": "Essentiels uniquement",
      // CulinaryPhilosophySection texts
      "culinaryPhilosophy.item1.title": "Service et accueil",
      "culinaryPhilosophy.item1.description":
        "Nous aimons prendre soin de nos clients",
      "culinaryPhilosophy.item2.title": "Ingrédients de qualité",
      "culinaryPhilosophy.item2.description":
        "Nous sélectionnons les meilleures farines et choisissons les produits de saison les plus raffinés",
      "culinaryPhilosophy.item3.title": "Accords parfaits",
      "culinaryPhilosophy.item3.description":
        "Notre carte des vins offre de nombreuses propositions, pas seulement locales",
      "culinaryPhilosophy.title": "NOTRE PHILOSOPHIE CULINAIRE",
      "culinaryPhilosophy.subtitle": "Nous croyons qu'une pizza exceptionnelle provient de la passion, de la tradition et des meilleurs ingrédients.",
      "culinaryPhilosophy.quote": "Une pizza bien préparée est un voyage à travers les saveurs, les textures et les émotions. C'est plus que de la nourriture; c'est une expérience à savourer avec tous vos sens.",
      "culinaryPhilosophy.quoteAuthor": "Les Frères Mirenda",
      // Footer texts
      "footer.tagline": "Goût et Tradition à chaque bouchée.",
      "footer.description":
        "Notre passion pour la pizza artisanale se reflète dans chaque plat que nous servons !",
      "footer.quickLinksHeader": "Liens rapides",
      "footer.contactHeader": "Contacts",
      "footer.address.line1": "Via Giuseppe Velasquez, 29",
      "footer.address.line2": "90015, Cefalù, PA",
      "footer.phone": "Tél: +39 331 872 7612",
      "footer.email": "info@ilcapricciopizzeria.it",
      "footer.hours.weekdays": "Mardi-Dimanche: 18:00-23:00",
      "footer.hours.monday": "Lundi: fermé",
      "footer.copyright":
        "Il Capriccio Pizzeria. Tous droits réservés.",
      "footer.about": "À Propos",
      "footer.newsletter.title": "Abonnez-vous à Notre Newsletter",
      "footer.newsletter.description": "Recevez des mises à jour sur les événements spéciaux, les nouveaux plats et les offres saisonnières !",
      "footer.newsletter.placeholder": "Votre adresse e-mail",
      "footer.newsletter.button": "S'abonner",
      // LocationSection texts
      "locationSection.title": "DOVE SIAMO",
      "locationSection.subtitle": "Vieni a trovarci in una delle nostre due sedi per assaporare le nostre deliziose pizze artigianali.",
      "locationSection.hours": "Orari di Apertura",
      "locationSection.contact": "Contatti",
      "locationSection.directions": "Indicazioni Stradali",
      "locationSection.note": "Ti aspettiamo per un'esperienza gastronomica autentica e indimenticabile. Per prenotazioni, ti invitiamo a contattarci telefonicamente.",
      // PressSection texts
      "pressSection.heading": "RECONNAISSANCES ET PRESSE",
      "pressSection.subtitle": "Ce que disent les critiques et les amateurs de gastronomie sur notre pizza moléculaire innovante",
      "pressSection.award": "Prix de l'Innovation",
      "pressSection.leftArticle.title":
        "Récompensée pour l'Innovation dans la Préparation de la Pizza Sicilienne avec des Techniques Moléculaires",
      "pressSection.leftArticle.preview":
        "Il Capriccio Pizzeria à Palerme a été reconnue pour son approche innovante de la préparation de la pizza utilisant des techniques de gastronomie moléculaire. Leur menu créatif comprenant des éléments comme 'Il Capriccio Fluorescente' et 'Trois Consistences de Fromages' a attiré l'attention des critiques gastronomiques et des passionnés, louant leur dévouement à repousser les limites de la pizza traditionnelle.",
      "pressSection.leftArticle.imageAlt": "Prix d'Innovation Il Capriccio",
      "pressSection.leftArticle.source": "SiciliaGourmet - Décembre 2023",
      "pressSection.article.readMore": "Lire l'article complet",
      "pressSection.readMoreArticles": "Lire plus d'articles",
      // Team gallery texts
      "teamGallerySection.heading": "GALERIE",
      "teamGallerySection.viewGallery": "Voir la Galerie Complète",
      "teamGallerySection.description": "Rencontrez les personnes derrière le succès de Il Capriccio Pizzeria. Notre équipe talentueuse travaille ensemble pour créer des expériences culinaires inoubliables.",

      // ReservationModal texts
      "reservationModal.title": "Réservez votre table",
      "reservationModal.firstNameLabel": "Prénom",
      "reservationModal.firstNamePlaceholder": "Entrez votre prénom",
      "reservationModal.lastNameLabel": "Nom de famille",
      "reservationModal.lastNamePlaceholder": "Entrez votre nom de famille",
      "reservationModal.phoneLabel": "Numéro de téléphone",
      "reservationModal.phonePlaceholder": "Entrez votre numéro de téléphone",
      "reservationModal.dateLabel": "Date",
      "reservationModal.timeLabel": "Heure",
      "reservationModal.timePlaceholder": "Sélectionnez l'heure",
      "reservationModal.noTimeSlots": "Aucun créneau horaire disponible",
      "reservationModal.peopleLabel": "Nombre de personnes",
      "reservationModal.personSingular": "personne",
      "reservationModal.personPlural": "personnes",
      "reservationModal.specialRequestsLabel": "Demandes spéciales",
      "reservationModal.specialRequestsPlaceholder": "Toute demande spéciale...",
      "reservationModal.submitting": "Réservation en cours...",
      "reservationModal.submitButton": "Réserver maintenant",
      "reservationModal.error.firstNameRequired": "Le prénom est requis",
      "reservationModal.error.lastNameRequired": "Le nom de famille est requis",
      "reservationModal.error.phoneRequired": "Le numéro de téléphone est requis",
      "reservationModal.error.dateRequired": "La date est requise",
      "reservationModal.error.timeRequired": "L'heure est requise",
      "reservationModal.error.general": "Erreur lors de la réservation",
      "reservationModal.successTitle": "Réservation confirmée!",
      "reservationModal.successMessage": "Merci d'avoir choisi Il Capriccio Pizzeria",
      "reservationModal.holdTimeMessage": "Votre table sera réservée pendant 15 minutes après l'heure de réservation",
      "reservationModal.closeButton": "Fermer",
      "reservationModal.contactInfo": "Contactez-nous par téléphone: +39 375 5600 247",
      "reservationModal.emailLabel": "Email",
      "reservationModal.emailPlaceholder": "Entrez votre email",
      "reservationModal.error.emailRequired": "E-Mail est requis",
      "reservationModal.error.emailInvalid": "Veuillez entrer une adresse email valide",
      "reservationModal.locationLabel": "Emplacement",
      "reservationModal.locationPlaceholder": "Sélectionner l'emplacement",
      "reservationModal.error.locationRequired": "L'emplacement est requis",

      // Hero Section / VideoBackground
      "heroSection.subtitle": "Une expérience unique de goût et innovation au cœur de Palermo",
      "scrollDown": "Défiler vers le bas",
      
      // Gallery Page
      "gallery.title": "C'EST IL CAPRICCIO",
      "gallery.subtitle": "Pâte unique, ingrédients de qualité et une atmosphère chaleureuse et accueillante.",
      "gallery.imageAlt": "Image de galería",
      "gallery.close": "Fermer",
      "gallery.next": "Image suivante",
      "gallery.previous": "Image précédente",
      
      // VideoBackground Carousel
      "carousel.prevImage": "Image précédente",
      "carousel.nextImage": "Image suivante",
      "carousel.goToImage": "Aller à l'image {{number}}",
      "carousel.pizzaAlt": "Pizza artisanale italienne",
      "carousel.ingredientsAlt": "Pizza aux ingrédients frais",
      "carousel.restaurantAlt": "Intérieur de la pizzeria Il Capriccio",
      
      // Error messages and states
      "error.generic": "Une erreur s'est produite. Veuillez réessayer.",
      "error.loading": "Erreur lors du chargement des données. Veuillez rafraîchir la page.",
      "loading": "Chargement...",
      
      // Common actions
      "action.close": "Fermer",
      "action.confirm": "Confirmer",
      "action.cancel": "Annuler",
      "action.submit": "Soumettre",
      "action.readMore": "Lire plus",
      
      // Gallery section
      "gallery.preparation": "Préparation de la Pizza",
      "gallery.preparation.description": "Façonnage artisanal de la pâte",
      "gallery.ambiance": "Ambiance du Restaurant",
      "gallery.ambiance.description": "Moderne et einladende Atmosphäre",
      "gallery.oven": "Four à Bois",
      "gallery.oven.description": "Méthodes de cuisson traditionnelles",
      "gallery.pizza": "Pizza Moléculaire",
      "gallery.pizza.description": "Créations innovantes",
      
      // Gallery categories
      "gallery.categories.all": "Tous",
      "gallery.categories.pizza": "Pizzas",
      "gallery.categories.ingredients": "Ingrédients",
      "gallery.categories.restaurant": "Restaurant",
      "gallery.categories.preparation": "Préparation",
      "gallery.description": "Découvrez notre passion pour la pizza moléculaire à travers des images de notre établissement, nos plats et nos méthodes de préparation."
    },
  },
  de: {
    translation: {
      // CallToActionButtons texts
      reservationButton: "Tisch reservieren",
      viewMenuButton: "Menü anzeigen",
      // Navbar texts
      "navbar.logoAlt": "Il Capriccio Pizzeria",
      "navbar.toggleMenu": "Menü umschalten",
      "navbar.home": "Startseite",
      "navbar.menu": "Menü",
      "navbar.gallery": "Galerie",
      "navbar.press": "Presse",
      "navbar.reservation": "Reservierungen",
      // HistorySection texts
      "historySection.title": "UNSERE GESCHICHTE",
      "historySection.paragraph1": "Im Herzen des Zentrums von Palermo, nur wenige Schritte vom Politeama-Platz entfernt, ist Il Capriccio das innovative Projekt, das mit dem Ziel gegründet wurde, ein einzigartiges Geschmacks- und Experimentiererlebnis rund um molekulare Pizza zu bieten.",
      "historySection.paragraph2": "In einem Lokal mit modernem Stil und persönlichem Charakter spricht die <b>Pizza</b> eine zeitgenössische Sprache. Aus einer <b>Mischung ausgewählter Mehle</b> mit einem speziellen Fermentationsprozess entsteht ein leichter Teig mit einzigartiger Textur, der selbst die anspruchsvollsten Gaumen zufriedenstellt. Es ist nicht nur eine Pizza, sondern eine <b>geschmackliche Geschichte</b>, die alle Aromen Siziliens auf den Tisch bringt.",
      "historySection.paragraph3": "Alternative Optionen sind verfügbar, wie der <b>Crunch</b> mit seiner charakteristischen Knusprigkeit oder die <b>Padellini</b>, bei denen spezielle Techniken zur Teigzubereitung vor dem Backen und Belegen verwendet werden, um den <b>hochwertigen Zutaten</b>, die sorgfältig von lokalen Produzenten ausgewählt wurden, gerecht zu werden.",
      "historySection.shortParagraph1": "Il Capriccio apre le porte a Canicattini Bagni: un viaggio tra sapori e tradizioni. Un traguardo importante per Paolo Di Pietro, il cuore pulsante di questa avventura, che ha saputo conquistare i palati con la prima sede aperta ad Avola nel febbraio del 2021.",
      "historySection.shortParagraph2": "Le pizze de \"Il Capriccio\" sono una celebrazione della tradizione culinaria siciliana e napoletana, con specialità come la pizza al <b>pistacchio</b> e varie <b>opzioni gourmet</b>. La sede di Canicattini Bagni si espande anche come <b>ristorante completo</b>, riscontrando già un grande successo.",
      "historySection.image.alt": "Team von Il Capriccio Pizzeria",
      "historySection.image.caption": "Das Team von Il Capriccio Pizzeria",
      // Cookie consent texts
      "cookieConsent.text": "Wir verwenden Cookies, um Ihre Browser-Erfahrung zu verbessern. Bitte wählen Sie Ihre Präferenzen.",
      "cookieConsent.acceptAll": "Alle akzeptieren",
      "cookieConsent.acceptEssential": "Nur essenzielle",
      // CulinaryPhilosophySection texts
      "culinaryPhilosophy.item1.title": "Servizio e accoglienza",
      "culinaryPhilosophy.item1.description":
        "Amiamo prenderci cura dei nostri clienti con calore e professionalità, offrendo un'esperienza di gusto indimenticabile in un ambiente accogliente",
      "culinaryPhilosophy.item2.title": "Ingredienti di qualità",
      "culinaryPhilosophy.item2.description":
        "Selezioniamo le migliori farine e i migliori prodotti stagionali siciliani",
      "culinaryPhilosophy.item3.title": "Abbinamenti perfetti",
      "culinaryPhilosophy.item3.description":
        "Studiamo gli ingredienti e creiamo abbinamenti perfetti per esaltare i sapori",
      "culinaryPhilosophy.title": "UNSERE KULINARISCHE PHILOSOPHIE",
      "culinaryPhilosophy.subtitle": "Wir glauben, dass außergewöhnliche Pizza aus Leidenschaft, Tradition und den besten Zutaten entsteht.",
      "culinaryPhilosophy.quote": "Eine gut zubereitete Pizza ist eine Reise durch Geschmäcker, Texturen und Emotionen. Es ist mehr als Nahrung; es ist ein Erlebnis, das mit allen Sinnen genossen werden sollte.",
      "culinaryPhilosophy.quoteAuthor": "Die Brüder Mirenda",
      // Footer texts
      "footer.tagline": "Geschmack und Tradition in jedem Bissen.",
      "footer.description": 
        "Unsere Leidenschaft für traditionelle Pizza spiegelt sich in jedem Gericht wider, das wir servieren!",
      "footer.quickLinksHeader": "Schnellzugriffe",
      "footer.contactHeader": "Kontakt",
      "footer.address.line1": "Via Giuseppe Velasquez, 29/35",
      "footer.address.line2": "90141, Palermo, PA",
      "footer.phone": "Tel: +39 375 5600 247",
      "footer.email": "info@ilcapricciopizzeria.it",
      "footer.hours.weekdays": "Dienstag-Sonntag: 18:00-24:00",
      "footer.hours.monday": "Montag: Geschlossen",
      "footer.copyright": "Il Capriccio Pizzeria. Alle Rechte vorbehalten.",
      "footer.about": "Über Uns",
      "footer.newsletter.title": "Abonnieren Sie Unseren Newsletter",
      "footer.newsletter.description": "Erhalten Sie Updates über spezielle Events, neue Menüpunkte und saisonale Angebote!",
      "footer.newsletter.placeholder": "Ihre E-Mail-Adresse",
      "footer.newsletter.button": "Abonnieren",
      // LocationSection texts
      "locationSection.title": "DOVE SIAMO",
      "locationSection.subtitle": "Vieni a trovarci in una delle nostre due sedi per assaporare le nostre deliziose pizze artigianali.",
      "locationSection.hours": "Orari di Apertura",
      "locationSection.contact": "Contatti",
      "locationSection.directions": "Indicazioni Stradali",
      "locationSection.note": "Ti aspettiamo per un'esperienza gastronomica autentica e indimenticabile. Per prenotazioni, ti invitiamo a contattarci telefonicamente.",
      // PressSection texts
      "pressSection.heading": "Presse & Auszeichnungen",
      "pressSection.subtitle": "Was Kritiker und Feinschmecker über unsere innovative molekulare Pizza sagen",
      "pressSection.award": "Innovationspreis",
      "pressSection.leftArticle.title": "Ausgezeichnet für Innovation bei der Herstellung sizilianischer Pizza mit molekularen Techniken",
      "pressSection.leftArticle.preview": "Il Capriccio Pizzeria in Palermo wurde für ihren innovativen Ansatz bei der Pizzaherstellung mit molekularen gastronomischen Techniken ausgezeichnet. Ihr kreatives Menü mit Gerichten wie 'Fluoreszierende Il Capriccio' und 'Drei Käsekonsistenzen' hat die Aufmerksamkeit von Gastronomiekritikern und Enthusiasten auf sich gezogen, die ihr Engagement würdigen, die Grenzen der traditionellen Pizza zu erweitern.",
      "pressSection.leftArticle.imageAlt": "Il Capriccio Innovationspreis",
      "pressSection.leftArticle.source": "SiciliaGourmet - Dezember 2023",
      "pressSection.article.readMore": "Artikel komplett lesen",
      "pressSection.readMoreArticles": "Weitere Artikel lesen",
      // Team gallery texts
      "teamGallerySection.heading": "GALERIE",
      "teamGallerySection.viewGallery": "Vollständige Galerie anzeigen",
      "teamGallerySection.description": "Conosci le persone dietro il successo della Pizzeria Il Capriccio. Il nostro talentuoso team lavora insieme per creare esperienze culinarie indimenticabili attraverso la tradizione e la passione per la pizza siciliana.",

      // ReservationModal texts
      "reservationModal.title": "Reservieren Sie Ihren Tisch",
      "reservationModal.firstNameLabel": "Vorname",
      "reservationModal.firstNamePlaceholder": "Geben Sie Ihren Vornamen ein",
      "reservationModal.lastNameLabel": "Nachname",
      "reservationModal.lastNamePlaceholder": "Geben Sie Ihren Nachnamen ein",
      "reservationModal.phoneLabel": "Telefonnummer",
      "reservationModal.phonePlaceholder": "Geben Sie Ihre Telefonnummer ein",
      "reservationModal.dateLabel": "Datum",
      "reservationModal.timeLabel": "Uhrzeit",
      "reservationModal.timePlaceholder": "Wählen Sie eine Uhrzeit",
      "reservationModal.noTimeSlots": "Kein verfügbarer Zeitraum",
      "reservationModal.peopleLabel": "Anzahl der Personen",
      "reservationModal.personSingular": "Person",
      "reservationModal.personPlural": "Personen",
      "reservationModal.specialRequestsLabel": "Sonderwünsche",
      "reservationModal.specialRequestsPlaceholder": "Beliebige Sonderwünsche...",
      "reservationModal.submitting": "Reservierung läuft...",
      "reservationModal.submitButton": "Jetzt reservieren",
      "reservationModal.error.firstNameRequired": "Vorname ist erforderlich",
      "reservationModal.error.lastNameRequired": "Nachname ist erforderlich",
      "reservationModal.error.phoneRequired": "Telefonnummer ist erforderlich",
      "reservationModal.error.dateRequired": "Datum ist erforderlich",
      "reservationModal.error.timeRequired": "Uhrzeit ist erforderlich",
      "reservationModal.error.general": "Fehler bei der Reservierung",
      "reservationModal.successTitle": "Reservierung bestätigt!",
      "reservationModal.successMessage": "Vielen Dank, dass Sie sich für Il Capriccio Pizzeria entschieden haben",
      "reservationModal.holdTimeMessage": "Ihr Tisch bleibt 15 Minuten nach der Reservierungszeit für Sie reserviert",
      "reservationModal.closeButton": "Schließen",
      "reservationModal.contactInfo": "Contact us by phone: +39 375 5600 247",
      "reservationModal.emailLabel": "E-Mail",
      "reservationModal.emailPlaceholder": "Geben Sie Ihre E-Mail ein",
      "reservationModal.error.emailRequired": "E-Mail ist erforderlich",
      "reservationModal.error.emailInvalid": "Bitte geben Sie eine gültige E-Mail-Adresse ein",
      "reservationModal.locationLabel": "Standort",
      "reservationModal.locationPlaceholder": "Standort auswählen",
      "reservationModal.error.locationRequired": "Standort ist erforderlich",

      // Hero Section / VideoBackground
      "heroSection.subtitle": "Ein einzigartiges Geschmacks- und Innovationserlebnis im Herzen von Palermo",
      "scrollDown": "Nach unten scrollen",
      
      // Gallery Page
      "gallery.title": "DAS IST IL CAPRICCIO",
      "gallery.subtitle": "Einzigartiger Teig, Qualitätszutaten und eine warme, einladende Atmosphäre.",
      "gallery.imageAlt": "Galeriebild",
      "gallery.close": "Schließen",
      "gallery.next": "Nächstes Bild",
      "gallery.previous": "Vorheriges Bild",
      
      // VideoBackground Carousel
      "carousel.prevImage": "Vorheriges Bild",
      "carousel.nextImage": "Nächstes Bild",
      "carousel.goToImage": "Zu Bild {{number}} gehen",
      "carousel.pizzaAlt": "Handwerkliche italienische Pizza",
      "carousel.ingredientsAlt": "Pizza mit frischen Zutaten",
      "carousel.restaurantAlt": "Innenraum der Pizzeria Il Capriccio",
      
      // Error messages and states
      "error.generic": "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
      "error.loading": "Fehler beim Laden der Daten. Bitte aktualisieren Sie die Seite.",
      "loading": "Wird geladen...",
      
      // Common actions
      "action.close": "Schließen",
      "action.confirm": "Bestätigen",
      "action.cancel": "Abbrechen",
      "action.submit": "Absenden",
      "action.readMore": "Mehr lesen",
      
      // Gallery section
      "gallery.preparation": "Pizza-Zubereitung",
      "gallery.preparation.description": "Handwerkliche Teigherstellung",
      "gallery.ambiance": "Restaurant-Ambiente",
      "gallery.ambiance.description": "Moderne und einladende Atmosphäre",
      "gallery.oven": "Holzofen",
      "gallery.oven.description": "Traditionelle Garmethoden",
      "gallery.pizza": "Spezial-Pizza",
      "gallery.pizza.description": "Innovative Kreationen",
      
      // Gallery categories
      "gallery.categories.all": "Alle",
      "gallery.categories.pizza": "Pizzen",
      "gallery.categories.ingredients": "Zutaten",
      "gallery.categories.restaurant": "Restaurant",
      "gallery.categories.preparation": "Zubereitung",
      "gallery.description": "Entdecken Sie unsere Leidenschaft für Pizza durch Bilder unseres Lokals, unserer Gerichte und unserer Zubereitungsmethoden."
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("selectedLanguage") || "it", // lingua iniziale
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React gestisce già l'escaping
  },
});

export default i18n;