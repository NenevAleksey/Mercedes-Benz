const burger = document.querySelector('.humburger-menu');
const menuElem = document.querySelector('.menu');
const menuList = document.querySelectorAll('.menu-list__item')

const toggleMenu = () => {
   menuElem.classList.toggle('menu-active');
   burger.classList.toggle('humburger-menu-active')
}

burger.addEventListener('click', () => {
   toggleMenu()
})

menuList.forEach(elem => {
   elem.addEventListener('click', () => {
      if(burger.classList.contains('humburger-menu-active')) {
         toggleMenu()
      }
   })
})
