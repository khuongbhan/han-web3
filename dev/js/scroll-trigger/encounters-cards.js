/* ========================
    Card 1 Animation
======================== */

var cardKingTimeLine = gsap.timeline();

cardKingTimeLine.from("#card-1 >div", {duration: intro, alpha: 0}, "cardShows")
                .from("#card-1 #card-info #planet", {duration: slow, alpha: 0, xPercent: 200, yPercent: 200}, "planetStart")
                .from("#card-1 #crown", {duration: slow, alpha: 0, xPercent: -200, yPercent: -200}, "planetStart")
                .from("#card-1 #asteroid-number", {duration: slow, alpha: 0, yPercent: -100}, "planetStart" )
                .from("#card-1 #king-img", {duration: slow, alpha: 0, xPercent: -300}, "planetStart" )
                .from("#card-1 section h5", {duration: slow, alpha: 0, yPercent: 300}, "planetStart" )
                .from("#flight-line-1", {duration: intro, alpha: 0, yPercent: -100}, "flightLine1" )
                

ScrollTrigger.create({
    animation: cardKingTimeLine,
    toggleActions: "play none none none",
    trigger: "#card-1",
    start: "top 50%",
    // end: "top 60%",
    // markers: true,
    // scrub: 1,
    id: "card1"
});


/* ========================
    Card 2 Animation
======================== */

var cardConceitedTimeLine = gsap.timeline();

cardConceitedTimeLine.from("#card-2 >div", {duration: intro, alpha: 0}, "cardShows")
                .from("#card-2 #hat", {duration: slow, alpha: 0, xPercent: 200, yPercent: 200}, "planetStart")
                .from("#card-2 #card-info #planet", {duration: slow, alpha: 0, xPercent: -200, yPercent: -200}, "planetStart")
                .from("#card-2 #asteroid-number", {duration: slow, alpha: 0, yPercent: 150}, "planetStart" )
                .from("#card-2 #conceitedman-img", {duration: slow, alpha: 0, xPercent: -300}, "planetStart" )
                .from("#card-2 section h5", {duration: slow, alpha: 0, yPercent: 300}, "planetStart" )
                .from("#flight-line-2", {duration: intro, alpha: 0, yPercent: -100}, "flightLine2" )
                

ScrollTrigger.create({
    animation: cardConceitedTimeLine,
    toggleActions: "play none none none",
    trigger: "#card-2",
    start: "top 50%",
    // end: "top 60%",
    markers: true,
    // scrub: 1,
    id: "card1"
});