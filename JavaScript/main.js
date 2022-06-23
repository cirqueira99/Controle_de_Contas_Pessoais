import { criarConta } from "./componentes/create_accounts.js";
import { Listar } from "./componentes/list_accounts.js";
import { Form } from "./componentes/form_controller.js"

const botao_adiciona = document.querySelector('[data-form-button]');
const seta_prox = document.querySelector('[data-seta-prox]');
const seta_ant = document.querySelector('[data-seta-ant]');
// const input_mes = document.querySelector('[data-mes]');
const input_mes = document.querySelector('[data-monthsearch-button]');

botao_adiciona.addEventListener('click', criarConta);
seta_ant.addEventListener('click', Listar.mesAnt);
seta_prox.addEventListener('click', Listar.mesProx);
input_mes.addEventListener('click', Listar.listarInputMes)

const element_tipo = document.querySelector('[data-form-select]');
element_tipo.addEventListener('blur', Form.changeStyle)

const mes_valor = moment().format('YYYY-MM');
sessionStorage.setItem('mes_storage', mes_valor);



Listar.listarContas(mes_valor);

