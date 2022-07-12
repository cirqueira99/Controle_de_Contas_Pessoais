import { ListarContas } from './list_accounts.js';
import { Conta } from './../models/accounts.js';
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
        const conta = new Conta(descricao, tipo, valor, data_convertida);
        conta.cadastrarConta();
        ListarContas.listar(element_data.value.substring(0, 7));
        location.reload();
        element_descricao.value = "";
        element_tipo.value = "Selecione uma categoria...";
        element_valor.value = "";
        element_data.value = "";
    }
}
