//chama uma API externa com informação de Animais
import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  //cria a div contendo classe e o total de animais
  //referente ao Json selecionado
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`;
    return div;
  }

  //aplica a funcao acima de criar a div
  //preenchendo cada animal
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  //ativa a animação dos numeros de cada animal criada no anima-numeros
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  //puxa os animais atravez de um arquivo JSON
  //e cria cada animal ultilizando o criarAnimais
  async function criarAnimais() {
    try {
      //Fetch, espera a resposta e transforma em JSON
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      //após a transformação de JSON, ativa as funções
      //para preencher e animar os números
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais();
}
