document.addEventListener("DOMContentLoaded", function() {
  // Obtener referencia al elemento interactivo
  const clickableElement = document.getElementById("clickable-element");

  // Función para mostrar el elemento en una posición aleatoria
  function showClickableElement() {
    clickableElement.style.display = "block";

    // Generar posiciones aleatorias
    const windowHeight = window.innerHeight - 250;
    const windowWidth = window.innerWidth - 250;
    const randomTop = Math.floor(Math.random() * windowHeight);
    const randomLeft = Math.floor(Math.random() * windowWidth);

    // Aplicar las posiciones al elemento
    clickableElement.style.top = `${randomTop}px`;
    clickableElement.style.left = `${randomLeft}px`;
  }

  // Función para ocultar el elemento
  function hideClickableElement() {
    clickableElement.style.display = "none";
  }

  // Mostrar el elemento inicialmente
  showClickableElement();

  // Configurar temporizador para mostrar y ocultar el elemento cada 0.5 segundos
  setInterval(() => {
    hideClickableElement();
    setTimeout(showClickableElement, 100);
  }, 500);

  // Agregar evento click al elemento para redirigir a una URL
  clickableElement.addEventListener("click", function() {
    // Cambia "URL_DESTINO" por la URL a la que deseas redirigir al hacer clic en la imagen.
    window.location.href = "https://www.youtube.com/watch?v=KEkrWRHCDQU";
  });
});