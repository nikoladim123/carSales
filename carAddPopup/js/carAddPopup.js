var carouselInner = document.getElementsByClassName('carousel-inner');
var carouselItem = document.getElementsByClassName('carousel-item');
var modalCarImage = document.getElementsByClassName('modalCarImage');
var myModal = document.getElementsByClassName('myModal');
var modalArrowLeftContainer = document.getElementsByClassName('modalArrowLeftContainer');
var modalArroRightContainer = document.getElementsByClassName('modalArroRightContainer');
// images/desktop/car/

var imgCount;
for (var i = 0; i < carouselItem.length; i++) {
  carouselItem[i].addEventListener('click',(e)=>{
    modalCarImage[0].src = 'images/desktop/car/' + e.target.src.replace(/^.*[\\\/]/, '');
    myModal[0].style.display = 'block';
    setTimeout(function () {
      myModal[0].style.opacity = '1';
    }, 300);
    imgCount = e.target.dataset.imagecount ;
    // console.log(e.target.dataset.imagecount);
  })
}

// modal arrows

modalCarImage[0].addEventListener('load',()=>{
  modalCarImage[0].style.opacity = '1';
})

function repositionImg() {
  if (imgCount < carouselInner[0].children.length -1 && imgCount > 0) {
    modalCarImage[0].style.top = 'auto';
    modalCarImage[0].style.left = 'auto';
    console.log(11111);
  }
}


modalArroRightContainer[0].addEventListener('click',()=>{
  if(imgCount < carouselInner[0].children.length -1){
    imgCount++;
    modalCarImage[0].style.opacity = '0';
  }
  setTimeout(function () {
    repositionImg()
    modalCarImage[0].src = 'images/desktop/car/' + carouselInner[0].children[imgCount].children[0].src.replace(/^.*[\\\/]/, '');
  }, 500);
});

modalArrowLeftContainer[0].addEventListener('click',()=>{
  if(imgCount > 0){
    imgCount--;
    modalCarImage[0].style.opacity = '0';
  }
  setTimeout(function () {
    repositionImg()
    modalCarImage[0].src = 'images/desktop/car/' + carouselInner[0].children[imgCount].children[0].src.replace(/^.*[\\\/]/, '');
  }, 500);
});

// modal close box
var popUpCloseBox = document.getElementsByClassName('popUpCloseBox');

popUpCloseBox[0].addEventListener('click',()=>{
  myModal[0].style.opacity = '0';
  setTimeout(function () {
    myModal[0].style.display = 'none';
  }, 300);
})


// zoom module
var zoomin = document.getElementsByClassName('zoomin');
var zoomout = document.getElementsByClassName('zoomout');

var zoomLevel = 1;

zoomin[0].addEventListener('click',()=>{
  zoomLevel += 0.2;
  modalCarImage[0].style.transform = `scale(${zoomLevel})`;
})

zoomout[0].addEventListener('click',()=>{
  if(zoomLevel > 1){
    zoomLevel -= 0.2;
  }
  modalCarImage[0].style.transform = `scale(${zoomLevel})`;
})


// drag
modalCarImage[0].addEventListener('mousedown',()=>{
  modalCarImage[0].style.transition = '0s';
  modalCarImage[0].style.position = 'absolute';
})

modalCarImage[0].addEventListener('mouseup',()=>{
  modalCarImage[0].style.transition = '0.5s ease';
})

dragElement(document.getElementById("modalCarMainImage"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


// modalCarImage[0].onmousemove = function(e) {
//     var xCoor = e.clientX  - e.target.getBoundingClientRect().left;
//     var yCoor = e.clientY  - e.target.getBoundingClientRect().top;
//     modalCarImage[0].style.transition = '0s';
//     modalCarImage[0].style.transformOrigin =  xCoor -(window.innerWidth/100 *14)+ 'px ' + yCoor + 'px';
// }
// modalCarImage[0].onmouseleave = function(){
//   modalCarImage[0].style.backgroundPosition = '0 0';
// }
