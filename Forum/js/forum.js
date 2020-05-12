var moreButton = document.getElementsByClassName('moreButton');

for (var i = 0; i < moreButton.length; i++) {
  moreButton[i].addEventListener('click',(e)=>{
    for (var i = 0; i < moreButton.length; i++) {
      moreButton[i].nextElementSibling.style.maxHeight = '0vw';
    }
    if(e.target.innerText === 'More'){
      e.target.nextElementSibling.style.maxHeight = '20vw';
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
