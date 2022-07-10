import * as flsFunctions from "./modules/testWebP.js";
flsFunctions.isWebp();
//Smooth Scroll with close mobile menu
const anchors = document.querySelectorAll('.menu__item a[href*="#"]')

for (let anchor of anchors) {
anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    
    menu.classList.remove('active')
    burger.classList.remove('active-burger')
    body.classList.remove('locked')

    document.getElementById(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
    })
})
}
// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 992) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
  }
  burgerMenu()

  // function openCloseDetails(event) {
  //   if (event.target.classList.contains('blog__creatives-link')){  
  //     let card_text = event.target.closest('.blog__creatives-item').querySelector('.blog__creatives-text');
  //     card_text.hidden = !card_text.hidden;
  //   }
  // };
  
  // document.querySelector('.blog__creatives').addEventListener("click", openCloseDetails);

  const wrapper = document.querySelector('.blog__creatives');
  wrapper.addEventListener('click', (event) => {
    if(event.target.classList.contains('blog__creatives-link')){
      let hiddenText = event.target.closest('.blog__creatives-item').querySelector('.blog__creatives-text');
      hiddenText.hidden = !hiddenText.hidden;
    }
  })