

$(document).ready(function(){
    $("button").click(function(){
      $("#menu").fadeToggle(1000);
    });
  });




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("msb-logo").style.height = "100px";
        document.getElementById("msb-logo").style.width = "200px";
    } else {
        document.getElementById("msb-logo").style.height = "115px";
        document.getElementById("msb-logo").style.width = "285px";
    }
}