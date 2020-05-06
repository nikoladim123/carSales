// var registrationStageONE = document.getElementsByClassName('registrationStageONE');
// var registrationStageTWO = document.getElementsByClassName('registrationStageTWO');
// var registrationStageTHREE = document.getElementsByClassName('registrationStageTHREE');
// var registrationStageFOUR = document.getElementsByClassName('registrationStageFOUR');
var regContainer = document.getElementsByClassName('regContainer');
var selectedItem = document.getElementsByClassName('selectedItem');

function hideAll() {
  for (var i = 0; i < regContainer.length; i++) {
    regContainer[i].style.display = 'none';
  }
}

function clearSelected() {
  for (var i = 0; i < selectedItem.length; i++) {
    selectedItem[i].className = 'selectedItem'
  }
}


// step two, userTypeBox
var userTypeBox = document.getElementsByClassName('userTypeBox');
function nextActions(displayBlock) {
  hideAll();
  clearSelected();
  selectedItem[displayBlock].className = 'selectedItem curentlySelectedItem';
  regContainer[displayBlock].style.display = 'block';
}

userTypeBox[0].addEventListener('click',()=>{
  nextActions(1)
})

userTypeBox[1].addEventListener('click',()=>{
  nextActions(1)
})


// step three, method
var registerMethodBox = document.getElementsByClassName('registerMethodBox');

registerMethodBox[0].addEventListener('click',()=>{
  nextActions(2)
})


// step four
var submitRegister = document.getElementsByClassName('submitRegister');

submitRegister[0].addEventListener('click',()=>{
  nextActions(3)
})
