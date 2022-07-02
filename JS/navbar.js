function navBar(){
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
//mobilenav
  var nomenumob = true;
  var mainmenumob = false;
  const menuSourceMob = document.getElementById("menuSourceMob");
  const mobMainMenuItems = document.getElementsByClassName("mobmainMenuItems");
  const mobabtBtn = document.getElementById("abtitemmob");
  const mobabtindBtn = document.getElementById("abtitemindmob");
  const mobpubBtn = document.getElementById("pubitemmob");
  const mobpubindBtn = document.getElementById("pubitemindmob");
  const mobmediaBtn = document.getElementById("mediaitemmob");
  const mobmediaindBtn = document.getElementById("mediaitemindmob");
  const mobsnrBtn = document.getElementById("snritemmob");
  const mobsnrindBtn = document.getElementById("snritemindmob");
//mobile redirects//
  menuSourceMob.addEventListener("click", e => {
    if (nomenumob){    
      playMobilePrimaryOut();
      nomenumob = false;
      mainmenumob = true;
    }
    else if(mainmenumob){
      playMobilePrimaryIn();
      playMobileAIn();
      nomenumob = true;
      mainmenumob = false;
    }
  });
  mobabtBtn.addEventListener("click", e => {
    playMobileAIn()
    playMobileAbtOut();
  });
  mobpubBtn.addEventListener("click", e => {
    playMobileAIn()
    playMobilePubOut();
  });
  mobmediaBtn.addEventListener("click", e => {
    playMobileAIn()
    playMobileMediaOut();
  });
  mobsnrBtn.addEventListener("click", e => {
    playMobileAIn()
    playMobileSnrOut();
  });
  function playMobileAIn(){
    mobabtindBtn.style.display = "none";
    mobpubindBtn.style.display = "none";
    mobmediaindBtn.style.display = "none";
    mobsnrindBtn.style.display = "none";
  }
  function playMobileAbtOut(){
    mobabtindBtn.style.display = "block";
  }
  function playMobilePubOut(){
    mobpubindBtn.style.display = "block";
  }
  function playMobileMediaOut(){
    mobmediaindBtn.style.display = "block";
  }
  function playMobileSnrOut(){
    mobsnrindBtn.style.display = "block";
  }
  
  function playMobilePrimaryOut(){
    for (var i = 0; i<mobMainMenuItems.length;i++){
      var mobMainMenuItemsind = mobMainMenuItems[i];
      mobMainMenuItemsind.style.display = "block";
    }
  }
  function playMobilePrimaryIn(){
    for (var i = 0; i<mobMainMenuItems.length;i++){
      var mobMainMenuItemsind = mobMainMenuItems[i];
      mobMainMenuItemsind.style.display = "none";
    }
  }
//end mobile items//
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
}
