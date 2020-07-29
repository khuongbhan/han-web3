var burgerToDownArrowTimeLine = gsap.timeline({paused:true});
var burgerArrowSpeed = 0.25;
var arrowShowUp = 0.1;

burgerToDownArrowTimeLine.to("#burger",{duration:burgerArrowSpeed,rotation:-90}, "animateBurger")
                    .to("#bottom-line",{duration:burgerArrowSpeed,y:-14},"animateBurger")
                    .to("#top-line",{duration:burgerArrowSpeed,y:14},"animateBurger")
                    .to("#arrow-left",{duration:arrowShowUp, rotation:45, stroke:"#AB633D"},"arrowOut")
                    .to("#arrow-right",{duration:arrowShowUp, rotation:-45, stroke:"#AB633D"},"arrowOut")


// $("#burger").on("mouseenter",function(){
//     console.log("mouse enter");
//     burgerToDownArrowTimeLine.play();
// })

// $("#burger").on("mouseleave",function(){
//     console.log("mouse leave");
//     burgerToDownArrowTimeLine.reverse();
// })

// to("#burger",{duration:burgerArrowSpeed,rotation:-270}, "xToUp")

var xToUpArrowTimeLine = gsap.timeline({paused:true});

// xToUpArrowTimeLine.to("#bottom-line",{duration:burgerArrowSpeed,rotation:180, y:-14},"xToUp")
//                   .to("#top-line",{duration:burgerArrowSpeed, rotation:180, y:14},"xToUp")
//                   .to("#arrow-left",{duration:burgerArrowSpeed, alpha:1, rotation:45, stroke:"#AB633D"},"arrowUp")
//                   .to("#arrow-right",{duration:burgerArrowSpeed, alpha:1, rotation:-45, stroke:"#AB633D"},"arrowUp")
//                   .to("#burger",{duration:burgerArrowSpeed,rotation:-270}, "xToUp")

xToUpArrowTimeLine.to("#bottom-line",{duration:burgerArrowSpeed,rotation:0, y:-14},"xToUp")
                  .to("#top-line",{duration:burgerArrowSpeed, rotation:0, y:14},"xToUp")
                  .to("#arrow-left",{duration:burgerArrowSpeed, alpha:1, rotation:45, stroke:"#AB633D"},"arrowUp")
                  .to("#arrow-right",{duration:burgerArrowSpeed, alpha:1, rotation:-45, stroke:"#AB633D"},"arrowUp")
                  .to("#burger",{duration:burgerArrowSpeed,rotation:-270}, "xToUp")

    
           

$("#burger").on("mouseenter",function(){
    console.log("mouse enter");
    if(canYouSeeTheMenu === false){
        burgerToDownArrowTimeLine.play();

    } else {
        xToUpArrowTimeLine.play();
    }
});

$("#burger").on("mouseleave",function(){
    console.log("mouse leave");

    if(canYouSeeTheMenu === false){
        burgerToDownArrowTimeLine.reverse();
    } else {
        xToUpArrowTimeLine.reverse();
    }
});


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