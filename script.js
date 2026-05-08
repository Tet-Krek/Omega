const PASS = "NAXE-7";

function login() {
    let v = document.getElementById('pass').value.toUpperCase();
    if (v === PASS) {
         
        document.getElementById('app').classList.remove('hidden');
        document.getElementById('auth').classList.add('hidden');
        document.getElementById('app').classList.remove('hidden');
        startClock();
        startMatrix();
    } else {
        document.getElementById('err').style.display = 'block';
    }
}

function startClock() {
    setInterval(() => {
        document.getElementById('clock').innerText = new Date().toLocaleTimeString('fr-FR');
    }, 1000);
}

function show(type) {
    let c = document.getElementById('content');
