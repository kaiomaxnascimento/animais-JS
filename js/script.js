import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tab-content.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropDown from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import initFetchBtc from "./modules/fetch-btc.js";
import initAnimationScroll from "./modules/scroll-animacao.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section",
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);
modal.init();

const toolTip = new Tooltip("[data-tooltip]");
toolTip.init();

initDropDown();
initMenuMobile();
initFuncionamento();
initFetchBtc();
initAnimationScroll();

fetchAnimais("./animaisapi.json", ".numeros-grid");

//ativar e desativar classe ativo ao click dos links internos
// function atvLinks() {
//   const linksInternos = document.querySelectorAll('a[href^="#"]');
//   function ativo(event) {
//     event.preventDefault();
//     linksInternos.forEach((link) => {
//       link.classList.remove("ativo");
//     });
//     event.currentTarget.classList.add("ativo");
//   }
//   linksInternos.forEach((linksAtivos) => {
//     linksAtivos.addEventListener("click", ativo);
//   });
// }
// atvLinks();

//ao apertar T aumenta todo o texto do site
// function initTextUp() {
//   function handleText(event) {
//     const textoUp = document.documentElement;
//     if (event.key === "t") {
//       textoUp.classList.toggle("textoUp");
//     }
//   }
//   window.addEventListener("keydown", handleText);
// }
// initTextUp();
