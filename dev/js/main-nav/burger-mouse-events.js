// var burgerToDownArrowTimeLine = gsap.timeline({paused:true});
// var burgerArrowSpeed = 0.25;
// var arrowShowUp = 0.1;

// burgerToDownArrowTimeLine.to("#burger",{duration:burgerArrowSpeed,rotation:-90}, "animateBurger")
//                     .to("#bottom-line",{duration:burgerArrowSpeed,y:-14},"animateBurger")
//                     .to("#top-line",{duration:burgerArrowSpeed,y:14},"animateBurger")
//                     .to("#down-arrow-left",{duration:arrowShowUp, rotation:45, stroke:"#AB633D"},"arrowOut")
//                     .to("#down-arrow-right",{duration:arrowShowUp, rotation:-45, stroke:"#AB633D"},"arrowOut")

// var xToUpArrowTimeLine = gsap.timeline({paused:true});

// xToUpArrowTimeLine.to("#burger",{duration:burgerArrowSpeed,rotation:90}, "createArrowUp")
//                   .to("#top-line",{duration:burgerArrowSpeed,rotation: 0,y:14}, "createArrowUp")
//                   .to("#bottom-line",{duration:burgerArrowSpeed,rotation: 0,y:-14}, "createArrowUp")
//                   .to("#up-arrow-right",{duration:burgerArrowSpeed,rotation: 45, stroke:"#AB633D"}, "arrowUpOut")
//                   .to("#up-arrow-left",{duration:burgerArrowSpeed,rotation: -45, stroke:"#AB633D"}, "arrowUpOut")

// 1 toi 17 work

// $("#burger").on("mouseenter",function(){
//     console.log("mouse enter");
//     // burgerToDownArrowTimeLine.play();

//     if (canYouSeeTheMenu === false) {
//         burgerToDownArrowTimeLine.play();
//     } else {
//         xToUpArrowTimeLine.play();
//     }
// })

// $("#burger").on("mouseleave",function(){
//     console.log("mouse leave");

//     if (canYouSeeTheMenu === true) {
//         burgerToDownArrowTimeLine.reverse();
//     } else {
//         xToUpArrowTimeLine.reverse();
//     }
// })

//21 to 40 work



gsap.set("#up-arrow-left",{transformOrigin:"right center", alpha:0});
gsap.set("#up-arrow-right",{transformOrigin:"right center", alpha:0});



$("#burger").on("mouseenter", function(){
    //console.log("mouse enter");
    console.log(canYouSeeTheMenu + " menu visible");
    if(canYouSeeTheMenu === false){
        burgerAnimationTimeLine.play("burgerToDownArrow");
    }else{
        burgerAnimationTimeLine.play("XtoUpArrow");
    }
})


$("#burger").on("mouseleave", function(){
    if(canYouSeeTheMenu === false){
        burgerAnimationTimeLine.reverse("burgerToDownArrowReverse");
        
    }else{
        burgerAnimationTimeLine.reverse("XtoUpArrowReverse");
    }
})

// to("#burger",{duration:burgerArrowSpeed,rotation:-270}, "xToUp")

// hang sau co chay
// var xToUpArrowTimeLine = gsap.timeline({paused:true});

// xToUpArrowTimeLine.to("#bottom-line",{duration:burgerArrowSpeed,rotation:180, y:-14},"xToUp")
//                   .to("#top-line",{duration:burgerArrowSpeed, rotation:180, y:14},"xToUp")
//                   .to("#arrow-left",{duration:burgerArrowSpeed, alpha:1, rotation:45, stroke:"#AB633D"},"arrowUp")
//                   .to("#arrow-right",{duration:burgerArrowSpeed, alpha:1, rotation:-45, stroke:"#AB633D"},"arrowUp")
//                   .to("#burger",{duration:burgerArrowSpeed,rotation:-270}, "xToUp")

// hang sau co chay
// xToUpArrowTimeLine.to("#bottom-line",{duration:burgerArrowSpeed,rotation:0, y:-14},"xToUp")
//                   .to("#top-line",{duration:burgerArrowSpeed, rotation:0, y:14},"xToUp")
//                   .to("#arrow-left",{duration:burgerArrowSpeed, alpha:1, rotation:45, stroke:"#AB633D"},"arrowUp")
//                   .to("#arrow-right",{duration:burgerArrowSpeed, alpha:1, rotation:-45, stroke:"#AB633D"},"arrowUp")
//                   .to("#burger",{duration:burgerArrowSpeed,rotation:-270}, "xToUp")

    
           

// $("#burger").on("mouseenter",function(){
//     console.log("mouse enter");
//     if(canYouSeeTheMenu === false){
//         burgerToDownArrowTimeLine.play();

//     } else {
//         xToUpArrowTimeLine.play();
//     }
// });

// $("#burger").on("mouseleave",function(){
//     console.log("mouse leave");

//     if(canYouSeeTheMenu === false){
//         burgerToDownArrowTimeLine.reverse();
//     } else {
//         xToUpArrowTimeLine.reverse();
//     }
// });


// $("#burger").on("mouseenter",function(){
//     console.log("mouse enter");
//     burgerToDownArrowTimeLine.play();
// })

// function burgerHover(){
//     console.log("please show up if it's on hover");

//     // can

//     if(canYouSeeTheMenu === true) {
//         $("#burger").on("mouseleave",function(){
//             console.log("mouse leave when menu is down");
//             downArrowToXTimeLine.play();
//         })
//     } else {
//         console.log("not on hover");
//     }

// }