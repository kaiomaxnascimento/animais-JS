//tooltip ao passar o mouse em cima do mapa
export default function initTooltip() {
  //loop por todos os tooltip
  const tooltip = document.querySelectorAll("[data-tooltip]");

  tooltip.forEach((event) => {
    event.addEventListener("mouseover", onMouseover);
  });
  //ao passar o mouse em cima do mapa chama o elemento criado
  function onMouseover() {
    const toolTip = criarTooltip(this);
    onMouseMove.toolTip = toolTip;
    //tirar o mouse do mapa remove o elemento
    this.addEventListener("mouseleave", onMouseLeave);
    onMouseLeave.element = this;
    //elemento acompanha os eixos do mouse
    onMouseLeave.toolTip = toolTip;
    this.addEventListener("mousemove", onMouseMove);
  }
  //objeto criado para relacionar o evento de tirar o mouse do mapa
  const onMouseLeave = {
    //remover os eventos ao parar de usar os mesmos
    handleEvent() {
      this.toolTip.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };
  //objeto criado para relacionar o evento de mover o mouse em cima do mapa
  const onMouseMove = {
    handleEvent(event) {
      this.toolTip.style.top = event.pageY + 20 + "px";
      this.toolTip.style.left = event.pageX + 20 + "px";
    },
  };
  //cria o elemento para aplicar o toolTip
  function criarTooltip(element) {
    const toolTipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    toolTipBox.classList.add("tooltip");
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox);
    return toolTipBox;
  }
}
