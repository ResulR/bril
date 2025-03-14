import phoneIcon from '../../img/phoneIcon.png';
import homepageImage from '../../img/homepageImage.png'; // Import de l'image de fond
import descImg from '../../img/img_display.jpg';
import zirkonImg from '../../img/zirkon.png';

const HomePage = () => {
  const main = document.querySelector('main');

  // Intégration directe de l'image dans le HTML
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
      <!-- Texte à gauche -->
      <div class="text-container">
        <h2>Laboratori dentar NEXIS</h2>
        <p>
          Si dentist, nuk keni mjaftueshëm kohë për të prodhuar proteza dentare?
          Dëshironi të përfitoni nga një punë e personalizuar dhe me cilësi të lartë?
          Laboratori dentar Nexis në Prishtinë është profesionisti që ju nevojitet!
        </p>
        <button class="contact-btn">Na kontaktoni</button>
      </div>

      <!-- Image à droite -->
      <div class="image-container">
        <img src="${descImg}" alt="Laboratoire dentaire">
      </div>
    </div>


<div class="product-section">
  <!-- Zirkon -->
  <div class="product-card">
    <h2>Zirkon</h2>
    <img src="${zirkonImg}" alt="Zirkon">
    <p>
      Nëse densiteti i kockës suaj e lejon, implanti dentar është një zgjidhje moderne
      për këdo që dëshiron të rikthejë një dhëmbëzim të shëndetshëm.
    </p>
  </div>

  <!-- E-MAX -->
  <div class="product-card">
    <h2>E-MAX</h2>
    <img src="${zirkonImg}" alt="E-MAX">
    <p>
      Çdo pacient ka protezën e tij dentare. Me fjalë të tjera, forma e dhëmbëve ndryshon
      nga një person te tjetri.
    </p>
  </div>

  <!-- Veneers -->
  <div class="product-card">
    <h2>Veneers</h2>
    <img src="${zirkonImg}" alt="Veneers">
    <p>
      Veneers janë një zgjidhje estetike për të përmirësuar buzëqeshjen tuaj. 
      Ato ofrojnë një pamje natyrale dhe një mbrojtje të fortë për dhëmbët tuaj.
    </p>
  </div>

  <!-- Implant Dentaire -->
  <div class="product-card">
    <h2>Implant Dentaire</h2>
    <img src="${zirkonImg}" alt="Implant Dentaire">
    <p>
      Implantet dentare janë një opsion i përhershëm për të zëvendësuar dhëmbët e munguar,
      duke ofruar funksionalitet dhe estetikë të lartë.
    </p>
  </div>
</div>


    



  `;
};

export default HomePage;
