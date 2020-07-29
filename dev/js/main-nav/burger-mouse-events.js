var burgerToDownArrowTimeLine = gsap.timeline({paused:true});
var burgerArrowSpeed = 0.25;
var arrowShowUp = 0.1;

burgerToDownArrowTimeLine.to("#burger",{duration:0.25,rotation:-90}, "animateBurger")
                    .to("#bottom-line",{duration:burgerArrowSpeed,y:-14},"animateBurger")
                    .to("#top-line",{duration:burgerArrowSpeed,y:14},"animateBurger")
                    .to("#arrow-left",{duration:arrowShowUp, rotation:45, alpha:1, stroke:"#51787A"},"arrowOut")
                    .to("#arrow-right",{duration:arrowShowUp, rotation:-45, alpha:1, stroke:"#51787A"},"arrowOut")


$("#burger").on("mouseenter",function(){
    console.log("mouse enter");
    burgerToDownArrowTimeLine.play();
})

$("#burger").on("mouseleave",function(){
    console.log("mouse leave");
    burgerToDownArrowTimeLine.reverse();
})

var downArrowToXTimeLine = gsap.timeline({paused:true});

// // reset the transformOrigin for each line
// gsap.set(".line",{transformOrigin:"center"});
downArrowToXTimeLine.to("#burger",{duration:0.25,rotation:-90}, "downToX")
                    .to("#bottom-line",{duration:burgerArrowSpeed,rotation:45},"downToX")
                    .to("#top-line",{duration:burgerArrowSpeed, rotation:45},"downToX")
                    .to("#arrow-left",{duration:arrowShowUp, alpha:0, stroke:"#none"},"arrowGone")
                    .to("#arrow-right",{duration:arrowShowUp, alpha:0, stroke:"#none"},"arrowGone")

                    
// $("#burger").on("mouseenter",function(){
//     console.log("mouse enter");
//     burgerToDownArrowTimeLine.play();
// })

function burgerHover(){
    console.log("please show up if it's on hover");

    if(canYouSeeTheMenu === true) {
        $("#burger").on("mouseleave",function(){
            console.log("mouse leave when menu is down");
            downArrowToXTimeLine.play();
        })
    } else {
        console.log("not on hover");
    }

}
// function burgerHover(){

//     console.log("burger hover");

//     if (canYouSeeTheMenu === false) {
//         $("#burger").on("mouseenter",function(){
//             console.log("mouse enter");
//             burgerToDownArrowTimeLine.play();
//         })
//     } else {
//         // burgerAnimationTimeLine.reverse();
//     }
// }