/* ===== MOBILE NAV ===== */

const navToggle = document.getElementById("nav-toggle");
const mobileNav = document.getElementById("mobile-nav");

if(navToggle){

    navToggle.addEventListener("click", () => {

        mobileNav.classList.toggle("open");

    });

}

/* ===== PASSWORD SYSTEM ===== */

const PASS = "NAXE-7";

function login(){

    let v = document
    .getElementById("pass")
    .value
    .toUpperCase();

    if(v === PASS){

        /* HIDE LOGIN */
        document
        .getElementById("auth")
        .classList.add("hidden");

        /* SHOW SITE */
        document
        .getElementById("app")
        .classList.remove("hidden");

        /* START SYSTEMS */
        startClock();

    }else{

        const err = document.getElementById("err");
        const input = document.getElementById("pass");

        err.style.display = "block";

        input.style.borderColor = "#ef4444";

        input.style.boxShadow =
        "0 0 0 4px rgba(239,68,68,.15)";

        setTimeout(() => {

            input.style.borderColor = "";
            input.style.boxShadow = "";

        }, 1200);

    }

}

/* ===== ENTER KEY ===== */

document
.getElementById("pass")
.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        login();

    }

});

/* ===== CLOCK ===== */

function startClock(){

    const clock = document.getElementById("clock");

    if(!clock) return;

    setInterval(() => {

        clock.innerText =
        new Date().toLocaleTimeString("fr-FR");

    }, 1000);

}
