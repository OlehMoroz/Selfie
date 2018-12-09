
$(".footer__btn-down").click(function(){
    $(".footer__btn-down").addClass("page-hidden");
    $(".footer__btn-up").removeClass("page-hidden");
    $(".container__row").removeClass("page-hidden"); 
});

$(".footer__btn-up").click(function(){
    $(".footer__btn-up").addClass("page-hidden");
    $(".footer__btn-down").removeClass("page-hidden");
    $(".last_line").addClass("page-hidden"); 
});