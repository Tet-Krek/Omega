// ===== REVEAL =====

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }

    });

},{
    threshold:0.08
});

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});


// ===== MOBILE NAV =====

const navToggle = document.getElementById('nav-toggle');
const mobileNav = document.getElementById('mobile-nav');

let menuOpen = false;

navToggle.addEventListener('click', () => {

    menuOpen = !menuOpen;

    mobileNav.classList.toggle('open', menuOpen);

    navToggle.querySelector('i').className =
        menuOpen
        ? 'fas fa-times'
        : 'fas fa-bars';

});


// ===== FAQ =====

document.querySelectorAll('.faq-trigger').forEach(trigger => {

    trigger.addEventListener('click', () => {

        const item = trigger.closest('.faq-item');

        const isOpen = item.classList.contains('open');

        document.querySelectorAll('.faq-item').forEach(i => {
            i.classList.remove('open');
        });

        if(!isOpen){
            item.classList.add('open');
        }

    });

});


// ===== SMOOTH SCROLL =====

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', e => {

        const href = link.getAttribute('href');

        if(href === '#') return;

        e.preventDefault();

        const target = document.querySelector(href);

        if(target){

            target.scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});


// ===== CTA =====

async function handleStartReacting(event){

    event.preventDefault();

    try{

        const response = await fetch('/api/auth/status');

        const data = await response.json();

        window.location.href =
            data.authenticated
            ? '/reactch'
            : '/login';

    }catch{

        window.location.href = '/login';

    }

}


// ===== LIVE STATS =====

async function updateStatistics(){

    try{

        const response = await fetch('/api/stats');

        const result = await response.json();

        if(result.success){

            const {requestCount, uptime} = result.data;

            const countEl =
                document.getElementById('request-count');

            if(countEl){
                countEl.textContent =
                    requestCount.toLocaleString();
            }

            const uptimeEl =
                document.getElementById('uptime-display');

            if(uptimeEl){
                uptimeEl.textContent =
                    uptime.formatted;
            }

        }

    }catch(e){}

}

updateStatistics();

setInterval(updateStatistics,10000);


// ===== NAV EFFECT =====

const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {

    nav.style.background =
        window.scrollY > 50
        ? 'rgba(5,5,5,.95)'
        : 'rgba(5,5,5,.8)';

});


// ===== DEMO CHECK =====

(async function(){

    try{

        const r = await fetch('/api/user/me');

        if(!r.ok) return;

        const data = await r.json();

        if(data.success && data.data.isDemo){

            const banner =
                document.getElementById('demo-banner');

            banner.style.display = 'block';

        }

    }catch(e){}

})();
