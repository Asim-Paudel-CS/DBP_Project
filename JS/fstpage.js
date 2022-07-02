function slideShowMain(){
    clicked = false;
    var stateSlideShow = 1;
    const fstSlide = document.getElementById("aboutfstPgText");
    const sndSlide = document.getElementById("rafstPgText");
    const trdSlide = document.getElementById("wfstPgText");
    const dot1 = document.getElementById("dot1");
    const dot2 = document.getElementById("dot2");
    const dot3 = document.getElementById("dot3");
    slideshow();
    function slideshow(){
        console.log(stateSlideShow);
        switch(stateSlideShow){
            case 1:
                reset_animation(fstSlide);
                removeallslides();
                updateDots();
                fstSlide.style.display = "block";
                stateSlideShow = 2;
            break;
            case 2:
                reset_animation(sndSlide);
                removeallslides();
                updateDots();
                sndSlide.style.display = "block";
                stateSlideShow = 3;
            break;
            case 3:
                reset_animation(trdSlide);
                removeallslides();
                updateDots();
                trdSlide.style.display = "block";
                stateSlideShow = 1;
            break;
        }
        if(!clicked){
        setTimeout(slideshow,10000);
        }else{
            clicked = false;
        }
    };
    function reset_animation(element){
        element.style.animation = "none";
        element.offsetHeight;
        element.style.animation =null;
    }
    function removeallslides(){
        fstSlide.style.display = "none";
        sndSlide.style.display = "none";
        trdSlide.style.display = "none";
    }
    function updateDots(){
            dot1.style = "outline: 7px solid rgba(50, 44, 59, 0.568);"
            dot2.style = "outline: 7px solid rgba(50, 44, 59, 0.568);"
            dot3.style = "outline: 7px solid rgba(50, 44, 59, 0.568);"
        switch(stateSlideShow){
            case 1:
                dot1.style = "outline: 7px solid rgba(50, 44, 59, 1);"
            break;
            case 2:
                dot2.style = "outline: 7px solid rgba(50, 44, 59, 1);"
            break;
            case 3:
                dot3.style = "outline: 7px solid rgba(50, 44, 59, 1);"
            break;
        }
    }
    dot1.addEventListener("click", e => {
        stateSlideShow = 1;
        clicked = true;
        slideshow();
    });
    dot2.addEventListener("click", e => {
        stateSlideShow = 2;
        clicked = true;
        slideshow();
    });
    dot3.addEventListener("click", e => {
        stateSlideShow = 3;
        clicked = true;
        slideshow();
    });
};