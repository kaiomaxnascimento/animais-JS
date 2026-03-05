//tooltip ao passar o mouse em cima do mapa
export default class Tooltip {
  constructor(tooltip) {
    //chamando a div que armazena o mapa
    this.tooltip = document.querySelectorAll(tooltip);
    //o this sempre vai fazer referência ao objeto definido
    //pois perdem a referência qnd adiciona um evento
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  //cria a div e atribui a ela o texto do aria-label
  //e a classe tooltip e ao usar o this faz referencia a mesma.
  criarTooltip(element) {
    const toolTipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    toolTipBox.classList.add("tooltip");
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox);
    this.toolTipBox = toolTipBox;
  }

  //faz a tooltip acompanhar o mouse
  onMouseMove(event) {
    this.toolTipBox.style.top = event.pageY + 20 + "px";
    if (event.pageX + 240 > window.innerWidth) {
      this.toolTipBox.style.left = event.pageX - 190 + "px";
    } else {
      this.toolTipBox.style.left = event.pageX + 20 + "px";
    }
  }

  //remove os eventos ao retirar o mouse do mapa
  onMouseLeave(event) {
    this.toolTipBox.remove();
    event.currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    event.currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  //cria o elemento ao colocar o mouse em cima do mapa
  //e remove ao retirar
  onMouseOver(event) {
    this.criarTooltip(event.currentTarget);
    event.currentTarget.addEventListener("mouseleave", this.onMouseLeave);
    event.currentTarget.addEventListener("mousemove", this.onMouseMove);
  }

  addTooltipsEvent() {
    this.tooltip.forEach((event) => {
      event.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltip.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
