console.log('i work on desktop');


// header Carousel
var headerCarousel = document.getElementsByClassName('headerCarousel');
var carrouselBox = document.getElementsByClassName('carrouselBox');
var header = document.getElementsByClassName('header');
var nav = document.getElementsByClassName('nav');

var banerAnim = document.getElementById('banerAnim');

// headerCarousel[0].style.left = (carrouselBox.length-1) * -100 + 'vw';

var colors = ['#ff2627', '#ffc02b','#a19fa4','#e69c3d', '#c90618', '#a54288', '#396fe3', '#be0616'];
var carPosition = (carrouselBox.length-1) * -100;
function moveCarousel() {
  if(carPosition < 0 ){
    carPosition += 100;
    console.log(-(carPosition/100));
  }else{
    carPosition = (carrouselBox.length-1) * -100;
    header[0].style.background = colors[-(carPosition/100)];
    nav[0].style.background = colors[-(carPosition/100)];
  }

  header[0].style.background = colors[-(carPosition/100)];
  nav[0].style.background = colors[-(carPosition/100)];

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

setTimeout(function () {
  moveCarousel()
  headerTextBoxAnim()

  setInterval(function () {
    moveCarousel()
    headerTextBoxAnim()
  }, 6000);

}, 3000);

setInterval(function () {
  moveCarousel()
  headerTextBoxAnim()
}, 6000);

// header text anim
var headerTextBox = document.getElementsByClassName('headerTextBox');

function headerTextBoxAnim() {
  headerTextBox[0].style.transform = 'skewX(30deg)';
  headerTextBox[0].style.filter = 'blur(5px)';
  headerTextBox[0].style.opacity = '0';
  headerTextBox[0].style.right = '-10vw';
  setTimeout(function () {
    headerTextBox[0].style.transform = 'skewX(0deg)';
    headerTextBox[0].style.filter = 'blur(0px)';
    headerTextBox[0].style.opacity = '1';
    headerTextBox[0].style.right = '2vw';
  }, 1000);
}
