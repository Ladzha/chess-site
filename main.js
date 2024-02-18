const cardsContainer = document.querySelector('.cards-container');
const btnPrev = document.querySelector('.carousel-btn-left');
const btnNext = document.querySelector('.carousel-btn-right');

btnPrev.addEventListener('click', swipePrev)
btnNext.addEventListener('click', swipeNext)

function swipePrev(){
  console.log('swipePrev');
}

function swipeNext(){
  console.log('swipeNext');
}