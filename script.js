
document.addEventListener('DOMContentLoaded', function () {
  // burger

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });

  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__nav').classList.toggle('header__nav-item-active');
    document.querySelector('.header__burger').classList.toggle('burger--active');


  })


  document.querySelector('.button_close').addEventListener('click', function () {
    document.querySelector('.search_burger').classList.toggle('search_burger-active');

  })



//
  // document.querySelector('.header__nav-search-innotburger').addEventListener('click', function() {
    // document.querySelector('.header__nav-search-innotburger').classList.toggle('header__nav-search-innotburger-active');
  // })

// tabs
document.querySelectorAll('.work__item').forEach(function(tabsBtn) {
    // С помощью метода querySelectorAll мы находим все элементы с классом
// tabs-nav__btn на странице — так сказать, «пробегаем» по ним циклом. Внутри
// function есть слово tabsBtn — это переменная, которую мы создали сами, дали
// ей название. Она нужна для удобства далее.
// Поскольку мы используем цикл forEach, JavaScript будет смотреть на каждую
// кнопку в отдельности и на каждом шаге цикла помещать её в переменную
// tabsBtn — таким образом, мы сможем обратиться к каждой из кнопок, что нам и
// нужно.
tabsBtn.addEventListener('click', function(e) {
  // А здесь мы как раз и обращаемся к каждой кнопке, навешивая обработчик
// события click, то есть говоря, что по клику мы сейчас будем делать какое-то
// действие. Очень важна здесь буква e внутри function, т. к. она нам понадобится
// далее.
  const path = e.currentTarget.dataset.path;
  // Здесь мы создаём переменную path и помещаем в неё некое значение. Как раз
  // здесь нам понадобится та самая буква e. Если по-простому — это
  // идентификатор события, которое произошло. Произошёл клик, и в этом
  // идентификаторе хранится информация о клике — куда кликнули, какие
  // координаты и т. д. Запись e.currentTarget выделяет конкретный нажатый
  // элемент — то есть нашу кнопку.
  // А запись dataset.path позволяет нам получить значения атрибута data-path, то
  // есть, по сути, всё, что делает эта строка, — получает в переменную значение
  // дата-атрибута нажатого элемента. Думаю, вы уже понимаете логику — мы
  // кликаем по кнопке, получаем её атрибут, и затем остаётся только найти элемент
  // с точно таким же атрибутом.

  document.querySelectorAll('.work__content-desable').forEach(function(tabContent) {
    tabContent.classList.remove('work__content-active');
  })
  document.querySelector(`[data-target="${path}"]`).classList.add('work__content-active');
  document.querySelectorAll('.work__item').forEach(function(tabContent) {
    tabContent.classList.remove('work__btn-active');
  })
  document.querySelector(`[data-path="${path}"]`).classList.add('work__btn-active');
});
});


$( function() {
$( "#accordion" ).accordion({
    collapsible: true,
    active: false,
});
} );





document.querySelector('.header__nav-search').addEventListener('click', function() {
document.querySelector('.search__burger').classList.toggle('search__burger-active');
})



document.querySelector('.button_close').addEventListener('click', function() {
  document.querySelector('.search__burger').classList.remove('search__burger-active');
})
  });

  popup.classList.remove('active');
