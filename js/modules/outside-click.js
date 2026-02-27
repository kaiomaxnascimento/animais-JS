//funcao de clickar fora do elemento e fechar o mesmo
//element = o local que se clickar nao vai fazer nada
//events = são os eventos de click, touchstart ou qualquer outro dentro de array que vc colocar
//callback a funcao q vc quer aplicar ao clickar fora do element
export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
    });
    element.setAttribute(outside, "");
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }
}
