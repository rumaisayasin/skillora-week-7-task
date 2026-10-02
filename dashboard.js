/* =====================================================
   SKILLORA — WEEK 3
   PROFILE + SERVICE MANAGEMENT
===================================================== */

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);


/* =====================================================
   STORAGE KEYS
===================================================== */

const PROFILE_KEY = "skillora_profile";
const SERVICES_KEY = "skillora_services";


/* =====================================================
   DEFAULT / SEED DATA
===================================================== */

const defaultProfile = {
    avatar: "https://i.pravatar.cc/300?img=59",
    name: "Hasaan Ali",
    title: "Full-Stack Developer (MERN)",
    location: "Lahore, Pakistan",
    experience: "2+ Years",
    bio:
        "I build fast, modern web applications end-to-end using MongoDB, Express, React and Node.js. Passionate about clean architecture, automation and delightful UI.",
    skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "Tailwind CSS"],
    rating: 4.9,
    reviews: 18
};

const defaultServices = [
    {
        id: "svc-1001",
        title: "I will build a full-stack MERN web application",
        category: "Web Development",
        description:
            "I will design and develop a complete full-stack web application using MongoDB, Express.js, React.js and Node.js. This includes a responsive frontend, a secure REST API, authentication and a production-ready deployment setup.",
        price: 40,
        delivery: "7 Days",
        tags: ["React", "Node.js", "MongoDB", "REST API"],
        image: "https://picsum.photos/seed/skillora-mern/700/450",
        createdAt: Date.now() - 1000 * 60 * 60 * 24 * 5
    },
    {
        id: "svc-1002",
        title: "I will create an AI-powered automation workflow with n8n",
        category: "Digital Marketing",
        description:
            "I will set up an automated workflow using n8n to connect your apps, forms and AI tools together — saving hours of manual work every week.",
        price: 25,
        delivery: "3 Days",
        tags: ["n8n", "Automation", "AI"],
        image: "https://picsum.photos/seed/skillora-n8n/700/450",
        createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2
    }
];


/* =====================================================
   STORAGE HELPERS
===================================================== */

function getProfile() {

    const raw = localStorage.getItem(PROFILE_KEY);

    if (!raw) {
        localStorage.setItem(PROFILE_KEY, JSON.stringify(defaultProfile));
        return { ...defaultProfile };
    }

    try {
        return JSON.parse(raw);
    } catch (e) {
        return { ...defaultProfile };
    }
}

function saveProfile(profile) {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

function getServices() {

    const raw = localStorage.getItem(SERVICES_KEY);

    if (!raw) {
        localStorage.setItem(SERVICES_KEY, JSON.stringify(defaultServices));
        return [...defaultServices];
    }

    try {
        return JSON.parse(raw);
    } catch (e) {
        return [...defaultServices];
    }
}

function saveServices(services) {
    localStorage.setItem(SERVICES_KEY, JSON.stringify(services));
}

function uid() {
    return "svc-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function startingPrice(services) {

    if (!services.length) return 0;

    return Math.min(...services.map(s => Number(s.price) || 0));
}


/* =====================================================
   TOAST
===================================================== */

let toastTimer;

function showToast(message) {

    const toast = $("#toast");
    if (!toast) return;

    toast.querySelector("span").textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


/* =====================================================
   NAVBAR (scroll shadow + mobile menu)
===================================================== */

function initNavbar() {

    const navbar = $("#navbar");
    const menuToggle = $("#menuToggle");
    const mobileMenu = $("#mobileMenu");

    if (navbar) {
        window.addEventListener("scroll", () => {
            navbar.classList.toggle("scrolled", window.scrollY > 10);
        });
    }

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", () => {

            mobileMenu.classList.toggle("active");

            const icon = menuToggle.querySelector("i");

            icon.className = mobileMenu.classList.contains("active")
                ? "fa-solid fa-xmark"
                : "fa-solid fa-bars";
        });
    }
}


/* =====================================================
   ESCAPE HELPER
===================================================== */

function esc(str) {
    return String(str ?? "").replace(/[&<>"']/g, m => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }[m]));
}


/* =====================================================
   PAGE: USER / FREELANCER PROFILE (view)
===================================================== */

function renderProfilePage() {

    const profile = getProfile();
    const services = getServices();

    $("#pfAvatar").src = profile.avatar;
    $("#pfName").textContent = profile.name;
    $("#pfTitle").textContent = profile.title;
    $("#pfLocation").textContent = profile.location;
    $("#pfExperience").textContent = profile.experience;
    $("#pfRating").textContent = `${profile.rating} (${profile.reviews} reviews)`;
    $("#pfBio").textContent = profile.bio;
    $("#pfServiceCount").textContent = services.length;
    $("#pfStartingPrice").textContent = `$${startingPrice(services)}`;

    $("#pfSkills").innerHTML = profile.skills
        .map(skill => `<span>${esc(skill)}</span>`)
        .join("");
}


/* =====================================================
   PAGE: EDIT PROFILE (form)
===================================================== */

function initEditProfilePage() {

    const profile = getProfile();

    $("#epAvatarPreview").src = profile.avatar;
    $("#epName").value = profile.name;
    $("#epTitle").value = profile.title;
    $("#epLocation").value = profile.location;
    $("#epExperience").value = profile.experience;
    $("#epBio").value = profile.bio;
    $("#epSkills").value = profile.skills.join(", ");

    let pendingAvatar = profile.avatar;

    $("#epAvatarInput").addEventListener("change", e => {

        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = ev => {
            pendingAvatar = ev.target.result;
            $("#epAvatarPreview").src = pendingAvatar;
        };

        reader.readAsDataURL(file);
    });

    $("#editProfileForm").addEventListener("submit", e => {

        e.preventDefault();

        let valid = true;

        const nameGroup = $("#epName").closest(".form-group");
        const titleGroup = $("#epTitle").closest(".form-group");
        const bioGroup = $("#epBio").closest(".form-group");

        [nameGroup, titleGroup, bioGroup].forEach(g => g.classList.remove("error"));

        if ($("#epName").value.trim().length < 2) {
            nameGroup.classList.add("error");
            valid = false;
        }

        if ($("#epTitle").value.trim().length < 3) {
            titleGroup.classList.add("error");
            valid = false;
        }

        if ($("#epBio").value.trim().length < 20) {
            bioGroup.classList.add("error");
            valid = false;
        }

        if (!valid) {
            showToast("Please fix the highlighted fields");
            return;
        }

        const updated = {
            ...profile,
            avatar: pendingAvatar,
            name: $("#epName").value.trim(),
            title: $("#epTitle").value.trim(),
            location: $("#epLocation").value.trim(),
            experience: $("#epExperience").value.trim(),
            bio: $("#epBio").value.trim(),
            skills: $("#epSkills").value
                .split(",")
                .map(s => s.trim())
                .filter(Boolean)
        };

        saveProfile(updated);

        showToast("Profile updated successfully");

        setTimeout(() => {
            window.location.href = "profile.html";
        }, 900);
    });
}


/* =====================================================
   PAGE: FREELANCER PROFILE (public view)
===================================================== */

function renderFreelancerProfilePage() {

    const profile = getProfile();
    const services = getServices();

    $("#fpAvatar").src = profile.avatar;
    $("#fpName").textContent = profile.name;
    $("#fpTitle").textContent = profile.title;
    $("#fpLocation").textContent = profile.location;
    $("#fpExperience").textContent = profile.experience;
    $("#fpRating").textContent = profile.rating;
    $("#fpReviews").textContent = `${profile.reviews} reviews`;
    $("#fpBio").textContent = profile.bio;
    $("#fpStartingPrice").textContent = `$${startingPrice(services)}`;

    $("#fpSkills").innerHTML = profile.skills
        .map(skill => `<span>${esc(skill)}</span>`)
        .join("");

    const grid = $("#fpServices");

    if (!services.length) {
        grid.innerHTML = `<div class="empty-mini"><i class="fa-solid fa-briefcase"></i><p>No services published yet.</p></div>`;
        return;
    }

    grid.innerHTML = services.map(svc => `
        <div class="my-service-card">
            <img src="${svc.image}" alt="${esc(svc.title)}">
            <div class="my-service-body">
                <span class="my-service-cat">${esc(svc.category)}</span>
                <h3>${esc(svc.title)}</h3>
                <div class="my-service-meta">
                    <span>${esc(svc.delivery)}</span>
                    <strong>$${svc.price}</strong>
                </div>
            </div>
            <div class="my-service-actions" style="grid-template-columns:1fr;">
                <a class="btn btn-secondary btn-small" href="service-details.html?id=${svc.id}">View Service</a>
            </div>
        </div>
    `).join("");
}


/* =====================================================
   PAGE: CREATE / EDIT SERVICE
===================================================== */

function initCreateServicePage() {

    const params = new URLSearchParams(window.location.search);
    const editId = params.get("edit");

    let services = getServices();
    let editingService = null;

    let pendingImage = "https://picsum.photos/seed/" + uid() + "/700/450";

    if (editId) {

        editingService = services.find(s => s.id === editId);

        if (editingService) {

            $("#csHeading").textContent = "Edit Service";
            $("#csSubheading").textContent = "Update the details of your service below.";
            $("#csSubmitBtn").innerHTML = `<i class="fa-solid fa-check"></i> Update Service`;

            $("#csTitle").value = editingService.title;
            $("#csCategory").value = editingService.category;
            $("#csDescription").value = editingService.description;
            $("#csPrice").value = editingService.price;
            $("#csDelivery").value = editingService.delivery;
            $("#csTags").value = editingService.tags.join(", ");

            pendingImage = editingService.image;
            $("#csImagePreview").src = pendingImage;
        }
    } else {
        $("#csImagePreview").src = pendingImage;
    }

    $("#csImageInput").addEventListener("change", e => {

        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = ev => {
            pendingImage = ev.target.result;
            $("#csImagePreview").src = pendingImage;
        };

        reader.readAsDataURL(file);
    });

    $("#csTags").addEventListener("input", () => {

        const tags = $("#csTags").value
            .split(",")
            .map(t => t.trim())
            .filter(Boolean);

        $("#csTagPreview").innerHTML = tags
            .map(t => `<span>${esc(t)}</span>`)
            .join("");
    });

    $("#createServiceForm").addEventListener("submit", e => {

        e.preventDefault();

        const fields = [
            { input: $("#csTitle"), test: v => v.trim().length >= 10 },
            { input: $("#csCategory"), test: v => v.trim().length > 0 },
            { input: $("#csDescription"), test: v => v.trim().length >= 30 },
            { input: $("#csPrice"), test: v => Number(v) > 0 },
            { input: $("#csDelivery"), test: v => v.trim().length > 0 },
            { input: $("#csTags"), test: v => v.trim().length > 0 }
        ];

        let valid = true;

        fields.forEach(f => {

            const group = f.input.closest(".form-group");
            const ok = f.test(f.input.value);

            group.classList.toggle("error", !ok);

            if (!ok) valid = false;
        });

        if (!valid) {
            showToast("Please complete all required fields correctly");
            return;
        }

        const tags = $("#csTags").value
            .split(",")
            .map(t => t.trim())
            .filter(Boolean);

        if (editingService) {

            Object.assign(editingService, {
                title: $("#csTitle").value.trim(),
                category: $("#csCategory").value,
                description: $("#csDescription").value.trim(),
                price: Number($("#csPrice").value),
                delivery: $("#csDelivery").value.trim(),
                tags,
                image: pendingImage
            });

            saveServices(services);
            showToast("Service updated successfully");

        } else {

            const newService = {
                id: uid(),
                title: $("#csTitle").value.trim(),
                category: $("#csCategory").value,
                description: $("#csDescription").value.trim(),
                price: Number($("#csPrice").value),
                delivery: $("#csDelivery").value.trim(),
                tags,
                image: pendingImage,
                createdAt: Date.now()
            };

            services.push(newService);
            saveServices(services);
            showToast("Service created successfully");
        }

        setTimeout(() => {
            window.location.href = "my-services.html";
        }, 900);
    });
}


/* =====================================================
   PAGE: MY SERVICES (list / edit / delete)
===================================================== */

function renderMyServices() {

    const grid = $("#myServicesGrid");
    const empty = $("#myServicesEmpty");
    const services = getServices();

    $("#myServicesCount").textContent = services.length;

    if (!services.length) {
        grid.style.display = "none";
        empty.style.display = "block";
        return;
    }

    grid.style.display = "grid";
    empty.style.display = "none";

    grid.innerHTML = services.map(svc => `
        <div class="my-service-card" data-id="${svc.id}">
            <img src="${svc.image}" alt="${esc(svc.title)}">
            <div class="my-service-body">
                <span class="my-service-cat">${esc(svc.category)}</span>
                <h3>${esc(svc.title)}</h3>
                <div class="my-service-meta">
                    <span>${esc(svc.delivery)}</span>
                    <strong>$${svc.price}</strong>
                </div>
            </div>
            <div class="my-service-actions">
                <a class="btn btn-secondary btn-small" href="service-details.html?id=${svc.id}">View</a>
                <a class="btn btn-secondary btn-small" href="create-service.html?edit=${svc.id}">Edit</a>
                <button class="btn btn-danger btn-small" data-delete="${svc.id}">Delete</button>
            </div>
        </div>
    `).join("");

    $$("[data-delete]").forEach(btn => {
        btn.addEventListener("click", () => {

            const id = btn.getAttribute("data-delete");

            if (!confirm("Delete this service? This cannot be undone.")) return;

            const updated = getServices().filter(s => s.id !== id);
            saveServices(updated);

            showToast("Service deleted");
            renderMyServices();
        });
    });
}


/* =====================================================
   PAGE: SERVICE DETAILS
===================================================== */

function renderServiceDetailsPage() {

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const services = getServices();
    const service = services.find(s => s.id === id) || services[0];

    const profile = getProfile();

    if (!service) {
        $("#sdContent").innerHTML = `<div class="empty-mini"><i class="fa-solid fa-circle-exclamation"></i><p>Service not found.</p></div>`;
        return;
    }

    $("#sdCategory").textContent = service.category;
    $("#sdTitle").textContent = service.title;
    $("#sdImage").src = service.image;
    $("#sdImage").alt = service.title;
    $("#sdDescription").textContent = service.description;
    $("#sdPrice").textContent = `$${service.price}`;
    $("#sdPrice2").textContent = service.price;
    $("#sdDelivery").textContent = service.delivery;

    $("#sdTags").innerHTML = service.tags
        .map(t => `<span>${esc(t)}</span>`)
        .join("");

    $("#sdSellerAvatar").src = profile.avatar;
    $("#sdSellerName").textContent = profile.name;
    $("#sdSellerTitle").textContent = profile.title;

    $("#sdEditLink").href = `create-service.html?edit=${service.id}`;
}


/* =====================================================
   INIT — dispatch by data-page attribute on <body>
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initNavbar();

    const page = document.body.dataset.page;

    if (page === "profile") renderProfilePage();
    if (page === "edit-profile") initEditProfilePage();
    if (page === "freelancer-profile") renderFreelancerProfilePage();
    if (page === "create-service") initCreateServicePage();
    if (page === "my-services") renderMyServices();
    if (page === "service-details") renderServiceDetailsPage();
});
