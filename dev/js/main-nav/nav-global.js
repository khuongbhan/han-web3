// var canYouSeeTheMenu = false;

// var navHeight = $("#main-nav").outerHeight();
// // move the main nav off screen (moving it on the y axis)
// gsap.set("#main-nav",{y:-navHeight});

// var mainNavTimeLine = gsap.timeline({paused: true});
// mainNavTimeLine.to("#main-nav",{duration:1, y:0});

// // console.log($("#main-nav").height() + " is the height of the main nav");
// // console.log($("#main-nav").outerHeight() + " is the outerheight of the main nav");

// // function to handle the showing and hiding of the main-nav
// function hideShowMainNav() {
//     // console.log("hide or show nav");
//     //toggles the css display property
//     // $("#main-nav").toggle();

//     if (canYouSeeTheMenu === false) {
//         console.log("show me the menu");
//         // reset back to true so that the menu will go away
//         canYouSeeTheMenu = true;
//         // turn burger into an X
//         animateBurger();

//         //play the main nav into view: pull it down
//         mainNavTimeLine.play();

//         // burgerHover();


//     } else {
//         console.log("hide the menu");

//         // reset back to false so that the menu will show up
//         canYouSeeTheMenu = false;

//         // turn X into the burger
//         animateBurger();

//         //play the main nav out of view: push it up
//         mainNavTimeLine.reverse();
//     }
// }

// var menuBackground = document.querySelector('#main-nav');

// window.onclick = function(event){
//     if (event.target == menuBackground) {
//         hideShowMainNav();
//     }
// }

// line 1 - 52 works

var canYouSeeTheMenu = false;

var navHeight = $("#main-nav").outerHeight();
//move the main nav off screen ( this is moving the main-nav on the Y axis )
gsap.set("#main-nav", {
    y: -navHeight
})

var mainNavTimeline = gsap.timeline({
    paused: true
})
mainNavTimeline.to("#main-nav", {
    duration: 0.25,
    y: 0
});

var burgerAnimateSpeed = 0.25;

//reset the transformOrigin point for each line
gsap.set(".lines", {
    transformOrigin: "center"
});



// function to handle the showing and hiding of the main-nav
function hideShowMainNav() {

    console.log("show me the menu!");
    console.log(canYouSeeTheMenu + " can you see the menu value");

    if (canYouSeeTheMenu === false) {

        burgerAnimationTimeLine.play("downArrowToX");

        //play the main nav animation into view ( pull it down )
        mainNavTimeline.play();

        canYouSeeTheMenu = true;
    } else {
        console.log("burger click up");
        burgerAnimationTimeLine.play("upArrowToBurger");

        // play the main nav animation out of view ( push it up )
        mainNavTimeline.reverse();

        canYouSeeTheMenu = false;
    }
}

var menuBackground = document.querySelector('#main-nav');

window.onclick = function (event) {

    if (event.target == menuBackground) {
        hideShowMainNav();
    }
}

function reportWindowSize() {
    console.log("test");
    if (canYouSeeTheMenu === false) {
        console.log("can't see the main nav");
        console.log($("#main-nav").outerHeight());
        navHeight = $("#main-nav").outerHeight();
        gsap.set("#main-nav", {
            y: -navHeight
        });
    }
}


// add a listener to the window for everytime it's resized
window.addEventListener('resize', reportWindowSize);