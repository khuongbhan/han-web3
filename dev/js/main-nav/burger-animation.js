
var burgerAnimateSpeed = 0.25;

var burgerAnimationTimeLine = gsap.timeline({
    paused: true
});

gsap.set(".line",{transformOrigin:"center"});

burgerAnimationTimeLine.addLabel("burgerToDownArrow")
                        .to("#burger",{duration:burgerAnimateSpeed, rotation:-90}, "animateBurger")
                        .to("#bottom-line",{duration:burgerAnimateSpeed, y:-14}, "animateBurger")
                        .to("#top-line",{duration:burgerAnimateSpeed, y:14}, "animateBurger")
                        .to("#down-arrow-left",{duration:burgerAnimateSpeed, rotation:45, stroke:"#AB633D"}, "createArrow")
                        .to("#down-arrow-right",{duration:burgerAnimateSpeed, rotation:-45, stroke:"#AB633D"}, "createArrow")
                        .addLabel("burgerToDownArrowReverse")
                        .addPause()
                        .addLabel("downArrowToX")
                        .to("#bottom-line",{duration:burgerAnimateSpeed, rotation: -45,y:-14, x:0}, 'burgerToX')
                        .to("#top-line",{duration:burgerAnimateSpeed, rotation: 45,y:14, x:0}, 'burgerToX')
                        .to("#middle-line",{duration: burgerAnimateSpeed, alpha:0},"burgerToX")
                        // .to("#up-arrow-left",{duration:burgerAnimateSpeed,rotation:45, alpha:1, stroke:"#AB633D"}, 'createUpArrow')
                        // .to("#up-arrow-right",{duration:burgerAnimateSpeed,rotation:-45, alpha:1, stroke:"#AB633D"}, 'createUpArrow')
                        .to("#up-arrow-left",{duration: burgerAnimateSpeed, alpha:0, stroke: "none"},"arrowFade")
                        .to("#up-arrow-right",{duration: burgerAnimateSpeed, alpha:0, stroke: "none"},"arrowFade")
                        .to("#down-arrow-left",{duration: 0.05, rotation:0, alpha:0, stroke: "none"},"arrowFade")
                        .to("#down-arrow-right",{duration: 0.05, rotation:0, alpha:0, stroke: "none"},"arrowFade")
                        // .to("#up-arrow-left",{duration: burgerAnimateSpeed, alpha:1, stroke: "none", rotation:45},"burgerToX")
                        // .to("#up-arrow-right",{duration: burgerAnimateSpeed, alpha:1, stroke: "none", rotation:-45},"burgerToX")
                        // .to("#top-line",{duration: burgerAnimateSpeed, rotation:90},"burgerToX")
                        // .to("#bottom-line",{duration: burgerAnimateSpeed, rotation:90},"burgerToX")
                        // .to("#middle-line",{duration: burgerAnimateSpeed, alpha:0},"burgerToX")
                        // .to("#down-arrow-left",{duration: burgerAnimateSpeed, rotation:0, alpha:0, stroke: "none"},"burgerToX")
                        // .to("#down-arrow-right",{duration: burgerAnimateSpeed, rotation:0, alpha:0, stroke: "none"},"burgerToX")
                        // .to("#up-arrow-left",{duration: burgerAnimateSpeed, alpha:1, stroke: "none", rotation:45},"burgerToX")
                        // .to("#up-arrow-right",{duration: burgerAnimateSpeed, alpha:1, stroke: "none", rotation:-45},"burgerToX")
                        // .addLabel("downArrowToXReverse")
                        .addPause()
                        .addLabel("XtoUpArrow")
                        // .to("#top-line",{duration: burgerAnimateSpeed, rotation:0},"createUpArrow")
                        // .to("#bottom-line",{duration: burgerAnimateSpeed, rotation:0},"createUpArrow")
                        // .to("#middle-line",{duration: burgerAnimateSpeed, alpha:0},"upArrow")
                        // .to("#down-arrow-left",{duration: burgerAnimateSpeed, rotation:0, alpha:0, stroke: "none"},"createUpArrow")
                        // .to("#down-arrow-right",{duration: burgerAnimateSpeed, rotation:0, alpha:0, stroke: "none"},"createUpArrow")
                        // .to("#up-arrow-left",{duration: burgerAnimateSpeed, alpha:1, stroke: "#AB633D", rotation:45, x:28},"createUpArrow")
                        // .to("#up-arrow-right",{duration: burgerAnimateSpeed, alpha:1, stroke: "#AB633D", rotation:-45,x:28},"createUpArrow")
                        // .to("#bottom-line",{duration:burgerAnimateSpeed, rotation: -45,y:-14, x:0}, 'upArrow')
                        // .to("#top-line",{duration:burgerAnimateSpeed, rotation: 45,y:14, x:0}, 'upArrow')
                        // // .to("#up-arrow-left",{duration:burgerAnimateSpeed,rotation:45, alpha:1, stroke:"#AB633D"}, 'createUpArrow')
                        // // .to("#up-arrow-right",{duration:burgerAnimateSpeed,rotation:-45, alpha:1, stroke:"#AB633D"}, 'createUpArrow')
                        // .to("#up-arrow-left",{duration: burgerAnimateSpeed, alpha:0, stroke: "none"},"createUpArrow")
                        // .to("#up-arrow-right",{duration: burgerAnimateSpeed, alpha:0, stroke: "none"},"createUpArrow")
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




