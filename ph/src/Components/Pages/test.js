/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import BOLO from '../../img/Penne-Bolognese.jpg';
import Blanche from '../../img/Penne-Blanche.jpg';



const Pate = () => {
  const main = document.querySelector('main');
  const radioContainer = document.querySelector('div'); 

  main.innerHTML = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

    <div>
      <label>
      <input type="radio" name="category" value="all" checked="checked"> Toutes
      </label>
      <label>
        <input type="radio" name="category" value="ravier"> Ravier
      </label>
      <label>
        <input type="radio" name="category" value="assiette"> Assiette
      </label>
      <label>
        <input type="radio" name="category" value="gratiné"> Gratiné
      </label>
    </div>
    
    <main class="lacard">
      <!-- Vos cartes ici -->
      <div class="card" data-category="ravier">
        <img src=${BOLO} alt="Description">
        <div class="card-content">
          <h2 class="hcard">bolognaise</h2>
          <p class="pcard">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
          </p>
        </div>
      </div>  

      <!-- Ajoutez les autres cartes ici -->
      
<div class = "card" data-category="ravier">
<img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="">
<div class="card-content">
  <h2 class ="hcard">
      bolognaise 4 fromages
  </h2>
  <p class ="pcard">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
  </p>
</div>
</div>





<div class = "card" data-category="ravier">
<img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="">
<div class="card-content">
  <h2 class ="hcard">
      bolognaise + poulet
  </h2>
  <p class ="pcard">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
  </p>
</div>
</div>





<div class = "card" data-category="ravier">
<img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="">
<div class="card-content">
  <h2 class ="hcard">
      fruits de mer
  </h2>
  <p class ="pcard">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
  </p>
</div>     
</div>





<div class = "card"data-category="ravier">
<img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="">
<div class="card-content">
  <h2 class ="hcard">
    saumon
  </h2>
  <p class ="pcard">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
  </p>
</div>
</div>






<div class = "card" data-category="assiete">
<img src="${Blanche}" alt="poulet blanche">
<div class="card-content">
  <h2 class ="hcard">
      poulet blanche
  </h2>
  <p class ="pcard">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
  </p>
</div>
</div>






<div class = "card" data-category="ravier">
<img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="">
<div class="card-content">
  <h2 class ="hcard">
    poulet épinard
  </h2>
  <p class ="pcard">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
  </p>  
</div>
</div>






<div class = "card" data-category="ravier">
<img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="">
<div class="card-content">
  <h2 class ="hcard">
    poulet champignon
  </h2>
  <p class ="pcard">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
  </p>  
</div>
</div>



<div class = "card">
<img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="">
<div class="card-content">
<h2 class ="hcard">
  poulet andalouse
</h2>
<p class ="pcard">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
</p>  
</div>
</div>




<div class = "card">
<img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="">
<div class="card-content">
  <h2 class ="hcard">
    poulet curry
  </h2>
  <p class ="pcard">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
  </p>  
</div>
</div>






<div class = "card">
<img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="">
<div class="card-content">
  <h2 class ="hcard">
    poulet pilli
  </h2>
  <p class ="pcard">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
  </p>  
</div>
</div>





<div class = "card">
<img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="">
<div class="card-content">
<h2 class ="hcard">
  poulet chef
</h2>
<p class ="pcard">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
</p>  
</div>
</div>



<div class = "card">
<img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="">
<div class="card-content">
  <h2 class ="hcard">
    poulet + salami
  </h2>
  <p class ="pcard">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
  </p>  
</div>
</div>



<div class = "card">
<img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="">
<div class="card-content">
  <h2 class ="hcard">
    salami blanche
  </h2>
  <p class ="pcard">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
  </p>  
</div>
</div>


<div class = "card">
<img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="">
<div class="card-content">
  <h2 class ="hcard">
    poulet brocoli
  </h2>
  <p class ="pcard">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
  </p>  
</div>
</div>



<div class = "card">
<img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="">
<div class="card-content">
  <h2 class ="hcard">
    quatres fromages
  </h2>
  <p class ="pcard">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
  </p>  
</div>
</div>



<div class = "card">
<img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="">
<div class="card-content">
  <h2 class ="hcard">
    carbonara
  </h2>
  <p class ="pcard">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
  </p>  
</div>
</div>


<div class = "card">
<img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="">
<div class="card-content">
  <h2 class ="hcard">
    arabiata
  </h2>
  <p class ="pcard">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
  </p>  
</div>
</div>



<div class = "card">
<img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="">
<div class="card-content">
  <h2 class ="hcard">
    scampis
  </h2>
  <p class ="pcard">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
  </p>  
</div>
</div>

    </main>`;
    

  // Ajouter un gestionnaire d'événements pour le changement d'état des boutons radio
  radioContainer.addEventListener('change', (event) => {
    if (event.target.type === 'radio') {
      const category = event.target.value;
  
      // Sélectionnez toutes les cartes avec un attribut data-category correspondant à la catégorie sélectionnée
      const cards = document.querySelectorAll(`.card[data-category="${category}"]`);
  
      // Masquer toutes les cartes
      document.querySelectorAll('.card').forEach(card => {
        card.style.display = 'none';
      });
  
      // Afficher uniquement les cartes correspondant à la catégorie sélectionnée
      cards.forEach(card => {
        card.style.display = 'block';
      });
    }
  });
};


export default Pate;
