window.onload=function(){
  window.scrollBy({
    top: window.innerHeight,
    left: 0,
    behavior: 'instant'
  });
    navBar();
    slideShowMain();
    populatePublished();
}