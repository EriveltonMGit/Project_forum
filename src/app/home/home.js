





let lastScrollPosition = 0;

window.addEventListener('scroll', function () {
    let menuScrollopcao = document.getElementById('opcoes-menu');
    let currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        // O usuário está rolando para baixo, então esconde o header
        menuScrollopcao.style.top = '-5vh'; // ou '0' para esconder completamente
        menuScrollopcao.style.transition = '0.5s'
        menuScrollopcao.style.opacity = '0'

    } else {
        // O usuário está rolando para cima, então mostra o header
        menuScrollopcao.style.top = '8vh';
        menuScrollopcao.style.opacity = '100'


    }

    lastScrollPosition = currentScrollPosition;
});


// saibaMias()
function saibaMias() {
    alert('clicou')
}

// RELOGIO 
setInterval(function () {
    const time = document.getElementById('time');

    // Criar uma data com o fuso horário de Brasília (UTC-3)
    let date = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = 'am';

    if (hours > 12) {
        day_night = 'pm';
        hours = hours - 12;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    time.textContent = hours + ':' + minutes + ':' + seconds + ' ' + day_night;

}, 1000);



// codigo para menu hamburguer
// const hamburguer = document.querySelector(".hamburguer");
// const navMenu =document.querySelector(".nav-menu");

// hamburguer.addEventListener("click", ()=>{
//     hamburguer.classList.toggle(`active`);
//     navMenu.classList.toggle(`active`);
// })