// toggle
$(document).ready(function(){
  $(".fa-bars").click(function(){
    $(".navbar-navigation").toggleClass("toggle-menu")
  })
  $(".fa-x").click(function(){
    $(".navbar-navigation").toggleClass("toggle-menu")
  })
})

// scroll function
let scroll_button=document.getElementById("scroll");
window.onscroll=function(){
  scroll_function();
}
function scroll_function(){
  if(document.body.scrollTop>800 || document.documentElement.scrollTop>800){
    scroll_button.style.display="block";
  }
  else{
    scroll_button.style.display="none";
  }
}

// AOS function
AOS.init();