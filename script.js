/* =====================================================
   SKILLORA ADVANCED MARKETPLACE
===================================================== */


/* =====================================================
   DOM
===================================================== */

const $ = selector => document.querySelector(selector);

const $$ = selector => document.querySelectorAll(selector);


/* =====================================================
   MARKETPLACE DATABASE
===================================================== */

const freelancers = [

    {
        id: "alex",
        name: "Alex Johnson",
        role: "Senior Full Stack Developer",
        category: "Web Development",

        service:
            "I will build a modern, scalable full-stack web application",

        image: "https://i.pravatar.cc/600?img=12",

        rating: 4.9,
        reviews: 128,
        price: 50,

        location: "United States",
        experience: "8+ Years",
        projects: "240+",
        success: "99%",

        available: true,

        skills: [
            "React",
            "Node.js",
            "TypeScript",
            "Next.js"
        ],

        about:
            "Alex is a senior full stack developer specializing in modern web applications, scalable backend systems and high-performance digital products."
    },


    {
        id: "sophia",
        name: "Sophia Martinez",
        role: "Senior UI/UX Designer",
        category: "Graphic Design",

        service:
            "I will design a premium UI/UX experience for your product",

        image: "https://i.pravatar.cc/600?img=47",

        rating: 4.9,
        reviews: 96,
        price: 40,

        location: "Spain",
        experience: "7+ Years",
        projects: "185+",
        success: "98%",

        available: true,

        skills: [
            "Figma",
            "UI Design",
            "UX Research",
            "Prototyping"
        ],

        about:
            "Sophia creates intuitive digital experiences through research, interface design, design systems and interactive prototypes."
    },


    {
        id: "david",
        name: "David Wilson",
        role: "Mobile App Developer",
        category: "Mobile Development",

        service:
            "I will develop a high-performance Flutter mobile application",

        image: "https://i.pravatar.cc/600?img=13",

        rating: 4.8,
        reviews: 74,
        price: 45,

        location: "United Kingdom",
        experience: "6+ Years",
        projects: "160+",
        success: "97%",

        available: false,

        skills: [
            "Flutter",
            "React Native",
            "iOS",
            "Android"
        ],

        about:
            "David develops modern cross-platform and native mobile applications with a strong focus on performance and usability."
    },


    {
        id: "emma",
        name: "Emma Chen",
        role: "Professional Graphic Designer",
        category: "Graphic Design",

        service:
            "I will create a complete brand identity for your business",

        image: "https://i.pravatar.cc/600?img=44",

        rating: 4.9,
        reviews: 112,
        price: 35,

        location: "Canada",
        experience: "6+ Years",
        projects: "210+",
        success: "99%",

        available: true,

        skills: [
            "Photoshop",
            "Illustrator",
            "Branding",
            "Logo Design"
        ],

        about:
            "Emma helps brands create memorable visual identities including logos, marketing graphics, illustrations and complete brand systems."
    },


    {
        id: "olivia",
        name: "Olivia Brown",
        role: "SEO Content Writer",
        category: "Content Writing",

        service:
            "I will write SEO-optimized content that ranks and converts",

        image: "https://i.pravatar.cc/600?img=49",

        rating: 4.9,
        reviews: 86,
        price: 30,

        location: "Australia",
        experience: "5+ Years",
        projects: "320+",
        success: "98%",

        available: true,

        skills: [
            "SEO",
            "Copywriting",
            "Blog Writing",
            "Research"
        ],

        about:
            "Olivia creates high-quality SEO content for technology, business and lifestyle brands."
    },


    {
        id: "liam",
        name: "Liam Anderson",
        role: "DevOps & Cloud Engineer",
        category: "Web Development",

        service:
            "I will configure AWS cloud infrastructure and DevOps pipelines",

        image: "https://i.pravatar.cc/600?img=68",

        rating: 4.8,
        reviews: 59,
        price: 55,

        location: "Germany",
        experience: "9+ Years",
        projects: "175+",
        success: "97%",

        available: false,

        skills: [
            "AWS",
            "Docker",
            "Kubernetes",
            "Terraform"
        ],

        about:
            "Liam specializes in cloud infrastructure, CI/CD pipelines, DevOps automation and scalable cloud architecture."
    },


    {
        id: "ava",
        name: "Ava Sharma",
        role: "Digital Marketing Strategist",
        category: "Digital Marketing",

        service:
            "I will create a data-driven digital marketing strategy",

        image: "https://i.pravatar.cc/600?img=45",

        rating: 4.9,
        reviews: 81,
        price: 35,

        location: "Singapore",
        experience: "7+ Years",
        projects: "280+",
        success: "99%",

        available: true,

        skills: [
            "SEO",
            "Google Ads",
            "Social Media",
            "Analytics"
        ],

        about:
            "Ava helps businesses grow through data-driven SEO, social media, paid campaigns and conversion optimization."
    },


    {
        id: "isabella",
        name: "Isabella Thomas",
        role: "Professional Video Editor",
        category: "Video Editing",

        service:
            "I will professionally edit your YouTube and social media videos",

        image: "https://i.pravatar.cc/600?img=5",

        rating: 4.8,
        reviews: 95,
        price: 50,

        location: "France",
        experience: "6+ Years",
        projects: "230+",
        success: "98%",

        available: true,

        skills: [
            "Premiere Pro",
            "After Effects",
            "DaVinci Resolve",
            "Motion Graphics"
        ],

        about:
            "Isabella specializes in promotional videos, social media content, documentaries, product videos and cinematic storytelling."
    },


    {
        id: "noah",
        name: "Noah Williams",
        role: "Frontend Developer",
        category: "Web Development",

        service:
            "I will create a responsive React website for your business",

        image: "https://i.pravatar.cc/600?img=14",

        rating: 4.7,
        reviews: 64,
        price: 38,

        location: "United States",
        experience: "5+ Years",
        projects: "140+",
        success: "96%",

        available: true,

        skills: [
            "React",
            "JavaScript",
            "CSS",
            "Tailwind"
        ],

        about:
            "Noah builds fast and responsive frontend experiences for startups and growing businesses."
    },


    {
        id: "mia",
        name: "Mia Anderson",
        role: "Product Designer",
        category: "Graphic Design",

        service:
            "I will design your SaaS dashboard and product interface",

        image: "https://i.pravatar.cc/600?img=25",

        rating: 4.8,
        reviews: 71,
        price: 42,

        location: "Netherlands",
        experience: "6+ Years",
        projects: "150+",
        success: "98%",

        available: true,

        skills: [
            "Figma",
            "SaaS Design",
            "UX",
            "Design Systems"
        ],

        about:
            "Mia designs clean, conversion-focused product experiences for SaaS companies and technology startups."
    },


    {
        id: "ethan",
        name: "Ethan Carter",
        role: "Data Analyst",
        category: "Data Analysis",

        service:
            "I will analyze your business data and create dashboards",

        image: "https://i.pravatar.cc/600?img=8",

        rating: 4.9,
        reviews: 52,
        price: 45,

        location: "Ireland",
        experience: "5+ Years",
        projects: "115+",
        success: "99%",

        available: true,

        skills: [
            "Excel",
            "Power BI",
            "SQL",
            "Python"
        ],

        about:
            "Ethan transforms complex datasets into useful dashboards and actionable business insights."
    },


    {
        id: "grace",
        name: "Grace Taylor",
        role: "Motion Graphics Designer",
        category: "Video Editing",

        service:
            "I will create engaging motion graphics and animations",

        image: "https://i.pravatar.cc/600?img=32",

        rating: 4.7,
        reviews: 43,
        price: 48,

        location: "New Zealand",
        experience: "5+ Years",
        projects: "130+",
        success: "97%",

        available: true,

        skills: [
            "After Effects",
            "Motion Design",
            "Animation",
            "Illustration"
        ],

        about:
            "Grace creates engaging motion graphics, animated explainers and branded visual content."
    }

];


/* =====================================================
   STATE
===================================================== */

const state = {

    search: "",

    categories: [],

    minPrice: null,

    maxPrice: null,

    minRating: 0,

    availableOnly: false,

    sort: "rating",

    visibleCount: 6

};


/* =====================================================
   DOM REFERENCES
===================================================== */

const freelancerGrid = $("#freelancerGrid");

const resultsCount = $("#resultsCount");

const resultsDescription = $("#resultsDescription");

const emptyState = $("#emptyState");

const loadMore = $("#loadMore");

const marketSearch = $("#marketSearch");

const heroSearch = $("#heroSearch");

const heroSearchBtn = $("#heroSearchBtn");

const sortSelect = $("#sortSelect");

const clearSearch = $("#clearSearch");

const clearFilters = $("#clearFilters");

const emptyClear = $("#emptyClear");

const filterCount = $("#filterCount");

const minPrice = $("#minPrice");

const maxPrice = $("#maxPrice");

const availableOnly = $("#availableOnly");

const profileModal = $("#profileModal");

const profileDetails = $("#profileDetails");

const closeModal = $("#closeModal");

const toast = $("#toast");


/* =====================================================
   FAVORITES
===================================================== */

let favorites =
    JSON.parse(
        localStorage.getItem("skilloraFavorites") || "[]"
    );


function saveFavorites() {

    localStorage.setItem(
        "skilloraFavorites",
        JSON.stringify(favorites)
    );

}


/* =====================================================
   CARD TEMPLATE
===================================================== */

function createCard(person) {

    const liked =
        favorites.includes(person.id);

    return `

        <article
            class="freelancer-card"
            data-id="${person.id}"
        >

            <div class="freelancer-image">

                <img
                    src="${person.image}"
                    alt="${person.name}"
                    loading="lazy"
                >

                <span
                    class="availability ${
                        person.available ? "" : "busy"
                    }"
                >

                    <span></span>

                    ${
                        person.available
                            ? "Available"
                            : "Busy"
                    }

                </span>


                <button
                    class="favorite ${
                        liked ? "liked" : ""
                    }"
                    data-favorite="${person.id}"
                    aria-label="Add ${person.name} to favorites"
                >

                    <i class="${
                        liked
                            ? "fa-solid"
                            : "fa-regular"
                    } fa-heart"></i>

                </button>


                <span class="service-badge">
                    ${person.category}
                </span>

            </div>


            <div class="freelancer-content">

                <div class="name-row">

                    <div>

                        <h3>
                            ${person.name}
                            <i class="fa-solid fa-circle-check"></i>
                        </h3>

                        <p>
                            ${person.role}
                        </p>

                    </div>

                    <span class="card-rating">
                        ★ ${person.rating}
                    </span>

                </div>


                <div class="review">
                    ${person.reviews} reviews
                </div>


                <div class="service-title">
                    ${person.service}
                </div>


                <div class="tags">

                    ${person.skills
                        .slice(0, 3)
                        .map(
                            skill =>
                                `<span>${skill}</span>`
                        )
                        .join("")}

                </div>


                <div class="card-bottom">

                    <div>

                        <small>
                            Starting at
                        </small>

                        <strong>
                            $${person.price}/hr
                        </strong>

                    </div>


                    <button
                        class="view-profile"
                        data-profile="${person.id}"
                    >
                        View Service
                    </button>

                </div>

            </div>

        </article>

    `;
}


/* =====================================================
   FILTER DATA
===================================================== */

function getFilteredFreelancers() {

    let result = [...freelancers];


    /* SEARCH */

    if (state.search) {

        const query =
            state.search.toLowerCase();

        result = result.filter(person => {

            const searchableText = [

                person.name,
                person.role,
                person.category,
                person.service,
                person.location,
                ...person.skills

            ]
                .join(" ")
                .toLowerCase();

            return searchableText.includes(query);

        });

    }


    /* CATEGORY */

    if (state.categories.length) {

        result =
            result.filter(person =>
                state.categories.includes(
                    person.category
                )
            );

    }


    /* MIN PRICE */

    if (state.minPrice !== null) {

        result =
            result.filter(
                person =>
                    person.price >=
                    state.minPrice
            );

    }


    /* MAX PRICE */

    if (state.maxPrice !== null) {

        result =
            result.filter(
                person =>
                    person.price <=
                    state.maxPrice
            );

    }


    /* RATING */

    if (state.minRating > 0) {

        result =
            result.filter(
                person =>
                    person.rating >=
                    state.minRating
            );

    }


    /* AVAILABILITY */

    if (state.availableOnly) {

        result =
            result.filter(
                person =>
                    person.available
            );

    }


    /* SORT */

    result.sort((a, b) => {

        switch (state.sort) {

            case "price-low":
                return a.price - b.price;

            case "price-high":
                return b.price - a.price;

            case "reviews":
                return b.reviews - a.reviews;

            case "rating":
            default:
                return b.rating - a.rating;

        }

    });


    return result;

}


/* =====================================================
   RENDER MARKETPLACE
===================================================== */

function renderMarketplace() {

    const filtered =
        getFilteredFreelancers();

    const visible =
        filtered.slice(
            0,
            state.visibleCount
        );


    freelancerGrid.innerHTML =
        visible
            .map(createCard)
            .join("");


    resultsCount.textContent =
        `${filtered.length} professional${
            filtered.length !== 1 ? "s" : ""
        }`;


    resultsDescription.textContent =
        state.search ||
        state.categories.length ||
        state.minPrice !== null ||
        state.maxPrice !== null ||
        state.minRating > 0 ||
        state.availableOnly
            ? "matching your filters"
            : "available on Skillora";


    if (!filtered.length) {

        emptyState.classList.add("visible");

        loadMore.classList.add("hidden");

    } else {

        emptyState.classList.remove("visible");

        if (
            state.visibleCount >=
            filtered.length
        ) {

            loadMore.classList.add("hidden");

        } else {

            loadMore.classList.remove("hidden");

        }

    }


    updateFilterCount();

    attachCardEvents();

}


/* =====================================================
   CARD EVENTS
===================================================== */

function attachCardEvents() {

    $$(".favorite").forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                const id =
                    button.dataset.favorite;

                toggleFavorite(id, button);

            }
        );

    });


    $$(".view-profile").forEach(button => {

        button.addEventListener(
            "click",
            () => {

                openProfile(
                    button.dataset.profile
                );

            }
        );

    });

}


/* =====================================================
   FAVORITE
===================================================== */

function toggleFavorite(id, button) {

    const index =
        favorites.indexOf(id);


    if (index === -1) {

        favorites.push(id);

        button.classList.add("liked");

        button.innerHTML =
            `<i class="fa-solid fa-heart"></i>`;

        showToast(
            "Added to favorites"
        );

    } else {

        favorites.splice(index, 1);

        button.classList.remove("liked");

        button.innerHTML =
            `<i class="fa-regular fa-heart"></i>`;

        showToast(
            "Removed from favorites"
        );

    }


    saveFavorites();

}


/* =====================================================
   SEARCH
===================================================== */

function performSearch(value) {

    state.search =
        value.trim();

    state.visibleCount = 6;

    renderMarketplace();

}


function searchFromHero() {

    const value = heroSearch.value.trim();

    if (!value) {
        showToast("Enter a service, freelancer, job or category to search");
        heroSearch.focus();
        return;
    }

    // Week 7: move hero discovery into the full advanced marketplace.
    window.location.href = "marketplace.html?q=" + encodeURIComponent(value);
}


heroSearchBtn.addEventListener(
    "click",
    searchFromHero
);


heroSearch.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            searchFromHero();

        }

    }
);


/* Marketplace search */

let searchTimer;

marketSearch.addEventListener(
    "input",
    () => {

        clearTimeout(searchTimer);

        clearSearch.classList.toggle(
            "visible",
            marketSearch.value.length > 0
        );

        searchTimer =
            setTimeout(() => {

                performSearch(
                    marketSearch.value
                );

            }, 180);

    }
);


/* Clear search */

clearSearch.addEventListener(
    "click",
    () => {

        marketSearch.value = "";

        heroSearch.value = "";

        state.search = "";

        clearSearch.classList.remove(
            "visible"
        );

        state.visibleCount = 6;

        renderMarketplace();

    }
);


/* =====================================================
   POPULAR SEARCHES
===================================================== */

$$(".popular-searches button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const value =
                    button.dataset.search;

                heroSearch.value = value;

                searchFromHero();

            }
        );

    });


/* =====================================================
   CATEGORY FILTER
===================================================== */

$$(".category-filter")
    .forEach(checkbox => {

        checkbox.addEventListener(
            "change",
            () => {

                state.categories =
                    Array.from(
                        $$(".category-filter:checked")
                    )
                    .map(
                        item =>
                            item.value
                    );

                state.visibleCount = 6;

                renderMarketplace();

            }
        );

    });


/* =====================================================
   CATEGORY CARDS
===================================================== */

$$(".category-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const category =
                    card.dataset.category;

                const checkbox =
                    [...$$(".category-filter")]
                    .find(
                        item =>
                            item.value ===
                            category
                    );

                if (checkbox) {

                    checkbox.checked =
                        true;

                    state.categories =
                        [category];

                    marketSearch.value = "";

                    state.search = "";

                    state.visibleCount = 6;

                    renderMarketplace();

                    document
                        .getElementById(
                            "marketplace"
                        )
                        .scrollIntoView({
                            behavior: "smooth"
                        });

                }

            }
        );

    });


/* =====================================================
   PRICE FILTERS
===================================================== */

function updatePriceFilters() {

    const min =
        parseFloat(
            minPrice.value
        );

    const max =
        parseFloat(
            maxPrice.value
        );


    state.minPrice =
        Number.isFinite(min)
            ? min
            : null;


    state.maxPrice =
        Number.isFinite(max)
            ? max
            : null;


    state.visibleCount = 6;

    renderMarketplace();

}


minPrice.addEventListener(
    "input",
    updatePriceFilters
);

maxPrice.addEventListener(
    "input",
    updatePriceFilters
);


/* =====================================================
   RATING FILTER
===================================================== */

$$("input[name='ratingFilter']")
    .forEach(radio => {

        radio.addEventListener(
            "change",
            () => {

                state.minRating =
                    Number(
                        radio.value
                    );

                state.visibleCount = 6;

                renderMarketplace();

            }
        );

    });


/* =====================================================
   AVAILABILITY
===================================================== */

availableOnly.addEventListener(
    "change",
    () => {

        state.availableOnly =
            availableOnly.checked;

        state.visibleCount = 6;

        renderMarketplace();

    }
);


/* =====================================================
   SORT
===================================================== */

sortSelect.addEventListener(
    "change",
    () => {

        state.sort =
            sortSelect.value;

        state.visibleCount = 6;

        renderMarketplace();

    }
);


/* =====================================================
   CLEAR FILTERS
===================================================== */

function resetFilters() {

    state.search = "";

    state.categories = [];

    state.minPrice = null;

    state.maxPrice = null;

    state.minRating = 0;

    state.availableOnly = false;

    state.visibleCount = 6;


    marketSearch.value = "";

    heroSearch.value = "";

    minPrice.value = "";

    maxPrice.value = "";

    availableOnly.checked = false;


    $$(".category-filter")
        .forEach(
            checkbox =>
                checkbox.checked = false
        );


    const anyRating =
        document.querySelector(
            "input[name='ratingFilter'][value='0']"
        );

    if (anyRating) {
        anyRating.checked = true;
    }


    clearSearch.classList.remove(
        "visible"
    );


    renderMarketplace();

}


clearFilters.addEventListener(
    "click",
    resetFilters
);


emptyClear.addEventListener(
    "click",
    resetFilters
);


/* =====================================================
   FILTER COUNTER
===================================================== */

function updateFilterCount() {

    let count = 0;


    count +=
        state.categories.length;


    if (state.minPrice !== null) {
        count++;
    }


    if (state.maxPrice !== null) {
        count++;
    }


    if (state.minRating > 0) {
        count++;
    }


    if (state.availableOnly) {
        count++;
    }


    filterCount.textContent =
        count;

}


/* =====================================================
   LOAD MORE
===================================================== */

loadMore.addEventListener(
    "click",
    () => {

        state.visibleCount += 3;

        renderMarketplace();

    }
);


/* =====================================================
   PROFILE / SERVICE DETAILS
===================================================== */

function openProfile(id) {

    const person =
        freelancers.find(
            freelancer =>
                freelancer.id === id
        );


    if (!person) return;


    profileDetails.innerHTML = `

        <div class="profile-header">

            <img
                src="${person.image}"
                class="profile-large-image"
                alt="${person.name}"
            >


            <div class="profile-header-info">

                <h2 id="profileTitle">

                    ${person.name}

                    <i
                        class="fa-solid fa-circle-check"
                        style="color:#4f8dff;font-size:14px;"
                    ></i>

                </h2>


                <div class="role">
                    ${person.role}
                </div>


                <div class="profile-rating">

                    ★ ${person.rating}

                    <span style="color:#697387">
                        (${person.reviews} reviews)
                    </span>

                </div>


                <div class="profile-location">

                    <i class="fa-solid fa-location-dot"></i>

                    ${person.location}

                </div>


                <div class="profile-service-title">

                    ${person.service}

                </div>

            </div>

        </div>


        <div class="profile-body">

            <div class="profile-stats">

                <div class="profile-stat">

                    <span>
                        Starting Price
                    </span>

                    <strong>
                        $${person.price}/hr
                    </strong>

                </div>


                <div class="profile-stat">

                    <span>
                        Experience
                    </span>

                    <strong>
                        ${person.experience}
                    </strong>

                </div>


                <div class="profile-stat">

                    <span>
                        Projects
                    </span>

                    <strong>
                        ${person.projects}
                    </strong>

                </div>


                <div class="profile-stat">

                    <span>
                        Job Success
                    </span>

                    <strong>
                        ${person.success}
                    </strong>

                </div>

            </div>


            <div class="profile-section">

                <h3>
                    Service Overview
                </h3>

                <p>
                    ${person.about}
                </p>

            </div>


            <div class="profile-section">

                <h3>
                    Professional Skills
                </h3>

                <div class="profile-skills">

                    ${person.skills
                        .map(
                            skill =>
                                `<span>${skill}</span>`
                        )
                        .join("")}

                </div>

            </div>


            <div class="profile-section">

                <h3>
                    Why clients choose ${person.name.split(" ")[0]}
                </h3>

                <p>

                    Verified professional with
                    ${person.experience}
                    of experience,
                    ${person.projects}
                    successfully completed projects
                    and a
                    ${person.success}
                    job success rate.

                </p>

            </div>


            <div class="profile-actions">

                <button
                    class="hire-btn"
                    data-hire="${person.id}"
                >

                    <i class="fa-solid fa-briefcase"></i>

                    Hire ${person.name.split(" ")[0]}

                </button>


                <button
                    class="message-btn"
                    data-message="${person.id}"
                >

                    <i class="fa-solid fa-message"></i>

                    Send Message

                </button>

            </div>

        </div>

    `;


    profileModal.classList.add(
        "active"
    );

    profileModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );


    history.replaceState(
        null,
        "",
        `#profile-${person.id}`
    );


    setTimeout(() => {
        closeModal.focus();
    }, 100);


    $("[data-hire]").addEventListener(
        "click",
        () => {

            showToast(
                `Hire request started for ${person.name}`
            );

        }
    );


    $("[data-message]").addEventListener(
        "click",
        () => {

            showToast(
                `Opening conversation with ${person.name}`
            );

        }
    );

}


/* =====================================================
   CLOSE PROFILE
===================================================== */

function closeProfile() {

    profileModal.classList.remove(
        "active"
    );

    profileModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );


    if (
        window.location.hash
            .startsWith("#profile-")
    ) {

        history.replaceState(
            null,
            "",
            "#marketplace"
        );

    }

}


closeModal.addEventListener(
    "click",
    closeProfile
);


$(".modal-overlay")
    .addEventListener(
        "click",
        closeProfile
    );


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            profileModal.classList.contains(
                "active"
            )
        ) {

            closeProfile();

        }

    }
);


/* =====================================================
   RESTORE PROFILE FROM URL
===================================================== */

function loadProfileFromHash() {

    const hash =
        window.location.hash;


    if (
        hash.startsWith(
            "#profile-"
        )
    ) {

        const id =
            hash.replace(
                "#profile-",
                ""
            );

        openProfile(id);

    }

}


window.addEventListener(
    "hashchange",
    loadProfileFromHash
);


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    $("#menuToggle");

const mobileMenu =
    $("#mobileMenu");


menuToggle.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle(
            "active"
        );

        const icon =
            menuToggle.querySelector("i");


        if (
            mobileMenu.classList.contains(
                "active"
            )
        ) {

            icon.classList.remove(
                "fa-bars"
            );

            icon.classList.add(
                "fa-xmark"
            );

        } else {

            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );

        }

    }
);


$$(".mobile-menu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    });


function closeMobileMenu() {

    mobileMenu.classList.remove(
        "active"
    );

    const icon =
        menuToggle.querySelector("i");

    icon.classList.remove(
        "fa-xmark"
    );

    icon.classList.add(
        "fa-bars"
    );

}


/* =====================================================
   MOBILE FILTER DRAWER
===================================================== */

const filterToggle =
    $("#filterToggle");

const filterSidebar =
    $("#filterSidebar");

const closeFilters =
    $("#closeFilters");


filterToggle.addEventListener(
    "click",
    () => {

        filterSidebar.classList.add(
            "active"
        );

        document.body.classList.add(
            "modal-open"
        );

    }
);


closeFilters.addEventListener(
    "click",
    () => {

        filterSidebar.classList.remove(
            "active"
        );

        document.body.classList.remove(
            "modal-open"
        );

    }
);


/* =====================================================
   NAVBAR SCROLL
===================================================== */

const navbar =
    $("#navbar");


window.addEventListener(
    "scroll",
    () => {

        navbar.classList.toggle(
            "scrolled",
            window.scrollY > 20
        );

        updateActiveNavigation();

    },
    {
        passive: true
    }
);


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

function updateActiveNavigation() {

    const sections =
        [
            "home",
            "marketplace",
            "categories",
            "how-it-works",
            "about"
        ];


    let current =
        "home";


    sections.forEach(id => {

        const section =
            document.getElementById(id);

        if (!section) return;


        const top =
            section.getBoundingClientRect()
                .top;


        if (top <= 150) {
            current = id;
        }

    });


    $$(".desktop-nav a")
        .forEach(link => {

            const href =
                link.getAttribute(
                    "href"
                );

            link.classList.toggle(
                "active",
                href === `#${current}`
            );

        });

}


/* =====================================================
   LOGIN / REGISTER
===================================================== */

function loginAction() {

    showToast(
        "Login system coming soon"
    );

}


function registerAction() {

    showToast(
        "Registration system coming soon"
    );

}


$("#loginBtn")
    .addEventListener(
        "click",
        loginAction
    );


$("#registerBtn")
    .addEventListener(
        "click",
        registerAction
    );


$("#mobileLogin")
    .addEventListener(
        "click",
        loginAction
    );


$("#mobileRegister")
    .addEventListener(
        "click",
        registerAction
    );


/* =====================================================
   CTA
===================================================== */

$("#ctaFind")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById(
                    "marketplace"
                )
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


$("#ctaJoin")
    .addEventListener(
        "click",
        () => {

            showToast(
                "Freelancer registration coming soon"
            );

        }
    );


/* =====================================================
   VIEW ALL CATEGORIES
===================================================== */

$("#viewAllCategories")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById(
                    "marketplace"
                )
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


/* =====================================================
   TOAST
===================================================== */

let toastTimer;


function showToast(message) {

    toast.querySelector(
        "span"
    ).textContent = message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =====================================================
   INITIALIZE
===================================================== */

renderMarketplace();

loadProfileFromHash();