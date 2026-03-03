//no conteudo FAQ mostra e esconde o conteúdo
export default class Accordion {
  //cria um objeto com accordionList referente a lista linkada
  //e activeClass com a string 'ativo'
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  //adiciona ou remove a classe 'ativo'
  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }
  //adiciona a funcao a cima para cada item da lista linkada
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }
  //inicia a funcao se tiver alguma lista linkada
  init() {
    if (this.accordionList.length) {
      //já deixa o primeiro item da lista ativo
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
