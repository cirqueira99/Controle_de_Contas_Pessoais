import { CriarConta } from './controllers/create_accounts.js';
import { ListarContas } from './controllers/list_accounts.js';

//import * as moment from 'moment';
//const moment = require('moment');
//const mes: string = moment().format('YYYY-MM');

const botao_adiciona: HTMLButtonElement = document.querySelector('[data-form-button]');
const seta_prox: HTMLSpanElement = document.querySelector('[data-seta-prox]');
const seta_ant: HTMLSpanElement = document.querySelector('[data-seta-ant]');
const input_mes: HTMLInputElement = document.querySelector('[data-mes]');


const data: Date = new Date();
const ano: number = data.getFullYear();
const mes: number = data.getMonth()+1;
var mes_string: string;

(mes < 10) ? mes_string = ( ano + "-" + "0" + mes ) : mes_string = ( ano + "-" + mes );

sessionStorage.setItem('mes_storage', mes_string);

const listarContas = new ListarContas();
listarContas.listar(mes_string);

