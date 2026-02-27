//login abre o modal e fecha ao clickar no X ou fora do modal
export default function initModal() {
  const buttAbrir = document.querySelector('[data-modal="abrir"]');
  const buttFechar = document.querySelector('[data-modal="fechar"]');
  const contModal = document.querySelector('[data-modal="container"]');
  function toggleCont(event) {
    event.preventDefault();
    contModal.classList.toggle("ativo");
  }

  function clickForaModal(event) {
    if (event.target === this) {
      toggleCont(event);
    }
  }
  if (buttAbrir && buttFechar && contModal) {
    buttAbrir.addEventListener("click", toggleCont);
    buttFechar.addEventListener("click", toggleCont);
    contModal.addEventListener("click", clickForaModal);
  }
}
