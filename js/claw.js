var goStart = $('.go')
var goClaw = $('.claw')

$(".go").click(function() {
  goClaw.animate({top:'0px'},1000);
  setTimeout(function () {
    $(".el-model").show();
    goClaw.css('top','-172px')
  },1300);
})
