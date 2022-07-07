import { ListarContas } from './controllers/list_accounts.js';
import { ContaController } from './controllers/create_accounts.js';
import { Data } from './functionalities/datas.js';
//import * as moment from 'moment';
//const moment = require('moment');
//const mes: string = moment().format('YYYY-MM');
const botao_adiciona = document.querySelector('[data-form-button]');
const seta_ant = document.querySelector('[data-seta-ant]');
const seta_prox = document.querySelector('[data-seta-prox]');
const input_mes = document.querySelector('[data-mes]');
botao_adiciona.addEventListener('click', ContaController.criarConta);
seta_ant.addEventListener('click', ListarContas.mesAnt);
seta_prox.addEventListener('click', ListarContas.mesProx);
input_mes.addEventListener('blur', ListarContas.listarImputMes);
const form_select = document.querySelector('[data-form-select]');
form_select.addEventListener('blur', function (event) {
    const element = event.target;
    element.style.color = 'white';
});
var mes_storage = sessionStorage.getItem('mes_storage');
console.log(mes_storage);
if (mes_storage == null) {
    mes_storage = Data.retornaMesAtual();
    sessionStorage.setItem('mes_storage', mes_storage);
}
const button_scroll = document.getElementById('bak-to-top');
button_scroll.addEventListener('click', function () {
    window.scrollTo(0, 0);
});
ListarContas.listar(mes_storage);
window.addEventListener("scroll", (event) => {
    var scroll_y = window.scrollY;
    scroll_y < 399 ? document.getElementById('bak-to-top').style.display = 'none' : document.getElementById('bak-to-top').style.display = 'block';
});
