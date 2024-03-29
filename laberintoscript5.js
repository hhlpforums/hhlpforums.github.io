document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');

  // URLs a las que se redirigirá al hacer clic en cada rectángulo
  const urls = [
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    'cXVpbnRv.html',
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    'ZWxmaW5hbA.html',
    // ... Agrega las URLs de las páginas a las que quieres redirigir
  ];

  // Rellenar los rectángulos con las imágenes
  for (let i = 1; i <= 27; i++) {
    const rectangle = document.createElement('div');
    rectangle.classList.add('rectangle');
    rectangle.style.backgroundImage = `url('imagen${i}.jpg')`;

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.style.backgroundImage = `url('imagen-overlay.jpg')`;

    rectangle.appendChild(overlay);
    container.appendChild(rectangle);

    // Evento al pasar el mouse sobre un rectángulo
    rectangle.addEventListener('mouseover', () => {
      overlay.style.opacity = 1;
    });

    // Evento al quitar el mouse del rectángulo
    rectangle.addEventListener('mouseout', () => {
      overlay.style.opacity = 0;
    });

    // Evento al hacer clic en el rectángulo
    rectangle.addEventListener('click', () => {
      window.location.href = urls[i - 1];
    });
  }

// Impedir hacer clic derecho
document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});

// Impedir abrir las herramientas de desarrollo con F12
document.addEventListener('keydown', function (event) {
  if (event.key === 'F12') {
    event.preventDefault();
  }
});

  function playSFX() {
    sfxAudio.currentTime = 0; // Reiniciar el audio si ya está reproduciéndose
    sfxAudio.play();
  }
});
