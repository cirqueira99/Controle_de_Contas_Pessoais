import { Conta } from "../models/accounts.js"; 

export class Botao{  
  
  public static BotaoPagarConta(id: number): HTMLButtonElement{
    const botaoPagar: HTMLButtonElement = document.createElement('button');
    botaoPagar.setAttribute('type', 'button')
    botaoPagar.setAttribute('id', 'p'+id)
    botaoPagar.classList.add('btn');    
    botaoPagar.classList.add('btn-success');
    botaoPagar.classList.add('table_butpagar');
    botaoPagar.innerText = 'pagar';
    botaoPagar.style.fontSize = "15px";
    botaoPagar.addEventListener('click', Conta.confirmPayAccout);
    
    return botaoPagar;  
  }
  
  public static BotaoContaPaga(): HTMLButtonElement{
    
    const botaoPago: HTMLButtonElement = document.createElement('button');
    botaoPago.setAttribute('type', 'button')
    botaoPago.classList.add('btn');
    botaoPago.classList.add('btn-info');
    botaoPago.classList.add('table_butpago');
    botaoPago.style.backgroundColor = "transparent";
    botaoPago.style.border = "transparent";
    botaoPago.disabled = true;
     
    const but_span: HTMLSpanElement = document.createElement('span');
    but_span.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;
    
    botaoPago.appendChild(but_span);

    return botaoPago;
  }
  
  public static BotaoDeleta(id: number): HTMLButtonElement { 

    const botaoDeleta = document.createElement('button');
    botaoDeleta.setAttribute('type', 'button')
    botaoDeleta.setAttribute('id', 'd'+id)
    botaoDeleta.classList.add('btn');
    botaoDeleta.classList.add('btn-danger');
    botaoDeleta.classList.add('table_butdelete');
    botaoDeleta.style.backgroundColor = "rgb(207 121 129)"
    botaoDeleta.style.color = "white"
    botaoDeleta.style.fontSize = "15px"
    botaoDeleta.innerText = 'excluir';      
    botaoDeleta.addEventListener('click', Conta.confirmDeleteAccout);
  
    return botaoDeleta;
  }
}