$('[data-fancybox="gallery"]').fancybox({buttons:["zoom","slideShow","fullScreen","close"]}),$(document).ready((function(){console.log($(".slides").hasClass("my-slider")),$(".slides").hasClass("my-slider")&&tns({container:".my-slider",items:1,gutter:20,edgePadding:50,mouseDrag:!0,controlsPosition:"bottom",navPosition:"bottom",responsive:{350:{items:1},768:{items:1},1440:{items:2}}})}));var burgerAnimationTimeLine=gsap.timeline({paused:!0}),burgerAnimationSpeed=.25;function animateBurger(){console.log("animate burger"),!0===canYouSeeTheMenu?burgerAnimationTimeLine.play():burgerAnimationTimeLine.reverse()}gsap.set(".line",{transformOrigin:"center"}),burgerAnimationTimeLine.to("#middle-line",{duration:burgerAnimationSpeed,alpha:0,stroke:"#4F2E1C"},"burgerStart").to("#top-line",{duration:burgerAnimationSpeed,rotation:45,y:14,stroke:"#4F2E1C"},"burgerStart").to("#bottom-line",{duration:burgerAnimationSpeed,rotation:-45,y:-14,stroke:"#4F2E1C"},"burgerStart");var canYouSeeTheMenu=!1,navHeight=$("#main-nav").outerHeight();gsap.set("#main-nav",{y:-navHeight});var mainNavTimeLine=gsap.timeline({paused:!0});function hideShowMainNav(){!1===canYouSeeTheMenu?(console.log("show me the menu"),canYouSeeTheMenu=!0,animateBurger(),mainNavTimeLine.play()):(console.log("hide the menu"),canYouSeeTheMenu=!1,animateBurger(),mainNavTimeLine.reverse())}mainNavTimeLine.to("#main-nav",{duration:1,y:0}),$("#burger-container").on("click",hideShowMainNav),$("#main-nav #side-menu li button").on("click",hideShowMainNav);