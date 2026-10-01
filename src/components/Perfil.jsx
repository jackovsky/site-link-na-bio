import { useState } from "react";

export default function Perfil({ nome, arroba, iniciais, foto, tags, bio }) {
  const [semFoto, setSemFoto] = useState(false);

  return (
    <header className="perfil">
      <div className="moldura">
        {semFoto ? (
          <div className="iniciais" aria-hidden="true">{iniciais}</div>
        ) : (
          <img className="foto" src={foto} alt={`Foto do ${nome}`} onError={() => setSemFoto(true)} />
        )}
      </div>
      <h1>{nome}</h1>
      <div className="arroba">{arroba}</div>
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <p className="bio">{bio}</p>
    </header>
  );
}
