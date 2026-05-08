/* ===== INITIALISATION ===== */
document.addEventListener("DOMContentLoaded", () => {
    const passInput = document.getElementById("pass");
    const navToggle = document.getElementById("nav-toggle");
    const mobileNav = document.getElementById("mobile-nav");

    // Ecouteur pour la touche Entrée sur le mot de passe
    if (passInput) {
        passInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") login();
        });
    }

    // Gestion du menu mobile
    if (navToggle && mobileNav) {
        navToggle.addEventListener("click", () => {
            mobileNav.classList.toggle("open");
            const icon = navToggle.querySelector("i");
            // Change l'icône
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-times");
        });
    }
});

/* ===== SYSTÈME D'ACCÈS ===== */
const PASS_CODE = "NAXE-7";

function login() {
    const input = document.getElementById("pass");
    const err = document.getElementById("err");
    const authScreen = document.getElementById("auth");
    const appScreen = document.getElementById("app");

    // Nettoyage de la saisie (majuscules et suppression des espaces)
    const val = input.value.trim().toUpperCase();

    if (val === PASS_CODE) {
        authScreen.classList.add("hidden");
        appScreen.classList.remove("hidden");
        startClock();
    } else {
        err.style.display = "block";
        input.style.borderColor = "#ef4444";
        input.style.boxShadow = "0 0 0 4px rgba(239, 68, 68, 0.15)";

        // Reset visuel après 1.2s
        setTimeout(() => {
            input.style.borderColor = "";
            input.style.boxShadow = "";
        }, 1200);
    }
}

/* ===== HORLOGE TEMPS RÉEL ===== */
function startClock() {
    const clockElement = document.getElementById("clock");
    if (!clockElement) return;

    const updateTime = () => {
        const now = new Date();
        clockElement.innerText = now.toLocaleTimeString("fr-FR", {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    updateTime(); // Appel immédiat
    setInterval(updateTime, 1000);
}
