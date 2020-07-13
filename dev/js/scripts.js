
var $burger = $("#burger-icon");
var $nav = $('nav[data-nav]');
var $navA = $('nav[data-nav] a');
var isVisible = false;

function mouseClick(){

    console.log("click");
    if(isVisible === false){
        $nav.show();
        isVisible = true;
    }
    else{
        $nav.hide();
        isVisible = false;
    }
}

function myFunction(x) {
    x.classList.toggle("change");

    console.log("click");
    if(isVisible === false){
        $nav.show();
        isVisible = true;
    }
    else{
        $nav.hide();
        isVisible = false;
    }
}

$navA.on( "click", myFunction);
$burger.on( "click", myFunction);


// $burger.on( "click", mouseClick);
// // close the mobile menu when menu link is clicked
// $navA.on( "click", mouseClick);

// @codekit-prepend "fancybox.js";
// @codekit-prepend "tinyslider.js";


$( document ).ready(function() {
    console.log( "ready!" );
});

