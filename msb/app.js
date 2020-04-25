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

const tabActive = () => {
 var stCharles = document.getElementById("st-charles");
 stCharles.classList.add("active-tab");
}

function activeTab() {
   var element = document.getElementsByClassName("brew-town");
   var active = document.getElementsByClassName("active-tab");
    for (let i = 0; i < element.length; i++) {
      if (element[i] === active) {

      }
    }

console.log(element.length)
};

makeTabActive()
