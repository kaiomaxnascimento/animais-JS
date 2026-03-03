//login abre o modal e fecha ao clickar no X ou fora do modal
export default class Modal {
  constructor(buttAbrir, buttFechar, contModal) {
    //seleciono o botao que vai abrir, fechar e
    //o container do modal
    this.buttAbrir = document.querySelector(buttAbrir);
    this.buttFechar = document.querySelector(buttFechar);
    this.contModal = document.querySelector(contModal);
    //o this sempre vai fazer referência ao objeto definido
    //pois perdem a referência qnd adiciona um evento
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickForaModal = this.clickForaModal.bind(this);
  }
  //adiciona 'ativo' na classe
  //se não tiver e remove se tiver
  toggleModal() {
    this.contModal.classList.toggle("ativo");
  }
  //previne o evento do '<a>' e
  //chama a funcao a cima
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }
  //verifica se onde eu cliquei é igual
  //ao container do modal e ativa o toggleModal
  clickForaModal(event) {
    if (event.target === this.contModal) {
      this.toggleModal();
    }
  }
  //adiciona evento de click aos parametros
  //obs: faz perder a referência do this.
  addModalEvents() {
    this.buttAbrir.addEventListener("click", this.eventToggleModal);
    this.buttFechar.addEventListener("click", this.eventToggleModal);
    this.contModal.addEventListener("click", this.clickForaModal);
  }
  //inicia a funcao se existir os 3 parametros
  init() {
    if (this.buttAbrir && this.buttFechar && this.contModal) {
      this.addModalEvents();
    }
    return this;
  }
}
