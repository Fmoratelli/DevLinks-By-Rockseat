// if(html.classList.contains('ligth')){
//   html.classList.remove('light')
// } else {
//   html.classList.add('light')
// } essa seria a funcao(logica), mas o toggle ja faz traz essa logica pronta

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // Pegar a tag img

  const img = document.querySelector("#profile img");

  // Substituir a img

  if (html.classList.contains("light")) {
    img.setAttribute("src", "/public/Assets/avatar2.png");
  } else {
    img.setAttribute("src", "/public/Assets/avatar.png");
  }
}
