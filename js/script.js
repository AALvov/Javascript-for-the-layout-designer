/* slider */
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

});



/*ТАБЫ*/

document.querySelectorAll('.tabs-how__btn').forEach(function (tabsBtn) {

  tabsBtn.addEventListener('click', function (e) {

    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-how__btn').forEach(function (btn) {

      btn.classList.remove('tabs-how__btn--active')
    });
    e.currentTarget.classList.add('tabs-how__btn--active');
    document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-item--active')
      tabsBtn.classList.remove('tabs-item-img--active')

    });
    document.querySelectorAll(`[data-target="${path}"]`).forEach(function (cont) {
      cont.classList.add('tabs-item--active');

    }
    )
    document.querySelectorAll(`picture[data-target="${path}"]`).forEach(function (cont) {
      console.log(cont);
      cont.classList.add('tabs-item-img--active');

    }
    )
  });
});

/*Аккордеон*/
$(function () {
  $(".accordion").accordion({
    icons: false,
    heightStyle: "content",
    collapsible: "true",



  });
});


/*БУРГЕР*/

let burger = document.querySelector('.header__butter');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('header__buttons');
burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  }
)

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');


  })
})


let search_bar = document.querySelector('.search_bar');
let search_button = document.querySelector('.header__buttons-icon');
let search_close = document.querySelector('.header__search-close');
let show_320 = document.querySelector('.header__container');

search_button.addEventListener('click', function () {
  search_bar.classList.toggle('show_search');
  show_320.classList.toggle('header__container-show')
})

search_close.addEventListener('click', function () {
  search_bar.classList.toggle('show_search');
  show_320.classList.toggle('header__container-show')

})
