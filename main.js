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
const cards_container = document.querySelector('.cards-container');
const cards_line = document.querySelector('.cards');
const cards = document.querySelectorAll('.card');

const cardWidth = document.querySelector('.card').clientWidth;
const currentCardNumber = document.querySelector('.current-card-index');

const btnPrev = document.querySelector('.carousel-btn-left');
const btnNext = document.querySelector('.carousel-btn-right');

let cardIndex=1;

let current =1;

cards_line.style.transform = `translateX(${-cardWidth}px)`;

function next(){
  if(current <=0) return;
  cards_line.style.transition = '2000ms ease-in-out transform';
  current --;
  cards_line.style.transform = `translateX(${-cardWidth * current}px)`;

  if(cardIndex >= 6){
    cardIndex = 1;
  }else{
    cardIndex++;
  }
  currentCardNumber.textContent = cardIndex;
}

function prev(){
  if(current >= cards.length -3) return;
  cards_line.style.transition = '2000ms ease-in-out transform';
  current ++;
  cards_line.style.transform = `translateX(${-cardWidth * current}px)`;

  if(cardIndex <= 1){
    cardIndex = 6;
  }else{
    cardIndex--;
  }
  currentCardNumber.textContent = cardIndex;
}

btnNext.addEventListener('click', next)
btnPrev.addEventListener('click', prev)


cards_line.addEventListener('transitionend', ()=>{
  if(cards[current].classList.contains('first-card')){
    cards_line.style.transition = 'none';
    current = cards.length -3;
    cards_line.style.transform = `translateX(${-cardWidth * current}px)`;
  }
  if(cards[current+2].classList.contains('last-card')){
    cards_line.style.transition = 'none';
    current = cards.length - current;
    cards_line.style.transform = `translateX(${-cardWidth * current}px)`;
  }
})


setInterval(next, 4000)