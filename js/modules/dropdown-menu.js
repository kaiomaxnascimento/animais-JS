//menu vertical adicional "sobre" entre o menu principal
import outsideClick from "./outside-click.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    //pega o local com os links do menu
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    //se no segundo parametro não definir nada
    //por padrão sera: ["touchstart", "click"]
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.activeClass = "active";
    //o this sempre vai fazer referência ao objeto definido
    //pois perdem a referência qnd adiciona um evento
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  //ativa o dropdownmenu e adiciona
  //a funcao que observa o clique fora dele (outsideClick)
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  //adiciona os eventos ao dropdownmenu
  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
