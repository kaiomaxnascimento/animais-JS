//conteudo fica invisivel até dar scroll ao local e ser revelado
export default function initAnimationScroll() {
  const sectionScroll = document.querySelectorAll("[data-anime='scroll']");
  function animaScroll() {
    const windowMetade = window.innerHeight * 0.7;
    sectionScroll.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionVisible = sectionTop - windowMetade < 0;
      if (sectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }
  if (sectionScroll.length) {
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
