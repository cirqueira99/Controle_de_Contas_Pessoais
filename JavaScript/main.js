import { criarConta } from "./componentes/create_accounts.js";
import { Listar } from "./componentes/list_accounts.js";
import { Datas } from "./componentes/datas.js"

const botao_adiciona = document.querySelector('[data-form-button]');
const seta_prox = document.querySelector('[data-seta-prox]');
const seta_ant = document.querySelector('[data-seta-ant]');
const input_mes = document.querySelector('[data-mes]');


//botao_adiciona.addEventListener('click', criarConta);
seta_ant.addEventListener('click', Listar.mesAnt);
seta_prox.addEventListener('click', Listar.mesProx);
input_mes.addEventListener('blur', Listar.listarInputMes)

const mes_valor = moment().format('YYYY-MM');
sessionStorage.setItem('mes_storage', mes_valor);

Listar.listarContas(mes_valor);


