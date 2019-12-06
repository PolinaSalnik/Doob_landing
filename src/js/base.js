$(document).ready(function(){
$(".lazy").slick({
    dots: true,
    lazyLoad: 'ondemand',
    infinite: true
});
});

$(document).ready(function(){
$(".menuToggle").click(function () {
    $('.nav').slideToggle("slow", function () {
        $(".nav ul").show();
    });
});
});

