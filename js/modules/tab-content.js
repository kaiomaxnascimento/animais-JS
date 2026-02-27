//conteudo Animais Fantasticos 'invisivel' e ao selecionar a img deixa o texto relacionado 'visivel'
export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  tabContent[0].classList.add("ativo");
  function ativar(section) {
    const direcao = tabContent[section].dataset.anime;
    tabContent.forEach((ativado) => {
      ativado.classList.remove("ativo");
    });
    tabContent[section].classList.add("ativo", direcao);
  }
  if (tabMenu.length && tabContent.length) {
    tabMenu.forEach((animaisMenu, index) => {
      animaisMenu.addEventListener("click", () => {
        ativar(index);
      });
    });
  }
}
