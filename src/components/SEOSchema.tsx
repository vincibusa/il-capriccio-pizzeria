import React from 'react';
import { Helmet } from 'react-helmet-async';

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
    "telephone": "+39 091 611 9472",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Isidoro La Lumia, 32",
      "addressLocality": "Palermo",
      "postalCode": "90139",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.1252,
      "longitude": 13.3535
    },
    "servesCuisine": ["Sicilian", "Italian", "Pizza"],
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "19:00",
        "closes": "24:00"
      }
    ],
    "menu": "https://ilcapricciopizzeria.it/menu",
    "acceptsReservations": "True"
  };

  // Schema per il menu
  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Il Capriccio Menu",
    "mainEntityOfPage": "https://ilcapricciopizzeria.it/menu",
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
            "description": "Pomodoro San Marzano, mozzarella di bufala, basilico fresco",
            "offers": {
              "@type": "Offer",
              "price": "8.00",
              "priceCurrency": "EUR"
            }
          },
          {
            "@type": "MenuItem",
            "name": "Capricciosa",
            "description": "Pomodoro San Marzano, mozzarella di bufala, prosciutto cotto, funghi, carciofi, olive nere",
            "offers": {
              "@type": "Offer",
              "price": "10.50",
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
    "datePublished": "2023-11-15",
    "dateModified": "2023-11-15",
    "author": {
      "@type": "Person",
      "name": "Staff Il Capriccio"
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

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEOSchema;