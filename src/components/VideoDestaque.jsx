export default function VideoDestaque({ videos }) {
  return (
    <section className="destaque">
      <h2>Vídeos em destaque</h2>
      <div className="carrossel" aria-label="Vídeos em destaque (arraste para o lado)">
        {videos.map(({ id, titulo, vertical }) => (
          <div key={id} className={vertical ? "video vertical" : "video"}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${id}`}
              title={titulo}
              loading="lazy"
              allow="accelerometer; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </section>
  );
}
