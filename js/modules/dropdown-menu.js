//menu vertical adicional "sobre" entre o menu principal
import outsideClick from "./outside-click.js";

export default function initDropDown() {
  const dropDownMenus = document.querySelectorAll("[data-dropdown]");
  dropDownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle("active");
    //o certo seria .add se os links fucionassem
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }
}
