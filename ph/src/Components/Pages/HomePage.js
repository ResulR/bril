/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
import phoneIcon from "../../img/phoneIcon.png"
import homepageImage from "../../img/homepageImage.png"
import ZirkonImg from "../../img/zirkon.png"
import Logo from "../../img/N-WHITE.png"
import dent2 from "../../img/dent2.jpg"
import dent3 from "../../img/dent3.jpg"
import dent4 from "../../img/dent4.jpg"
import dent7 from "../../img/dent7.jpg"
import dent10 from "../../img/dent10.jpg"
import dent15 from "../../img/dent15.jpg"
import dent17 from "../../img/dent17.jpg"
// Correction de l'extension pour dent19 (.jpg au lieu de .png)
import dent19 from "../../img/dent19.jpg"
// Ajout de l'import pour dent21
import dent21 from "../../img/dent21.jpg"
// Ajout de l'import pour dent22
import dent22 from "../../img/dent22.jpg"
// Import des images spécifiques pour les produits
import ibarImg from "../../img/ibar.jpg"
import metalPorcelanImg from "../../img/metal-porcelan.jpg"
// Ajouter les imports manquants après les imports existants
import dent9 from "../../img/dent9.jpg"
import dent14 from "../../img/dent14.jpg"
import dent16 from "../../img/dent16.jpg"
import dent23 from "../../img/dent23.jpg"
import dent24 from "../../img/dent24.jpg"

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
     <div class="about-bg-overlay"></div>
     <div class="container">
       <div class="section-header">
         <span class="section-tag">RRETH NESH</span>
         <h2 class="section-title">Laboratori dentar NEXIS</h2>
         <div class="section-divider"></div>
       </div>
       
       <div class="about-content">
         <div class="about-text">
           <p class="text-highlight">Laboratori <span class="text-accent">NEXIS</span> specializohet në restaurime dentare precize dhe estetike. Me teknologji moderne dhe përkushtim ndaj detajeve, ofrojmë zgjidhje të personalizuara si kurora, ura, faseta dhe proteza për klientët tanë.</p>

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
                 <img src="${dent24}" alt="Afate të shpejta">
               </div>
               <div class="feature-content">
                 <h3 class="feature-title">Afate të shpejta</h3>
                    <p class="feature-text">Natyrisht që përkushtimi ndaj punës tonë që ndërlidhet me buzëqeshjen dhe shëndetin e pacientëve, na bënë që gjithmonë të respektojmë afatet kohore.</p>
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

           <div class="product-description-container">
             <div class="product-description-image">
               <img src="${dent10}" alt="Restaurime Estetike">
             </div>
             <p class="product-description">
               Në laboratorin tonë dentare përdorim vetëm materiale të cilësisë më të lartë, për të garantuar qëndrueshmëri, estetikë dhe rehati maksimale për pacientët tanë.
             </p>
           </div>
           
           <div class="product-items-container">
             <!-- Zirkon Item -->
             <div class="product-item">
               <div class="product-badge-container">
                 <span class="product-badge zirkon">Zirkon</span>
               </div>
               <div class="product-item-image">
                 <img src="${dent7}" alt="Zirkon">
               </div>
               <p class="product-item-description">
                 I fortë dhe rezistent për dhëmbët e pasëm.
               </p>
             </div>
             
             <!-- E-MAX Item -->
             <div class="product-item">
               <div class="product-badge-container">
                 <span class="product-badge emax">E-MAX</span>
               </div>
               <div class="product-item-image">
                 <img src="${dent22}" alt="E-MAX">
               </div>
               <p class="product-item-description">
                 Elegancë dhe transparencë maksimale.
               </p>
             </div>
             
             <!-- Veneers Item -->
             <div class="product-item">
               <div class="product-badge-container">
                 <span class="product-badge veneers">Veneers</span>
               </div>
               <div class="product-item-image">
                 <img src="${dent19}" alt="Veneers">
               </div>
               <p class="product-item-description">
                 Të holla dhe elegante për transformim të buzëqeshjes.
               </p>
             </div>
             
             <!-- Metal-porcelan Item -->
             <div class="product-item">
               <div class="product-badge-container">
                 <span class="product-badge metal-porcelan">Metal-porcelan</span>
               </div>
               <div class="product-item-image">
                 <img src="${metalPorcelanImg}" alt="Metal-porcelan">
               </div>
               <p class="product-item-description">
                 Kombinim i bazës metalike me mbulese qeramike, për qëndrueshmëri dhe estetikë.
               </p>
             </div>
             
             <!-- IBAR-i Item -->
             <div class="product-item">
               <div class="product-badge-container">
                 <span class="product-badge ibar">IBAR-i</span>
               </div>
               <div class="product-item-image">
                 <img src="${ibarImg}" alt="IBAR-i">
               </div>
               <p class="product-item-description">
                 Është një strukturë metalike që ofron forcë, stabilitet dhe jetëgjatësi në ura protetike, veçanërisht në rastet me mungesë të madhe dhëmbësh.
               </p>
             </div>
             
             <!-- Implantet dentare Item -->
             <div class="product-item">
               <div class="product-badge-container">
                 <span class="product-badge implant">Implantet dentare</span>
               </div>
               <div class="product-item-image">
                 <img src="${dent17}" alt="Implantet dentare">
               </div>
               <p class="product-item-description">
                 restaurime precize, estetike dhe të personalizuara
               </p>
             </div>
             
             <!-- Urat me ataçmente Item -->
             <div class="product-item">
               <div class="product-badge-container">
                 <span class="product-badge urat">Urat me ataçmente</span>
               </div>
               <div class="product-item-image">
                 <img src="${dent21}" alt="Urat me ataçmente">
               </div>
               <p class="product-item-description">
                 zgjidhje diskrete, të qëndrueshme dhe funksionale. Dizajnuara me precizion për komoditet dhe estetikë maksimale.
               </p>
             </div>
           </div>
         </div>
       </div>

       <!-- Section du carrousel sans le titre -->
       <div class="carousel-section">
         <div class="carousel-wrapper">
           <div class="slider-container">
             <div class="slider-content">
               <!-- Images du carousel dans l'ordre demandé : 4, 14, 2, 9, 15, 23, 16 -->
               <div class="slider-single">
                 <img class="slider-single-image" src="${dent4}" alt="Dent 4" />
               </div>
               <div class="slider-single">
                 <img class="slider-single-image" src="${dent14}" alt="Dent 14" />
               </div>
               <div class="slider-single">
                 <img class="slider-single-image" src="${dent2}" alt="Dent 2" />
               </div>
               <div class="slider-single">
                 <img class="slider-single-image" src="${dent9}" alt="Dent 9" />
               </div>
               <div class="slider-single">
                 <img class="slider-single-image" src="${dent15}" alt="Dent 15" />
               </div>
               <div class="slider-single">
                 <img class="slider-single-image" src="${dent23}" alt="Dent 23" />
               </div>
               <div class="slider-single">
                 <img class="slider-single-image" src="${dent16}" alt="Dent 16" />
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
               <div class="bullet" id="bullet-index-5"></div>
               <div class="bullet" id="bullet-index-6"></div>
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
     
     /* Styles pour la section About avec image de fond */
     .about-section {
       position: relative;
       padding: 80px 0;
       width: 100%;
       background: rgba(18, 18, 18, 0.7); /* Fond semi-transparent au lieu du dégradé */
       z-index: 1;
     }
     
     .about-section::before {
       content: "";
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       background: url('${dent3}') no-repeat center center;
       background-size: cover;
       opacity: 0.4; /* Augmentation de l'opacité pour rendre l'image plus visible */
       z-index: -1;
       filter: brightness(0.9); /* Réduction du flou et augmentation de la luminosité */
     }
     
     .about-bg-overlay {
       display: none; /* Suppression de l'overlay avec le dégradé mauve */
     }
     
     .about-text {
       position: relative;
       z-index: 2;
     }
     
     .text-highlight {
       color: var(--text-primary);
       font-size: 1.25rem;
       line-height: 1.8;
       margin-bottom: 30px;
       text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5); /* Ombre légèrement plus prononcée pour la lisibilité */
     }
     
     @media (max-width: 768px) {
       .text-highlight {
         font-size: 1.1rem;
       }
     }
     
     /* Styles pour les éléments de produit */
     .product-description {
       font-size: 1.2rem;
       line-height: 1.8;
       color: var(--text-primary);
       margin-bottom: 30px;
     }
     
     /* Styles pour le conteneur de description de produit avec image */
     .product-description-container {
       display: flex;
       flex-wrap: wrap;
       align-items: center;
       gap: 25px;
       margin: 25px 0 30px 0;
       background-color: rgba(0, 0, 0, 0.5);
       border-radius: 12px;
       padding: 20px;
       box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
     }

     .product-description-image {
       flex: 1;
       min-width: 200px;
       max-width: 300px;
       border-radius: 8px;
       overflow: hidden;
       box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
     }

     .product-description-image img {
       width: 100%;
       height: auto;
       display: block;
       transition: transform 0.5s ease;
     }

     .product-description-image:hover img {
       transform: scale(1.05);
     }

     .product-description {
       flex: 2;
       min-width: 250px;
       font-size: 1.2rem;
       line-height: 1.8;
       color: var(--text-primary);
       margin: 0;
     }

     @media (max-width: 768px) {
       .product-description-container {
         flex-direction: column;
       }
       
       .product-description-image {
         max-width: 100%;
         margin: 0 auto;
       }
       
       .product-description {
         text-align: center;
       }
     }
     
     /* Styles pour les éléments de produit */
     .product-items-container {
       display: grid;
       grid-template-columns: repeat(1, 1fr);
       gap: 30px;
       margin-top: 40px;
     }
     
     @media (min-width: 768px) {
       .product-items-container {
         grid-template-columns: repeat(2, 1fr);
       }
     }
     
     @media (min-width: 1200px) {
       .product-items-container {
         grid-template-columns: repeat(3, 1fr);
       }
     }
     
     .product-item {
       background-color: rgba(0, 0, 0, 0.5);
       border-radius: 12px;
       overflow: hidden;
       box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
       transition: transform 0.3s ease, box-shadow 0.3s ease;
     }
     
     .product-item:hover {
       transform: translateY(-5px);
       box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
     }
     
     .product-badge-container {
       display: flex;
       justify-content: center;
       padding: 15px 0;
     }
     
     .product-badge {
       display: inline-block;
       font-size: 1rem;
       font-weight: 600;
       padding: 8px 20px;
       border-radius: 30px;
     }
     
     .product-badge.zirkon {
       background-color: rgba(126, 87, 194, 0.2);
       color: var(--zirkon-color);
       border: 1px solid rgba(126, 87, 194, 0.3);
     }
     
     .product-badge.emax {
       background-color: rgba(66, 153, 225, 0.2);
       color: var(--emax-color);
       border: 1px solid rgba(66, 153, 225, 0.3);
     }
     
     .product-badge.veneers {
       background-color: rgba(236, 72, 153, 0.2);
       color: var(--veneers-color);
       border: 1px solid rgba(236, 72, 153, 0.3);
     }
     
     .product-badge.metal-porcelan {
       background-color: rgba(76, 175, 80, 0.2);
       color: var(--metal-porcelan-color);
       border: 1px solid rgba(76, 175, 80, 0.3);
     }
     
     .product-badge.ibar {
       background-color: rgba(255, 152, 0, 0.2);
       color: var(--ibar-color);
       border: 1px solid rgba(255, 152, 0, 0.3);
     }
     
     .product-badge.implant {
       background-color: rgba(233, 30, 99, 0.2);
       color: var(--implant-color);
       border: 1px solid rgba(233, 30, 99, 0.3);
     }
     
     .product-badge.urat {
       background-color: rgba(0, 188, 212, 0.2);
       color: var(--urat-color);
       border: 1px solid rgba(0, 188, 212, 0.3);
     }
     
     .product-item-image {
       width: 100%;
       height: 200px;
       overflow: hidden;
     }
     
     .product-item-image img {
       width: 100%;
       height: 100%;
       object-fit: cover;
       transition: transform 0.5s ease;
     }
     
     .product-item:hover .product-item-image img {
       transform: scale(1.05);
     }
     
     .product-item-description {
       color: var(--text-primary);
       font-size: 1rem;
       line-height: 1.6;
       padding: 15px 20px 20px;
       margin: 0;
       text-align: center;
     }
     
     @media (max-width: 768px) {
       .product-item-image {
         height: 180px;
       }
     }
     
     /* Styles pour la section du carrousel */
     .carousel-section {
       margin-top: 60px;
       padding-bottom: 60px;
     }
     
     .carousel-wrapper {
       width: 100%;
       max-width: 1000px;
       margin: 0 auto;
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

  // Shtoni një efekt parallax në hero
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY
    const parallaxBg = document.querySelector(".parallax-bg")
    if (parallaxBg) {
      parallaxBg.style.transform = `translateY(${scrollPosition * 0.4}px) translateZ(-1px) scale(2)`
    }

    // Animation des éléments au scroll
    const animateElements = document.querySelectorAll(
      ".section-title, .section-tag, .text-highlight, .feature-card, .product-item",
    )
    animateElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (elementPosition < screenPosition) {
        element.classList.add("animate-in")
      }
    })
  })
  slideInitial()
}

export default HomePage
