// var burgerAnimationTimeLine = gsap.timeline({paused: true});
// var burgerAnimationSpeed = 0.25;
// 2 line code tren work

// reset the transformOrigin for each line
// gsap.set(".line",{transformOrigin:"center"});
//line 6 works

// 1. first is the ref to the timeline, 2: what do you want to animate?, 3: what properties?
// burgerAnimationTimeLine.to("#middle-line",{duration:burgerAnimationSpeed,alpha:0,stroke:'#4F2E1C'},"burgerStart")
//                        .to("#top-line",{duration:burgerAnimationSpeed,rotation:45, y:14, stroke:'#4F2E1C'},"burgerStart")
//                        .to("#bottom-line",{duration:burgerAnimationSpeed,rotation:-45, y:-14,stroke:'#4F2E1C', onReverseComplete:resetBurgerLines},"burgerStart");

// burgerAnimationTimeLine.to("#bottom-line",{duration:burgerArrowSpeed,rotation:-45},"burgerToX")
//                     .to("#top-line",{duration:burgerArrowSpeed, rotation:45},"burgerToX")
//                     .to("#middle-line", {duration: burgerAnimationSpeed, alpha:0}, "burgerToX")
//                     .to("#arrow-left",{duration:arrowShowUp, alpha:0, stroke:"none", rotation:0},"burgerToX")
//                     .to("#arrow-right",{duration:arrowShowUp, alpha:0, stroke:"none", rotation:0},"burgerToX")


// function animateBurger(){
//     console.log("animate burger");

//     if (canYouSeeTheMenu === true) {
//         burgerAnimationTimeLine.play();
//     } else {
//         burgerAnimationTimeLine.reverse();
//     }
// }
// 14 to 29 work

// function to change burger color
// function resetBurgerLines(){
//     gsap.to(".line",{duration:0.25, stroke:"#AB633D"});
// }

var burgerAnimationTimeLine = gsap.timeline({
    paused: true
});

burgerAnimationTimeLine.addLabel("burgerToDownArrow")
                        .to("#burger",{duration:burgerAnimateSpeed, rotation:-90}, "animateBurger")
                        .to("#bottom-line",{duration:burgerAnimateSpeed, y:-14}, "animateBurger")
                        .to("#top-line",{duration:burgerAnimateSpeed, y:14}, "animateBurger")
                        .to("#down-arrow-left",{duration:burgerAnimateSpeed, rotation:45, stroke:"#AB633D"}, "createArrow")
                        .to("#down-arrow-right",{duration:burgerAnimateSpeed, rotation:-45, stroke:"#AB633D"}, "createArrow")
                        .addLabel("burgerToDownArrowReverse")
                        .addPause()
                        .addLabel("downArrowToX")
                        .to("#top-line",{duration: burgerAnimateSpeed, rotation:45},"burgerToX")
                        .to("#bottom-line",{duration: burgerAnimateSpeed, rotation:-45},"burgerToX")
                        .to("#middle-line",{duration: burgerAnimateSpeed, alpha:0},"burgerToX")
                        .to("#down-arrow-left",{duration: burgerAnimateSpeed, rotation:0, alpha:0},"burgerToX")
                        .to("#down-arrow-right",{duration: burgerAnimateSpeed, rotation:0, alpha:0},"burgerToX")
                        .to("#up-arrow-left",{duration: burgerAnimateSpeed, alpha:0},"burgerToX")
                        .to("#up-arrow-right",{duration: burgerAnimateSpeed, alpha:0},"burgerToX")
                        .addLabel("downArrowToXReverse")
                        .addPause()
                        .addLabel("XtoUpArrow")
                        .to("#bottom-line",{duration:burgerAnimateSpeed, rotation: 0}, 'upArrow')
                        .to("#top-line",{duration:burgerAnimateSpeed, rotation: 0}, 'upArrow')
                        .to("#up-arrow-left",{duration:burgerAnimateSpeed,rotation:45, alpha:1, stroke:"#AB633D"}, 'createUpArrow')
                        .to("#up-arrow-right",{duration:burgerAnimateSpeed,rotation:-45, alpha:1, stroke:"#AB633D"}, 'createUpArrow')
                        .addLabel("XtoUpArrowReverse")
                        .addPause()
                        .addLabel("upArrowToBurger")
                        .to("#up-arrow-left",{duration:burgerAnimateSpeed,rotation:0, alpha:0}, 'backToBurger')
                        .to("#up-arrow-right",{duration:burgerAnimateSpeed,rotation:0, alpha:0}, 'backToBurger')
                        .to("#middle-line",{duration:burgerAnimateSpeed, alpha:1}, 'backToBurger')
                        .to("#top-line",{duration:burgerAnimateSpeed, y:0, rotation:0}, 'backToBurger')
                        .to("#bottom-line",{duration:burgerAnimateSpeed, y:0, rotation:0}, 'backToBurger')
                        .to("#burger",{duration:burgerAnimateSpeed, rotation:0}, 'backToBurger')
                        .addPause();
