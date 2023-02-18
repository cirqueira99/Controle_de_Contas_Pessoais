import { AccountController } from "../controllers/account_controller.js";

export class ButtonsController{  
  
  public static ButtonPayAccount(id: number): HTMLButtonElement{
    const btnPay: HTMLButtonElement = <HTMLButtonElement>document.createElement('button');
    btnPay.setAttribute('type', 'button');
    btnPay.setAttribute('id', 'p'+id);
    btnPay.classList.add('btn');
    btnPay.classList.add('btn-pay');
    btnPay.addEventListener('click', AccountController.confirmPayAccount);
    
    const btn_span: HTMLElement = document.createElement('span');

    btn_span.innerHTML = `
      <p id="icon-btn-pay">pagar</p>
      <i id="icon-pay"class="fa fa-money" aria-hidden="true"></i>
    `;  
    btnPay.appendChild(btn_span);

    return btnPay;  
  }
  
  public static ButtonPaidAccount(): HTMLButtonElement{
    
    const btnPaid: HTMLButtonElement = <HTMLButtonElement>document.createElement('button');
    btnPaid.setAttribute('type', 'button')
    btnPaid.classList.add('btn');
    btnPaid.classList.add('btn-paid');
    btnPaid.style.backgroundColor = "transparent";
    btnPaid.style.border = "transparent";
    btnPaid.disabled = true;
     
    const btn_span: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
    btn_span.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;
    
    btnPaid.appendChild(btn_span);

    return btnPaid;
  }
  
  public static ButtonDeleteAccount(id: number): HTMLButtonElement { 
    const btnDelete: HTMLButtonElement = <HTMLButtonElement>document.createElement('button');
    btnDelete.setAttribute('type', 'button');
    btnDelete.setAttribute('id', 'd'+id);
    btnDelete.classList.add('btn');
    btnDelete.classList.add('btn-del');
    btnDelete.style.color = "white";
    btnDelete.addEventListener('click', AccountController.confirmDeleteAccout);

    const btn_span: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');

    btn_span.innerHTML = `
      <p id="icon-btn-del">exluir</p>
      <i id="icon-del" class="fa fa-trash" aria-hidden="true"></i>
    `;
  
    btnDelete.appendChild(btn_span);
  
    return btnDelete;
  }
}