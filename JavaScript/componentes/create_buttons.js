import { deletarConta } from "./delet_accounts.js"
import { atualizarConta } from "./update_accounts.js";


const BotaoDeleta = () => { 
  const botaoDeleta = document.createElement('img');
  botaoDeleta.setAttribute('src', './imgs/lixeira.png');
  botaoDeleta.classList.add('img__lixeira');
 
  botaoDeleta.addEventListener('click', deletarConta);

  return botaoDeleta;
}

const PagarConta = (evento) => {
  const botao = evento.target;
  const id = botao.parentElement.parentElement.id;
  const table_td = botao.parentElement;
  
  atualizarConta(id);

}


const BotaoPagarConta = () => {
  const botaoPagar = document.createElement('button');
  botaoPagar.setAttribute('type', 'button')
  botaoPagar.setAttribute('id', 'table_butpagar')
  botaoPagar.classList.add('btn');

  botaoPagar.innerText = 'pagar';
  botaoPagar.classList.add('btn-success');
  botaoPagar.addEventListener('click', PagarConta);

    
  return botaoPagar;  
}

const BotaoContaPaga = () => {
  const botaoPago = document.createElement('button');
  botaoPago.setAttribute('type', 'button')
  botaoPago.setAttribute('id', 'table_butpagar')
  botaoPago.classList.add('btn');

  const but_span = document.createElement('span');
  but_span.innerHTML = `<i class='fas fa-check'>`;

  botaoPago.appendChild(but_span);
  botaoPago.classList.add('btn-info');
  botaoPago.disabled = "true"

  return botaoPago;
}

export const Botao = {
  BotaoDeleta,
  BotaoPagarConta,
  BotaoContaPaga
}