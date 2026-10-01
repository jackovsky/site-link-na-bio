import Icone from "./Icone.jsx";

export default function BotaoLink({ titulo, subtitulo, url, icone, destaque }) {
  const externo = url.startsWith("http");

  return (
    <a
      className={destaque ? "link principal" : "link"}
      href={url}
      {...(externo && { target: "_blank", rel: "noopener" })}
    >
      <Icone nome={icone} />
      <span>
        {titulo}
        {subtitulo && <small>{subtitulo}</small>}
      </span>
      <Icone nome="seta" className="seta" />
    </a>
  );
}
