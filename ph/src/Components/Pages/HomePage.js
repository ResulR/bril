/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
import phoneIcon from "../../img/phoneIcon.png"
import homepageImage from "../../img/homepageImage.png"
import descImg from "../../img/img_display.jpg"
import ZirkonImg from "../../img/zirkon.png"

const HomePage = () => {
  const main = document.querySelector("main")

  main.innerHTML = `
    <!-- Hero Section me Parallax -->
    <div class="hero-section">
      <div class="parallax-bg" style="background: url('${homepageImage}') no-repeat center center;"></div>
      
      <div class="hero-content">
        <h1 class="hero-title">NEXIS LABORATORY</h1>
        <p class="hero-subtitle">Zgjidhje inovative dentare për buzëqeshje të përsosura</p>
        
        <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
          <a href="#about" class="primary-btn">
            Zbulo shërbimet tona
          </a>
          <a href="tel:+38344379656" class="contact-button">
            <img src="${phoneIcon}" alt="Phone Icon" style="width: 24px; height: 24px; margin-right: 10px;">
            +383 44 379 656
          </a>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M7 13l5 5 5-5"></path>
          <path d="M7 7l5 5 5-5"></path>
        </svg>
      </div>
    </div>

    <!-- About Section -->
    <div id="about" class="about-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">RRETH NESH</span>
          <h2 class="section-title">Laboratori dentar NEXIS</h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="about-content">
          <div class="about-text">
            <p class="text-highlight">Si dentist, nuk keni mjaftueshëm kohë për të prodhuar proteza dentare? Dëshironi të përfitoni nga një punë e personalizuar dhe me cilësi të lartë?</p>
            <p class="text-body">Laboratori ynë dentar <span class="text-accent">NEXIS</span> ofron zgjidhje të personalizuara dhe me cilësi të lartë për të gjitha nevojat tuaja protetike.</p>
            
            <div class="features-grid">
              <div class="feature-card">
                <div class="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e32d2d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 class="feature-title">Cilësi superiore</h3>
                <p class="feature-text">Ne përdorim vetëm materiale të cilësisë së parë për të garantuar qëndrueshmëri dhe estetikë.</p>
              </div>
              
              <div class="feature-card">
                <div class="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e32d2d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 class="feature-title">Afate të shpejta</h3>
                <p class="feature-text">Ne respektojmë afatet për t'ju lejuar të kënaqni pacientët tuaj.</p>
              </div>
            </div>
            
            <a href="#contact" class="contact-btn">Na kontaktoni</a>
          </div>
          
          <div class="about-image">
            <div class="image-frame">
              <img src="${descImg}" alt="Laboratori dentar">
              <div class="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Products Section -->
    <div class="products-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">PRODUKTET TONA</span>
          <h2 class="section-title">Zgjidhje inovative dentare</h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="product-section">
          <div class="product-info">
            <h2 class="product-title">Zirkon</h2>
            <p class="product-description">Implanti dentar është një zgjidhje moderne për këdo që dëshiron të rikthejë një dhëmbëzim të shëndetshëm.</p>
            
            <ul class="product-features">
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e32d2d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Rezistencë e jashtëzakonshme</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e32d2d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Estetikë natyrale</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e32d2d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Biokompatibilitet i përsosur</span>
              </li>
            </ul>
            
            <a href="#contact" class="outline-btn">Mëso më shumë</a>
          </div>
          
          <div class="carousel-wrapper">
            <div class="slider-container">
              <div class="slider-content">
                ${[1, 2, 3, 4, 5, 6]
                  .map(
                    (i) => `
                  <div class="slider-single">
                    <img class="slider-single-image" src="${ZirkonImg}" alt="Zirkon ${i}" />
                    <h1 class="slider-single-title">Zirkon ${i}</h1>
                    <a class="slider-single-likes" href="javascript:void(0);">
                      <i class="fa fa-heart"></i>
                      <p>1,247</p>
                    </a>
                  </div>
                `,
                  )
                  .join("")}
              </div>
              <a class="slider-left"><span class="arrow arrow-left"></span></a>
              <a class="slider-right"><span class="arrow arrow-right"></span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Testimonials Section -->
    <div class="testimonials-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">DËSHMITË</span>
          <h2 class="section-title">Çfarë thonë klientët tanë</h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none">
                <path d="M11.9 8.4c-.5-.3-1.2-.3-1.7 0l-7 4.2c-.5.3-.8.8-.8 1.4s.3 1.1.8 1.4l7 4.2c.3.2.6.2.9.2.3 0 .6-.1.9-.2l7-4.2c.5-.3.8-.8.8-1.4s-.3-1.1-.8-1.4l-7-4.2z"></path>
              </svg>
            </div>
            <div class="testimonial-content">
              <p class="testimonial-text">"Cilësia e protezave dentare nga NEXIS Laboratory është e jashtëzakonshme. Pacientët e mi janë gjithmonë të kënaqur me rezultatin përfundimtar."</p>
              <div class="testimonial-author">
                <div class="author-avatar"></div>
                <div class="author-info">
                  <h4 class="author-name">Dr. Arben Murtezaj</h4>
                  <p class="author-title">Dentist, Prishtinë</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card">
            <div class="testimonial-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none">
                <path d="M11.9 8.4c-.5-.3-1.2-.3-1.7 0l-7 4.2c-.5.3-.8.8-.8 1.4s.3 1.1.8 1.4l7 4.2c.3.2.6.2.9.2.3 0 .6-.1.9-.2l7-4.2c.5-.3.8-.8.8-1.4s-.3-1.1-.8-1.4l-7-4.2z"></path>
              </svg>
            </div>
            <div class="testimonial-content">
              <p class="testimonial-text">"Unë punoj me NEXIS prej vitesh dhe jam gjithmonë i impresionuar nga profesionalizmi i tyre dhe respektimi i afateve."</p>
              <div class="testimonial-author">
                <div class="author-avatar"></div>
                <div class="author-info">
                  <h4 class="author-name">Dr. Fatmir Hajrizi</h4>
                  <p class="author-title">Kirurg dentar, Ferizaj</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card">
            <div class="testimonial-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none">
                <path d="M11.9 8.4c-.5-.3-1.2-.3-1.7 0l-7 4.2c-.5.3-.8.8-.8 1.4s.3 1.1.8 1.4l7 4.2c.3.2.6.2.9.2.3 0 .6-.1.9-.2l7-4.2c.5-.3.8-.8.8-1.4s-.3-1.1-.8-1.4l-7-4.2z"></path>
              </svg>
            </div>
            <div class="testimonial-content">
              <p class="testimonial-text">"Protezat Zirkon nga NEXIS janë të një cilësie të jashtëzakonshme. Unë rekomandoj fuqimisht shërbimet e tyre për të gjithë kolegët e mi."</p>
              <div class="testimonial-author">
                <div class="author-avatar"></div>
                <div class="author-info">
                  <h4 class="author-name">Dr. Vjosa Krasniqi</h4>
                  <p class="author-title">Dentiste estetike, Prizren</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Contact CTA Section -->
    <div id="contact" class="contact-cta">
      <div class="container">
        <h2 class="cta-title">Gati për të bashkëpunuar me ne?</h2>
        <p class="cta-text">Na kontaktoni sot për të diskutuar nevojat tuaja për proteza dentare.</p>
        
        <div class="cta-buttons">
          <a href="tel:+38344379656" class="cta-phone-btn">
            <img src="${phoneIcon}" alt="Phone Icon" style="width: 24px; height: 24px; margin-right: 10px; filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(87%) contrast(97%);">
            +383 44 379 656
          </a>
          <a href="/contact" class="cta-contact-btn">
            Formulari i kontaktit
          </a>
        </div>
      </div>
    </div>
  `

  const repeat = false
  const noArrows = false
  const noBullets = false

  const container = document.querySelector(".slider-container")
  const slide = document.querySelectorAll(".slider-single")
  const slideTotal = slide.length - 1
  let slideCurrent = -1

  function initBullets() {
    if (noBullets) return

    const bulletContainer = document.createElement("div")
    bulletContainer.classList.add("bullet-container")

    slide.forEach((elem, i) => {
      const bullet = document.createElement("div")
      bullet.classList.add("bullet")
      bullet.id = `bullet-index-${i}`
      bullet.addEventListener("click", () => goToIndexSlide(i))
      bulletContainer.appendChild(bullet)
      elem.classList.add("proactivede")
    })

    container.appendChild(bulletContainer)
  }

  function initArrows() {
    if (noArrows) return
    document.querySelector(".slider-left").addEventListener("click", () => slideLeft())
    document.querySelector(".slider-right").addEventListener("click", () => slideRight())
  }

  function updateBullet() {
    if (!noBullets) {
      document.querySelectorAll(".bullet").forEach((elem, i) => {
        elem.classList.toggle("active", i === slideCurrent)
      })
    }
    checkRepeat()
  }

  function checkRepeat() {
    if (!repeat) {
      const left = document.querySelector(".slider-left")
      const right = document.querySelector(".slider-right")

      if (slideCurrent === slide.length - 1) {
        slide[0].classList.add("not-visible")
        right?.classList.add("not-visible")
        left?.classList.remove("not-visible")
      } else if (slideCurrent === 0) {
        slide[slide.length - 1].classList.add("not-visible")
        left?.classList.add("not-visible")
        right?.classList.remove("not-visible")
      } else {
        slide[0].classList.remove("not-visible")
        slide[slide.length - 1].classList.remove("not-visible")
        left?.classList.remove("not-visible")
        right?.classList.remove("not-visible")
      }
    }
  }

  function slideRight() {
    slideCurrent = slideCurrent < slideTotal ? slideCurrent + 1 : 0
    activateSlides()
  }

  function slideLeft() {
    slideCurrent = slideCurrent > 0 ? slideCurrent - 1 : slideTotal
    activateSlides()
  }

  function goToIndexSlide(index) {
    while (slideCurrent !== index) {
      slideCurrent < index ? slideRight() : slideLeft()
    }
  }

  function activateSlides() {
    const preactive = slide[(slideCurrent - 1 + slide.length) % slide.length]
    const active = slide[slideCurrent]
    const proactive = slide[(slideCurrent + 1) % slide.length]

    slide.forEach((el) => {
      el.classList.remove("preactivede", "preactive", "active", "proactive", "proactivede")
      el.classList.add("proactivede")
    })

    preactive.classList.remove("proactivede")
    preactive.classList.add("preactive")

    active.classList.remove("proactivede")
    active.classList.add("active")

    proactive.classList.remove("proactivede")
    proactive.classList.add("proactive")

    updateBullet()
  }

  let touchStartX = 0
  let touchEndX = 0

  container.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX
  })

  container.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX
    handleGesture()
  })

  function handleGesture() {
    const swipeDistance = touchEndX - touchStartX

    if (swipeDistance > 50) {
      // Swipe vers la droite = image précédente
      if (repeat || slideCurrent > 0) {
        slideLeft()
      }
    } else if (swipeDistance < -50) {
      // Swipe vers la gauche = image suivante
      if (repeat || slideCurrent < slide.length - 1) {
        slideRight()
      }
    }
  }

  function slideInitial() {
    initBullets()
    initArrows()
    setTimeout(() => {
      slideRight()
    }, 500)
  }

  slideInitial()

  // Shtoni një efekt parallax në hero
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY
    const parallaxBg = document.querySelector(".parallax-bg")
    if (parallaxBg) {
      parallaxBg.style.transform = `translateY(${scrollPosition * 0.4}px) translateZ(-1px) scale(2)`
    }
    
    // Animation des éléments au scroll
    const animateElements = document.querySelectorAll('.section-title, .section-tag, .text-highlight, .feature-card, .testimonial-card');
    animateElements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.classList.add('animate-in');
      }
    });
  })
}

export default HomePage
