jQuery(document).ready(function() {
    jQuery(".learnmore").on("click", function(event) {
        event.preventDefault();
})

jQuery(".readmore").on("click", function () {
    jQuery("#show-this-on-click").slideDown();
    jQuery(".readless").show();
    jQuery(".readmore").hide();
})

jQuery(".readless").on("click", function () {
    jQuery("#show-this-on-click").slideUp();
    jQuery(".readless").hide();
    jQuery(".readmore").show();

})

jQuery(".learnmore").on("click", function () {
    jQuery("#learnmoretext").slideDown();
    jQuery(".learnmore").hide();


})


})


