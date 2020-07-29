var canYouSeeTheMenu = false;

var navHeight = $("#main-nav").outerHeight();
// move the main nav off screen (moving it on the y axis)
gsap.set("#main-nav",{y:-navHeight});

var mainNavTimeLine = gsap.timeline({paused: true});
mainNavTimeLine.to("#main-nav",{duration:1, y:0});

// console.log($("#main-nav").height() + " is the height of the main nav");
// console.log($("#main-nav").outerHeight() + " is the outerheight of the main nav");

// function to handle the showing and hiding of the main-nav
function hideShowMainNav() {
    // console.log("hide or show nav");
    //toggles the css display property
    // $("#main-nav").toggle();

    if (canYouSeeTheMenu === false) {
        console.log("show me the menu");
        // reset back to true so that the menu will go away
        canYouSeeTheMenu = true;
        // turn burger into an X
        animateBurger();

        //play the main nav into view: pull it down
        mainNavTimeLine.play();

        // burgerHover();


    } else {
        console.log("hide the menu");

        // reset back to false so that the menu will show up
        canYouSeeTheMenu = false;

        // turn X into the burger
        animateBurger();

        //play the main nav out of view: push it up
        mainNavTimeLine.reverse();
    }
}

var menuBackground = document.querySelector('#main-nav');

window.onclick = function(event){
    if (event.target == menuBackground) {
        hideShowMainNav();
    }
}