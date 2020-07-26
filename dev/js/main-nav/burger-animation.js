var burgerAnimationTimeLine = gsap.timeline({paused: true});
var burgerAnimationSpeed = 0.25;

// reset the transformOrigin for each line
gsap.set(".line",{transformOrigin:"center"});

// 1. first is the ref to the timeline, 2: what do you want to animate?, 3: what properties?
burgerAnimationTimeLine.to("#middle-line",{duration:burgerAnimationSpeed,alpha:0,stroke:'#4F2E1C'},"burgerStart")
                       .to("#top-line",{duration:burgerAnimationSpeed,rotation:45, y:14, stroke:'#4F2E1C'},"burgerStart")
                       .to("#bottom-line",{duration:burgerAnimationSpeed,rotation:-45, y:-14,stroke:'#4F2E1C'},"burgerStart");

function animateBurger(){
    console.log("animate burger");

    if (canYouSeeTheMenu === true) {
        burgerAnimationTimeLine.play();
    } else {
        burgerAnimationTimeLine.reverse();
    }
}

