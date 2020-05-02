// mega menu
var searchHider = document.getElementsByClassName('searchHider');
var megaMenu = document.getElementsByClassName('megaMenu');

var delayStartCar;
var searchState = true;

searchHider[0].addEventListener('mouseenter',()=>{
  if(searchState){
    megaMenu[0].style.height = 'calc(100vh - 4.837929vw)';
  }else if(!searchState){
    megaMenu[0].style.height = '0vw';
  }
  searchState = !searchState;
  // console.log(23);
})
