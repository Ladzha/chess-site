const slider = document.querySelector('.cards');
const cards = document.querySelectorAll('.card')
const cardWidth = document.querySelector('.card').offsetWidth;
const currentCardNumber = document.querySelector('.current-card-index')

const btnPrev = document.querySelector('.carousel-btn-left');
const btnNext = document.querySelector('.carousel-btn-right');

btnPrev.addEventListener('click', swipePrev)
btnNext.addEventListener('click', swipeNext)

let currentIndex=0;

function swipeSlider(index){
  slider.style.transform = `translateX(${-cardWidth * index}px)`
}

function swipePrev(){
  if(currentIndex <= 0){
    currentIndex = cards.length-1;
  }else{
    currentIndex--;
  }
  currentCardNumber.textContent = currentIndex;
  // slider.scrollLeft +=cardWidth
  swipeSlider(currentIndex)
}

function swipeNext(){
  if(currentIndex >= cards.length-1){
    currentIndex = 0
  }
  else{
    currentIndex++;
  }
  currentCardNumber.textContent = currentIndex;

  // slider.scrollLeft -=cardWidth;
  swipeSlider(currentIndex);
}

// setInterval(()=>swipeSlider(currentIndex), 1000)