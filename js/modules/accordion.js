//no conteudo FAQ mostra e esconde o conteúdo
export default function initFaqAnimation() {
  const hideList = document.querySelectorAll("[data-anime='accordion'] dt");
  const activeClass = "ativo";
  hideList[0].classList.add(activeClass);
  hideList[0].nextElementSibling.classList.add(activeClass);
  function ativar() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }
  if (hideList.length) {
    hideList.forEach((item) => {
      item.addEventListener("click", ativar);
    });
  }
}
