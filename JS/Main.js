var menuItems = document.querySelectorAll('.navbar-link');
// Obtener la URL actual
var currentURL = window.location.href;

menuItems.forEach(function(item) {
  item.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = "rgba(175, 89, 158, 0.3)";
    // Otros estilos adicionales
  });

  item.addEventListener('mouseout', function(e) {
    if (!item.classList.contains('active')) {
      e.target.style.backgroundColor = "";
      // Restablecer otros estilos
    }
  });

  if (item.href === currentURL) {
    item.classList.add('active');
    item.style.backgroundColor = "rgba(175, 89, 158, 0.3)";
  }

  item.addEventListener('click', function(e) {
    // Quitar la clase "active" de todos los elementos de enlace
    menuItems.forEach(function(item) {
      item.classList.remove('active');
      item.style.backgroundColor = "";
    });

   // Agregar la clase "active" al enlace que se hizo clic
    e.target.classList.add('active');
    e.target.style.backgroundColor = "rgba(175, 89, 158, 0.3)";
  });
});

// animacion de los iconos //
var iconoLinks = document.querySelectorAll('.icono-link');

iconoLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    // Quitar la clase "active" de todos los enlaces
    iconoLinks.forEach(function(otherLink) {
      otherLink.classList.remove('newcolor');
    });

    // Agregar la clase "active" al enlace clicado
    link.classList.add('newcolor');
  });
});