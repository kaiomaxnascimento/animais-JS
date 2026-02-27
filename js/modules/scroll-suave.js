//Scroll suave ao clickar nos links interno
export default function initScrollSuave() {
  const linksInternosScroll = document.querySelectorAll(
    "[data-menu='suave'] a[href^='#']",
  );
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  linksInternosScroll.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();
