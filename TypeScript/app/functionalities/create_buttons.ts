import { Conta } from "../models/accounts.js"; 

export class Botao{
  public static BotaoDeleta(id: string): HTMLButtonElement { 
    const botaoDeleta: HTMLButtonElement = document.createElement('button');
    botaoDeleta.setAttribute('type', 'button')
    botaoDeleta.setAttribute('id', id);
    botaoDeleta.classList.add('btn');
    botaoDeleta.classList.add('table_butpagar');
  
    const but_span: HTMLSpanElement = document.createElement('span');
    but_span.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  
    botaoDeleta.appendChild(but_span);
    botaoDeleta.classList.add('btn-secondary');
   
    
    botaoDeleta.addEventListener('click', Conta.deletarConta);
  
    return botaoDeleta;
  }
  
  public static PagarConta(evento: Event): void{
    const botao: HTMLButtonElement = <HTMLButtonElement>evento.target;
    const id: string = botao.id
    
    Conta.atualizarConta(id); 
  }
  
  
  public static BotaoPagarConta(id: string): HTMLButtonElement{
    const botaoPagar: HTMLButtonElement = document.createElement('button');
    botaoPagar.setAttribute('type', 'button')
    botaoPagar.setAttribute('id', id)
    botaoPagar.classList.add('btn');
  
    botaoPagar.innerText = 'pagar';
    botaoPagar.classList.add('btn-success');
    botaoPagar.classList.add('table_butpagar');
    botaoPagar.addEventListener('click', this.PagarConta);
  
      
    return botaoPagar;  
  }
  
  public static BotaoContaPaga(): HTMLButtonElement{
    const botaoPago: HTMLButtonElement = document.createElement('button');
    botaoPago.setAttribute('type', 'button')
    botaoPago.classList.add('btn');
    botaoPago.classList.add('table_butpagar');
  
    const but_span: HTMLSpanElement = document.createElement('span');
    but_span.innerHTML = `<i class='fas fa-check'>`;
  
    botaoPago.appendChild(but_span);
    botaoPago.classList.add('btn-info');
    botaoPago.disabled = true
  
    return botaoPago;
  }
}