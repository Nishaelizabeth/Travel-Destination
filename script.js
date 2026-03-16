// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

if (burger && nav) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        // Burger animation
        burger.classList.toggle('toggle');
    });
}

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        if (burger) {
            burger.classList.remove('toggle');
        }
    });
});

// Parallax effect for video
const videoContent = document.querySelector('.video-container');
if (videoContent) {
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;
        videoContent.style.transform = `translateY(${offset * 0.5}px)`;
    });
}

// --- Destination Filtering Logic ---

const destinations = [
    {
        id: "paris",
        name: "Paris, France",
        image: "https://loremflickr.com/800/600/paris",
        desc: "Famous for its art, culture, and iconic landmarks.",
        time: "April – June, September – October",
        season: "spring",
        country: "france",
        category: "historic",
        activity: "sightseeing"
    },
    {
        id: "venice",
        name: "Venice, Italy",
        image: "https://loremflickr.com/800/600/venice",
        desc: "Romantic city built on water with historic canals.",
        time: "April – June",
        season: "spring",
        country: "italy",
        category: "historic",
        activity: "sightseeing"
    },
    {
        id: "santorini",
        name: "Santorini, Greece",
        image: "https://loremflickr.com/800/600/santorini",
        desc: "Beautiful island known for sunsets and coastal views.",
        time: "May – October",
        season: "summer",
        country: "greece",
        category: "beach",
        activity: "island travel"
    },
    {
        id: "interlaken",
        name: "Interlaken, Switzerland",
        image: "https://loremflickr.com/800/600/interlaken",
        desc: "Adventure capital of Switzerland with paragliding and hiking.",
        time: "June – September",
        season: "summer",
        country: "switzerland",
        category: "adventure",
        activity: "hiking"
    },
    {
        id: "barcelona",
        name: "Barcelona, Spain",
        image: "https://loremflickr.com/800/600/barcelona",
        desc: "Vibrant city famous for architecture and beaches.",
        time: "May – June, September",
        season: "summer",
        country: "spain",
        category: "cultural",
        activity: "city exploration"
    },
    {
        id: "amsterdam",
        name: "Amsterdam, Netherlands",
        image: "https://loremflickr.com/800/600/amsterdam",
        desc: "Scenic canals, museums, and tulip season attractions.",
        time: "April – May",
        season: "spring",
        country: "netherlands",
        category: "cultural",
        activity: "city exploration"
    },
    {
        id: "prague",
        name: "Prague, Czech Republic",
        image: "https://loremflickr.com/800/600/prague",
        desc: "Medieval city known for castles and historic bridges.",
        time: "May – September",
        season: "summer",
        country: "czech republic",
        category: "historic",
        activity: "city exploration"
    },
    {
        id: "vienna",
        name: "Vienna, Austria",
        image: "https://loremflickr.com/800/600/vienna",
        desc: "Elegant city of music, history, and grand architecture.",
        time: "April – October",
        season: "autumn",
        country: "austria",
        category: "historic",
        activity: "sightseeing"
    },
    {
        id: "dubrovnik",
        name: "Dubrovnik, Croatia",
        image: "https://loremflickr.com/800/600/dubrovnik",
        desc: "Coastal city with historic walls and beautiful beaches.",
        time: "May – September",
        season: "summer",
        country: "croatia",
        category: "beach",
        activity: "sightseeing"
    },
    {
        id: "reykjavik",
        name: "Reykjavik, Iceland",
        image: "https://loremflickr.com/800/600/reykjavik",
        desc: "Gateway to Iceland's glaciers, volcanoes, and northern lights.",
        time: "September – March",
        season: "winter",
        country: "iceland",
        category: "nature",
        activity: "sightseeing"
    },
    {
        id: "zermatt",
        name: "Zermatt, Switzerland",
        image: "https://loremflickr.com/800/600/zermatt",
        desc: "Famous alpine village for skiing and mountain views.",
        time: "December – March",
        season: "winter",
        country: "switzerland",
        category: "adventure",
        activity: "skiing"
    },
    {
        id: "rome",
        name: "Rome, Italy",
        image: "https://loremflickr.com/800/600/rome",
        desc: "Ancient city filled with historical monuments and culture.",
        time: "April – June, September – October",
        season: "autumn",
        country: "italy",
        category: "historic",
        activity: "city exploration"
    }
];

const gridContainer = document.getElementById('destinations-grid');
const filterSeason = document.getElementById('filter-season');
const filterCountry = document.getElementById('filter-country');
const filterCategory = document.getElementById('filter-category');
const filterActivity = document.getElementById('filter-activity');
const resetBtn = document.getElementById('reset-filters');

// Render Function
function renderDestinations(data) {
    if (!gridContainer) return;

    gridContainer.innerHTML = ''; // Clear current
    
    if (data.length === 0) {
        gridContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: #777;">No destinations found matching these filters.</p>';
        return;
    }

    data.forEach(dest => {
        const cardHTML = `
            <a href="destination.html?place=${dest.id}" class="dest-card">
                <img src="${dest.image}" alt="${dest.name}" class="dest-image">
                <div class="dest-content">
                    <h3 class="dest-name">${dest.name}</h3>
                    <p class="dest-desc">${dest.desc}</p>
                    <p class="dest-time"><strong>Best time to visit:</strong> ${dest.time}</p>
                </div>
            </a>
        `;
        gridContainer.innerHTML += cardHTML;
    });
}

// Filter Function
function applyFilters() {
    const sSeason = filterSeason.value;
    const sCountry = filterCountry.value;
    const sCategory = filterCategory.value;
    const sActivity = filterActivity.value;

    const filtered = destinations.filter(dest => {
        return (sSeason === 'all' || dest.season === sSeason) &&
               (sCountry === 'all' || dest.country === sCountry) &&
               (sCategory === 'all' || dest.category === sCategory) &&
               (sActivity === 'all' || dest.activity === sActivity);
    });

    renderDestinations(filtered);
}

// Event Listeners
if (filterSeason && filterCountry && filterCategory && filterActivity && resetBtn) {
    filterSeason.addEventListener('change', applyFilters);
    filterCountry.addEventListener('change', applyFilters);
    filterCategory.addEventListener('change', applyFilters);
    filterActivity.addEventListener('change', applyFilters);

    resetBtn.addEventListener('click', () => {
        filterSeason.value = 'all';
        filterCountry.value = 'all';
        filterCategory.value = 'all';
        filterActivity.value = 'all';
        renderDestinations(destinations);
    });
}

// Initial Render
renderDestinations(destinations);
