import Perfil from "./components/Perfil.jsx";
import BotaoLink from "./components/BotaoLink.jsx";
import Icone from "./components/Icone.jsx";
import VideoDestaque from "./components/VideoDestaque.jsx";
import { perfil, links, sociais, videosDestaque } from "./dados.js";

export default function App() {
  return (
    <main>
      <Perfil {...perfil} />

      <nav className="links" aria-label="Meus links">
        {links.map((link) => (
          <BotaoLink key={link.url} {...link} />
        ))}
      </nav>

      {videosDestaque.length > 0 && <VideoDestaque videos={videosDestaque} />}

      <div className="sociais">
        {sociais.map((s) => (
          <a
            key={s.nome}
            href={s.url}
            aria-label={s.nome}
            {...(s.url.startsWith("http") && { target: "_blank", rel: "noopener" })}
          >
            <Icone nome={s.icone} />
          </a>
        ))}
      </div>

      <footer>© {new Date().getFullYear()} {perfil.nome} · Jackão Games</footer>
    </main>
  );
}
