import { ContaController } from './../controllers/create_accounts.js';
import { ListarContas } from "../controllers/list_accounts.js";



export function startElementsPage() {
  
  const botao_adiciona: HTMLButtonElement = document.querySelector('[data-form-button]');
  const seta_ant: HTMLSpanElement = document.querySelector('[data-seta-ant]');
  const seta_prox: HTMLSpanElement = document.querySelector('[data-seta-prox]');
  const input_mes: HTMLInputElement = document.querySelector('[data-mes]');
  const form_select = document.querySelector('[data-form-select]');
  const form_date = document.querySelector('[data-form-date]');

  botao_adiciona.addEventListener('click', ContaController.criarConta);
  seta_ant.addEventListener('click', ListarContas.mesAnt);
  seta_prox.addEventListener('click', ListarContas.mesProx);
  input_mes.addEventListener('blur', ListarContas.listarImputMes);

  form_select.addEventListener('focus', function(event: any){
    const element: HTMLInputElement = event.target;
    element.style.color = 'rgb(0, 238, 255)';

    const label_select:HTMLElement = document.getElementById('label_tipo'); 
    label_select.style.display = 'block'
  })

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