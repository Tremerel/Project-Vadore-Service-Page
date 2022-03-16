
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
        rotate: function() { return anime.random(-10, 20); },
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

})

// var buttonEl = document.querySelector('.card');
// var textEl = document.querySelector('.hidden-content');

// function animateButton(scale, duration, elasticity) {
//   anime.remove(buttonEl);
//   anime({
//     targets: buttonEl,
//     scale: scale,
//     duration: duration,
//     elasticity: elasticity
//   });
// }

// function animateText(translateX) {
//   anime.remove(textEl);
//   anime({
//     targets: textEl,
//     translateY: translateX,
//     elasticity: 300
//   });
// }

// function enterButton() { animateButton(1.2, 800, 400) };
// function leaveButton() { animateButton(1.0, 600, 300) };

// function enterText() { animateText(-70) };
// function leaveText() { animateText(0) };

// buttonEl.addEventListener('mouseenter', enterButton, false);
// buttonEl.addEventListener('mouseleave', leaveButton, false);
// buttonEl.addEventListener('mouseenter', enterText, false);
// buttonEl.addEventListener('mouseleave', leaveText, false);