import ZirkonImg from "../../img/zirkon.png"

const Photo = () => {
  const main = document.querySelector("main")

  // Importation de l'image (ceci doit être fait en dehors de la fonction dans un vrai module ES)
  // import ZirkonImg from "../../img/zirkon.png";

  // Pour les besoins de cet exemple, nous allons créer une URL pour l'image

  const photo = `
      <div class="photo-page" style="min-height: 85vh; display: flex; flex-direction: column; width: 100%;">
        <div class="menu-container" style="margin-top: 30px; margin-bottom: 50px; text-align: center;">
          <h2 class="title" style="font-size: 32px; font-weight: 600; color: #333; letter-spacing: 1px;">PHOTO</h2>
        </div>
        
        <!-- Technologies Section -->
        <div class="technologies-section" style="width: 85%; max-width: 1200px; margin: 0 auto 60px auto;">
          <h2 style="text-align: center; font-size: 28px; font-weight: 600; color: #333; letter-spacing: 1px; margin-bottom: 15px;">TECHNOLOGIES</h2>
          <div style="border-bottom: 1px dashed #999; margin-bottom: 40px;"></div>
          
          <!-- Scanner Section -->
          <div class="scanner-section" style="display: flex; flex-wrap: wrap; align-items: center; margin-bottom: 60px; gap: 30px;">
            <div class="scanner-info" style="flex: 1; min-width: 300px;">
              <h3 style="font-size: 20px; margin-bottom: 15px; color: #4CAF50; font-weight: 500;">PHOTO SCANNER <span style="color: #e32d2d; font-size: 16px; font-weight: normal;">(name of scanner)</span></h3>
              <div class="scanner-image" style="border-radius: 10px; overflow: hidden; width: 100%; height: 200px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                <!-- Image du scanner -->
                <img src="${ZirkonImg}" alt="Photo Scanner" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            </div>
            
            <div class="scanner-description" style="flex: 1; min-width: 300px; padding: 20px;">
              <p style="color: #e32d2d; font-weight: 500; margin-bottom: 5px;">Our scanner is</p>
              <p style="color: #333; margin-bottom: 5px;">the best</p>
              <p style="color: #4CAF50; font-weight: 500;">(and most used in)</p>
            </div>
          </div>
          
          <!-- Intraoral Section -->
          <div class="intraoral-section" style="display: flex; flex-wrap: wrap; align-items: center; margin-bottom: 60px; gap: 30px; flex-direction: row-reverse;">
            <div class="intraoral-info" style="flex: 1; min-width: 300px;">
              <h3 style="font-size: 20px; margin-bottom: 15px; color: #e32d2d; font-weight: 500;">INTRAORAL <span style="color: #e32d2d; font-size: 16px; font-weight: normal;">(name of it)</span></h3>
              <div class="intraoral-image" style="border-radius: 10px; overflow: hidden; width: 100%; height: 200px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                <!-- Image intraoral -->
                <img src="${ZirkonImg}" alt="Intraoral Device" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            </div>
            
            <div class="intraoral-description" style="flex: 1; min-width: 300px; padding: 20px; text-align: right;">
              <p style="color: #e32d2d; font-weight: 500; margin-bottom: 5px;">also is</p>
              <p style="color: #333; margin-bottom: 5px;">the best</p>
              <p style="color: #4CAF50; font-weight: 500;">(and most used in)</p>
            </div>
          </div>
        </div>
        
        <!-- Our Work Section -->
        <div class="our-work-section" style="width: 85%; max-width: 1200px; margin: 0 auto 60px auto;">
          <h2 style="text-align: center; font-size: 28px; font-weight: 600; color: #333; letter-spacing: 1px; margin-bottom: 15px;">OUR WORK</h2>
          <div style="border-bottom: 1px dashed #999; margin-bottom: 40px;"></div>
          
          <!-- Gallery Grid -->
          <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 30px; margin-bottom: 40px;">
            <!-- Gallery Item 1 -->
            <div class="gallery-item" style="border-radius: 10px; overflow: hidden; height: 200px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 20px rgba(0,0,0,0.2)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.1)';">
              <img src="${ZirkonImg}" alt="Work Sample 1" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            
            <!-- Gallery Item 2 -->
            <div class="gallery-item" style="border-radius: 10px; overflow: hidden; height: 200px; background-color: #f9f9f9; box-shadow: 0 4px 15px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 20px rgba(0,0,0,0.2)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.1)';">
              <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
                <div style="text-align: center; color: #999;">
                  <p>Work Sample 2</p>
                  <p style="font-size: 12px;">(Ajoutez votre image ici)</p>
                </div>
              </div>
            </div>
            
            <!-- Gallery Item 3 -->
            <div class="gallery-item" style="border-radius: 10px; overflow: hidden; height: 200px; background-color: #f9f9f9; box-shadow: 0 4px 15px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 20px rgba(0,0,0,0.2)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.1)';">
              <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
                <div style="text-align: center; color: #999;">
                  <p>Work Sample 3</p>
                  <p style="font-size: 12px;">(Ajoutez votre image ici)</p>
                </div>
              </div>
            </div>
            
            <!-- Gallery Item 4 -->
            <div class="gallery-item" style="border-radius: 10px; overflow: hidden; height: 200px; background-color: #f9f9f9; box-shadow: 0 4px 15px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 20px rgba(0,0,0,0.2)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.1)';">
              <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
                <div style="text-align: center; color: #999;">
                  <p>Work Sample 4</p>
                  <p style="font-size: 12px;">(Ajoutez votre image ici)</p>
                </div>
              </div>
            </div>
            
            <!-- Gallery Item 5 -->
            <div class="gallery-item" style="border-radius: 10px; overflow: hidden; height: 200px; background-color: #f9f9f9; box-shadow: 0 4px 15px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 20px rgba(0,0,0,0.2)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.1)';">
              <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
                <div style="text-align: center; color: #999;">
                  <p>Work Sample 5</p>
                  <p style="font-size: 12px;">(Ajoutez votre image ici)</p>
                </div>
              </div>
            </div>
            
            <!-- Gallery Item 6 -->
            <div class="gallery-item" style="border-radius: 10px; overflow: hidden; height: 200px; background-color: #f9f9f9; box-shadow: 0 4px 15px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 20px rgba(0,0,0,0.2)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.1)';">
              <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
                <div style="text-align: center; color: #999;">
                  <p>Work Sample 6</p>
                  <p style="font-size: 12px;">(Ajoutez votre image ici)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `

  main.innerHTML = photo
}

export default Photo

