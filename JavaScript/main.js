import { criarConta } from "./componentes/criar_conta.js";
import { listarContas } from "./componentes/listar_contas.js";
import { Datas } from "./componentes/datas.js"

const botao_adiciona = document.querySelector('[data-form-button]');
const seta_prox = document.querySelector('[data-seta-prox]');
const seta_ant = document.querySelector('[data-seta-ant]');
const input_mes = document.querySelector('[data-mes]');


botao_adiciona.addEventListener('click', criarConta);
seta_ant.addEventListener('click', Datas.mesAnt);
seta_prox.addEventListener('click', Datas.mesProx);
input_mes.addEventListener('mouseout', Datas.novaListagemMes)

const mes_valor = moment().format('YYYY-MM');
sessionStorage.setItem('mes_storage', mes_valor);

listarContas(mes_valor);


