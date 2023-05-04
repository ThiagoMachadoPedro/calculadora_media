const form =document.getElementById("form-atividade");

const imgAprovado = '<img src="./images/aprovado.png" alt="campo de aprovação"/>';

const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado"/>';

let linhas = '';// globalmente para não sumir quando for alterada outra linha

const atividades = [];
const notas = [];

const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';

const notaMinima =parseFloat(prompt('Digite a Nota Minima'));//aqui subistitui a variavel minima

form.addEventListener('submit', function(e){
e.preventDefault();

adicionaLinha();
atualizaTabela();
atualizarMediaFinal();



});
function adicionaLinha(){

  const inputNomeAtividade =document.getElementById("nome-atividade");
const inputNotaAtividade = document.getElementById("nota-atividade");

if(atividades.includes(inputNomeAtividade.value)){
alert(`Atividades: ${inputNomeAtividade.value} ja foi Inserida`)
}else{
  atividades.push(inputNomeAtividade.value); //push adiciona dados no array
  notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>'; //abrir linha
  linha += `<td>${inputNomeAtividade.value}</td>`;//aqui o parametro que a linha vai receber getbyID
  linha += `<td>${inputNotaAtividade.value}</td>`;
  linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado }</td>`;
  linha += '</tr>';

  linhas += linha;


}



inputNomeAtividade.value ='';
inputNomeAtividade.value ='';
}
function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;

}
function atualizarMediaFinal(){
const MediaFinal = calculaMediaFinal();
document.getElementById('media-final-valor').innerHTML = MediaFinal.toFixed(2); //toFixed()  limita casas decimais
document.getElementById('media-final-resultado').innerHTML = MediaFinal >= notaMinima ? spanAprovado : spanReprovado;



}
function calculaMediaFinal(){

  let somaNota = 0;
for(let i = 0; i < notas.length; i++){ // for em notas
  somaNota += notas[i];

}
return somaNota / notas.length ;
}
