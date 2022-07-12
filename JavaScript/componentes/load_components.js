import { ListController} from "./list_accounts.js";
import { AccountController } from "./account_controller.js"


export const startElementsPage = () => { 
  const btn_add_NewAccount = document.querySelector('[data-form-add]'); 
  btn_add_NewAccount.addEventListener('click', AccountController.createAccount);
  
  const arrow_previus = document.querySelector('[data-seta-ant]');
  arrow_previus.addEventListener('click', ListController.monthPrevious);
  
  const arrow_next = document.querySelector('[data-seta-prox]');
  arrow_next.addEventListener('click', ListController.monthNext);
  

  const btn_search_month = document.querySelector('[data-monthsearch-button]');
  btn_search_month.addEventListener('click', ListController.listInputMonth)


  const form_select = document.querySelector('[data-form-select]');
    form_select.addEventListener('focus', function(evento){
      const element = evento.target;
      element.style.color = 'rgb(0, 238, 255)';
    
      const label_select = document.getElementById('label_tipo'); 
      label_select.style.display = 'block'
    }
  );
  
  const form_date = document.querySelector('[data-form-date]');
    form_date.addEventListener('focus', function(evento){
      const element = evento.target;
      element.style.color = 'rgb(0, 238, 255)';
  
      const label_date = document.getElementById('label_date');
      label_date.style.display = 'block'
    }  
  );
  
  
  
  const button_scroll = document.getElementById('bak-to-top');
  button_scroll.addEventListener('click', function(){
    window.scrollTo(0,0)
  })

  const modal = document.getElementsByClassName("div__form")[0];
  const btn_newRegister = document.getElementsByClassName("btn-register")[0];
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





