var burgerToArrowTimeLine = gsap.timeline({paused:true});
var burgerArrowSpeed = 0.25;

burgerToArrowTimeLine.to("#burger",{duration:0.25,rotation:-90}, "animateBurger")
                    .to("#bottom-line",{duration:burgerArrowSpeed,y:-14},"animateBurger")
                    .to("#top-line",{duration:burgerArrowSpeed,y:14},"animateBurger")


$("#burger").on("mouseenter",function(){
    // console.log("mouse enter");
    burgerToArrowTimeLine.play();
})

$("#burger").on("mouseleave",function(){
    // console.log("mouse leave");
    burgerToArrowTimeLine.reverse();
})