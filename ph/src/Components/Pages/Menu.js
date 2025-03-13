const Menu = () => {
  const main = document.querySelector('main');
  const menu = `
     <div class="menu-container">
  <ul>
    <li class="item"><a href="/menu/pate">PÂTES</a></li>
    <li class="item"><a href="/menu/panini">PANINI</a></li>
    <li class="item"><a href="#">KAPSALON</a></li>
    <li class="item"><a href="#">BURGER</a></li>
  </ul>
</div>



    `;

  main.innerHTML = menu;
};
export default Menu;
