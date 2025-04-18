/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
import phoneIcon from "../../img/phoneIcon.png"
import homepageImage from "../../img/homepageImage.png"
import dent8 from "../../img/dent8.jpg"
import ZirkonImg from "../../img/zirkon.png"
import Logo from "../../img/N-WHITE.png"
// Import des nouvelles images
import dent1 from "../../img/dent1.jpg"
import dent2 from "../../img/dent2.jpg"
import dent4 from "../../img/dent4.jpg"
import dent7 from "../../img/dent7.jpg"
import dent6 from "../../img/dent6.jpg"

const HomePage = () => {
  const main = document.querySelector("main")

  main.innerHTML = `
   <!-- Hero Section me Parallax -->
   <div class="hero-section">
     <div class="parallax-bg" style="background: url('${homepageImage}') no-repeat center center;"></div>
     
     <div class="hero-content">
       <div class="hero-logo" style="margin-bottom: 60px;">
         <img src="${Logo}" alt="Nexis Lab Logo" style="height: 150px; width: auto;">
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

           <p class="text-highlight">
             <span class="key-word precision">Precizion</span>. 
             <span class="key-word aesthetic">Estetikë</span>. 
             <span class="key-word reliability">Besueshmëri</span>. 
             </br>Çdo punë që dalin nga laboratori ynë është rezultat i artit, shkencës dhe përvojës shumëvjeçare në teknologjinë dentare.
           </p>
           
           <div class="feature-cards-container">
             <div class="feature-card">
               <div class="feature-image">
                 <img src="${ZirkonImg}" alt="Cilësi superiore">
               </div>
               <div class="feature-content">
                 <h3 class="feature-title">Cilësi superiore</h3>
                 <p class="feature-text">Ne përdorim vetëm materiale të cilësisë së parë për të garantuar qëndrueshmëri dhe estetikë, si dhë natyralitetin maksimal të dhëmbëve</p>
               </div>
             </div>
             
             <div class="feature-card">
               <div class="feature-image">
                 <img src="${dent6}" alt="Afate të shpejta">
               </div>
               <div class="feature-content">
                 <h3 class="feature-title">Afate të shpejta</h3>
                 <p class="feature-text">Natyrisht qe perkushtimi ndaj punes ton qe nderlidhet me buqeshjen dhe shendetin e pacienteve,na bene qe gjithmon te respektojm afatet kohore.</p>
               </div>
             </div>
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
             <span class="product-type implant">Implantet dentare</span>
             <span class="product-type urat">Urat me ataçmente</span>
           </div>
           
           <p class="product-description">
             Në laboratorin tonë dentare përdorim vetëm materiale të cilësisë më të lartë, për të garantuar qëndrueshmëri, estetikë dhe rehati maksimale për pacientët tanë.
           </p>
           
           <div class="modern-highlight-box">
             <div class="highlight-content full-width">
               <div class="highlight-border"></div>
               <p class="product-highlight-text">
                 Zgjidhjet tona estetike ofrojnë <span class="highlight-word">bukurinë natyrale</span> dhe <span class="highlight-word">qëndrueshmërinë</span> që kërkoni.
               </p>
               <ul class="product-highlight-list">
                 <li>
                   <span class="product-type zirkon">Zirkon</span>
                   <span>- I fortë dhe rezistent për dhëmbët e pasëm.</span>
                 </li>
                 <li>
                   <span class="product-type emax">E-MAX</span>
                   <span>- Elegancë dhe transparencë maksimale.</span>
                 </li>
                 <li>
                   <span class="product-type veneers">Veneers</span>
                   <span>- Të holla dhe elegante për transformim të buzëqeshjes.</span>
                 </li>
                 <li>
                   <span class="product-type metal-porcelan">Metal-porcelan</span>
                   <span>- Kombinim i bazës metalike me mbulesë qeramike, për qëndrueshmëri dhe estetikë.</span>
                 </li>
                 <li>
                   <span class="product-type ibar">IBAR-i</span>
                   <span>- Është një strukturë metalike që ofron forcë, stabilitet dhe jetëgjatësi në ura protetike, veçanërisht në rastet me mungesë të madhe dhëmbësh.</span>
                 </li>
                 <li>
                   <span class="product-type implant">Implantet dentare</span>
                   <span>- restaurime precize, estetike dhe të personalizuara</span>
                 </li>
                 <li>
                   <span class="product-type urat">Urat me ataçmente</span>
                   <span>- zgjidhje diskrete, të qëndrueshme dhe funksionale. Dizajnuara me precizion për komoditet dhe estetikë maksimale.</span>
                 </li>
               </ul>
             </div>
           </div>

         </div>
         
         <div class="carousel-wrapper">
           <div class="slider-container">
             <div class="slider-content">
               <!-- Réorganisation des images selon l'ordre demandé : 4, 7, 2, 8, 1 -->
               <div class="slider-single">
                 <img class="slider-single-image" src="${dent4}" alt="Dent 4" />
               </div>
               <div class="slider-single">
                 <img class="slider-single-image" src="${dent7}" alt="Dent 7" />
               </div>
               <div class="slider-single">
                 <img class="slider-single-image" src="${dent2}" alt="Dent 2" />
               </div>
               <div class="slider-single">
                 <img class="slider-single-image" src="${dent8}" alt="Dent 8" />
               </div>
               <div class="slider-single">
                 <img class="slider-single-image" src="${dent1}" alt="Dent 1" />
               </div>
             </div>
             <a class="slider-left"><span class="arrow arrow-left"></span></a>
             <a class="slider-right"><span class="arrow arrow-right"></span></a>
             
             <!-- Ajout manuel des bullets pour s'assurer qu'ils sont visibles -->
             <div class="bullet-container">
               <div class="bullet" id="bullet-index-0"></div>
               <div class="bullet" id="bullet-index-1"></div>
               <div class="bullet" id="bullet-index-2"></div>
               <div class="bullet" id="bullet-index-3"></div>
               <div class="bullet" id="bullet-index-4"></div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   
   <!-- Contact CTA Section -->
   <div class="contact-cta" style="background-color: #8B2E35;">
     <div class="container">
       <h2 class="cta-title">Gati për të bashkëpunuar me ne?</h2>
       <p class="cta-text">Na kontaktoni sot për të diskutuar nevojat tuaja për proteza dentare.</p>
       
       <div class="cta-buttons">
         <a href="tel:+38344379656" class="cta-phone-btn">
           <img src="${phoneIcon}" alt="Phone Icon" style="width: 24px; height: 24px; margin-right: 10px; filter: invert(100%);">
           +383 44 379 656
         </a>

       </div>
     </div>
   </div>

   <style>
     .key-word {
       display: inline-block;
       font-size: 1.4rem;
       font-weight: 700;
       position: relative;
       margin-right: 5px;
       padding-bottom: 3px;
       letter-spacing: 0.5px;
       transition: all 0.3s ease;
     }
     
     .key-word::after {
       content: "";
       position: absolute;
       bottom: 0;
       left: 0;
       width: 100%;
       height: 2px;
       border-radius: 1px;
       transition: transform 0.3s ease;
       transform: scaleX(1);
     }
     
     .key-word:hover {
       transform: translateY(-2px);
     }
     
     .key-word.precision {
       color: #7e57c2;
     }
     
     .key-word.precision::after {
       background: linear-gradient(90deg, #7e57c2, #5e35b1);
       box-shadow: 0 0 8px rgba(126, 87, 194, 0.5);
     }
     
     .key-word.aesthetic {
       color: #4299e1;
     }
     
     .key-word.aesthetic::after {
       background: linear-gradient(90deg, #4299e1, #3182ce);
       box-shadow: 0 0 8px rgba(66, 153, 225, 0.5);
     }
     
     .key-word.reliability {
       color: #48bb78;
     }
     
     .key-word.reliability::after {
       background: linear-gradient(90deg, #48bb78, #38a169);
       box-shadow: 0 0 8px rgba(72, 187, 120, 0.5);
     }
     
     /* Styles pour les bullets du carousel */
     .bullet-container {
       position: absolute;
       bottom: -40px;
       left: 0;
       width: 100%;
       display: flex;
       justify-content: center;
       gap: 12px;
       z-index: 100;
     }
     
     .bullet {
       width: 14px;
       height: 14px;
       background-color: #7e57c2;
       border-radius: 50%;
       opacity: 0.5;
       cursor: pointer;
       transition: all 0.3s ease;
     }
     
     .bullet:hover {
       opacity: 0.8;
       transform: scale(1.2);
     }
     
     .bullet.active {
       opacity: 1;
       transform: scale(1.2);
       box-shadow: 0 0 10px rgba(126, 87, 194, 0.7);
     }
   </style>
 `

  const repeat = true // Changé à true pour permettre la navigation circulaire
  const noArrows = false
  const noBullets = false

  const container = document.querySelector(".slider-container")
  const slide = document.querySelectorAll(".slider-single")
  const slideTotal = slide.length - 1
  let slideCurrent = -1

  // Ajouter des écouteurs d'événements aux bullets
  function initBulletEvents() {
    document.querySelectorAll(".bullet").forEach((bullet, index) => {
      bullet.addEventListener("click", () => goToIndexSlide(index))
    })
  }

  function initArrows() {
    if (noArrows) return
    document.querySelector(".slider-left").addEventListener("click", () => slideLeft())
    document.querySelector(".slider-right").addEventListener("click", () => slideRight())
  }

  // Modifier la fonction updateBullet pour s'assurer que les bullets sont mis à jour correctement
  function updateBullet() {
    document.querySelectorAll(".bullet").forEach((elem, i) => {
      elem.classList.toggle("active", i === slideCurrent)
    })
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
    slideCurrent = index
    activateSlides()
  }

  function activateSlides() {
    // Calculer les indices des diapositives précédente et suivante
    const prevIndex = (slideCurrent - 1 + slide.length) % slide.length
    const nextIndex = (slideCurrent + 1) % slide.length

    // Réinitialiser toutes les diapositives
    slide.forEach((el, i) => {
      el.classList.remove("preactivede", "preactive", "active", "proactive", "proactivede")

      // Déterminer la classe appropriée pour chaque diapositive
      if (i === slideCurrent) {
        el.classList.add("active")
      } else if (i === prevIndex) {
        el.classList.add("preactive")
      } else if (i === nextIndex) {
        el.classList.add("proactive")
      } else {
        el.classList.add("proactivede")
      }
    })

    // Mettre à jour les bullets
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
      slideLeft()
    } else if (swipeDistance < -50) {
      // Swipe vers la gauche = image suivante
      slideRight()
    }
  }

  // Modifier la fonction slideInitial pour initialiser les événements des bullets
  function slideInitial() {
    // Initialiser les flèches
    initArrows()

    // Initialiser les événements des bullets
    initBulletEvents()

    // S'assurer que toutes les slides ont la classe proactivede au départ
    slide.forEach((elem) => {
      elem.classList.add("proactivede")
    })

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
