/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
import phoneIcon from '../../img/phoneIcon.png';
import homepageImage from '../../img/homepageImage.png';
import descImg from '../../img/img_display.jpg';
import ZirkonImg from '../../img/zirkon.png';

const HomePage = () => {
  const main = document.querySelector('main');

  main.innerHTML = `
    <div class="homepage-container">
      <img src="${homepageImage}" alt="Background" class="background-image">
      <div class="overlay">
        <div class="title-container">
          <h2 class="title">NEXIS Laboratory</h2>
        </div>
        <div class="contact-button">
          <img src="${phoneIcon}" alt="Phone Icon" class="phone-icon">
          <span>+383 44 379 656</span>
        </div>
      </div>
    </div>

    <div class="description-section">
      <div class="text-container">
        <h2>Laboratori dentar NEXIS</h2>
        <p>Si dentist, nuk keni mjaftueshëm kohë për të prodhuar proteza dentare? Dëshironi të përfitoni nga një punë e personalizuar dhe me cilësi të lartë?</p>
        <button class="contact-btn">Na kontaktoni</button>
      </div>
      <div class="image-container">
        <img src="${descImg}" alt="Laboratoire dentaire">
      </div>
    </div>

    <!-- Section Zirkon avec Texte + Nouveau Slider -->
    <div class="product-section">
  <div class="text-container">
    <h2>Zirkon</h2>
    <p>Implanti dentar është një zgjidhje moderne për këdo që dëshiron të rikthejë një dhëmbëzim të shëndetshëm.</p>
  </div>
  <div class="carousel-wrapper">
    <div class="slider-container">
      <div class="slider-content">
        ${[1,2,3,4,5,6].map(i => `
          <div class="slider-single">
            <img class="slider-single-image" src="${ZirkonImg}" alt="Zirkon ${i}" />
            <h1 class="slider-single-title">Zirkon ${i}</h1>
            <a class="slider-single-likes" href="javascript:void(0);">
              <i class="fa fa-heart"></i>
              <p>1,247</p>
            </a>
          </div>
        `).join('')}
      </div>
      <a class="slider-left"><span class="arrow arrow-left"></span></a>
      <a class="slider-right"><span class="arrow arrow-right"></span></a>
    </div>
  </div>
</div>

  `;

  const repeat = false;
  const noArrows = false;
  const noBullets = false;

  const container = document.querySelector('.slider-container');
  const slide = document.querySelectorAll('.slider-single');
  const slideTotal = slide.length - 1;
  let slideCurrent = -1;

  function initBullets() {
    if (noBullets) return;

    const bulletContainer = document.createElement('div');
    bulletContainer.classList.add('bullet-container');

    slide.forEach((elem, i) => {
      const bullet = document.createElement('div');
      bullet.classList.add('bullet');
      bullet.id = `bullet-index-${i}`;
      bullet.addEventListener('click', () => goToIndexSlide(i));
      bulletContainer.appendChild(bullet);
      elem.classList.add('proactivede');
    });

    container.appendChild(bulletContainer);
  }

  function initArrows() {
    if (noArrows) return;
    document.querySelector('.slider-left').addEventListener('click', () => slideLeft());
    document.querySelector('.slider-right').addEventListener('click', () => slideRight());
  }

  function updateBullet() {
    if (!noBullets) {
      document.querySelectorAll('.bullet').forEach((elem, i) => {
        elem.classList.toggle('active', i === slideCurrent);
      });
    }
    checkRepeat();
  }

  function checkRepeat() {
    if (!repeat) {
      const left = document.querySelector('.slider-left');
      const right = document.querySelector('.slider-right');

      if (slideCurrent === slide.length - 1) {
        slide[0].classList.add('not-visible');
        right?.classList.add('not-visible');
        left?.classList.remove('not-visible');
      } else if (slideCurrent === 0) {
        slide[slide.length - 1].classList.add('not-visible');
        left?.classList.add('not-visible');
        right?.classList.remove('not-visible');
      } else {
        slide[0].classList.remove('not-visible');
        slide[slide.length - 1].classList.remove('not-visible');
        left?.classList.remove('not-visible');
        right?.classList.remove('not-visible');
      }
    }
  }

  function slideRight() {
    slideCurrent = (slideCurrent < slideTotal) ? slideCurrent + 1 : 0;
    activateSlides();
  }

  function slideLeft() {
    slideCurrent = (slideCurrent > 0) ? slideCurrent - 1 : slideTotal;
    activateSlides();
  }

  function goToIndexSlide(index) {
    while (slideCurrent !== index) {
      slideCurrent < index ? slideRight() : slideLeft();
    }
  }

  function activateSlides() {
    const preactive = slide[(slideCurrent - 1 + slide.length) % slide.length];
    const active = slide[slideCurrent];
    const proactive = slide[(slideCurrent + 1) % slide.length];

    slide.forEach((el) => {
      el.classList.remove('preactivede', 'preactive', 'active', 'proactive', 'proactivede');
      el.classList.add('proactivede');
    });

    preactive.classList.remove('proactivede');
    preactive.classList.add('preactive');

    active.classList.remove('proactivede');
    active.classList.add('active');

    proactive.classList.remove('proactivede');
    proactive.classList.add('proactive');

    updateBullet();
  }

  let touchStartX = 0;
let touchEndX = 0;

container.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

container.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleGesture();
});

function handleGesture() {
  const swipeDistance = touchEndX - touchStartX;

  if (swipeDistance > 50) {
    // Swipe vers la droite = image précédente
    if (repeat || slideCurrent > 0) {
      slideLeft();
    }
  } else if (swipeDistance < -50) {
    // Swipe vers la gauche = image suivante
    if (repeat || slideCurrent < slide.length - 1) {
      slideRight();
    }
  }
}


  function slideInitial() {
    initBullets();
    initArrows();
    setTimeout(() => {
      slideRight();
    }, 500);
  }

  slideInitial();
};

export default HomePage;