
$(document).ready(function () {

    $(".offers__title").click(function (e) {
        e.preventDefault();
        $offers__title = $(this);
        $arrow_icon = $(this).children().eq(1);
        $arrow_icon.toggleClass('fa-chevron-up fa-chevron-down');

        $content = $(this).nextAll();

        $content.slideToggle(500, function () {
        });
    });

    $(".fa-plus").click(function () {
        var quantity = $(this).next('input');
        var value = quantity.val();
        quantity.val(++value);

    });

    $(".fa-minus").click(function () {
        var quantity = $(this).prev('input');
        var value = quantity.val();
        if (quantity.val() > 0) {
            quantity.val(--value);
        }

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
    var merchantslides = $(".myMerchantSlides");
    if (n > merchantslides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = merchantslides.length }
    for (i = 0; i < merchantslides.length; i++) {
        merchantslides[i].style.display = "none";
        merchantslides[slideIndex - 1].style.display = "block";
    }
}



