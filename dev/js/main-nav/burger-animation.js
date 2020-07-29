var burgerAnimationTimeLine = gsap.timeline({paused: true});
var burgerAnimationSpeed = 0.25;

// reset the transformOrigin for each line
gsap.set(".line",{transformOrigin:"center"});

// 1. first is the ref to the timeline, 2: what do you want to animate?, 3: what properties?
// burgerAnimationTimeLine.to("#middle-line",{duration:burgerAnimationSpeed,alpha:0,stroke:'#4F2E1C'},"burgerStart")
//                        .to("#top-line",{duration:burgerAnimationSpeed,rotation:45, y:14, stroke:'#4F2E1C'},"burgerStart")
//                        .to("#bottom-line",{duration:burgerAnimationSpeed,rotation:-45, y:-14,stroke:'#4F2E1C', onReverseComplete:resetBurgerLines},"burgerStart");

burgerAnimationTimeLine.to("#bottom-line",{duration:burgerArrowSpeed,rotation:-45},"burgerToX")
                    .to("#top-line",{duration:burgerArrowSpeed, rotation:45},"burgerToX")
                    .to("#middle-line", {duration: burgerAnimationSpeed, alpha:0}, "burgerToX")
                    .to("#arrow-left",{duration:arrowShowUp, alpha:0, stroke:"none", rotation:0},"burgerToX")
                    .to("#arrow-right",{duration:arrowShowUp, alpha:0, stroke:"none", rotation:0},"burgerToX")


function animateBurger(){
    console.log("animate burger");

    if (canYouSeeTheMenu === true) {
        burgerAnimationTimeLine.play();
    } else {
        burgerAnimationTimeLine.reverse();
    }
}

// function to change burger color
// function resetBurgerLines(){
//     gsap.to(".line",{duration:0.25, stroke:"#AB633D"});
// }

