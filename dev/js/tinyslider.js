// console.log("tiny slider is working");

tns(
    {
    container: '.my-slider',
    items: 1,
    gutter: 20,
    "edgePadding": 50,
    "mouseDrag": true,
    controlsPosition: "bottom",
    navPosition: "bottom",
    "responsive": {
        "350": {
            "items": 1
        },
        "768": {
            "items": 1
        },
        "1440": {
            "items": 2
        }
    }
    // slideBy: 'page',
    // autoplay: true
}
);