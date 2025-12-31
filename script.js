let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let number = indicator.querySelector('.number');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;
let intervalo = 4000; // Tempo de transição em milissegundos
let autoPlay = setInterval(nextSlide, intervalo);

function updateSlider() {
  container.querySelector('.item.active').classList.remove('active');
  items[active].classList.add('active');

  let activeDot = indicator.querySelector('ul li.active');
  if (activeDot) activeDot.classList.remove('active');
  dots[active].classList.add('active');

  number.innerHTML = (active + 1).toString().padStart(2, '0');
}

function nextSlide() {
  active = active + 1 > lastPosition ? firstPosition : active + 1;
  updateSlider();
}

function prevSlide() {
  active = active - 1 < firstPosition ? lastPosition : active - 1;
  updateSlider();
}

nextButton.onclick = () => {
  nextSlide();
  reiniciarAutoPlay();
};

prevButton.onclick = () => {
  prevSlide();
  reiniciarAutoPlay();
};

function reiniciarAutoPlay() {
  clearInterval(autoPlay);
  autoPlay = setInterval(nextSlide, intervalo);
}

// inicializa o carrossel
updateSlider();

