/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
import phoneIcon from "../../img/phoneIcon.png"
import homepageImage from "../../img/homepageImage.png"
import descImg from "../../img/img_display.jpg"
import ZirkonImg from "../../img/zirkon.png"
import Logo from "../../img/N-WHITE.png"

const HomePage = () => {
  const main = document.querySelector("main")

  main.innerHTML = `
    <!-- Hero Section me Parallax -->
    <div class="hero-section">
      <div class="parallax-bg" style="background: url('${homepageImage}') no-repeat center center;"></div>
      
      <div class="hero-content">
        <div class="hero-logo" style="margin-bottom: 30px;">
          <img src="${Logo}" alt="Nexis Lab Logo" style="height: 80px; width: auto;">
        </div>
        <h1 class="hero-title">NEXIS LABORATORY</h1>
        <p class="hero-subtitle">Ne jemi mjeshtrit pas buzëqeshjes suaj.</p>
        
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
            <p class="text-highlight">Laboratori ynë dentar <span class="text-accent">NEXIS</span> osht i specializuar në krijimin e restaurimeve precize, estetike dhe funksionale. Me përkushtim maksimal ndaj detajeve dhe teknologjisë më të fundit, bashkëpunojmë ngushtë me stomatologët për të ofruar zgjidhje të personalizuara si kurora, ura, faseta dhe proteza të lëvizshme apo fikse.</p>
            <!-- TODO AVEC UNE LIGNE A GAUCHE SEPARER DE LA PREMIERE
            // Precizion. Estetikë. Besueshmëri.

            // Çdo punë që dalin nga laboratori ynë është rezultat i artit, shkencës dhe përvojës shumëvjeçare në teknologjinë dentare.  -->


            <p class="text-body" style="color: #ffffff; text-shadow: 0 0 3px rgba(235, 235, 235, 0.5);">Laboratori ynë dentar <span class="text-accent">NEXIS</span> ofron zgjidhje të personalizuara dhe me cilësi të lartë për të gjitha nevojat tuaja protetike.</p>
            
            <div class="features-grid">
              <div class="feature-card">
                <div class="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 class="feature-title">Cilësi superiore</h3>
                <p class="feature-text">Ne përdorim vetëm materiale të cilësisë së parë për të garantuar qëndrueshmëri dhe estetikë, si dhë natyralitetin maksimal të dhëmbëve</p>
              </div>
              
              <div class="feature-card">
                <div class="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 class="feature-title">Afate të shpejta</h3>
                <p class="feature-text">Ne respektojmë afatet për t'ju lejuar të kënaqni pacientët tuaj.</p> <!-- TODO : modifier le texte par "Natyrisht qe perkushtimi ndaj punes ton qe nderlidhet me buqeshjen dhe shendetin e pacienteve,na bene qe gjithmon te respektojm afatet kohore." -->
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
            <div class="product-title-group">
              <h2 class="product-title">Restaurime Estetike</h2>
              <div class="product-title-underline"></div>
            </div>
            
            <div class="product-types">
              <span class="product-type zirkon">Zirkon</span>
              <span class="product-type emax">E-MAX</span>
              <span class="product-type veneers">Veneers</span>
              <span class="product-type metal-porcelan">Metal-porcelan</span>
              <span class="product-type ibar">IBAR-i</span>
            </div>
            
            
            
            <p class="product-description">
              Në laboratorin tonë dentare përdorim vetëm materiale të cilësisë më të lartë, për të garantuar qëndrueshmëri, estetikë dhe rehati maksimale për pacientët tanë.
            </p>
            
            <div class="product-highlight-box">
              <div class="highlight-border"></div>
              <p class="product-highlight-text">
                Zgjidhjet tona estetike ofrojnë <span class="highlight-word">bukurinë natyrale</span> dhe <span class="highlight-word">qëndrueshmërinë</span> që kërkoni.
              </p>
              <ul class="product-highlight-list">
                <li><span class="product-type zirkon">Zirkon</span> - I fortë dhe rezistent për dhëmbët e pasëm.</li>
                <li><span class="product-type emax">E-MAX</span> - Elegancë dhe transparencë maksimale.</li>
                <li><span class="product-type veneers">Veneers</span> - Të holla dhe elegante për transformim të buzëqeshjes.</li>
                <li><span class="product-type metal-porcelan">Metal-porcelan</span> - Kombinim i bazës metalike me mbulesë qeramike, për qëndrueshmëri dhe estetikë.</li>
                <li><span class="product-type ibar">IBAR-i</span> - Është një strukturë metalike që ofron forcë, stabilitet dhe jetëgjatësi në ura protetike, veçanërisht në rastet me mungesë të madhe dhëmbësh.</li>
              </ul>
            </div>
            
            <ul class="product-features">
              <li>
                <svg class="check-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Rezistencë e jashtëzakonshme</span>
              </li>
              <li>
                <svg class="check-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Estetikë natyrale</span>
              </li>
              <li>
                <svg class="check-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                  <h1 class="slider-single-title">${i <= 2 ? "Zirkon" : i <= 4 ? "E-MAX" : "Veneers"} ${i}</h1>
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
    
    <!-- Contact CTA Section -->
    <div id="contact" class="contact-cta">
      <div class="container">
        <h2 class="cta-title">Gati për të bashkëpunuar me ne?</h2>
        <p class="cta-text">Na kontaktoni sot për të diskutuar nevojat tuaja për proteza dentare.</p>
        
        <div class="cta-buttons">
          <a href="tel:+38344379656" class="cta-phone-btn">
            <img src="${phoneIcon}" alt="Phone Icon" style="width: 24px; height: 24px; margin-right: 10px; filter: invert(100%);">
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
    const animateElements = document.querySelectorAll(
      ".section-title, .section-tag, .text-highlight, .feature-card, .product-detail-card",
    )
    animateElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (elementPosition < screenPosition) {
        element.classList.add("animate-in")
      }
    })
  })
}

export default HomePage
