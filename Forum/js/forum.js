var moreButton = document.getElementsByClassName('moreButton');

for (var i = 0; i < moreButton.length; i++) {
  moreButton[i].addEventListener('click',(e)=>{
    for (var i = 0; i < moreButton.length; i++) {
      moreButton[i].nextElementSibling.style.maxHeight = '0vw';
    }
    if(e.target.innerText === 'More'){
      e.target.nextElementSibling.style.maxHeight = '50vw';
      for (var i = 0; i < moreButton.length; i++) {
        moreButton[i].innerText = 'More';
      }
      e.target.innerText = 'Less';
    }else{
      e.target.nextElementSibling.style.maxHeight = '0vw';
      e.target.innerText = 'More';
    }
  })
}



//post buttons logic
var postInputButton = document.getElementsByClassName('postInputButton');
var postFormContainer = document.getElementsByClassName('postFormContainer');
var cancelPost = document.getElementsByClassName('cancelPost');
var disscusionTitle = document.getElementsByClassName('disscusionTitle');

postInputButton[0].addEventListener('click',()=>{
  postFormContainer[0].style.maxHeight = '12vw';
  postInputButton[0].style.maxHeight = '0vw';
  postInputButton[0].style.opacity = '0';
  disscusionTitle[0].focus();
})

cancelPost[0].addEventListener('click',()=>{
  postFormContainer[0].style.maxHeight = '0vw';
  postInputButton[0].style.maxHeight = '12vw';
  postInputButton[0].style.opacity = '1';
})


// comment box input button show
var writeCommentInput = document.getElementsByClassName('writeCommentInput');
var writeCommentFormButtonsBox = document.getElementsByClassName('writeCommentFormButtonsBox');

writeCommentInput[0].addEventListener('focus',()=>{
  writeCommentFormButtonsBox[0].style.maxHeight = '7vw';
})

writeCommentInput[0].addEventListener('focusout',()=>{
  writeCommentFormButtonsBox[0].style.maxHeight = '0vw';
})
