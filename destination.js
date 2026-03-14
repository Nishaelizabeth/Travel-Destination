// Extended Data for Destination Pages
const destinationData = {
    paris: {
        name: "Paris, France",
        bannerImage: "https://loremflickr.com/1440/600/paris,city",
        shortDesc: "Famous for art, architecture, and the iconic Eiffel Tower. A timeless city of romance, fashion, and gastronomy.",
        bestTime: "April – June, September – October",
        gallery: [
            "https://loremflickr.com/600/400/paris,eiffeltower",
            "https://loremflickr.com/600/400/paris,louvre",
            "https://loremflickr.com/600/400/paris,seine",
            "https://loremflickr.com/600/400/paris,cafe"
        ],
        hotels: [
            { name: "Grand Paris Hotel", price: "€220", image: "https://loremflickr.com/400/300/hotel,paris", desc: "Luxury rooms near the Eiffel Tower.", location: "7th Arrondissement" },
            { name: "Riverside Palace", price: "€180", image: "https://loremflickr.com/400/300/hotel,luxury", desc: "Classic styled suites with river views.", location: "1st Arrondissement" },
            { name: "Le Marais Boutique", price: "€140", image: "https://loremflickr.com/400/300/hotel,boutique", desc: "Cozy stay in the historic district.", location: "3rd Arrondissement" }
        ],
        foodSpots: [
            { name: "Le Gourmet Paris", price: "€12", famousDish: "French Croissants", image: "https://loremflickr.com/400/300/croissant" },
            { name: "Cafe Montmartre", price: "€15", famousDish: "French Onion Soup", image: "https://loremflickr.com/400/300/soup" },
            { name: "L'Escargot Doré", price: "€35", famousDish: "Escargot in Garlic Butter", image: "https://loremflickr.com/400/300/restaurant" }
        ],
        activities: [
            "Visit the Eiffel Tower",
            "Walk along the Seine River",
            "Explore the Louvre Museum",
            "Visit Montmartre and Sacré-Cœur"
        ],
        tips: [
            "Use the Metro for easier transportation.",
            "Book museum tickets early, especially during summer.",
            "Early mornings are best for sightseeing with fewer crowds."
        ]
    },
    venice: {
        name: "Venice, Italy",
        bannerImage: "https://loremflickr.com/1440/600/venice,canal",
        shortDesc: "A romantic city built on water, renowned for its beautiful historic canals, stunning architecture, and rich artistry.",
        bestTime: "April – June",
        gallery: [
            "https://loremflickr.com/600/400/venice,gondola",
            "https://loremflickr.com/600/400/venice,stmarks",
            "https://loremflickr.com/600/400/venice,bridge",
            "https://loremflickr.com/600/400/venice,sunset"
        ],
        hotels: [
            { name: "Canal Grande Hotel", price: "€250", image: "https://loremflickr.com/400/300/hotel,venice", desc: "Overlooking the main waterway.", location: "San Marco" },
            { name: "Palazzo Veneziano", price: "€190", image: "https://loremflickr.com/400/300/hotel,palace", desc: "Traditional Venetian style decor.", location: "Dorsoduro" },
            { name: "Hidden Bridge Inn", price: "€130", image: "https://loremflickr.com/400/300/hotel,italy", desc: "Quiet courtyard stay.", location: "Cannaregio" }
        ],
        foodSpots: [
            { name: "Trattoria da Mario", price: "€18", famousDish: "Squid Ink Pasta", image: "https://loremflickr.com/400/300/pasta" },
            { name: "Rialto Seafood", price: "€25", famousDish: "Fritto Misto", image: "https://loremflickr.com/400/300/seafood" },
            { name: "Cafe del Doge", price: "€8", famousDish: "Authentic Tiramisu", image: "https://loremflickr.com/400/300/coffee" }
        ],
        activities: [
            "Take a Gondola ride at sunset",
            "Visit St. Mark's Basilica",
            "Walk across the Rialto Bridge",
            "Explore the colorful island of Burano"
        ],
        tips: [
            "Pack light luggage as you'll be crossing many bridges.",
            "The Vaporetto (water bus) is the easiest way to get around.",
            "Wander away from the main squares to find cheap, authentic food."
        ]
    },
    santorini: {
        name: "Santorini, Greece",
        bannerImage: "https://loremflickr.com/1440/600/santorini,view",
        shortDesc: "A beautiful island known for its iconic white-washed, blue-domed houses overlooking the stunning Aegean Sea.",
        bestTime: "May – October",
        gallery: [
            "https://loremflickr.com/600/400/santorini,oia",
            "https://loremflickr.com/600/400/santorini,sea",
            "https://loremflickr.com/600/400/santorini,church",
            "https://loremflickr.com/600/400/santorini,sunset"
        ],
        hotels: [
            { name: "Oia Cliff Suites", price: "€300", image: "https://loremflickr.com/400/300/hotel,greece", desc: "Unmatched caldera sunset views.", location: "Oia" },
            { name: "Fira Boutique Hotel", price: "€180", image: "https://loremflickr.com/400/300/hotel,pool", desc: "Central location with private pools.", location: "Fira" },
            { name: "Kamari Beach Resort", price: "€140", image: "https://loremflickr.com/400/300/hotel,beach", desc: "Steps from the black sand beach.", location: "Kamari" }
        ],
        foodSpots: [
            { name: "Taverna Roza", price: "€20", famousDish: "Moussaka", image: "https://loremflickr.com/400/300/greekfood" },
            { name: "Seabreeze Grill", price: "€35", famousDish: "Grilled Octopus", image: "https://loremflickr.com/400/300/octopus" },
            { name: "Pita Gyros Spot", price: "€6", famousDish: "Pork Gyro", image: "https://loremflickr.com/400/300/gyro" }
        ],
        activities: [
            "Watch the sunset in Oia",
            "Hike from Fira to Oia",
            "Relax on the Black Sand Beach",
            "Take a Catamaran sunset cruise"
        ],
        tips: [
            "Wear comfortable walking shoes for the cobblestone steps.",
            "Book caldera view restaurants weeks in advance.",
            "Rent an ATV to explore the whole island easily."
        ]
    }
};

// If an unpopulated ID is requested, provide a fallback generic object.
const genericData = {
    name: "Classic Destination",
    bannerImage: "https://loremflickr.com/1440/600/landscape",
    shortDesc: "A breathtaking destination offering unmatched history, natural beauty, and vibrant culture.",
    bestTime: "Year round",
    gallery: [
        "https://loremflickr.com/600/400/city",
        "https://loremflickr.com/600/400/landscape",
        "https://loremflickr.com/600/400/nature",
        "https://loremflickr.com/600/400/architecture"
    ],
    hotels: [
        { name: "Grand Central Hotel", price: "€150", image: "https://loremflickr.com/400/300/hotel", desc: "Comfortable stay in the city center.", location: "Downtown" },
        { name: "Sunset Resort", price: "€200", image: "https://loremflickr.com/400/300/resort", desc: "Beautiful panoramic views.", location: "Outskirts" },
        { name: "Classic Inn", price: "€100", image: "https://loremflickr.com/400/300/inn", desc: "Cozy, budget-friendly accommodation.", location: "Old Town" }
    ],
    foodSpots: [
        { name: "The Local Bistro", price: "€15", famousDish: "Traditional Stew", image: "https://loremflickr.com/400/300/food" },
        { name: "Street Food Market", price: "€8", famousDish: "Assorted Local Bites", image: "https://loremflickr.com/400/300/market" },
        { name: "Fine Dining Plaza", price: "€40", famousDish: "Chef's Tasting Menu", image: "https://loremflickr.com/400/300/finedining" }
    ],
    activities: [
        "Take a guided walking tour",
        "Visit the local history museum",
        "Explore the central market",
        "Enjoy a scenic boat or bus ride"
    ],
    tips: [
        "Always carry some local cash.",
        "Learn a few basic phrases in the local language.",
        "Check the weather before heading out for the day."
    ]
};

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const placeId = urlParams.get('place');
    
    // Get specific data or fallback
    let data = destinationData[placeId];
    if (!data) {
        data = genericData;
        if (placeId) {
            // Attempt to format the ID cleanly for the fallback title if possible
            const formattedName = placeId.charAt(0).toUpperCase() + placeId.slice(1);
            data.name = formattedName.replace('-', ' ');
        }
    }

    renderPage(data);
});

function renderPage(data) {
    const main = document.getElementById('destination-content');
    
    // Build activities HTML
    const activitiesHTML = data.activities.map(act => `<li>${act}</li>`).join('');
    
    // Build tips HTML
    const tipsHTML = data.tips.map(tip => `<li>${tip}</li>`).join('');

    main.innerHTML = `
        <!-- 1. Destination Header -->
        <section class="dest-banner">
            <img src="${data.bannerImage}" alt="${data.name}" class="dest-banner-img">
            <div class="dest-banner-overlay"></div>
            <div class="dest-banner-content">
                <h1 class="dest-title-large">${data.name}</h1>
                <p class="dest-subtitle">${data.shortDesc}</p>
                <div class="dest-best-time"><strong>Best Time to Visit:</strong> ${data.bestTime}</div>
            </div>
        </section>

        <div class="dest-page-container">
            <!-- 2. Image Gallery -->
            <section class="detail-section">
                <h2 class="detail-h2">Gallery</h2>
                <div class="gallery-grid">
                    ${data.gallery.map(img => `
                        <div class="gallery-item">
                            <img src="${img}" alt="Gallery Image">
                        </div>
                    `).join('')}
                </div>
            </section>

            <!-- 3. Top Hotels -->
            <section class="detail-section">
                <h2 class="detail-h2">Top Hotels</h2>
                <div class="cards-grid">
                    ${data.hotels.map(h => `
                        <div class="info-card">
                            <img src="${h.image}" alt="${h.name}">
                            <div class="info-card-body">
                                <h3>${h.name}</h3>
                                <p class="loc">${h.location}</p>
                                <p class="desc">${h.desc}</p>
                                <div class="price"><strong>Price:</strong> ${h.price} / night</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <!-- 4. Famous Food Spots -->
            <section class="detail-section">
                <h2 class="detail-h2">Famous Food Spots</h2>
                <div class="cards-grid">
                    ${data.foodSpots.map(f => `
                        <div class="info-card">
                            <img src="${f.image}" alt="${f.name}">
                            <div class="info-card-body">
                                <h3>${f.name}</h3>
                                <p class="desc"><strong>Famous Dish:</strong> ${f.famousDish}</p>
                                <div class="price"><strong>Avg Price:</strong> ${f.price}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <!-- Two Column Layout for 5 & 6 -->
            <div class="two-col-layout">
                <!-- 5. Things to Do -->
                <section class="detail-section col-left">
                    <h2 class="detail-h2">Things to Do in ${data.name.split(',')[0]}</h2>
                    <ul class="activities-list">
                        ${activitiesHTML}
                    </ul>
                </section>

                <!-- 6. Travel Tips -->
                <section class="detail-section col-right">
                    <div class="tips-box">
                        <h2 class="detail-h2">Travel Tips</h2>
                        <ul class="tips-list">
                            ${tipsHTML}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    `;
}
