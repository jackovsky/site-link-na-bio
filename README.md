# Site "link na bio" — Jackão Games (React + Vite)

Página única com foto, bio e botões para os links — para colocar na bio do Instagram.

## Editar

- **Textos e links:** `src/dados.js` (é só trocar os textos entre aspas).
- **Cores:** topo de `src/estilo.css`.
- **Foto:** salve como `public/foto.jpg` (quadrada fica melhor). Sem ela, aparecem as iniciais.

## Ver no computador

Dê dois cliques em **Abrir Site.bat** (ou rode `npm run dev`). O site abre no navegador
e atualiza sozinho quando você salva um arquivo.

## Colocar no ar (grátis)

1. Rode `npm run build` — isso gera a pasta `dist` com o site pronto.
2. Crie uma conta em https://app.netlify.com
3. Arraste a pasta **dist** para a área "Deploy manually".
4. Você ganha um endereço tipo `jackaogames.netlify.app` para colar na bio.

## Domínio próprio (depois)

1. Registre o domínio em https://registro.br (~R$ 40/ano).
2. No Netlify: Site → Domain management → Add a domain.
3. No registro.br, troque os servidores DNS pelos que o Netlify mostrar.

## Estrutura

- `src/App.jsx` — monta a página
- `src/components/Perfil.jsx` — foto, nome, @, tags e bio
- `src/components/BotaoLink.jsx` — cada botão de link
- `src/components/Icone.jsx` — ícones
- `versao-html/` — primeira versão, só HTML (guardada como reserva)
