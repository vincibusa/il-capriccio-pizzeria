import React from 'react';

interface SEOSchemaProps {
  type: 'restaurant' | 'menu' | 'article';
}

interface RestaurantSchema {
  "@context": string;
  "@type": string;
  name: string;
  image: string;
  url: string;
  telephone: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
  servesCuisine: string[];
  priceRange: string;
  openingHoursSpecification: {
    "@type": string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }[];
  menu: string;
  acceptsReservations: string;
}

interface MenuSchema extends RestaurantSchema {
  "@type": "Menu";
  mainEntityOfPage: string;
  inLanguage: string;
  offers: {
    "@type": string;
    availability: string;
  };
  hasMenuSection: {
    "@type": string;
    name: string;
    hasMenuItem: {
      "@type": string;
      name: string;
      description: string;
      offers: {
        "@type": string;
        price: string;
        priceCurrency: string;
      };
    }[];
  }[];
}

interface ArticleSchema {
  "@context": string;
  "@type": "BlogPosting";
  headline: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: {
    "@type": string;
    name: string;
  };
  publisher: {
    "@type": string;
    name: string;
    logo: {
      "@type": string;
      url: string;
    };
  };
  mainEntityOfPage: {
    "@type": string;
    "@id": string;
  };
}

const SEOSchema: React.FC<SEOSchemaProps> = ({ type }) => {
  // Dati di base del ristorante
  const basicRestaurantData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Il Capriccio Pizzeria",
    "image": "https://ilcapricciopizzeria.it/images/storefront.jpg",
    "url": "https://ilcapricciopizzeria.it",
    "telephone": "+39 0931 775382",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "P.ZZA XX SETTEMBRE, 92",
      "addressLocality": "Canicattini Bagni",
      "postalCode": "96010",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.0342072,
      "longitude": 15.0584421
    },
    "servesCuisine": ["Siciliana", "Italiana", "Pizza", "Pizza Gourmet"],
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "18:00",
        "closes": "24:00"
      }
    ],
    "menu": "https://ilcapricciopizzeria.it/menu.pdf",
    "acceptsReservations": "True"
  };

  // Schema per il menu
  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Il Capriccio Menu",
    "mainEntityOfPage": "https://ilcapricciopizzeria.it/menu.pdf",
    "inLanguage": "it",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    },
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Pizze Classiche",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Margherita",
            "description": "Pomodoro San Marzano, mozzarella fior di latte, basilico fresco",
            "offers": {
              "@type": "Offer",
              "price": "7.00",
              "priceCurrency": "EUR"
            }
          },
          {
            "@type": "MenuItem",
            "name": "Pistacchiosa",
            "description": "Crema di pistacchio, mozzarella fior di latte, mortadella, granella di pistacchio",
            "offers": {
              "@type": "Offer",
              "price": "12.00",
              "priceCurrency": "EUR"
            }
          }
        ]
      }
    ]
  };

  // Schema per articolo/blog
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Tradizione e innovazione alla Pizzeria Il Capriccio",
    "image": "https://ilcapricciopizzeria.it/images/blog-featured.jpg",
    "datePublished": "2023-04-14",
    "dateModified": "2023-04-14",
    "author": {
      "@type": "Person",
      "name": "Paolo Di Pietro"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Il Capriccio Pizzeria",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ilcapricciopizzeria.it/images/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://ilcapricciopizzeria.it/blog"
    }
  };

  // Seleziona lo schema appropriato in base al tipo
  let schemaData: RestaurantSchema | MenuSchema | ArticleSchema = basicRestaurantData;
  if (type === 'menu') {
    schemaData = { ...basicRestaurantData, ...menuSchema } as MenuSchema;
  } else if (type === 'article') {
    schemaData = articleSchema as ArticleSchema;
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />;

};

export default SEOSchema;