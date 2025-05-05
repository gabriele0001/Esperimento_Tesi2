// Global state
const state = {
    sessionId: crypto.randomUUID(),
    currentPage: 'demographic',
    startTime: Date.now(),
    pageStartTime: Date.now(),
    timePerPages: {},
    productViews: {},
    modalViews: {},
    actions: [],
    navigation: [],
    demographics: null,
    cart: {
        smartphone: null,
        cover: null,
        powerbank: null
    },
    survey: null,
    completed: false
};

// Timer
let intervalloTimer;
const startTimer = () => {
    const timerElement = document.createElement('div');
    timerElement.className = 'timer';
    document.body.appendChild(timerElement);

    const aggiornaTimer = () => {
        const secondi = Math.floor((Date.now() - state.startTime) / 1000);
        const minuti = Math.floor(secondi / 60);
        const secondiRestanti = secondi % 60;
        timerElement.textContent = `Tempo: ${minuti}:${secondiRestanti.toString().padStart(2, '0')}`;
    };

    intervalloTimer = setInterval(aggiornaTimer, 1000);
    aggiornaTimer();
};

// Product data

const products = {
  "smartphones": [
    {
      "id": "s1",
      "name": "LitePhone 246",
      "Prezzo": 240.2,
      "description": "Smartphone moderno con ottime prestazioni.",
      "images": "1.png",
      "category": "smartphone",
      "specs": {
        "schermo": "6.1\" LCD",
        "fotocamera": "64MP + 16MP",
        "batteria": "4000mAh",
        "processore": "MediaTek Dimensity 810",
        "RAM": "8GB",
        "Memoria": "128GB"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "s2",
      "name": "EcoTouch 409",
      "Prezzo": 203.36,
      "description": "Smartphone moderno con ottime prestazioni.",
      "images": "2.png",
      "category": "smartphone",
      "specs": {
        "schermo": "6.7\" OLED",
        "fotocamera": "50MP",
        "batteria": "5000mAh",
        "processore": "Snapdragon 695",
        "RAM": "8GB",
        "Memoria": "256GB"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "s3",
      "name": "PowerVision 753",
      "Prezzo": 230.96,
      "description": "Smartphone moderno con ottime prestazioni.",
      "images": "3.png",
      "category": "smartphone",
      "specs": {
        "schermo": "6.5\" LCD",
        "fotocamera": "48MP + 12MP",
        "batteria": "5000mAh",
        "processore": "Exynos 1280",
        "RAM": "8GB",
        "Memoria": "128GB"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "s4",
      "name": "FlexMobile 865",
      "Prezzo": 205.25,
      "description": "Smartphone moderno con ottime prestazioni.",
      "images": "4.png",
      "category": "smartphone",
      "specs": {
        "schermo": "6.5\" AMOLED",
        "fotocamera": "50MP",
        "batteria": "5000mAh",
        "processore": "MediaTek Dimensity 810",
        "RAM": "6GB",
        "Memoria": "128GB"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "s5",
      "name": "EcoTouch 805",
      "Prezzo": 231.58,
      "description": "Smartphone moderno con ottime prestazioni.",
      "images": "5.png",
      "category": "smartphone",
      "specs": {
        "schermo": "6.5\" AMOLED",
        "fotocamera": "50MP",
        "batteria": "4000mAh",
        "processore": "Exynos 1280",
        "RAM": "6GB",
        "Memoria": "128GB"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 5,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "s6",
      "name": "UltraMobile 734",
      "Prezzo": 239.49,
      "description": "Smartphone moderno con ottime prestazioni.",
      "images": "5.png",
      "category": "smartphone",
      "specs": {
        "schermo": "6.5\" OLED",
        "fotocamera": "50MP",
        "batteria": "4500mAh",
        "processore": "MediaTek Dimensity 810",
        "RAM": "8GB",
        "Memoria": "256GB"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 4,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "s7",
      "name": "MaxTouch 583",
      "Prezzo": 203.9,
      "description": "Smartphone moderno con ottime prestazioni.",
      "images": "6.png",
      "category": "smartphone",
      "specs": {
        "schermo": "6.1\" OLED",
        "fotocamera": "64MP + 16MP",
        "batteria": "4000mAh",
        "processore": "Snapdragon 695",
        "RAM": "6GB",
        "Memoria": "128GB"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "s8",
      "name": "UltraTouch 568",
      "Prezzo": 244.85,
      "description": "Smartphone moderno con ottime prestazioni.",
      "images": "7.png",
      "category": "smartphone",
      "specs": {
        "schermo": "6.7\" AMOLED",
        "fotocamera": "50MP",
        "batteria": "4500mAh",
        "processore": "Exynos 1280",
        "RAM": "6GB",
        "Memoria": "128GB"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 5,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "s9",
      "name": "SlimOne 311",
      "Prezzo": 247.91,
      "description": "Smartphone moderno con ottime prestazioni.",
      "images": "8.png",
      "category": "smartphone",
      "specs": {
        "schermo": "6.7\" OLED",
        "fotocamera": "50MP",
        "batteria": "4000mAh",
        "processore": "Snapdragon 695",
        "RAM": "8GB",
        "Memoria": "256GB"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 4,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "s10",
      "name": "PowerTouch 405",
      "Prezzo": 205.29,
      "description": "Smartphone moderno con ottime prestazioni.",
      "images": "9.png",
      "category": "smartphone",
      "specs": {
        "schermo": "6.5\" OLED",
        "fotocamera": "48MP + 12MP",
        "batteria": "5000mAh",
        "processore": "MediaTek Dimensity 810",
        "RAM": "8GB",
        "Memoria": "256GB"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "s11",
      "name": "EcoOne 913",
      "Prezzo": 239.62,
      "description": "Smartphone moderno con ottime prestazioni.",
      "images": "10.png",
      "category": "smartphone",
      "specs": {
        "schermo": "6.1\" OLED",
        "fotocamera": "64MP + 16MP",
        "batteria": "4000mAh",
        "processore": "Exynos 1280",
        "RAM": "8GB",
        "Memoria": "256GB"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "s12",
      "name": "PowerPhone 514",
      "Prezzo": 231.87,
      "description": "Smartphone moderno con ottime prestazioni.",
      "images": "11.png",
      "category": "smartphone",
      "specs": {
        "schermo": "6.7\" LCD",
        "fotocamera": "64MP + 16MP",
        "batteria": "4500mAh",
        "processore": "Snapdragon 695",
        "RAM": "6GB",
        "Memoria": "256GB"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "s13",
      "name": "SmartPhone 524",
      "Prezzo": 249.24,
      "description": "Smartphone moderno con ottime prestazioni.",
      "images": "12.png",
      "category": "smartphone",
      "specs": {
        "schermo": "6.5\" OLED",
        "fotocamera": "50MP",
        "batteria": "5000mAh",
        "processore": "Exynos 1280",
        "RAM": "6GB",
        "Memoria": "256GB"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 5,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "s14",
      "name": "LiteMobile 147",
      "Prezzo": 232.31,
      "description": "Smartphone moderno con ottime prestazioni.",
      "images": "13.png",
      "category": "smartphone",
      "specs": {
        "schermo": "6.1\" LCD",
        "fotocamera": "64MP + 16MP",
        "batteria": "4000mAh",
        "processore": "Exynos 1280",
        "RAM": "6GB",
        "Memoria": "256GB"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 4,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "s15",
      "name": "SlimVision 750",
      "Prezzo": 223.35,
      "description": "Smartphone moderno con ottime prestazioni.",
      "images": "14.png",
      "category": "smartphone",
      "specs": {
        "schermo": "6.5\" AMOLED",
        "fotocamera": "48MP + 12MP",
        "batteria": "5000mAh",
        "processore": "Exynos 1280",
        "RAM": "6GB",
        "Memoria": "128GB"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "s16",
      "name": "NovaPhone 745",
      "Prezzo": 205.06,
      "description": "Smartphone moderno con ottime prestazioni.",
      "images": "15.png",
      "category": "smartphone",
      "specs": {
        "schermo": "6.7\" LCD",
        "fotocamera": "50MP",
        "batteria": "4500mAh",
        "processore": "MediaTek Dimensity 810",
        "RAM": "8GB",
        "Memoria": "256GB"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "s17",
      "name": "SlimMobile 971",
      "Prezzo": 236.69,
      "description": "Smartphone moderno con ottime prestazioni.",
      "images": "16.png",
      "category": "smartphone",
      "specs": {
        "schermo": "6.5\" AMOLED",
        "fotocamera": "50MP",
        "batteria": "5000mAh",
        "processore": "Exynos 1280",
        "RAM": "6GB",
        "Memoria": "256GB"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 5,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "s18",
      "name": "NovaVision 955",
      "Prezzo": 236.85,
      "description": "Smartphone moderno con ottime prestazioni.",
      "images": "17.png",
      "category": "smartphone",
      "specs": {
        "schermo": "6.5\" LCD",
        "fotocamera": "64MP + 16MP",
        "batteria": "5000mAh",
        "processore": "Exynos 1280",
        "RAM": "8GB",
        "Memoria": "256GB"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 4,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "s19",
      "name": "PowerPhone 622",
      "Prezzo": 208.02,
      "description": "Smartphone moderno con ottime prestazioni.",
      "images": "18.png",
      "category": "smartphone",
      "specs": {
        "schermo": "6.7\" AMOLED",
        "fotocamera": "50MP",
        "batteria": "5000mAh",
        "processore": "MediaTek Dimensity 810",
        "RAM": "6GB",
        "Memoria": "128GB"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 5,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "s20",
      "name": "LiteMobile 412",
      "Prezzo": 227.3,
      "description": "Smartphone moderno con ottime prestazioni.",
      "images": "19.png",
      "category": "smartphone",
      "specs": {
        "schermo": "6.7\" AMOLED",
        "fotocamera": "64MP + 16MP",
        "batteria": "5000mAh",
        "processore": "MediaTek Dimensity 810",
        "RAM": "8GB",
        "Memoria": "128GB"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 4,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    }
  ],
  "covers": [
    {
      "id": "c1",
      "name": "SmartCase 185",
      "Prezzo": 14.67,
      "description": "Cover protettiva di alta qualità.",
      "images": "25.png",
      "category": "cover",
      "specs": {
        "materiale": "Alluminio",
        "colore": "Blu",
        "protezione": "Antiurto fino a 2m"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "c2",
      "name": "SlimShell 219",
      "Prezzo": 12.37,
      "description": "Cover protettiva di alta qualità.",
      "images": "26.png",
      "category": "cover",
      "specs": {
        "materiale": "Ecopelle",
        "colore": "Trasparente",
        "protezione": "Antiurto fino a 2m"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 5,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "c3",
      "name": "FlexCase 704",
      "Prezzo": 11.1,
      "description": "Cover protettiva di alta qualità.",
      "images": "26.png",
      "category": "cover",
      "specs": {
        "materiale": "TPU",
        "colore": "Trasparente",
        "protezione": "Antiurto fino a 2m"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "c4",
      "name": "PowerCover 829",
      "Prezzo": 14.61,
      "description": "Cover protettiva di alta qualità.",
      "images": "26.png",
      "category": "cover",
      "specs": {
        "materiale": "Silicone",
        "colore": "Trasparente",
        "protezione": "Antiurto fino a 2m"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "c5",
      "name": "FlexShell 137",
      "Prezzo": 13.08,
      "description": "Cover protettiva di alta qualità.",
      "images": "23.png",
      "category": "cover",
      "specs": {
        "materiale": "Alluminio",
        "colore": "Rosso",
        "protezione": "Antiurto fino a 2m"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 5,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "c6",
      "name": "EcoProtector 484",
      "Prezzo": 14.26,
      "description": "Cover protettiva di alta qualità.",
      "images": "21.png",
      "category": "cover",
      "specs": {
        "materiale": "Silicone",
        "colore": "Nero",
        "protezione": "Antiurto fino a 2m"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 4,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "c7",
      "name": "SlimProtector 811",
      "Prezzo": 10.39,
      "description": "Cover protettiva di alta qualità.",
      "images": "26.png",
      "category": "cover",
      "specs": {
        "materiale": "Silicone",
        "colore": "Trasparente",
        "protezione": "Antiurto fino a 2m"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 4,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "c8",
      "name": "MaxShell 959",
      "Prezzo": 13.68,
      "description": "Cover protettiva di alta qualità.",
      "images": "22.png",
      "category": "cover",
      "specs": {
        "materiale": "Silicone",
        "colore": "Verde",
        "protezione": "Antiurto fino a 2m"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 5,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "c9",
      "name": "UltraCover 578",
      "Prezzo": 12.99,
      "description": "Cover protettiva di alta qualità.",
      "images": "25.png",
      "category": "cover",
      "specs": {
        "materiale": "Alluminio",
        "colore": "Blu",
        "protezione": "Antiurto fino a 2m"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 4,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "c10",
      "name": "ProCase 247",
      "Prezzo": 13.27,
      "description": "Cover protettiva di alta qualità.",
      "images": "23.png",
      "category": "cover",
      "specs": {
        "materiale": "Policarbonato",
        "colore": "Rosso",
        "protezione": "Antiurto fino a 2m"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "c11",
      "name": "UltraProtector 197",
      "Prezzo": 11.75,
      "description": "Cover protettiva di alta qualità.",
      "images": "24.png",
      "category": "cover",
      "specs": {
        "materiale": "Silicone",
        "colore": "Grigio",
        "protezione": "Antiurto fino a 2m"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 5,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "c12",
      "name": "SlimProtector 806",
      "Prezzo": 11.43,
      "description": "Cover protettiva di alta qualità.",
      "images": "21.png",
      "category": "cover",
      "specs": {
        "materiale": "TPU",
        "colore": "Nero",
        "protezione": "Antiurto fino a 2m"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 5,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "c13",
      "name": "EcoProtector 332",
      "Prezzo": 11.6,
      "description": "Cover protettiva di alta qualità.",
      "images": "24.png",
      "category": "cover",
      "specs": {
        "materiale": "Ecopelle",
        "colore": "Grigio",
        "protezione": "Antiurto fino a 2m"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 5,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "c14",
      "name": "UltraCase 871",
      "Prezzo": 11.99,
      "description": "Cover protettiva di alta qualità.",
      "images": "25.png",
      "category": "cover",
      "specs": {
        "materiale": "Alluminio",
        "colore": "Blu",
        "protezione": "Antiurto fino a 2m"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 4,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "c15",
      "name": "FlexCover 541",
      "Prezzo": 12.12,
      "description": "Cover protettiva di alta qualità.",
      "images": "24.png",
      "category": "cover",
      "specs": {
        "materiale": "Policarbonato",
        "colore": "Grigio",
        "protezione": "Antiurto fino a 2m"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 4,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "c16",
      "name": "SlimCase 826",
      "Prezzo": 11.01,
      "description": "Cover protettiva di alta qualità.",
      "images": "23.png",
      "category": "cover",
      "specs": {
        "materiale": "Alluminio",
        "colore": "Rosso",
        "protezione": "Antiurto fino a 2m"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "c17",
      "name": "LiteShell 858",
      "Prezzo": 14.18,
      "description": "Cover protettiva di alta qualità.",
      "images": "24.png",
      "category": "cover",
      "specs": {
        "materiale": "Silicone",
        "colore": "Grigio",
        "protezione": "Antiurto fino a 2m"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "c18",
      "name": "PowerProtector 694",
      "Prezzo": 10.29,
      "description": "Cover protettiva di alta qualità.",
      "images": "23.png",
      "category": "cover",
      "specs": {
        "materiale": "Ecopelle",
        "colore": "Rosso",
        "protezione": "Antiurto fino a 2m"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 5,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "c19",
      "name": "SlimCase 735",
      "Prezzo": 11.58,
      "description": "Cover protettiva di alta qualità.",
      "images": "22.png",
      "category": "cover",
      "specs": {
        "materiale": "TPU",
        "colore": "Verde",
        "protezione": "Antiurto fino a 2m"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "c20",
      "name": "NovaGrip 318",
      "Prezzo": 13.91,
      "description": "Cover protettiva di alta qualità.",
      "images": "25.png",
      "category": "cover",
      "specs": {
        "materiale": "TPU",
        "colore": "Blu",
        "protezione": "Antiurto fino a 2m"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    }
  ],
  "powerbanks": [
    {
      "id": "p1",
      "name": "PowerCharge 174",
      "Prezzo": 25.49,
      "description": "Powerbank compatto ad alta capacità.",
      "images": "a.png",
      "category": "powerbank",
      "specs": {
        "capacità": "20000mAh",
        "porte": "USB-C + 2x USB-A",
        "colore": "Nero"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 5,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "p2",
      "name": "PowerBattery 462",
      "Prezzo": 28.52,
      "description": "Powerbank compatto ad alta capacità.",
      "images": "b.png",
      "category": "powerbank",
      "specs": {
        "capacità": "10000mAh",
        "porte": "USB-C + 2x USB-A",
        "colore": "Grigio"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 4,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "p3",
      "name": "PowerPowerbank 292",
      "Prezzo": 22.43,
      "description": "Powerbank compatto ad alta capacità.",
      "images": "b.png",
      "category": "powerbank",
      "specs": {
        "capacità": "10000mAh",
        "porte": "USB-C + 2x USB-A",
        "colore": "Grigio"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 5,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "p4",
      "name": "UltraPack 849",
      "Prezzo": 24.22,
      "description": "Powerbank compatto ad alta capacità.",
      "images": "c.png",
      "category": "powerbank",
      "specs": {
        "capacità": "10000mAh",
        "porte": "USB-C + 2x USB-A",
        "colore": "Verde Acqua"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "p5",
      "name": "PowerBoost 626",
      "Prezzo": 25.02,
      "description": "Powerbank compatto ad alta capacità.",
      "images": "d.png",
      "category": "powerbank",
      "specs": {
        "capacità": "20000mAh",
        "porte": "USB-C + 2x USB-A",
        "colore": "Verde chiaro"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 5,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "p6",
      "name": "FlexBattery 869",
      "Prezzo": 28.16,
      "description": "Powerbank compatto ad alta capacità.",
      "images": "e.png",
      "category": "powerbank",
      "specs": {
        "capacità": "20000mAh",
        "porte": "USB-C + 2x USB-A",
        "colore": "Rosso"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 5,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "p7",
      "name": "NovaCharge 940",
      "Prezzo": 24.29,
      "description": "Powerbank compatto ad alta capacità.",
      "images": "a.png",
      "category": "powerbank",
      "specs": {
        "capacità": "10000mAh",
        "porte": "USB-C + 2x USB-A",
        "colore": "Nero"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 5,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "p8",
      "name": "ProPack 747",
      "Prezzo": 21.23,
      "description": "Powerbank compatto ad alta capacità.",
      "images": "f.png",
      "category": "powerbank",
      "specs": {
        "capacità": "10000mAh",
        "porte": "USB-C + 2x USB-A",
        "colore": "Blu"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 5,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "p9",
      "name": "SmartBoost 944",
      "Prezzo": 29.01,
      "description": "Powerbank compatto ad alta capacità.",
      "images": "g.png",
      "category": "powerbank",
      "specs": {
        "capacità": "10000mAh",
        "porte": "USB-C + 2x USB-A",
        "colore": "Verde"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 5,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "p10",
      "name": "PowerPack 320",
      "Prezzo": 27.71,
      "description": "Powerbank compatto ad alta capacità.",
      "images": "e.png",
      "category": "powerbank",
      "specs": {
        "capacità": "20000mAh",
        "porte": "USB-C + 2x USB-A",
        "colore": "Rosso"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 4,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "p11",
      "name": "SmartCharge 337",
      "Prezzo": 23.93,
      "description": "Powerbank compatto ad alta capacità.",
      "images": "f.png",
      "category": "powerbank",
      "specs": {
        "capacità": "20000mAh",
        "porte": "USB-C + 2x USB-A",
        "colore": "Blu"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 5,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "p12",
      "name": "ProPack 568",
      "Prezzo": 21.47,
      "description": "Powerbank compatto ad alta capacità.",
      "images": "c.png",
      "category": "powerbank",
      "specs": {
        "capacità": "20000mAh",
        "porte": "USB-C + 2x USB-A",
        "colore": "Verde acqua"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 5,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "p13",
      "name": "LiteBoost 243",
      "Prezzo": 28.32,
      "description": "Powerbank compatto ad alta capacità.",
      "images": "g.png",
      "category": "powerbank",
      "specs": {
        "capacità": "10000mAh",
        "porte": "USB-C + 2x USB-A",
        "colore": "Verde"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "p14",
      "name": "SmartBoost 398",
      "Prezzo": 29.49,
      "description": "Powerbank compatto ad alta capacità.",
      "images": "e.png",
      "category": "powerbank",
      "specs": {
        "capacità": "20000mAh",
        "porte": "USB-C + 2x USB-A",
        "colore": "Rosso"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "p15",
      "name": "LiteCharge 847",
      "Prezzo": 27.39,
      "description": "Powerbank compatto ad alta capacità.",
      "images": "d.png",
      "category": "powerbank",
      "specs": {
        "capacità": "20000mAh",
        "porte": "USB-C + 2x USB-A",
        "colore": "Verde chiaro"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 4,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "p16",
      "name": "FlexCharge 274",
      "Prezzo": 20.93,
      "description": "Powerbank compatto ad alta capacità.",
      "images": "a.png",
      "category": "powerbank",
      "specs": {
        "capacità": "20000mAh",
        "porte": "USB-C + 2x USB-A",
        "colore": "Nero"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 4,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "p17",
      "name": "SlimBoost 339",
      "Prezzo": 22.94,
      "description": "Powerbank compatto ad alta capacità.",
      "images": "f.png",
      "category": "powerbank",
      "specs": {
        "capacità": "20000mAh",
        "porte": "USB-C + 2x USB-A",
        "colore": "Blu"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "p18",
      "name": "PowerBattery 775",
      "Prezzo": 29.79,
      "description": "Powerbank compatto ad alta capacità.",
      "images": "e.png",
      "category": "powerbank",
      "specs": {
        "capacità": "20000mAh",
        "porte": "USB-C + 2x USB-A",
        "colore": "Rosso"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 4,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "p19",
      "name": "MaxPack 454",
      "Prezzo": 28.18,
      "description": "Powerbank compatto ad alta capacità.",
      "images": "b.png",
      "category": "powerbank",
      "specs": {
        "capacità": "20000mAh",
        "porte": "USB-C + 2x USB-A",
        "colore": "Grigio"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 3,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    },
    {
      "id": "p20",
      "name": "SlimBattery 368",
      "Prezzo": 24.47,
      "description": "Powerbank compatto ad alta capacità.",
      "images": "a.png",
      "category": "powerbank",
      "specs": {
        "capacità": "20000mAh",
        "porte": "USB-C + 2x USB-A",
        "colore": "Nero"
      },
      "recensioni": [
        {
          "author": "Utente A",
          "stars": 5,
          "text": "Prodotto di qualità, molto soddisfatto."
        },
        {
          "author": "Utente B",
          "stars": 5,
          "text": "Buon rapporto qualità-prezzo."
        }
      ]
    }
  ]
}

// Budget limits
const budgets = {
    smartphone: 250,
    cover: 15,
    powerbank: 30
};


const tracciaCambioPagina = (nuovaPagina) => {
    const fine = Date.now();
    const tempoTrascorso = fine - state.pageStartTime;
    state.timePerPages[state.currentPage] = (state.timePerPages[state.currentPage] || 0) + tempoTrascorso;
    state.pageStartTime = fine;
    state.currentPage = nuovaPagina;
    state.navigation.push({
        from: state.currentPage,
        to: nuovaPagina,
        timestamp: fine
    });
};

const registraAzione = (azione, dettagli = {}) => {
    state.actions.push({
        action: azione,
        timestamp: Date.now(),
        page: state.currentPage,
        ...dettagli
    });
};

// Render functions
const renderDemographic = () => {
    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `
        <div class="header">
            <h1>Studio di ricerca sugli e-commerce</h1>
            <p>Perfavore, fornisci le tue informazioni demografiche per iniziare</p>
        </div>
        <form id="demographicForm">
            <div class="form-group">
                <label for="Età">Età:</label>
                <input type="number" id="Età" required min="18" max="100">
            </div>
            <div class="form-group">
                <label for="Genere">Genere:</label>
                <select id="Genere" required>
                    <option value="">Seleziona il tuo genere</option>
                    <option value="Uomo">Uomo</option>
                    <option value="Donna">Donna</option>
                    <option value="Altro">Altro</option>
                </select>
            </div>
            <div class="form-group">
                <label>Esperienza con gli e-commerce (1-5):</label>
                <div class="radio-group">
                    ${[1,2,3,4,5].map(num => `
                        <label>
                            <input type="radio" name="experience" value="${num}" required>
                            ${num}
                        </label>
                    `).join('')}
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Inizia</button>
        </form>
    `;

    container.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        state.demographics = {
            Età: parseInt(document.getElementById('Età').value),
            Genere: document.getElementById('Genere').value,
            experience: parseInt(document.querySelector('input[name="experience"]:checked').value)
        };
        registraAzione('submit_demographics', state.demographics);
        tracciaCambioPagina('instructions');
        renderApp();
    });

    return container;
};

const renderInstructions = () => {
    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `
        <div class="header">
            <h1>Istruzioni</h1>
            <p>Benvenuto in questo studio di ricerca sugli e-commerce. Per favore, leggi attentamente le istruzioni.</p>
        </div>
        <div class="content">
            <h2>Obiettivo </h2>
            <p>Immagina di voler acquistare tre prodotti:</p>
            <ul>
                <li>Uno smartphone (Budget: €${budgets.smartphone})</li>
                <li>Una cover per il telefono (per semplicità assumi che le cover siano tutte per il telefono che hai deciso di acquistare prima) (Budget: €${budgets.cover})</li>
                <li>Un power bank (Budget: €${budgets.powerbank})</li>
            </ul>
            <p>Note importanti:</p>
            <ul>
                <li>Puoi andare avanti e indietro, puoi anche non acquistare nulla</li>
                <li>Puoi selezionare massimo un oggetto per categoria</li>
                <li>Cerca di ragionare come se stessi davvero facendo quegli acquisti</li>
            </ul>
            <div class="button-group">
                <button class="btn btn-primary" id="startShopping">Inizia l'acquisto</button>
            </div>
        </div>
    `;

    container.querySelector('#startShopping').addEventListener('click', () => {
        registraAzione('start_shopping');
        tracciaCambioPagina('smartphones');
        renderApp();
    });

    return container;
};

const renderStars = (count) => {
    return '★'.repeat(count) + '☆'.repeat(5-count);
};

const renderProductSection = (category) => {
    const container = document.createElement('div');
    container.className = 'container';
    
    const productList = products[category];
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
    const budget = budgets[productList[0].category];
    
    container.innerHTML = `
        <div class="header">
            <h1>${categoryName}</h1>
            <p>Budget: €${budget}</p>
        </div>
        <div class="products-grid">
            ${productList.map(product => `
                <div class="product-card">
                    <img src="${product.images}" alt="${product.name}" class="product-images" data-id="${product.id}">
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-Prezzo">€${product.Prezzo}</p>
                        <p class="product-description">${product.description}</p>
                        <div class="button-group">
                            <button class="btn btn-primary add-to-cart" data-id="${product.id}">
                                aggiungi al carrello
                            </button>
                            <button class="btn btn-secondary view-details" data-id="${product.id}">
                                Dettagli
                            </button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="navigation">
            <button class="btn btn-secondary back">Indietro</button>
            <button class="btn btn-secondary Avanti">Avanti</button>
            ${category === 'powerbanks' ? '<button class="btn btn-primary finish">Concludi</button>' : ''}
        </div>
    `;

    // Event listeners
    container.querySelectorAll('.product-images').forEach(img => {
        img.addEventListener('click', () => {
            const product = productList.find(p => p.id === img.dataset.id);
            registraAzione('view_product_modal', { productId: product.id });
            renderProductModal(product);
        });
    });

    container.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            const product = productList.find(p => p.id === btn.dataset.id);
            state.cart[product.category] = product;
            registraAzione('add_to_cart', { productId: product.id });
            renderApp();
        });
    });

    container.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', () => {
            const product = productList.find(p => p.id === btn.dataset.id);
            registraAzione('view_details', { productId: product.id });
            renderProductModal(product);
        });
    });

    container.querySelector('.back').addEventListener('click', () => {
        registraAzione('navigation', { action: 'back' });
        const prevPages = category === 'smartphones' ? 'instructions' :
                        category === 'covers' ? 'smartphones' : 'covers';
        tracciaCambioPagina(prevPages);
        renderApp();
    });

    container.querySelector('.Avanti').addEventListener('click', () => {
        registraAzione('navigation', { action: 'Avanti' });
        const nextPages = category === 'smartphones' ? 'covers' :
                        category === 'covers' ? 'powerbanks' : 'survey';
        tracciaCambioPagina(nextPages);
        renderApp();
    });

    if (category === 'powerbanks') {
        container.querySelector('.finish').addEventListener('click', () => {
            registraAzione('navigation', { action: 'finish' });
            tracciaCambioPagina('survey');
            renderApp();
        });
    }

    return container;
};

const renderProductModal = (product) => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>${product.name}</h2>
            <img src="${product.images}" alt="${product.name}" style="width: 100%; max-width: 300px;">
            <p>${product.description}</p>
            <h3>Prezzo: €${product.Prezzo}</h3>
            <h3>Specifiche:</h3>
            <ul>
                ${Object.entries(product.specs).map(([key, value]) => `
                    <li><strong>${key}:</strong> ${value}</li>
                `).join('')}
            </ul>
            <h3>recensioni:</h3>
            ${product.recensioni.map(review => `
                <div class="review">
                    <p><strong>${review.author}</strong></p>
                    <div class="stars">${renderStars(review.stars)}</div>
                    <p>${review.text}</p>
                </div>
            `).join('')}
            <button class="btn btn-secondary close-modal">Chiudi</button>
        </div>
    `;

    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
        registraAzione('close_modal', { productId: product.id });
    });

    document.body.appendChild(modal);
    registraAzione('open_modal', { productId: product.id });
};

const renderSurvey = () => {
    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `
        <div class="header">
            <h1>Questionario Finale</h1>
            <p>Per favore valuta la tua esperienza di acquisto:</p>
        </div>
        <form id="surveyForm">
            ${[
                'Quanto sei soddisfatto della tua esperienza di acquisto?',
                'Quanto ti sei sentito stressato o confuso durante il processo?',
                'Quanto è probabile che faresti questi acquisti nella vita reale?'
            ].map((question, index) => `
                <div class="form-group">
                    <label>${question}</label>
                    <div class="likert-scale">
                        ${[1,2,3,4,5,6,7].map(num => `
                            <div class="likert-option">
                                <input type="radio" name="q${index}" value="${num}" required>
                                <label>${num}</label>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}

            <!-- Domande aperte -->
            <div class="form-group">
                <label for="open1">Se hai scelto di acquistare, cosa ti ha influenzato di più nella scelta?</label>
                <textarea id="open1" rows="4" required></textarea>
            </div>
            <div class="form-group">
                <label for="open2">Cosa ti ha colpito di più o cosa miglioreresti?</label>
                <textarea id="open2" rows="4" required></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Invia</button>
        </form>
    `;

    container.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        state.survey = {
            satisfaction: parseInt(document.querySelector('input[name="q0"]:checked').value),
            stress: parseInt(document.querySelector('input[name="q1"]:checked').value),
            purchaseIntent: parseInt(document.querySelector('input[name="q2"]:checked').value),
            comment: document.getElementById('open1').value.trim(),
            suggestion: document.getElementById('open2').value.trim()
        };
        registraAzione('submit_survey', state.survey);
        submitData();
    });

    return container;
};


const renderThankYou = () => {
    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `
        <div class="header">
            <h1>Thank You!</h1>
            <p>Your participation in this research study is greatly appreciated.</p>
            <p>Your responses have been recorded successfully.</p>
        </div>
    `;
    return container;
};

const renderCart = () => {
    if (state.currentPage === 'demographic' || state.currentPage === 'instructions') {
        return '';
    }

    const cartItems = Object.entries(state.cart).filter(([_, item]) => item !== null);

    return `
        <div class="cart">
            <h2>Il tuo carrello</h2>
            ${cartItems.length === 0 ? '<p>Il tuo carrello è vuoto</p>' : ''}
            ${cartItems.map(([category, item]) => `
                <div class="cart-item">
                    <span>${item.name} - €${item.Prezzo}</span>
                    <button class="btn btn-danger remove-from-cart" data-category="${category}">Rimuovi</button>
                </div>
            `).join('')}
        </div>
    `;
};


const submitData = async () => {
    state.completed = true;

    // ⏱️ Traccia il tempo della pagina corrente prima di inviare
    tracciaCambioPagina(state.currentPage);

    console.log("🚀 Inizio invio dati a Supabase...");

    // DEBUG: visualizza timePerPage
    console.log("🕒 state.timePerPage:", state.timePerPage);
    console.log("🕒 typeof state.timePerPage:", typeof state.timePerPage);

    // Calcolo tempo per pagina con fallback
    let perPage = {};
    if (state.timePerPage && typeof state.timePerPage === 'object') {
        perPage = Object.entries(state.timePerPage).reduce((acc, [key, value]) => {
            acc[key] = Math.round(value / 1000);
            return acc;
        }, {});
    } else {
        console.warn("⚠️ state.timePerPage è null o non oggetto. Salto calcolo tempo per pagina.");
    }

    const finalState = {
        session_id: state.sessionId,
        demographic_data: state.demographics,
        cart: state.cart,
        product_choices: { // 💥 NOME CORRETTO (senza 's')
            smartphone: state.cart.smartphone,
            cover: state.cart.cover,
            powerbank: state.cart.powerbank
        },
        time_data: {
            total_time: Math.round((Date.now() - state.startTime) / 1000),
            per_page: perPage
        },
        interaction_data: {
            actions: state.actions,
            modal_views: state.modalViews,
            product_views: state.productViews
        },
        pages_visited: state.navigation, // 💥 ricordati di avere tipo JSONB nella tabella
        feedback: state.survey,
        timestamp: new Date().toISOString(),
        completed: true
    };

    console.log("📦 Dati da inviare:", finalState);

   try {
    const res = await fetch('https://mhmohplcrkxddduqorxn.supabase.co/rest/v1/shopping_sessions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1obW9ocGxjcmt4ZGRkdXFvcnhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNzQxMDMsImV4cCI6MjA1ODc1MDEwM30.tZHMIdDoISveaTiWI81jl3d7oy0vE9laxjiZHfq04NM',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1obW9ocGxjcmt4ZGRkdXFvcnhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNzQxMDMsImV4cCI6MjA1ODc1MDEwM30.tZHMIdDoISveaTiWI81jl3d7oy0vE9laxjiZHfq04NM'
        },
        body: JSON.stringify(finalState)
    });

    console.log("📬 Status Supabase:", res.status);

    if (res.ok) {
        // Controlla se c'è un body JSON nella risposta
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const result = await res.json();
            console.log("✅ Risposta Supabase:", result);
        } else {
            console.log("✅ Supabase ha risposto correttamente (senza body).");
        }

        tracciaCambioPagina('thankyou');
        renderApp();
    } else {
        // Supabase ha risposto con un errore
        const errorText = await res.text();
        console.error("❌ Errore da Supabase:", res.status, errorText);
    }

} catch (error) {
    console.error("🔥 Errore di rete o fetch fallita:", error);
}

};


const renderApp = () => {
    const app = document.getElementById('app');
    app.innerHTML = '';

    let content;
    switch (state.currentPage) {
        case 'demographic':
            content = renderDemographic();
            break;
        case 'instructions':
            content = renderInstructions();
            break;
        case 'smartphones':
            content = renderProductSection('smartphones');
            break;
        case 'covers':
            content = renderProductSection('covers');
            break;
        case 'powerbanks':
            content = renderProductSection('powerbanks');
            break;
        case 'survey':
            content = renderSurvey();
            break;
        case 'thankyou':
            content = renderThankYou();
            break;
    }

    app.appendChild(content);

    if (state.currentPage !== 'demographic' && state.currentPage !== 'instructions') {
        app.insertAdjacentHTML('beforeend', renderCart());

        document.querySelectorAll('.remove-from-cart').forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.dataset.category;
                state.cart[category] = null;
                registraAzione('remove_from_cart', { category });
                renderApp();
            });
        });
    }
};


// Initialize app
const init = () => {
    startTimer();

    // Handle Pages unload
    window.addEventListener('beforeunload', async (e) => {
        if (!state.completed) {
            e.preventDefault();
            e.returnValue = '';
            await submitData();
        }
    });

    renderApp();
};

// Start the application
init();
