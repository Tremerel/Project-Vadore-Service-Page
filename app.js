
$(document).ready(function(){
    $(".name, .studio, .small-intro").lettering();

    // logo 
    anime({
        targets: '.logo',
        opacity: 1,
        duration: 3000,
    })

    // Card
    anime({
        targets: '.card',
        opacity: 1,
        scale: 0.9,
        rotate: function() { return anime.random(10, -15); },
        easing: 'easeInOutQuad',
        translateX: [-1000,0],
        duration: 3000,
        delay: anime.stagger(800, {start:2000}),
    })
    anime({
        targets: '.disk-container img',
        opacity: 1,
        rotate: function() { return anime.random(-10, 10); },
        easing: 'easeInOutQuad',
        duration: 3000,
        delay: anime.stagger(800, {start:0}),
    })

    // Menu 
    anime({
        targets: '.menu',
        opacity: 1,
        duration: 3000,
        delay: anime.stagger(150, {start:1500})
    })

    let cards = document.querySelectorAll('.card-container');
    
    cards.forEach((card) => {
        card.addEventListener('mouseenter', (event) => {
            anime.remove(card.querySelector(".card"));
            anime.remove(card.querySelector(".disk-container"));

            anime({
                targets: card.querySelector('.card'),
                easing: 'easeOutExpo',
                translateX: -100,
                duration: 1000
            })
            anime({
                targets: card.querySelector('.disk-container'),
                easing: 'easeOutExpo',
                translateX: 50,
                duration: 1000
            })
        })

        card.addEventListener('mouseleave', (event) => {
            anime.remove(card.querySelector(".card"));
            anime.remove(card.querySelector(".disk-container"));

            anime({
                targets: card.querySelector('.card'),
                easing: 'easeOutExpo',
                translateX: 0,
                duration: 1000
            })
            anime({
                targets: card.querySelector('.disk-container'),
                easing: 'easeOutExpo',
                translateX: 0,
                duration: 1000
            })
        })
    })

})
