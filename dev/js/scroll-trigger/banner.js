/* ========================
    About Banner
======================== */

var bannerAboutTimeLine = gsap.timeline();
var pageLoads = 1.5;

bannerAboutTimeLine.from("#about-title", {duration: pageLoads, alpha:0, xPercent: 50}, "title")
                   .from("#about-slash", {duration: pageLoads, alpha: 0, rotation: -90}, "title")
                //    .from("#about-box-1", {duration: pageLoads, alpha: 0}, "quote")
                   .from("#about-quote-text h2", {duration: pageLoads, alpha: 0, yPercent: -50}, "quote")



console.log("about page loads");
bannerAboutTimeLine.play();

var aboutIntroductionsTimeLine = gsap.timeline();
var intro = 1;
var slow = 2;

gsap.set("#about-para-1", {transformOrigin:"top"});
gsap.set("#about-para-1", {transformOrigin:"top"});

aboutIntroductionsTimeLine.from("#about-box-2", {duration: intro, alpha: 0, yPercent: -50}, "box")
                          .from("#about-para-1", {duration: intro, alpha: 0, xPercent: 5}, "text")
                          .from("#about-para-2", {duration: intro, alpha: 0, xPercent: -5}, "text")
                          .from("#about-visit-button", {duration: intro, alpha: 0, yPercent: -30}, "button")                          

ScrollTrigger.create({
    animation: aboutIntroductionsTimeLine,
    toggleActions: "play none none none",
    trigger: "#about-title",
    start: "top 10%",
    end: "top 60%",
    // markers: true,
    // scrub: 1,
    id: "introductions"
});


/* ========================
    About Ending
======================== */

var locationAboutTimeLine = gsap.timeline();

locationAboutTimeLine.from("#location-title", {duration: slow, alpha: 0, yPercent: -50})

ScrollTrigger.create({
    animation: locationAboutTimeLine,
    toggleActions: "play none none none",
    trigger: "#location-title",
    start: "bottom 50%",
    // end: "top 60%",
    // markers: true,
    // scrub: 1,
    id: "map-title"
});

/* ========================
    Encounters Banner
======================== */

var bannerIndexTimeLine = gsap.timeline();

bannerIndexTimeLine.from("#index-title", {duration: pageLoads, alpha:0, yPercent: 50}, "title")
                   .from("#index-slash", {duration: pageLoads, alpha: 0, rotation: -270, xPercent: 100}, "title")
                   .from("#index-box", {duration: pageLoads, alpha: 0, xPercent: -200}, "title" )
                   .from("#index-mark", {duration: pageLoads, alpha: 0, yPercent: -50}, "quote")
                   .from("#index-text", {duration: pageLoads, alpha: 0, yPercent: 100}, "quote")


bannerIndexTimeLine.play();

/* ========================
    Encounters Ending
======================== */

var endingIndexTimeLine = gsap.timeline();

endingIndexTimeLine.from("#index-ending-container #slash",{duration: slow, alpha: 0, yPercent: 50}, "endingslash")
                   .from("#index-end-text",{duration: slow, alpha: 0, yPercent: 100, xPercent: 100}, "endingtext")
                   .from("#index-end-mark",{duration: slow, alpha: 0, yPercent: -100, xPercent: -100}, "endingtext")


ScrollTrigger.create({
    animation: endingIndexTimeLine,
    toggleActions: "play none none none",
    trigger: "#index-ending-container",
    start: "top 50%",
    // end: "top 60%",
    // markers: true,
    // scrub: 1,
    id: "index-end"
});

/* ========================
    Hindsight Banner
======================== */

var bannerHindsightTimeLine = gsap.timeline();

bannerHindsightTimeLine.from("#hindsight-title", {duration: pageLoads, alpha: 0, xPercent: -50}, "title")
                       .from("#hindsight-slash", {duration: pageLoads, alpha: 0, rotation: -270, xPercent: 100}, "slash")

bannerHindsightTimeLine.play();

var hindsightQuoteTimeLine = gsap.timeline();

hindsightQuoteTimeLine.from("#hindsight-planet", {duration: slow, alpha: 0, xPercent: 100, yPercent: 100}, "planet")
                      .from("#hindsight-mark", {duration: slow, alpha: 0, xPercent: -100, yPercent: -100}, "planet")
                      .from("#hindsight-box", {duration: slow, alpha: 0, xPercent: -300}, "planet")
                      .from("#hindsight-text", {duration: slow, alpha: 0, yPercent: -100}, "planet")


ScrollTrigger.create({
    animation: hindsightQuoteTimeLine,
    toggleActions: "play none none none",
    trigger: "#hindsight-title",
    start: "top 13%",
    end: "top 60%",
    // markers: true,
    // scrub: 1,
    id: "hindsight-intro"
});


/* ========================
    Hindsight Ending
======================== */

var endingHindsightTimeLine = gsap.timeline();


endingHindsightTimeLine.from("#ending-container #slash",{duration: pageLoads, alpha: 0, yPercent: 50}, "endinghstext")
                       .from("#end-text",{duration: pageLoads, alpha: 0, yPercent: 100, xPercent: 100}, "endinghstext")
                       .from("#end-mark",{duration: pageLoads, alpha: 0, yPercent: -100, xPercent: -100}, "endinghstext")


ScrollTrigger.create({
    animation: endingHindsightTimeLine,
    toggleActions: "play none none none",
    trigger: "#ending-container",
    start: "top 50%",
    // end: "top 60%",
    // markers: true,
    // scrub: 1,
    id: "index-end"
});

/* ========================
    Wonders Banner
======================== */

var bannerWondersTimeLine = gsap.timeline();

bannerWondersTimeLine.from("#wonders-title", {duration: slow, alpha: 0, xPercent: -50}, "title")
                     .from("#wonders-slash", {duration: slow, alpha: 0, rotation: -270, xPercent: 100}, "title")
                    //  .to("#wonders-box", {duration: slow, alpha: 1}, "title")
                     .from("#wonders-text", {duration: slow, alpha: 0, xPercent: 100}, "title")
                     
                     
bannerWondersTimeLine.play();


/* ========================
    Friends Banner
======================== */

var bannerFriendsTimeLine = gsap.timeline();

gsap.set("#friends-slash", {transformOrigin: "center"});

bannerFriendsTimeLine.from("#friends-slash", {duration: slow, alpha: 0, rotation: 90}, "slash")
                     .from("#friends-section-title", {duration: slow, alpha: 0, yPercent: 10}, "title")
                     .from("#friends-text", {duration: slow, alpha: 0, yPercent: -10}, "title")