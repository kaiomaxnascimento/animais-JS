//mostra o horário de funcionamento
export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  //pega os valores do dataset e transformar em number
  dadosFuncionamento() {
    this.diaSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horaDia = this.funcionamento.dataset.horario.split(",").map(Number);
  }

  //pega o dia e a hora de brasília
  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horaAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    //se o dia da semana é igual ao valor do dataset
    const diaAberto = this.diaSemana.indexOf(this.diaAgora);
    const horaAberto =
      this.horaAgora >= this.horaDia[0] && this.horaAgora < this.horaDia[1];
    return diaAberto && horaAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
