import { AccountController } from '../controllers/account_controller.js';
import { ListController } from "../controllers/list_accounts.js";



export function startElementsPage() {
  
  const btn_add_NewAccount: HTMLElement = <HTMLButtonElement>document.querySelector('[data-form-add]');
  btn_add_NewAccount.addEventListener('click', AccountController.createNewAccount);
  
  const arrow_previus: HTMLElement = <HTMLSpanElement>document.querySelector('[data-seta-ant]');
  arrow_previus.addEventListener('click', ListController.monthPrevious);
  
  const arrow_next: HTMLSpanElement = document.querySelector('[data-seta-prox]');
  arrow_next.addEventListener('click', ListController.monthNext);
  
  
  const btn_search_month: HTMLElement = <HTMLInputElement>document.querySelector('[data-monthsearch-button]');
  btn_search_month.addEventListener('click', ListController.listInputMonth)

  const form_select = document.querySelector('[data-form-select]');
  form_select.addEventListener('focus', function(event: any){
    const element: HTMLElement = <HTMLInputElement>event.target;
    element.style.color = 'rgb(0, 238, 255)';

    const label_select:HTMLElement = <HTMLLabelElement>document.getElementById('label_tipo'); 
    label_select.style.display = 'block'
  })
  
  
  const form_date = document.querySelector('[data-form-date]');
  form_date.addEventListener('focus', function(event: any){
    const element: HTMLInputElement = event.target;
    element.style.color = 'rgb(0, 238, 255)';

    const label_date: HTMLElement = document.getElementById('label_date');
    label_date.style.display = 'block'
  })

  const button_scroll: HTMLElement = <HTMLButtonElement>document.getElementById('bak-to-top');
  button_scroll.addEventListener('click', function(){
    window.scrollTo(0,0)
  });

  const modal: HTMLElement = <HTMLDivElement>document.getElementsByClassName("div__form")[0];
  const btn_newRegister: HTMLElement = <HTMLButtonElement>document.getElementsByClassName("btn-register")[0];
  const span: HTMLElement = <HTMLSpanElement>document.getElementsByClassName("close__form")[0];

  btn_newRegister.addEventListener('click', function() {
    modal.style.display = "flex";
  })

  span.addEventListener('click', function() {
    modal.style.display = "none";
  })

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}