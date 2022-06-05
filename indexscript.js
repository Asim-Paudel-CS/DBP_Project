"use strict"
window.onload=function(){//Only when webpage loads
  var nomenu = true;
  var mainmenu = false;
  var auxmenu = false;
  const pBtn = document.getElementsByClassName("pBtn");
  const menuBtn = document.getElementById('menuBtn');
  const menuSource = document.getElementById('menuSource');
  //Redirects//
  menuBtn.addEventListener("click", e => {
    // window.location.href = "/gameTab.html";
    if(nomenu){
      for (var i = 0; i<=5;i++){
        var pBtnind = pBtn[i];
        pBtnind.style.display = "inline-block";
        reset_animation(pBtnind);
        pBtnind.style.animation = "slidein 1s";  
      }
    menuSource.src="/Images/back.png";
    nomenu = false;
    mainmenu = true;
    }else if(mainmenu){
        for (var i = 0; i<=5;i++){
          var pBtnind = pBtn[i];
          reset_animation(pBtnind);
          pBtnind.style.animation = "slideout 1s";
          setTimeout(hideElementpBtn, 1000);
        }
        menuSource.src="/Images/menu.png";
        nomenu = true;
        mainmenu = false;
    }
  });
  function hideElementpBtn(){
    for (var i = 0; i<=5;i++){
      var pBtnind = pBtn[i];
      pBtnind.style.display = "none"; 
    }
  }
  function reset_animation(element){
    element.style.animation = "none";
    element.offsetHeight;
    element.style.animation =null;
  }
}//On Load End 
