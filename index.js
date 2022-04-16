let carousel;
let carouselAnimIntervalId;
let carouselDelayStartTimerId;
const animTime = 4000;
let actSlide = 1;
const maxSlide = 6;
let slideIdPrefix = '#carousel__slide';

window.onload = () => {
  setHeaderStyles();
  setCarouselHeight();
  
  carouselAnimIntervalId = window.setInterval(animateCarousel, animTime);
  addBtnEventListener(document.getElementsByClassName('carousel__next'));
  addBtnEventListener(document.getElementsByClassName('carousel__prev'));
}

window.onResize = () => {
	carousel.style.height = window.innerHeight;
}

function addBtnEventListener(buttons) {
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', (e) => {
			actSlide = parseInt(e.target.href.split(slideIdPrefix)[1]);
			pauseAndRestartCarouselAnim();
		});
	};
}

function setCarouselHeight() {
	carousel = document.getElementsByClassName('carousel')[0];
	carousel.style.height = window.innerHeight;
}

function setHeaderStyles() {
	let parent = document.getElementById('headerContainer');
	let header = document.getElementById('headerContent');
	document.addEventListener('scroll', () => {
		const parentRect = parent.getBoundingClientRect();
		if (parentRect.y < -5) {  
			header.parentElement.classList.add('header-fixed');
			window.clearInterval(carouselAnimIntervalId);
			carouselAnimIntervalId = NaN;
		} else {
			header.parentElement.classList.remove('header-fixed');
			if (isNaN(carouselAnimIntervalId)) carouselAnimIntervalId = window.setInterval(animateCarousel, animTime);
		}
	});
}

function animateCarousel() {
	actSlide = actSlide + 1 > maxSlide ? 1 : actSlide + 1;
	location.href = slideIdPrefix + actSlide;
}

function pauseAndRestartCarouselAnim() {
	window.clearInterval(carouselAnimIntervalId);
	carouselAnimIntervalId = NaN;
	window.clearTimeout(carouselDelayStartTimerId);
	carouselDelayStartTimerId = window.setTimeout(() => {
		if (isNaN(carouselAnimIntervalId)) carouselAnimIntervalId = window.setInterval(animateCarousel, animTime);
	}, animTime);
}