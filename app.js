const width = window.innerWidth;
const height = window.innerHeight;

var pageWidth = function () {
    return width != null? width : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body != null ? document.body.clientWidth : null;
}
var pageHeight = function () {
    return height != null? height : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body != null ? document.body.clientHeight : null;
}
 console.log(pageWidth());
 console.log(pageHeight());

 var x =  Math.round(Math.random() * (((pageWidth()/2) - pageWidth()), pageWidth()/2) + 0);
 var y =  Math.round(Math.random() * (0, pageHeight()) + 0);
 var deg = Math.round(Math.random() * (-45, 45) + 0);

 console.log(x)
 console.log(y)
 console.log(deg)

$(document).ready(function(){
    $(".name, .studio, .small-intro").lettering();

    // logo 
    anime({
        targets: '.logo',
        opacity: 1,
        duration: 3000,
    })
    anime({
        targets: '.card-container',
        opacity: 1,
        keyframes: [
            {translateX: x,
             translateY: y,
             rotate: deg,
             duration: 1500
            }
        ],
        duration: 3000,
        delay: 2000
    })
    anime({
        targets: '.card',
        keyframes: [
            {translateX: -105, duration: 1500}
        ],
        easing: 'easeInOutExpo',
        delay: 3000
    })
    anime({
        targets: '.disk-container img',
        keyframes: [
            {translateX: 155, duration: 1500}
        ],
        easing: 'easeInOutExpo',
        delay: 3000
    })

    // Menu 
    anime({
        targets: '.menu',
        opacity: 1,
        duration: 3000,
        delay: anime.stagger(150, {start:1500})
    })

})
