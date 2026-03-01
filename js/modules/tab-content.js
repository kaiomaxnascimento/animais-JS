//conteudo Animais Fantasticos 'invisivel' e ao selecionar a img deixa o texto relacionado 'visivel'
export default class TabNav {
  constructor(menu, content) {
    //seleciona as imagens e o texto
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  //remove toda classe ativo e coloca no proximo que eu clickar
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    //pega o valor do data-anime e 'ativo' e coloca em class para manipular no css
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  //para cada imagem adicione o click e faça a funcao a cima referente ao index
  addTabNavEvent() {
    this.tabMenu.forEach((animaisMenu, index) => {
      animaisMenu.addEventListener("click", () => this.activeTab(index));
    });
  }
  init() {
    //inicie a funcao só se existir imagem e texto
    if (this.tabMenu.length && this.tabContent.length) {
      //deixe o primeiro ativado
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}
