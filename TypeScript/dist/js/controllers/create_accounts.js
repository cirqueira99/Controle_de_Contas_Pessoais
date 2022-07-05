import { ListarContas } from './list_accounts.js';
import { Conta } from './../models/accounts.js';
import { Data } from '../functionalities/datas.js';
export class ContaController {
    static criarConta(evento) {
        evento.preventDefault();
        const element_descricao = document.querySelector('[data-form-description]');
        const element_tipo = document.querySelector('[data-form-select]');
        const element_valor = document.querySelector('[data-form-money]');
        const element_data = document.querySelector('[data-form-date]');
        const descricao = element_descricao.value;
        const tipo = element_tipo.value;
        const valor_string = element_valor.value;
        const valor = parseFloat(valor_string);
        const data = element_data.value;
        const data_convertida = data.split("-")[2] + "/" + data.split("-")[1] + "/" + data.split("-")[0];
        //const data_criacao = moment(element_data.value);
        //const data = data_criacao.format('DD/MM/YYYY');
        const conta = new Conta(descricao, tipo, valor, data_convertida);
        conta.cadastrarConta();
        ListarContas.listar(Data.retornaMesAtual());
        element_descricao.value = "";
        element_tipo.value = "Selecione uma categoria...";
        element_valor.value = "";
        element_data.value = "";
    }
}
