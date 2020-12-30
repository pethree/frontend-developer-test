
$(document).ready(function () {

    $(".offers__title").click(function (e) {
        e.preventDefault();
        $offers__title = $(this);
        $arrow_icon = $(this).children().eq(1);
        $arrow_icon.toggleClass('fa-chevron-down fa-chevron-up');
        //getting the next element
        $content = $(this).nextAll();
        //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
        $content.slideToggle(500, function () {

        });
    });
});



function myTimer() {
    plusSlides(1)
}

var myVar = setInterval(myTimer, 10000);

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var x = $(".myMerchantSlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        x[slideIndex - 1].style.display = "block";
    }
}



