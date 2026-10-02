<div align="center">

# 🎮 Jackão Games — Link na Bio

Página de links para o Instagram do criador de conteúdo gamer **Jackão Alves**:
todas as redes, contato para parcerias e vídeos em destaque em um só lugar.

[![Site no ar](https://img.shields.io/badge/site-jackaoalves.netlify.app-4d7cff?style=for-the-badge)](https://jackaoalves.netlify.app)

![React](https://img.shields.io/badge/React_19-20232a?style=flat-square&logo=react&logoColor=61dafb)
![Vite](https://img.shields.io/badge/Vite_7-646cff?style=flat-square&logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS_puro-264de4?style=flat-square&logo=css3&logoColor=white)
![Netlify](https://img.shields.io/badge/deploy-Netlify-00c7b7?style=flat-square&logo=netlify&logoColor=white)
![Licença MIT](https://img.shields.io/badge/licen%C3%A7a-MIT-a259ff?style=flat-square)

<img src="docs/preview-mobile.png" alt="Prévia do site no celular" width="320">

</div>

## ✨ Funcionalidades

- **Perfil** com foto, nome, @, tags e bio — com iniciais automáticas se a foto não carregar
- **Botões de link** com ícone, subtítulo e destaque para o link principal
- **Carrossel de vídeos** do YouTube com rolagem por arraste (_scroll snap_), pensado para Shorts verticais
- **Carregamento sob demanda dos vídeos**: a página mostra só a capa e baixa o player do YouTube
  apenas quando a pessoa clica — cada player embutido pesa mais de 1 MB
- **Conteúdo separado do código**: todos os textos, links e vídeos ficam em [`src/dados.js`](src/dados.js)
- **Mobile first**, leve (~70 KB de JS comprimido) e com metadados Open Graph para prévia ao compartilhar

## 🛠️ Tecnologias

| Camada                              | Escolha                                                 |
| ----------------------------------- | ------------------------------------------------------- |
| Interface                           | React 19 (componentes funcionais + hooks)               |
| Build e servidor de desenvolvimento | Vite 7                                                  |
| Estilo                              | CSS puro com variáveis (sem framework)                  |
| Qualidade                           | ESLint 10 (regras de React Hooks) + Prettier            |
| Hospedagem                          | Netlify (configurado em [`netlify.toml`](netlify.toml)) |

## ♿ Acessibilidade e boas práticas

- Links e botões reais (`<a>` / `<button>`), navegáveis por teclado, com foco visível
- `aria-label` em todos os botões que só têm ícone
- Ícones decorativos escondidos de leitores de tela (`aria-hidden`)
- Links externos com `rel="noopener"`; vídeos via `youtube-nocookie.com`
- Cabeçalhos de cache e segurança configurados no Netlify

## 📁 Estrutura

```text
site-link-na-bio/
├── public/
│   └── foto.jpg               # foto de perfil
├── src/
│   ├── components/
│   │   ├── BotaoLink.jsx      # botão de cada link
│   │   ├── Icone.jsx          # ícones SVG
│   │   ├── Perfil.jsx         # foto, nome, @, tags e bio
│   │   └── VideoDestaque.jsx  # carrossel com carregamento sob demanda
│   ├── App.jsx                # monta a página
│   ├── dados.js               # ✏️ todo o conteúdo editável
│   ├── estilo.css             # estilos e cores (variáveis no topo)
│   └── main.jsx               # ponto de entrada
├── scripts/abrir-site.bat     # atalho para Windows (npm run dev)
├── netlify.toml               # build e cabeçalhos do deploy
└── eslint.config.js
```

## 🚀 Como rodar

Pré-requisito: [Node.js](https://nodejs.org) 20 ou mais novo.

```bash
git clone https://github.com/jackovsky/site-link-na-bio.git
cd site-link-na-bio
npm install
npm run dev
```

| Comando           | O que faz                                                 |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | servidor de desenvolvimento com recarregamento automático |
| `npm run build`   | gera o site otimizado na pasta `dist`                     |
| `npm run preview` | abre a versão gerada para conferir                        |
| `npm run lint`    | procura erros no código                                   |
| `npm run format`  | padroniza a formatação                                    |

## ✏️ Personalizando

Edite [`src/dados.js`](src/dados.js):

```js
export const links = [
  {
    titulo: "Me segue no TikTok",
    subtitulo: "@jackaoh",
    url: "https://www.tiktok.com/@jackaoh",
    icone: "tiktok",
    destaque: true,
  },
  // ...
];

export const videosDestaque = [
  { id: "FgViYOBwoac", titulo: "Operador com experiência 🤣", vertical: true },
  // ...
];
```

- **Ícones disponíveis:** `tiktok`, `youtube`, `instagram`, `tech`, `email`, `whatsapp`
- **Vídeos:** `id` é o código que aparece no link do YouTube; use `vertical: true` para Shorts
- **Cores:** variáveis no topo de [`src/estilo.css`](src/estilo.css)
- **Foto:** substitua `public/foto.jpg`

## 🌐 Deploy

O projeto já vem com [`netlify.toml`](netlify.toml). Conectando o repositório ao Netlify
(**Add new project → Import from Git**), cada `git push` na branch `main` publica o site automaticamente.

## 📄 Licença

[MIT](LICENSE) © Jackão Alves
