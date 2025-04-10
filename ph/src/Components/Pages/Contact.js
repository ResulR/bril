const Contact = () => {
  const main = document.querySelector("main")
  const contact = `
      <div class="contact-page" style="min-height: 85vh; display: flex; flex-direction: column; width: 100%;">
        <div class="menu-container" style="margin-top: 30px; margin-bottom: 50px; text-align: center;">
          <h2 class="title" style="font-size: 32px; font-weight: 600; color: #e0e0e0; letter-spacing: 1px;">CONTACTS</h2>
        </div>
        
        <div class="contact-section" style="width: 85%; max-width: 1200px; margin: 0 auto; flex-grow: 1; display: flex; flex-direction: column; align-items: center;">
          <div class="contact-header" style="margin-bottom: 60px; position: relative;">
          <div style="display: flex; align-items: center; justify-content: center;">
          </div>
        </div>
          
          <div class="contact-info-container" style="display: flex; justify-content: space-between; width: 100%; margin-top: 20px; flex-wrap: wrap; gap: 40px;">
            <!-- Phone Section -->
            <div class="contact-info-item" style="flex: 1; min-width: 250px; text-align: center; background-color: #f9f9f9; border-radius: 12px; padding: 30px 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 20px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';">
              <div style="display: inline-block; width: 100%;">
                <div style="margin-bottom: 15px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="phone-icon">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div style="border-bottom: 1px solid #ddd; width: 70%; margin: 0 auto 20px auto;"></div>
                <h3 style="font-weight: 600; margin-bottom: 12px; font-size: 18px; color: #333; letter-spacing: 1px;">PHONE</h3>
                <p style="font-size: 16px; color: #555;">+383 44 379 656</p>
              </div>
            </div>
            
            <!-- Social Media Section -->
            <div class="contact-info-item" style="flex: 1; min-width: 250px; text-align: center; background-color: #f9f9f9; border-radius: 12px; padding: 30px 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 20px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';">
              <div style="display: inline-block; width: 100%;">
                <div style="margin-bottom: 15px; display: flex; justify-content: center; gap: 15px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
                <div style="border-bottom: 1px solid #ddd; width: 70%; margin: 0 auto 20px auto;"></div>
                <h3 style="font-weight: 600; margin-bottom: 12px; font-size: 18px; color: #333; letter-spacing: 1px;">SOCIAL MEDIA</h3>
                <p style="font-size: 16px; color: #555;">nexus laboratory</p>
              </div>
            </div>
            
            <!-- Email Section -->
            <div class="contact-info-item" style="flex: 1; min-width: 250px; text-align: center; background-color: #f9f9f9; border-radius: 12px; padding: 30px 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 20px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';">
              <div style="display: inline-block; width: 100%;">
                <div style="margin-bottom: 15px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div style="border-bottom: 1px solid #ddd; width: 70%; margin: 0 auto 20px auto;"></div>
                <h3 style="font-weight: 600; margin-bottom: 12px; font-size: 18px; color: #333; letter-spacing: 1px;">EMAIL</h3>
                <p style="font-size: 16px; color: #555;">nexis.laboratory@gmail.com</p>
              </div>
            </div>
          </div>
          
          <!-- Contact Form Section -->
          <div class="contact-form-section" style="width: 100%; max-width: 800px; margin: 80px auto 40px auto; text-align: center;">
            <h3 style="font-size: 24px; font-weight: 500; color: #333; margin-bottom: 30px; letter-spacing: 0.5px;">Get in Touch</h3>
            <form id="contactForm" style="width: 100%;">
              <input type="text" id="name" name="name" placeholder="Your Name" required style="width: 100%; padding: 14px 18px; border: 1px solid #ddd; border-radius: 8px; font-size: 16px; outline: none; transition: border-color 0.3s ease; margin-bottom: 20px;" onfocus="this.style.borderColor='#999'" onblur="this.style.borderColor='#ddd'">
              
              <textarea id="message" name="message" placeholder="Your Message" rows="5" required style="width: 100%; padding: 14px 18px; border: 1px solid #ddd; border-radius: 8px; font-size: 16px; resize: vertical; outline: none; transition: border-color 0.3s ease;" onfocus="this.style.borderColor='#999'" onblur="this.style.borderColor='#ddd'"></textarea>
              
              <button type="submit" id="sendButton" style="margin-top: 25px; background-color: #e32d2d; color: white; border: none; padding: 14px 32px; border-radius: 8px; font-size: 16px; font-weight: 500; cursor: pointer; transition: background-color 0.3s ease, transform 0.2s ease;" onmouseover="this.style.backgroundColor='#c02525'; this.style.transform='translateY(-2px)'" onmouseout="this.style.backgroundColor='#e32d2d'; this.style.transform='translateY(0)'">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      
      <!-- Style personnalisé pour les messages de confirmation -->
      <style>
        /* Suppression des contours rouges pour les champs invalides */
        input:invalid, textarea:invalid {
          box-shadow: none;
          outline: none;
          border-color: #ddd !important;
        }
        
        /* Style pour le message de confirmation */
        #confirmationDialog {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #222;
          color: white;
          padding: 15px 20px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          z-index: 1000;
          display: none;
          animation: slideIn 0.3s ease-out;
        }
        
        #confirmationDialog p {
          margin: 0 0 10px 0;
          font-size: 14px;
        }
        
        #confirmationDialog button {
          background-color: #6b8afd;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 20px;
          cursor: pointer;
          float: right;
          font-size: 14px;
        }
        
        @keyframes slideIn {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      </style>
      
      <!-- Message de confirmation (caché par défaut) -->
      <div id="confirmationDialog">
        <p>Thank you for your message! Your email client will open to send the message.</p>
        <button onclick="this.parentElement.style.display='none'">OK</button>
      </div>
      `

  main.innerHTML = contact

  // Ajouter un gestionnaire d'événement simple pour le formulaire
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Obtenir les valeurs du formulaire
      const name = document.getElementById("name").value
      const message = document.getElementById("message").value

      // Envoyer l'email via mailto
      const mailtoLink = `mailto:resul.ramadan@icloud.com?subject=Contact from ${name}&body=Name: ${name}%0D%0A%0D%0AMessage:%0D%0A${message}`
      window.location.href = mailtoLink

      // Afficher le message de confirmation
      document.getElementById("confirmationDialog").style.display = "block"

      // Masquer le message après 5 secondes
      setTimeout(() => {
        document.getElementById("confirmationDialog").style.display = "none"
      }, 5000)

      // Réinitialiser le formulaire
      contactForm.reset()
    })
  }
}

export default Contact
