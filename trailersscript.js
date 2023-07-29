const videos = [
  {
    id: "UBMSx_86K5I",
    title: "Hackeando hasta la Puerta 3.0 - Announcement Trailer | PS4",
    description: "Salido el 20 de septiembre de 2020, anuncia la salida de la esperada tercera entrega de Hackeando Hasta La Puerta.",
  },
  {
    id: "_VvTNORK9qg",
    title: "Hackeando hasta la Puerta 3.0 - Official Trailer 2/3 | PS4",
    description: "Salido el 20 de septiembre de 2020, nos da una preview de quien será uno de los enemigos principales de la nueva entrega y el nuevo objetivo a conseguir.",
  },
  {
    id: "rWPuCQf8RuI",
    title: "Hackeando hasta la Puerta 3.0 - Final Trailer.",
    description: "Salido el 8 de diciembre de 2020, nos presenta el tema de apertura de la entrega final de HHLP.",
  },
  {
    id: "i78ZEQ_CtdI",
    title: "one more last trailer",
    description: "Salido el 17 de febrero de 2022, trailer extra de HHLP3.0 que nos muestra la fecha de salida de la última entrega de la saga además de un ser misterioso que se nos presentará más adelante.",
  },
  {
    id: "oDpZPRfNaBM",
    title: "???",
    description: "Salido el 14 de junio de 2022, anuncio de una nueva entrega de la saga que actuará como precuela con un nuevo protagonista.",
  },
  {
    id: "uiC0wuPytdk",
    title: "mensaje de un viejo conocido en un lugar fuera de la puerta",
    description: "Salido el 29 de diciembre de 2022, segundo trailer de DV2:HHLP0.0 que nos presenta un VHS rescatado de algún lugar fuera de la puerta.",
  },

  // Agrega aquí más objetos con los datos de los videos de YouTube que desees mostrar
];

function embedYouTubeVideo(videoData) {
  const videoContainer = document.createElement("div");
  videoContainer.innerHTML = `
    <div class="video-item">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoData.id}" frameborder="0" allowfullscreen></iframe>
      <h3>${videoData.title}</h3>
      <p>${videoData.description}</p>
    </div>
  `;
  return videoContainer;
}

window.onload = function () {
  const container = document.getElementById("videos");
  videos.forEach((videoData) => {
    const videoElement = embedYouTubeVideo(videoData);
    container.appendChild(videoElement);
  });
};
