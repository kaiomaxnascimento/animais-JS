//mostra o horário de funcionamento
export default function initFuncionamento() {}

const funcionamento = document.querySelector("[data-semana]");
const diaSemana = funcionamento.dataset.semana.split(",").map(Number);
const horaDia = funcionamento.dataset.horario.split(",").map(Number);

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horaAgora = dataAgora.getHours();

const diaAberto = diaSemana.indexOf(diaAgora);
const horaAberto = horaAgora >= horaDia[0] && horaAgora < horaDia[1];

if (horaAberto && diaAberto) funcionamento.classList.add("aberto");
