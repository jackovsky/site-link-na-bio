// ✏️ EDITE AQUI: tudo o que aparece no site vem deste arquivo.

export const perfil = {
  nome: "Jackão Alves",
  arroba: "@jackaogames",
  iniciais: "JA", // aparece quando não tem foto
  foto: "/foto.jpg", // coloque a foto em public/foto.jpg
  tags: ["Gamer", "PS5"],
  bio: "Humor do dia a dia + games.",
};

// Botões grandes. "icone" pode ser: tiktok, instagram, tech, email, youtube, whatsapp
// O primeiro com destaque: true fica colorido.
export const links = [
  {
    titulo: "Me segue no TikTok",
    subtitulo: "@jackaoh",
    url: "https://www.tiktok.com/@jackaoh",
    icone: "tiktok",
    destaque: true,
  },
  {
    titulo: "Canal no YouTube",
    subtitulo: "Jackovskys · lives e shorts",
    url: "https://www.youtube.com/@jackovskys",
    icone: "youtube",
  },
  {
    titulo: "Instagram de tecnologia",
    subtitulo: "@jackaohtech",
    url: "https://www.instagram.com/jackaohtech/",
    icone: "tech",
  },
  {
    titulo: "Parcerias e publicidade",
    subtitulo: "jackaobhd@gmail.com",
    url: "mailto:jackaobhd@gmail.com?subject=Parceria%20-%20Jack%C3%A3o%20Games",
    icone: "email",
  },
];

// Vídeos em destaque (carrossel). "id" é o código do vídeo (o que vem depois de /shorts/ ou de v= no link).
// vertical: true para Shorts, false para vídeos normais. Para tirar a seção, deixe a lista vazia: [].
export const videosDestaque = [
  { id: "FgViYOBwoac", titulo: "Operador com experiência 🤣", vertical: true },
  { id: "gPyQ-_F1djI", titulo: "Se eu postei é pq estou vivo", vertical: true },
  { id: "dnXrXvSRvxE", titulo: "Ela era tão especial pra mim ❤️", vertical: true },
];

// Ícones redondos no rodapé
export const sociais = [
  { nome: "Instagram", url: "https://www.instagram.com/jackaogames/", icone: "instagram" },
  { nome: "TikTok", url: "https://www.tiktok.com/@jackaoh", icone: "tiktok" },
  { nome: "YouTube", url: "https://www.youtube.com/@jackovskys", icone: "youtube" },
  { nome: "E-mail", url: "mailto:jackaobhd@gmail.com", icone: "email" },
];
