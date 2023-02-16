import { AccountController } from "../controllers/account_controller.js";

export class ButtonsController{  
  
  public static ButtonPayAccount(id: number): HTMLButtonElement{
    const btnPay: HTMLButtonElement = <HTMLButtonElement>document.createElement('button');
    btnPay.setAttribute('type', 'button');
    btnPay.setAttribute('id', 'p'+id);
    btnPay.classList.add('btn');
    btnPay.classList.add('btn-pay');
    btnPay.innerText = 'pagar';
    btnPay.style.fontSize = "15px";
    btnPay.addEventListener('click', AccountController.confirmPayAccount);
    
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
     
    const btn_span: HTMLSpanElement = document.createElement('span');
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
    btnDelete.style.fontSize = "15px";
    btnDelete.innerText = 'excluir';
    btnDelete.addEventListener('click', AccountController.confirmDeleteAccout);
  
    return btnDelete;
  }
}