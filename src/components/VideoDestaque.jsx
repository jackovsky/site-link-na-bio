import { useState } from "react";

// Mostra só a capa do vídeo e carrega o player do YouTube quando a pessoa clica.
// Cada player embutido pesa mais de 1 MB; assim a página abre rápida mesmo com vários vídeos.
function Video({ id, titulo, vertical }) {
  const [tocando, setTocando] = useState(false);

  return (
    <div className={vertical ? "video vertical" : "video"}>
      {tocando ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={titulo}
          allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="capa"
          onClick={() => setTocando(true)}
          aria-label={`Assistir: ${titulo}`}
        >
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
          <span className="play" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
          <span className="titulo-video">{titulo}</span>
        </button>
      )}
    </div>
  );
}

export default function VideoDestaque({ videos }) {
  return (
    <section className="destaque">
      <h2>Vídeos em destaque</h2>
      <div className="carrossel" aria-label="Vídeos em destaque (arraste para o lado)">
        {videos.map((video) => (
          <Video key={video.id} {...video} />
        ))}
      </div>
    </section>
  );
}
