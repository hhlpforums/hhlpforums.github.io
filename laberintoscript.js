document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');

  // URLs a las que se redirigirá al hacer clic en cada rectángulo
  const urls = [
    'url1.html',
    'url2.html',
    'url3.html',
    'url4.html',
    'url5.html',
    'url6.html',
    'url7.html',
    'url8.html',
    'url9.html',
    'url10.html',
    'url11.html',
    'url12.html',
    'url13.html',
    'url14.html',
    'url15.html',
    'url16.html',
    'url17.html',
    'url18.html',
    'url19.html',
    'url20.html',
    'url21.html',
    'url22.html',
    'url23.html',
    'url24.html',
    'url25.html',
    'url26.html',
    'url27.html',
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