window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  header.classList.toggle("sticky", window.scrollY > 0);
});
// loader
let maskL = document.querySelector('.maskL');
window.addEventListener('load', () => {
  maskL.classList.add('hide');
  setTimeout(() => {
    maskL.remove();
  }, 1000)
});
// ANIMATION
const scrollElements = document.querySelectorAll(".js-scroll");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};
const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}
window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
// // burger
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-navigation-list');
burger.addEventListener('click', toggleNav);
function toggleNav() {
  console.log('clicked');
  burger.classList.contains('active') ? burger.classList.remove('active') : burger.classList.add('active');
  burgerMenu.classList.contains('is-active') ? burgerMenu.classList.remove('is-active') : burgerMenu.classList.add('is-active');
}
// // ....................

// SLIDER
const swiper_home = new Swiper('.home-swiper', {
  speed: 1000,
  slidesPerView: 3,
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    425: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 5
    }
  }
});
// .....................
//Get the button:
const mybutton = document.getElementById("myBtn");
const rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
mybutton.addEventListener("click", scrollToTop);
// 
// POPUP
let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('#open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add('active'); // Добавляем класс 'active' для фона
      popup.classList.add('active'); // И для самого окна
  })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
  popupBg.classList.remove('active'); // Убираем активный класс с фона
  popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popupBg) { // Если цель клика - фот, то:
      popupBg.classList.remove('active'); // Убираем активный класс с фона
      popup.classList.remove('active'); // И с окна
  }
});
// SCROLL TO
$(document).ready(function(){
	$('.header-navigation-list-ul li a').click(function () { // 1
		elementClick = $(this).attr('href');
		destination = $(elementClick).offset().top;
		$('body,html').animate({scrollTop: destination }, 1000);
	});
  $('.burger-navigation-list-ul li a').click(function () { // 1
		elementClick = $(this).attr('href');
		destination = $(elementClick).offset().top;
		$('body,html').animate({scrollTop: destination }, 1000);
	});
});