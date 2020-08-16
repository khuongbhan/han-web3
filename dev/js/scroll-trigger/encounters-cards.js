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
    // markers: true,
    // scrub: 1,
    id: "card2"
});

/* ========================
    Card 3 Animation
======================== */

var cardTipplerTimeLine = gsap.timeline();

cardTipplerTimeLine.from("#card-3 >div", {duration: intro, alpha: 0}, "cardShows")
                .from("#card-3 #card-info #planet", {duration: slow, alpha: 0, xPercent: 200, yPercent: 200}, "planetStart")
                .from("#card-3 #bottle", {duration: slow, alpha: 0, xPercent: -200, yPercent: -200}, "planetStart")
                .from("#card-3 #asteroid-number", {duration: slow, alpha: 0, yPercent: -100}, "planetStart" )
                .from("#card-3 #tippler-img", {duration: slow, alpha: 0, xPercent: -300}, "planetStart" )
                .from("#card-3 section h5", {duration: slow, alpha: 0, yPercent: 300}, "planetStart" )
                .from("#flight-line-3", {duration: intro, alpha: 0, yPercent: -100}, "flightLine3" )
                

ScrollTrigger.create({
    animation: cardTipplerTimeLine,
    toggleActions: "play none none none",
    trigger: "#card-3",
    start: "top 50%",
    // end: "top 60%",
    // markers: true,
    // scrub: 1,
    id: "card3"
});

/* ========================
    Card 4 Animation
======================== */

var cardBusinessTimeLine = gsap.timeline();

cardBusinessTimeLine.from("#card-4 >div", {duration: intro, alpha: 0}, "cardShows")
                .from("#card-4 #calculator", {duration: slow, alpha: 0, xPercent: 200, yPercent: 200}, "planetStart")
                .from("#card-4 #card-info #planet", {duration: slow, alpha: 0, xPercent: -200, yPercent: -200}, "planetStart")
                .from("#card-4 #asteroid-number", {duration: slow, alpha: 0, yPercent: 150}, "planetStart" )
                .from("#card-4 #businessman-img", {duration: slow, alpha: 0, xPercent: -300}, "planetStart" )
                .from("#card-4 section h5", {duration: slow, alpha: 0, yPercent: 300}, "planetStart" )
                .from("#flight-line-4", {duration: intro, alpha: 0, yPercent: -100}, "flightLine4" )
                

ScrollTrigger.create({
    animation: cardBusinessTimeLine,
    toggleActions: "play none none none",
    trigger: "#card-4",
    start: "top 50%",
    // end: "top 60%",
    // markers: true,
    // scrub: 1,
    id: "card4"
});


/* ========================
    Card 5 Animation
======================== */

var cardLampLighterTimeLine = gsap.timeline();

cardLampLighterTimeLine.from("#card-5 >div", {duration: intro, alpha: 0}, "cardShows")
                .from("#card-5 #card-info #planet", {duration: slow, alpha: 0, xPercent: 200, yPercent: 200}, "planetStart")
                .from("#card-5 #lamp", {duration: slow, alpha: 0, xPercent: -200, yPercent: -200}, "planetStart")
                .from("#card-5 #asteroid-number", {duration: slow, alpha: 0, yPercent: -100}, "planetStart" )
                .from("#card-5 #lamplighter-img", {duration: slow, alpha: 0, xPercent: -300}, "planetStart" )
                .from("#card-5 section h5", {duration: slow, alpha: 0, yPercent: 300}, "planetStart" )
                .from("#flight-line-5", {duration: intro, alpha: 0, yPercent: -100}, "flightLine5" )
                

ScrollTrigger.create({
    animation: cardLampLighterTimeLine,
    toggleActions: "play none none none",
    trigger: "#card-5",
    start: "top 50%",
    // end: "top 60%",
    // markers: true,
    // scrub: 1,
    id: "card5"
});

/* ========================
    Card 6 Animation
======================== */

var cardGeographerTimeLine = gsap.timeline();

cardGeographerTimeLine.from("#card-6 >div", {duration: intro, alpha: 0}, "cardShows")
                .from("#card-6 #glass", {duration: slow, alpha: 0, xPercent: 200, yPercent: 200}, "planetStart")
                .from("#card-6 #card-info #planet", {duration: slow, alpha: 0, xPercent: -200, yPercent: -200}, "planetStart")
                .from("#card-6 #asteroid-number", {duration: slow, alpha: 0, yPercent: 150}, "planetStart" )
                .from("#card-6 #geographer-img", {duration: slow, alpha: 0, xPercent: -300}, "planetStart" )
                .from("#card-6 section h5", {duration: slow, alpha: 0, yPercent: 300}, "planetStart" )
                .from("#flight-line-6", {duration: intro, alpha: 0, yPercent: -100}, "flightLine6" )
                

ScrollTrigger.create({
    animation: cardGeographerTimeLine,
    toggleActions: "play none none none",
    trigger: "#card-6",
    start: "top 50%",
    // end: "top 60%",
    // markers: true,
    // scrub: 1,
    id: "card6"
});


/* ========================
    Card 7 Animation
======================== */

var cardEarthTimeLine = gsap.timeline();

cardEarthTimeLine.from("#card-7 >div", {duration: intro, alpha: 0}, "showsUp")
                 .from("#card-7 #asteroid-number", {duration: intro, alpha: 0, yPercent: -50}, "showsUp")
                 .from("#card-7 section h5", {duration: slow, alpha: 0, yPercent: 100}, "showsUp")
                 .from("#card-7 #narrator-img", {duration: slow, alpha: 0, xPercent: 50}, "showsUp")
                 .from("#flight-line-7", {duration: intro, alpha: 0, yPercent: -100}, "flightLine7" )

  
ScrollTrigger.create({
    animation: cardEarthTimeLine,
    toggleActions: "play none none none",
    trigger: "#card-7",
    start: "top 50%",
    // end: "top 60%",
    // markers: true,
    // scrub: 1,
    id: "card7"
});


/* ========================
    Card 8 Animation
======================== */

var cardB612TimeLine = gsap.timeline();

cardB612TimeLine.from("#card-8 >div", {duration: intro, alpha: 0}, "showsUp")
                 .from("#card-8 #rose-planet", {duration: slow, alpha: 0, rotation:360}, "showsUp")
                 .from("#card-8 #b612-number", {duration: intro, alpha: 0, yPercent: -50}, "showsUp")
                 .from("#card-7 section h5", {duration: slow, alpha: 0, yPercent: 100}, "showsUp")
                 .from("#card-7 #flower-img", {duration: slow, alpha: 0, xPercent: 50}, "showsUp")

  
ScrollTrigger.create({
    animation: cardB612TimeLine,
    toggleActions: "play none none none",
    trigger: "#card-8",
    start: "top 50%",
    // end: "top 60%",
    markers: true,
    // scrub: 1,
    id: "card8"
});