/* ===== INITIALIZATION ===== */
document.addEventListener("DOMContentLoaded", () => {
    // Écouteur pour la touche "Enter"
    const passInput = document.getElementById("pass");
    if (passInput) {
        passInput.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                login();
            }
        });
    }

    // Menu Mobile
    const navToggle = document.getElementById("nav-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    
    if (navToggle && mobileNav) {
        navToggle.addEventListener("click", () => {
            mobileNav.classList.toggle("open");
            // Change l'icône du hamburger en croix quand c'est ouvert
            const icon = navToggle.querySelector("i");
            if (mobileNav.classList.contains("open")) {
                icon.classList.replace("fa-bars", "fa-times");
            } else {
                icon.classList.replace("fa-times", "fa-bars");
            }
        });
    }
});

/* ===== PASSWORD SYSTEM ===== */
const PASS = "NAXE-7";

function login() {
    const input = document.getElementById("pass");
    const err = document.getElementById("err");
    
    // .trim() enlève les espaces vides avant et après le mot de passe
    let v = input.value.trim().toUpperCase();

    if (v === PASS) {
        /* HIDE LOGIN */
        document.getElementById("auth").classList.add("hidden");

        /* SHOW SITE */
        document.getElementById("app").classList.remove("hidden");

        /* START SYSTEMS */
        startClock();
    } else {
        err.style.display = "block";
        input.style.borderColor = "#ef4444";
        input.style.boxShadow = "0 0 0 4px rgba(239,68,68,.15)";

        setTimeout(() => {
            input.style.borderColor = "";
            input.style.boxShadow = "";
        }, 1200);
    }
}

/* ===== CLOCK ===== */
function startClock() {
    const clock = document.getElementById("clock");
    if (!clock) return;

    // Affiche l'heure immédiatement sans attendre la première seconde
    clock.innerText = new Date().toLocaleTimeString("fr-FR");

    setInterval(() => {
        clock.innerText = new Date().toLocaleTimeString("fr-FR");
    }, 1000);
}
