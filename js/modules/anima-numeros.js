//anima os números ao ativar a classe dando scroll até o local
export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    //seleciono os numeros, o local
    //e a classe q vai ser observada
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this);
  }

  //pega uma string de numero e transforma em numero
  // e incrementa com um intervalo de zero até o valor da string
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const intervalo = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(intervalo);
      }
    }, 25 * Math.random());
  }

  //passa por cada numero de uma array e ativa a funcao acima
  animaNumeros() {
    this.numeros.forEach((numero) =>
      this.constructor.incrementarNumero(numero),
    );
  }

  //observa se o local tem a classe ativo
  //se tiver pare de observar e ative a funcao acima
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  //cria a funcao de observar e coloca a funcao a cima como parametro
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
