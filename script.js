
const projectName = 'personal-portfolio';

function myFunction() {
  document.getElementById("welcome-section").style.visibility = "visible";
  document.getElementById("foreground").style.visibility = "visible";
  document.getElementById("contact-section").style.visibility = "hidden";
  document.getElementById("work-section").style.visibility = "hidden";
}

$(document).ready(function(){
$("#hide").click(function(){
  $("#foreground").hide();
});
});

$(document).ready(function(){
$("#show").click(function(){
  $("#foreground").show();
});
$("#show-1").click(function(){
  $("#foreground").show();
});
$("#show-2").click(function(){
  $("#foreground").show();
});
});

function myFunction_1() {
  document.getElementById("work-section").style.visibility = "visible";
  document.getElementById("foreground").style.visibility = "visible";
  document.getElementById("contact-section").style.visibility = "hidden";
  document.getElementById("welcome-section").style.visibility = "hidden";
}

function myFunction_2() {
  document.getElementById("contact-section").style.visibility = "visible";
  document.getElementById("foreground").style.visibility = "visible";
  document.getElementById("work-section").style.visibility = "hidden";
  document.getElementById("welcome-section").style.visibility = "hidden";
}


$(document).ready(function(){
  $("#background-box").click(function(){
    document.getElementById("carousell-box-1").style.animationPlayState = "paused";
    document.getElementById("carousell-box-2").style.animationPlayState = "paused";
    document.getElementById("carousell-box-3").style.animationPlayState = "paused";
    document.getElementById("carousell-box-4").style.animationPlayState = "paused";
  });
  $("#background-box").hover(function(){
    document.getElementById("carousell-box-1").style.animationPlayState = "running";
    document.getElementById("carousell-box-2").style.animationPlayState = "running";
    document.getElementById("carousell-box-3").style.animationPlayState = "running";
    document.getElementById("carousell-box-4").style.animationPlayState = "running";
  });
});