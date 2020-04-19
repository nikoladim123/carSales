// filter anims
var filterDolarSignContainer = document.getElementsByClassName('filterDolarSignContainer');

function filterAnimations() {
  for (var i = 0; i < filterDolarSignContainer.length; i++) {
    if (filterDolarSignContainer[i].getBoundingClientRect().y < window.innerHeight/1.2) {
      filterDolarSignContainer[i].style.opacity = '1';
      filterDolarSignContainer[i].style.left = '0';
    }else{
      filterDolarSignContainer[i].style.opacity = '0';
      filterDolarSignContainer[i].style.left = '-5vw';
    }
  }
}



// Filter Popup
var filterPopup = document.getElementsByClassName('filterPopup');
var closeFilter = document.getElementsByClassName('closeFilter');

closeFilter[0].addEventListener('click',()=>{
  filterPopup[0].style.width = '0%';
})

for (var i = 0; i < filterDolarSignContainer.length; i++) {
  filterDolarSignContainer[i].addEventListener('click',()=>{
    filterPopup[0].style.width = '100%';
  });
}

// details popup
var detailPopUpButon = document.getElementsByClassName('detailPopUpButon');
var carDescriptionPopUp = document.getElementsByClassName('carDescriptionPopUp');
var closeDetails = document.getElementsByClassName('closeDetails');

closeDetails[0].addEventListener('click',()=>{
  carDescriptionPopUp[0].style.width = '0%';
});

for (var i = 0; i < detailPopUpButon.length; i++) {
  detailPopUpButon[i].addEventListener('click',()=>{
    carDescriptionPopUp[0].style.width = '100%';
  });
}


window.addEventListener('scroll',()=>{
  filterAnimations()
})
