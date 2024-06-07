


// CARD 1
window.addEventListener('scroll', function () {
    let card = document.getElementById('card-1');
    let cardPosition = card.getBoundingClientRect().top;
    let viewportHeight = window.innerHeight;

    if (cardPosition < viewportHeight) {
        // O elemento está dentro da viewport, então mostra o card
        card.style.opacity = '1';

        card.style.transform = 'translateY(0)';
    } else {
        // O elemento está fora da viewport, então esconde o card
        card.style.opacity = '0';
        card.style.transform = 'translateY(75%)';
    }
});

let card = document.getElementById('card-1');
card.addEventListener('mouseenter', function () {
    card.style.boxShadow = '5px 5px 1rem rgba(0, 0, 0, 0.637)';
    card.style.scale = '1.1'
});

card.addEventListener('mouseleave', function () {
    card.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0)';
    card.style.scale = '1.0'
});


// CARD 2
window.addEventListener('scroll', function () {
    let card = document.getElementById('card-2');

    let cardPosition = card.getBoundingClientRect().top;
    let viewportHeight = window.innerHeight;

    if (cardPosition < viewportHeight) {
        // O elemento está dentro da viewport, então mostra o card
        card.style.opacity = '1';
        card.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out';
        card.style.transform = 'translateY(0)';


       

    } else {
        // O elemento está fora da viewport, então esconde o card
        card.style.opacity = '0';
        card.style.transform = 'translateY(75%)';

    }
});

let card2 = document.getElementById('card-2');
card2.addEventListener('mouseenter', function () {
    card2.style.boxShadow = '5px 5px 1rem rgba(0, 0, 0, 0.637)';
    card2.style.transform = 'scale(1.1)';
});

card2.addEventListener('mouseleave', function () {
    card2.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0)';
    card2.style.transform = 'scale(1.0)';
})

// CARD 3
window.addEventListener('scroll', function () {
    let card = document.getElementById('card-3');
    let cardPosition = card.getBoundingClientRect().top;
    let viewportHeight = window.innerHeight;

    if (cardPosition < viewportHeight) {
        // O elemento está dentro da viewport, então mostra o card
        card.style.opacity = '1';
        card.style.transition = 'opacity 2s ease-out, transform 2s ease-out';
        card.style.transform = 'translateY(0)';

    } else {
        // O elemento está fora da viewport, então esconde o card
        card.style.opacity = '0';
        card.style.transform = 'translateY(100%)';

    }
});

let card3 = document.getElementById('card-3');
card3.addEventListener('mouseenter', function () {
    card3.style.boxShadow = '5px 5px 1rem rgba(0, 0, 0, 0.637)';
    card3.style.transform = 'scale(1.1)';
});

card3.addEventListener('mouseleave', function () {
    card3.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0)';
    card3.style.transform = 'scale(1.0)';
})



// video android section 3

function play() {
    let videoAndroid = document.getElementById('video-android');
    let pauseButton = document.getElementById('pause-button');

    pauseButton.addEventListener('click', function () {
        if (videoAndroid.paused) {
            videoAndroid.play();
            pauseButton.textContent = ' ⏸';
        } else {
            videoAndroid.pause();
            pauseButton.textContent = '▶';
        }
    });


}


// _____________________- cards tela, bloqueio, infomação etc______________

// CARD 1 / tela block
window.addEventListener('scroll', function () {
    let card = document.getElementById('tela-block');

    let cardPosition = card.getBoundingClientRect().top;
    let viewportHeight = window.innerHeight;

    if (cardPosition < viewportHeight) {
        // O elemento está dentro da viewport, então mostra o card
        card.style.opacity = '1';
        card.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out';
        card.style.transform = 'translateY(0)';


       

    } else {
        // O elemento está fora da viewport, então esconde o card
        card.style.opacity = '0';
        card.style.transform = 'translateY(50%)';

    }
});


// CARD 2 TELA INFO / COMPARTILHAR
window.addEventListener('scroll', function () {
    let card = document.getElementById('tela-info');

    let cardPosition = card.getBoundingClientRect().top;
    let viewportHeight = window.innerHeight;

    if (cardPosition < viewportHeight) {
        // O elemento está dentro da viewport, então mostra o card
        card.style.opacity = '1';
        card.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out';
        card.style.transform = 'translateY(0)';


       

    } else {
        // O elemento está fora da viewport, então esconde o card
        card.style.opacity = '0';
        card.style.transform = 'translateY(50%)';

    }
});

// CARD 2 TELA INFO / tela-desblock
window.addEventListener('scroll', function () {
    let card = document.getElementById('tela-desblock');

    let cardPosition = card.getBoundingClientRect().top;
    let viewportHeight = window.innerHeight;

    if (cardPosition < viewportHeight) {
        // O elemento está dentro da viewport, então mostra o card
        card.style.opacity = '1';
        card.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out';
        card.style.transform = 'translateY(0)';


       

    } else {
        // O elemento está fora da viewport, então esconde o card
        card.style.opacity = '0';
        card.style.transform = 'translateY(50%)';

    }
});




// CARD 2 TELA INFO / FACILIDADE
window.addEventListener('scroll', function () {
    let card = document.getElementById('tela-facilidade');

    let cardPosition = card.getBoundingClientRect().top;
    let viewportHeight = window.innerHeight;

    if (cardPosition < viewportHeight) {
        // O elemento está dentro da viewport, então mostra o card
        card.style.opacity = '1';
        card.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out';
        card.style.transform = 'translateY(0)';


       

    } else {
        // O elemento está fora da viewport, então esconde o card
        card.style.opacity = '0';
        card.style.transform = 'translateY(50%)';

    }
});

// CARD 2 TELA INFO / TELA VIDEO
window.addEventListener('scroll', function () {
    let card = document.getElementById('tela-video');

    let cardPosition = card.getBoundingClientRect().top;
    let viewportHeight = window.innerHeight;

    if (cardPosition < viewportHeight) {
        // O elemento está dentro da viewport, então mostra o card
        card.style.opacity = '1';
        card.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out';
        card.style.transform = 'translateY(0)';


       

    } else {
        // O elemento está fora da viewport, então esconde o card
        card.style.opacity = '0';
        card.style.transform = 'translateY(50%)';

    }
});
