/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

import Logo from "../../img/N-WHITE.png"

const Navbar = () => {
  const navbarWrapper = document.querySelector("#navbarWrapper")
  // Modifier la structure de la navbar pour mieux centrer les éléments
  const navbar = `
<nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="${Logo}" alt="Nexis Lab Logo" style="height: 70px; width: auto; margin-left: 15%;">
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#" data-uri="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#" data-uri="/photo">Photo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#" data-uri="/contact">Contacts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#" data-uri="/">About us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
`

  navbarWrapper.innerHTML = navbar

  // Initialiser le comportement du menu hamburger
  document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner le bouton hamburger et le menu
    const hamburgerButton = document.querySelector(".navbar-toggler")
    const navbarCollapse = document.querySelector("#navbarSupportedContent")
    const navbarElement = document.querySelector(".navbar")

    // Fonction pour fermer le menu
    const closeMenu = () => {
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show")
      }
    }

    // Ajouter un écouteur d'événement pour le clic sur le bouton hamburger
    if (hamburgerButton) {
      hamburgerButton.addEventListener("click", (e) => {
        e.stopPropagation() // Empêche la propagation du clic
        if (navbarCollapse) {
          navbarCollapse.classList.toggle("show")
        }
      })
    }

    // Fermer le menu lorsqu'un lien est cliqué
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu)
    })

    // Gestion du scroll pour masquer/afficher la navbar
    let lastScrollTop = 0
    const scrollThreshold = 50 // Seuil de défilement avant de masquer/afficher la navbar
    let isScrolling = false

    window.addEventListener("scroll", () => {
      // Fermer le menu lors du défilement
      closeMenu()

      // Gestion de l'affichage/masquage de la navbar
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop

          // Ne rien faire si on est tout en haut de la page
          if (currentScrollTop <= 0) {
            navbarElement.classList.remove("navbar-hidden")
            navbarElement.classList.add("navbar-visible")
            lastScrollTop = currentScrollTop
            isScrolling = false
            return
          }

          // Vérifier si le défilement dépasse le seuil
          if (Math.abs(currentScrollTop - lastScrollTop) > scrollThreshold) {
            // Défilement vers le bas - masquer la navbar
            if (currentScrollTop > lastScrollTop) {
              navbarElement.classList.remove("navbar-visible")
              navbarElement.classList.add("navbar-hidden")
            }
            // Défilement vers le haut - afficher la navbar
            else {
              navbarElement.classList.remove("navbar-hidden")
              navbarElement.classList.add("navbar-visible")
            }
            lastScrollTop = currentScrollTop
          }

          isScrolling = false
        })
      }
      isScrolling = true
    })

    // Fermer le menu lorsqu'on clique ailleurs sur la page
    document.addEventListener("click", (e) => {
      // Vérifie si le clic est en dehors du menu et du bouton hamburger
      if (
        navbarCollapse &&
        !navbarCollapse.contains(e.target) &&
        hamburgerButton &&
        !hamburgerButton.contains(e.target)
      ) {
        closeMenu()
      }
    })

    // Empêcher la fermeture du menu lorsqu'on clique à l'intérieur
    if (navbarCollapse) {
      navbarCollapse.addEventListener("click", (e) => {
        e.stopPropagation() // Empêche la propagation du clic
      })
    }
  })
}

export default Navbar

