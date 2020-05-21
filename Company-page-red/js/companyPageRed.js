var aboutUsImageBox = document.getElementsByClassName('aboutUsImageBox');
var aboutUsRevealColorOne = document.getElementsByClassName('aboutUsRevealColorOne');
var aboutUsRevealColorTwo = document.getElementsByClassName('aboutUsRevealColorTwo');




function aboutUsReveal() {
  if(aboutUsImageBox[0].getClientRects()[0].top < window.innerHeight /3){
    aboutUsRevealColorTwo[0].style.width = '0vw';
    setTimeout(function () {
      aboutUsRevealColorOne[0].style.width = '0vw';
    }, 500);
  }
}

// why chose us reveal
var whyChoseUsRevealColorOne = document.getElementsByClassName('whyChoseUsRevealColorOne');
var whyChoseUsRevealColorTwo = document.getElementsByClassName('whyChoseUsRevealColorTwo');
function whyChoseUsReveal() {
  if(aboutUsImageBox[1].getClientRects()[0].top < window.innerHeight /3){
    whyChoseUsRevealColorTwo[0].style.width = '0vw';
    setTimeout(function () {
      whyChoseUsRevealColorOne[0].style.width = '0vw';
    }, 500);
  }
}


window.addEventListener('scroll',()=>{
  aboutUsReveal();
  whyChoseUsReveal();
})
