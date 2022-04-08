let carousel;
window.onload = () => {
  let parent = document.getElementById('headerContainer');
  let header = document.getElementById('headerContent');
  document.addEventListener('scroll', () => {
	  const parentRect = parent.getBoundingClientRect();
	  if (parentRect.y < -5) {  
		header.parentElement.classList.add('header-fixed');
	  } else {
		  header.parentElement.classList.remove('header-fixed');
	  }
  });
  carousel = document.getElementsByClassName('carousel')[0];
  carousel.style.height = window.innerHeight;
}

window.onResize = () => {
	carousel.style.height = window.innerHeight;
}