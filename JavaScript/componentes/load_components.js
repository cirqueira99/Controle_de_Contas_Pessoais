import { Listar } from "./list_accounts.js";
import { createAccout } from "./create_accounts.js"
import { Form } from "./form_controller.js"


export const carregaElemtosPagina = () => { 
  const botao_adiciona = document.querySelector('[data-form-button]'); 
  botao_adiciona.addEventListener('click', createAccout);
  
  const seta_ant = document.querySelector('[data-seta-ant]');
  seta_ant.addEventListener('click', Listar.mesAnt);
  
  const seta_prox = document.querySelector('[data-seta-prox]');
  seta_prox.addEventListener('click', Listar.mesProx);
  

  const input_mes = document.querySelector('[data-monthsearch-button]');
  input_mes.addEventListener('click', Listar.listarInputMes)


  const form_select = document.querySelector('[data-form-select]');
  form_select.addEventListener('focus', Form.changeStyleSelect);
  
  const form_date = document.querySelector('[data-form-date]');
  form_date.addEventListener('focus', Form.changeStyleDate)
  
  
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





