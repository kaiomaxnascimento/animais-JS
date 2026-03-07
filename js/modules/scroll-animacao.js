//conteudo fica invisivel até dar scroll ao local e ser revelado
export default class ScrollAnima {
  constructor(sectionScroll) {
    //seleciona todos os locais de interação
    this.sectionScroll = document.querySelectorAll("[data-anime='scroll']");
    //altura do window -30%
    this.windowMetade = window.innerHeight * 0.7;
    //o this sempre vai fazer referência ao objeto definido
    //pois perdem a referência qnd adiciona um evento
    this.checkDistance = this.checkDistance.bind(this);
  }

  getDistance() {
    //coloca todas as sections em uma array e passa por cada uma
    this.distance = [...this.sectionScroll].map((section) => {
      //pega a altura dela em relação ao topo do window fixo
      const offset = section.offsetTop;
      //retorna a section dentro de element e
      //a altura da tela - 30% de baixo pra cima dentro de offset
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }
  //verifica se a altura da section -30% é menor que o topo do window
  checkDistance() {
    this.distance.forEach((item) => {
      //pageYOffset altura do window
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  //inicia uma vez e depois inicia pelo scroll
  init() {
    this.getDistance();
    this.checkDistance();
    window.addEventListener("scroll", this.checkDistance);
  }

  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
