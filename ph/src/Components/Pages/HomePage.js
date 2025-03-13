import phoneIcon from '../../img/phoneIcon.png';
import homepageImage from '../../img/homepageImage.png'; // Import de l'image de fond

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
  `;
};

export default HomePage;
