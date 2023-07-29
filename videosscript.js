const videos = [
  {
    id: "c3WDsgH2uLY",
    title: "Hackeando Hasta la Puerta 2.0: Mas Hackeados Que Nunca",
    description: "Salido el 30 de agosto de 2019, El Papu Shadow y Mat abren sin saberlo la PUERTA que llevaría a Las Tonas😎 a la perdición.",
  },
  {
    id: "_312m_8TYTE",
    title: "three easy steps to troll le hackerman",
    description: "Salido el 29 de marzo de 2021, nos muestra una breve preview de HHLP 3.0 y el régimen de Levi's Time Corporation™ que controla Las Tonas😎 en ese momento.",
  },
  {
    id: "PA9_kOT5XOc",
    title: "Hackeando Hasta La Puerta 2.5: El Camino Hacia la Puerta",
    description: "Salido el 1 de abril de 2021, este es un spin-off no canon que nos aclara dudas de la historia antes de HHLP 3.0.",
  },
  {
    id: "p4adO02HrMA",
    title: "Hackeando Hasta la Puerta (R)",
    description: "Salido el 31 de octubre de 2021, es un remake del video original llamado Hackeando Hasta la Puerta, parodia del nivel de Osu! de la canción de Itou Kanako - Hacking to the Gate, tema de apertura de la serie de animación japonesa STEINS;GATE.",
  },
  {
    id: "KVbZuLtGIYY",
    title: "Hackeando Hasta la Puerta 3.0: Más allá de la puerta",
    description: "Salido el 31 de marzo de 2022, conclusión de la larga historia de las batallas entre El Papu Shadow contra Levi Hackerman y un enemigo que parece ser quien controla todo este siniestro régimen papulince.",
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