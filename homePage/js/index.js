console.log('i work on desktop');


// header Carousel
var headerCarousel = document.getElementsByClassName('headerCarousel');
var carrouselBox = document.getElementsByClassName('carrouselBox');
var header = document.getElementsByClassName('header');
var banerCarBG = document.getElementsByClassName('banerCarBG');
var banerBGimg = document.getElementsByClassName('banerBGimg');


var banerAnim = document.getElementById('banerAnim');

// bg anims
function banerBGimgFun(broj) {
  for (var i = 0; i < banerBGimg.length; i++) {
    banerBGimg[i].style.opacity = '0';
  }
  banerBGimg[broj].style.opacity = '1';
}



// headerCarousel[0].style.left = (carrouselBox.length-1) * -100 + 'vw';

var colors = ['#ff2627', '#ffc02b','#a19fa4','#e69c3d', '#c90618', '#b42994', '#396fe3', '#be0616', '#c04825' ,'#d52e60','#6700ff', '#49113d', '#98ca4f', '#000', '#000'];
// var carPosition = (carrouselBox.length-1) * -100;
var carPosition = 0;
function moveCarousel() {
  if(carPosition > (carrouselBox.length-1) * -100 ){
    carPosition -= 100;
    console.log(-(carPosition/100));
  }else{
    headerCarousel[0].style.transition = '0s';
    setTimeout(function () {
      carPosition = 0;
      headerCarousel[0].style.left = carPosition + 'vw';
    }, 50);
    setTimeout(function () {
      headerCarousel[0].style.transition = '2s';
      setTimeout(function () {
        moveCarousel()
      }, 120);
    }, 100);
    // carPosition = 0;
    // header[0].style.background = colors[-(carPosition/100)];
  }

  banerBGimgFun(-(carPosition/100));

  header[0].style.background = colors[-(carPosition/100)];

    for (var i = 0; i < carrouselBox.length; i++) {
      carrouselBox[i].style.opacity = '0';
    }

    setTimeout(function () {
      for (var i = 0; i < carrouselBox.length; i++) {
        carrouselBox[i].style.opacity = '1';
      }
    }, 1000);

    headerCarousel[0].style.left = carPosition + 'vw';
    banerAnim.className = 'banerAnimation'

    setTimeout(function () {
      banerAnim.className = 'banerAnimation banerAnimDinamyc'
    }, 50);
}





var carMovement;
var carTimeOut;

function startCar() {

  carTimeOut =
  setTimeout(function () {
    moveCarousel();

    carMovement = setInterval(function () {
      moveCarousel()
    }, 4000);

  }, 2000);
}

startCar();

function stopCar() {
  clearInterval(carMovement,carTimeOut)
}

// hover to stop anim
var search = document.getElementsByClassName('search');

search[0].addEventListener('mouseenter',()=>{
  clearTimeout(delayStartCar);
  stopCar()
})

var delayStartCar;

search[0].addEventListener('mouseleave',()=>{
  delayStartCar =
  setTimeout(function () {
    startCar()
  }, 4000);
})




// tailLight anim
var tailLight = document.getElementsByClassName('tailLight');
function tailLightFun() {
  if(tailLight[0].getClientRects()[0].top < window.innerHeight /3 && tailLight[0].getClientRects()[0].top > window.innerHeight /3 - 20){
    tailLight[0].style.filter = 'brightness(1.5)'
    setTimeout(function () {
      tailLight[0].style.filter = 'brightness(1)'
    }, 200);
    setTimeout(function () {
      tailLight[0].style.filter = 'brightness(1.5)'
    }, 400);
    setTimeout(function () {
      tailLight[0].style.filter = 'brightness(1)'
    }, 600);
  }
}

// doule hover header
var headerDoubleHover = document.getElementsByClassName('headerDoubleHover');

function recentProjectsFun() {
  if(headerDoubleHover[0].getClientRects()[0].bottom < window.innerHeight /3){
    headerDoubleHover[0].style.opacity = '1';
  }else{
    headerDoubleHover[0].style.opacity = '0';
  }
}

// sideCar animation

var sectionToDomainNameCar = document.getElementsByClassName('sectionToDomainNameCar');

function sectionToDomainNameCarFun() {
  if(sectionToDomainNameCar[0].getClientRects()[0].top < window.innerHeight /2){
    sectionToDomainNameCar[0].style.right = '0vw';
    console.log(1);
  }else{
    sectionToDomainNameCar[0].style.right = '-4vw';
    console.log(2);
  }
}


// mega menu
var searchHider = document.getElementsByClassName('searchHider');
var megaMenu = document.getElementsByClassName('megaMenu');

var searchState = true;

searchHider[0].addEventListener('mouseenter',()=>{
  if(searchState){
    megaMenu[0].style.height = 'calc(100vh - 4.837929vw)';
  }else if(!searchState){
    megaMenu[0].style.height = '0vw';
  }
  searchState = !searchState;

})





window.addEventListener('scroll',()=>{
  tailLightFun();
  recentProjectsFun();
  sectionToDomainNameCarFun();
})





// temp
var toDomainButtonBox = document.getElementsByClassName('toDomainButtonBox');

for (var i = 0; i < toDomainButtonBox.length; i++) {
  toDomainButtonBox[i].addEventListener('click',()=>{
    location.href = window.location.href.substring(0, window.location.href.length - 19) + 'carAddPopup/carAddPopup.html';
  })
}




// more temps
// var mynext = document.getElementsByClassName('mynext');
// mynext[0].addEventListener('click',()=>{
//   moveCarousel()
// })
