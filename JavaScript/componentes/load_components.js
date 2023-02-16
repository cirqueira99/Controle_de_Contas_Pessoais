import { ListController} from "./list_accounts.js";
import { Valid } from "./valid_form.js"


export const startElementsPage = () => { 
  const btn_add_NewAccount = document.querySelector('[data-form-add]'); 
  btn_add_NewAccount.addEventListener('click', Valid.validForms)  
  
  const form_description = document.querySelector('[data-form-description]'); 
  form_description.addEventListener('blur', Valid.validInput)  
  
  const form_select = document.querySelector('[data-form-select]');
  form_select.addEventListener('focus', function(evento){
    const element = evento.target;
    element.style.color = 'rgb(0, 238, 255)';
    
    const label_select = document.getElementById('label_tipo'); 
    label_select.style.display = 'block'
  }
  );
  form_select.addEventListener('blur', Valid.validInput);
  
  const form_money = document.querySelector('[data-form-money]'); 
  form_money.addEventListener('blur', Valid.validInput)
  
  const form_date = document.querySelector('[data-form-date]');
  form_date.addEventListener('focus', function(evento){
    const element = evento.target;
    element.style.color = 'rgb(0, 238, 255)';
    
    const label_date = document.getElementById('label_date');
    label_date.style.display = 'block'
  }  
  ); 
  form_date.addEventListener('blur', Valid.validInput);
  
  const arrow_previus = document.querySelector('[data-seta-ant]');
  arrow_previus.addEventListener('click', ListController.monthPrevious);
  
  const arrow_next = document.querySelector('[data-seta-prox]');
  arrow_next.addEventListener('click', ListController.monthNext);
  
  const btn_search_month = document.querySelector('[data-monthsearch-button]');
  btn_search_month.addEventListener('click', ListController.listInputMonth)


  const button_scroll = document.getElementsByClassName('btn-scroll')[0];
  button_scroll.addEventListener('click', function(){
    window.scrollTo(0,0)
  })

  const modal = document.getElementsByClassName("div__form")[0];
  const btn_newRegister = document.getElementsByClassName("btn-newAccount")[0];
  const span = document.getElementsByClassName("close__form")[0];

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





