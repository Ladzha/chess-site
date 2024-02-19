const slider = document.querySelector('.cards');
const cards = document.querySelectorAll('.card')

const btnPrev = document.querySelector('.carousel-btn-left');
const btnNext = document.querySelector('.carousel-btn-right');

btnPrev.addEventListener('click', swipePrev)
btnNext.addEventListener('click', swipeNext)

let currentIndex=0;
const cardWidth = cards[0].offsetWidth;

function swipeSlider(index){
  slider.style.transform = `translateX(${-cardWidth * index}px)`
}

function swipePrev(){
  if(currentIndex <= 0){
    currentIndex = cards.length-1;
  }else{
    currentIndex--;
  }
  swipeSlider(currentIndex)
}

function swipeNext(){
  if(currentIndex >= cards.length-1){
    currentIndex = 0
  }
  else{
    currentIndex++;
  }
  swipeSlider(currentIndex);
}

setInterval(()=>swipeSlider(currentIndex), 1000)