var SStop

/******* ScrollIndicator **************/
$("#scrollIndicator a").click(function(){
  var SStop = $(window).scrollTop();
  if(SStop > 0)
    $(window).scrollTop(0)
})

function resize(){

  SStop = $(window).scrollTop()

  if(SStop == 0 && $(window).width() > 960)
   $("#header-bar").removeClass("headerBarBlack")
  else
   $("#header-bar").addClass("headerBarBlack")

}

$(window).ready(function(){
  resize()
})

$(window).resize(function(){
  resize()
})

$(window).scroll(function(){

  resize()

  SStop = $(window).scrollTop()

  // Scroll indicator
  if(SStop > 0 ){
    $("#scrollIndicator a").find("i").addClass("fa-chevron-circle-up")
    $("#scrollIndicator a").find("i").removeClass("fa-chevron-circle-down")
    return
  }

    $("#scrollIndicator a").find("i").removeClass("fa-chevron-circle-up")
    $("#scrollIndicator a").find("i").addClass("fa-chevron-circle-down")

})
