import { deletarConta } from "./delet_accounts.js"
import { atualizarConta } from "./update_accounts.js";



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
  botaoPago.setAttribute('id', 'table_butpago')
  botaoPago.classList.add('btn');
  botaoPago.classList.add('btn-info');
  botaoPago.style.backgroundColor = "transparent"
  botaoPago.style.border = "transparent"
  botaoPago.disabled = "true"

  const but_span = document.createElement('span');
  but_span.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;

  botaoPago.appendChild(but_span);

  return botaoPago;
}

const BotaoDeleta = () => { 
  const botaoDeleta = document.createElement('button');
  botaoDeleta.setAttribute('type', 'button')
  botaoDeleta.setAttribute('id', 'table_butdelete')
  botaoDeleta.classList.add('btn');
  botaoDeleta.classList.add('btn-danger');
  botaoDeleta.style.backgroundColor = "rgb(205 86 97)"
  botaoDeleta.style.color = "white"
  botaoDeleta.innerText = 'excluir';
  botaoDeleta.addEventListener('click', deletarConta);

  return botaoDeleta;
}

export const Botao = {
  BotaoDeleta,
  BotaoPagarConta,
  BotaoContaPaga
}