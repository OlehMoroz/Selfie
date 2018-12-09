
$("#school__button_white").click(function(){
      $(".container__width").addClass("page-hidden");
      $(".main-container_selfie").removeClass("page-hidden"); 
});

$("#school__button_black").click(function(){
    $(".container__width").addClass("page-hidden");
    $(".main-container_junior").removeClass("page-hidden");
});

$("#back_mini-models").click(function(){
    $("#junior_models_program").addClass("page-hidden");
    $("#mini_models_program").removeClass("page-hidden");
});

$("#back_junior-models").click(function(){
    $("#junior_models_program").removeClass("page-hidden");
    $("#mini_models_program").addClass("page-hidden");
});

$("#btn_back").click(function(){
    $(".container__width").removeClass("page-hidden");
    $(".main-container_selfie").addClass("page-hidden");
});

$("#btn_back-junior").click(function(){
    $(".container__width").removeClass("page-hidden");
    $(".main-container_junior").addClass("page-hidden");
});
    