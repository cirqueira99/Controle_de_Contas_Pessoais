var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Conta } from "../models/conta.js";
import { Data } from "./datas.js";
export class ListarContas {
    criarNovaLinha(conta) {
        const table_tr = document.createElement('tr');
        //table_tr.setAttribute('id', id)
        table_tr.classList.add('pointer');
        const td_pagar = document.createElement('td');
        td_pagar.classList.add('text-right');
        const td_excluir = document.createElement('td');
        return table_tr;
    }
    listar(data_mes) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const table_list = document.querySelector('[data-table-list]');
                table_list.classList.add('border-light');
                table_list.innerHTML = "";
                const element_total = document.getElementById('v_total');
                const element_pago = document.getElementById('v_pago');
                const element_pend = document.getElementById('v_pend');
                var total = 0.0;
                var pago = 0.0;
                var pend = 0.0;
                const mes_input = document.querySelector('[data-mes]');
                mes_input.value = data_mes;
                const lista = yield Conta.buscarDadosContas();
                const datasUnicas = Data.removeDatasRepetidas(lista, data_mes);
                console.log(datasUnicas);
                datasUnicas.forEach((dia) => {
                    for (var [key, value] of Object.entries(lista)) {
                        if (value.data === dia) {
                            table_list.appendChild(this.criarNovaLinha(value));
                        }
                    }
                });
            }
            catch (erro) {
                console.log(erro);
            }
        });
    }
}
