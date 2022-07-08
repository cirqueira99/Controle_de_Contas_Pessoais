var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Conta } from "../models/accounts.js";
import { Data } from "../functionalities/datas.js";
import { Botao } from "../functionalities/create_buttons.js";
export class ListarContas {
    static criarNovaLinha(id, data, descricao, tipo, valor, pagamento) {
        const money = valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        const table_tr = document.createElement('tr');
        const td_pagar = document.createElement('td');
        td_pagar.classList.add('text-center');
        td_pagar.classList.add('table-buttons');
        const td_excluir = document.createElement('td');
        td_excluir.classList.add('text-center');
        td_excluir.classList.add('table-buttons');
        const conteudo = `
      <th style="with: 15%;" class="text-center" scope="row">${data}</th>
      <td style="with: 25%; class="description">${descricao}</td>
      <td style="with: 20%;">${tipo}</td>
      <td style="with: 20%;" class="text-center">${money}</td>
    `;
        table_tr.innerHTML = conteudo;
        pagamento == true ? td_pagar.appendChild(Botao.BotaoContaPaga()) : td_pagar.appendChild(Botao.BotaoPagarConta(id));
        table_tr.appendChild(td_pagar);
        td_excluir.appendChild(Botao.BotaoDeleta(id));
        table_tr.appendChild(td_excluir);
        return table_tr;
    }
    static listar(data_mes) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(data_mes);
                const mes_input = document.querySelector('[data-mes]');
                mes_input.value = data_mes;
                sessionStorage.setItem('mes_storage', data_mes);
                const table_list = document.querySelector('[data-table-list]');
                table_list.classList.add('border-light');
                table_list.innerHTML = "";
                const element_total = document.getElementById('v_total');
                const element_pago = document.getElementById('v_pago');
                const element_pend = document.getElementById('v_pend');
                var total = 0.0;
                var pago = 0.0;
                var pend = 0.0;
                const lista_contas = yield Conta.buscarDadosContas();
                const datasUnicas = Data.removeDatasRepetidas(lista_contas, data_mes);
                datasUnicas.forEach((dia) => {
                    for (var [key, value] of Object.entries(lista_contas)) {
                        if (value.data === dia) {
                            table_list.appendChild(this.criarNovaLinha(value.id, value.data, value.descricao, value.tipo, value.valor, value.pagamento));
                            value.pagamento == true ? pago += value.valor : pend += value.valor;
                        }
                    }
                });
                total = pago + pend;
                total = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
                pago = pago.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
                pend = pend.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
                element_total.innerText = total;
                element_pago.innerText = pago;
                element_pend.innerText = pend;
            }
            catch (erro) {
                console.log(erro);
            }
        });
    }
    static mesAnt(envent) {
        envent.preventDefault();
        const mes_input = document.querySelector('[data-mes]');
        var mes = parseInt((mes_input.value).split("-")[1]);
        mes -= 1;
        const mes_ant = (mes_input.value).split("-")[0] + "-" + ("0" + mes.toString()).slice(-2);
        ListarContas.listar(mes_ant);
    }
    static mesProx(envent) {
        envent.preventDefault();
        const mes_input = document.querySelector('[data-mes]');
        var mes = parseInt((mes_input.value).split("-")[1]);
        mes += 1;
        const mes_prox = (mes_input.value).split("-")[0] + "-" + ("0" + mes.toString()).slice(-2);
        ListarContas.listar(mes_prox);
    }
    static listarImputMes(envent) {
        envent.preventDefault();
        const mes_input = document.querySelector('[data-mes]');
        const mes_input_value = mes_input.value;
        const mes_storage = sessionStorage.getItem("mes_string");
        if (mes_input.value != mes_storage) {
            ListarContas.listar(mes_input_value);
        }
    }
}
