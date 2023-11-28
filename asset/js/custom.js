$(document).ready(function () {
  // $('select').niceSelect();
  $(".toggle_button").on("click", function () {
    $(".appLayout").toggleClass("toggle");
  });

  // $('select').on('change',function(){
  //     var selectFirst = $('.current').html();
  //     if (selectFirst.indexOf("Select") >= 0){
  //         $(this).addClass('text-gray')
  //     }else{
  //         $(this).removeClass('text-gray')
  //     }
  // })

  if ($(".current")[0]) {
    var selectFirst = $(".current").html();
    if (selectFirst.indexOf("Select") >= 0) {
      $(this).addClass("text-gray");
    } else {
      $(this).removeClass("text-gray");
    }
  }

  $("select").each(function () {
    $(this).addClass("form-select");
  });
  $(".inject").svgInject();
});
