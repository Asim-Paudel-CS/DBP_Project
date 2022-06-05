"use strict"
window.onload=function(){//Only when webpage loads
  var nomenu = true;
  var mainmenu = false;
  var auxmenu = false;
  const pBtn = document.getElementsByClassName("pBtn");
  const aBtn = document.getElementsByClassName("aBtn");
  const menuBtn = document.getElementById('menuBtn');
  const menuSource = document.getElementById('menuSource');
  const aboutBtnItems = document.getElementsByClassName("aboutBtn");
  const abtBtn = document.getElementById("abtBtnMain");
  const pubBtnItems = document.getElementsByClassName("pubBtn");
  const pubBtn = document.getElementById("pubBtnMain");
  const mediaBtnItems = document.getElementsByClassName("mediaBtn");
  const mediaBtn = document.getElementById("mediaBtnMain");
  const rnsBtnItems = document.getElementsByClassName("rnsBtn");
  const rnsBtn = document.getElementById("rnsBtnMain");
  
  //Redirects//
  menuBtn.addEventListener("click", e => {
    // window.location.href = "/gameTab.html";
    if(nomenu || auxmenu){
      hideallauxMenu();
      playslideinPbtn();      
      nomenu = false;
      mainmenu = true;
      auxmenu = false;
    }
    else if(mainmenu){
      hideallauxMenu();
      playslideoutPbtn();
      nomenu = true;
      mainmenu = false;
      auxmenu = false;
    }
  });
  abtBtn.addEventListener("click", e => {
    hideElementpBtn();
    playslideoutPbtn();
    slideinAboutbtn();
    nomenu = false;
    mainmenu = false;
    auxmenu = true;
  });
  pubBtn.addEventListener("click", e => {
    hideElementpBtn();
    playslideoutPbtn();
    slideinPubbtn();
    nomenu = false;
    mainmenu = false;
    auxmenu = true;
  });
  mediaBtn.addEventListener("click", e => {
    hideElementpBtn();
    playslideoutPbtn();
    slideinmediabtn();
    nomenu = false;
    mainmenu = false;
    auxmenu = true;
  });
  rnsBtn.addEventListener("click", e => {
    hideElementpBtn();
    playslideoutPbtn();
    slideinrnsbtn();
    nomenu = false;
    mainmenu = false;
    auxmenu = true;
  });
  function slideinrnsbtn(){
    for (var i = 0; i<rnsBtnItems.length;i++){
      var rnsBtnind = rnsBtnItems[i];
      rnsBtnind.style.display = "inline-block";
      reset_animation(rnsBtnind);
      rnsBtnind.style.animation = "slidein 1s";  
    }
    menuSource.src="/Images/back.png";
  }
  function slideinmediabtn(){
    for (var i = 0; i<mediaBtnItems.length;i++){
      var mediaBtnind = mediaBtnItems[i];
      mediaBtnind.style.display = "inline-block";
      reset_animation(mediaBtnind);
      mediaBtnind.style.animation = "slidein 1s";  
    }
    menuSource.src="/Images/back.png";
  }
  function slideinPubbtn(){
    for (var i = 0; i<pubBtnItems.length;i++){
      var pubBtnind = pubBtnItems[i];
      pubBtnind.style.display = "inline-block";
      reset_animation(pubBtnind);
      pubBtnind.style.animation = "slidein 1s";  
    }
    menuSource.src="/Images/back.png";
  }
  function slideinAboutbtn(){
    for (var i = 0; i<=2;i++){
      var aboutBtnind = aboutBtnItems[i];
      aboutBtnind.style.display = "inline-block";
      reset_animation(aboutBtnind);
      aboutBtnind.style.animation = "slidein 1s";  
    }
    menuSource.src="/Images/back.png";
  }
  function hideallauxMenu(){
    for (var i = 0; i<aBtn.length;i++){
      var aBtnind = aBtn[i];
      aBtnind.style.display = "none"; 
    }
  }
  function playslideinPbtn(){
    for (var i = 0; i<=5;i++){
      var pBtnind = pBtn[i];
      pBtnind.style.display = "inline-block";
      reset_animation(pBtnind);
      pBtnind.style.animation = "slidein 1s";  
    }
    menuSource.src="/Images/back.png";
  }
  function playslideoutPbtn(){
    for (var i = 0; i<=5;i++){
      var pBtnind = pBtn[i];
      reset_animation(pBtnind);
      pBtnind.style.animation = "slideout 1s";
      setTimeout(hideElementpBtn, 900);
    }
    menuSource.src="/Images/menu.png";
  }

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
