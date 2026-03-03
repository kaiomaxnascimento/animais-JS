//Scroll suave ao clickar nos links interno
export default class ScrollSuave {
  constructor(links, options) {
    //pegas todos os links internos que vc selecionar
    this.linksInternosScroll = document.querySelectorAll(links);
    //se n for colocado nada no segundo parametro por padrão
    //o scroll vai ser { behavior: "smooth", block: "start" }
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }
    //sempre o this.scrollToSection vai fazer referencia ao this.scrollToSection
    this.scrollToSection = this.scrollToSection.bind(this);
  }
  scrollToSection(event) {
    //previne o padrão
    event.preventDefault();
    //seleciona o atributo do href do link clickado
    const href = event.currentTarget.getAttribute("href");
    //seleciona a seção referente ao atributo referenciado pela ID
    const section = document.querySelector(href);
    //adiciona o scroll suave com os valores de option
    section.scrollIntoView(this.options);
  }
  //adiciona a funcao a cima para cada link
  addLinkEvent() {
    this.linksInternosScroll.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }
  //inicia a funcao se tiver algo linkado
  init() {
    if (this.linksInternosScroll.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
