/*Grid slider*/
const slidesLine = document.querySelector('.grid-container');
const slides = document.querySelectorAll('.grid-cell')
const slideWidth = document.querySelector('.grid-cell').offsetWidth;

const dots = document.querySelectorAll('.grid-slider-current-dot')

const btnSlidePrev = document.querySelector('.grid-slider-btn-left');
const btnSlideNext = document.querySelector('.grid-slider-btn-right');

btnSlidePrev.addEventListener('click', sliderPrev)
btnSlideNext.addEventListener('click', sliderNext)

let slideIndex=0;

function sliderMove(index){
  slidesLine.style.transform = `translateX(${-slideWidth * index}px)`
  dots.forEach((element)=>{
    element.classList.remove('active');
  })
  dots[index].classList.add('active');

  if(slideIndex !==0){
    btnSlidePrev.classList.add('active');
  }
  else{
    btnSlidePrev.classList.remove('active');
  }

  if(slideIndex === cards.length-2){
    btnSlidePrev.classList.remove('active');
  }
  else{
    btnSlidePrev.classList.remove('active');

  }

}

function sliderPrev(){
  if(slideIndex <= 0){
    slideIndex = 0
  }else{
    slideIndex--;
    sliderMove(slideIndex)
  }
}

function sliderNext(){
  if(slideIndex === cards.length-2){
    return;
  }
  else{
    slideIndex++;
    sliderMove(slideIndex);
  }
}

/*Cards slider*/
const cardsLine = document.querySelector('.cards');
const cards = document.querySelectorAll('.card')
const cardWidth = document.querySelector('.card').offsetWidth;
const currentCardNumber = document.querySelector('.current-card-index')

const btnPrev = document.querySelector('.carousel-btn-left');
const btnNext = document.querySelector('.carousel-btn-right');

btnPrev.addEventListener('click', swipePrev)
btnNext.addEventListener('click', swipeNext)

let cardIndex=0;

function swipeSlider(index){
  cardsLine.style.transform = `translateX(${-cardWidth * index}px)`
}

function swipePrev(){
  if(cardIndex <= 0){
    currentIndex = cards.length-1;
  }else{
    cardIndex--;
    currentCardNumber.textContent = cardIndex-1;
  }
  swipeSlider(cardIndex)
}

function swipeNext(){
  if(cardIndex >= cards.length-1){
    cardIndex = 0
  }
  else{
    cardIndex++;
    currentCardNumber.textContent = cardIndex+1;
  }

  swipeSlider(cardIndex);
}

// setInterval(()=>swipeSlider(cardIndex), 1000)