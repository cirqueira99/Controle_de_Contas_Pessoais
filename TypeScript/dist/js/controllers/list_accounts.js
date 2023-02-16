var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Account } from "../models/accounts.js";
import { DateClass } from "../functionalities/datas.js";
import { ButtonsController } from "../functionalities/create_buttons.js";
export class ListController {
    static createsNewLine(id, date_account, description, type_account, cost, payment) {
        const money = cost.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        const table_tr = document.createElement('tr');
        const td_pay = document.createElement('td');
        td_pay.classList.add('text-center');
        td_pay.classList.add('table-buttons');
        const td_delete = document.createElement('td');
        td_delete.classList.add('text-center');
        td_delete.classList.add('table-buttons');
        const conteudo = `
      <td>${date_account}</td>
      <td>${description}</td>
      <td>${type_account}</td>
      <td>${money}</td>
    `;
        table_tr.innerHTML = conteudo;
        payment == true ? td_pay.appendChild(ButtonsController.ButtonPaidAccount()) : td_pay.appendChild(ButtonsController.ButtonPayAccount(id));
        table_tr.appendChild(td_pay);
        td_delete.appendChild(ButtonsController.ButtonDeleteAccount(id));
        table_tr.appendChild(td_delete);
        return table_tr;
    }
    static listAccounts(data_month) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(data_month);
                const month_input = document.querySelector('[data-month]');
                month_input.value = data_month;
                sessionStorage.setItem('month_storage', data_month);
                const table_list = document.querySelector('[data-table-list]');
                table_list.classList.add('border-light');
                table_list.innerHTML = "";
                const element_total = document.getElementById('v_total');
                const element_paid = document.getElementById('v_pago');
                const element_pendant = document.getElementById('v_pend');
                var total = 0.0;
                var paid = 0.0;
                var pendant = 0.0;
                const list_accounts = yield Account.searchAccounts();
                const dates_unrepeated = DateClass.removesRepeatedDates(list_accounts, data_month);
                dates_unrepeated.forEach((dia) => {
                    for (var [key, value] of Object.entries(list_accounts)) {
                        if (value.date_account === dia) {
                            table_list.appendChild(this.createsNewLine(value.id, value.date_account, value.description, value.type_account, value.cost, value.payment));
                            value.payment == true ? paid += value.cost : pendant += value.cost;
                        }
                    }
                });
                total = paid + pendant;
                total = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
                paid = paid.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
                pendant = pendant.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
                element_total.innerText = total;
                element_paid.innerText = paid;
                element_pendant.innerText = pendant;
            }
            catch (erro) {
                console.log(erro);
            }
        });
    }
    static monthPrevious(envent) {
        envent.preventDefault();
        const month_input = document.querySelector('[data-month]');
        var month = parseInt((month_input.value).split("-")[1]);
        month -= 1;
        const month_ant = (month_input.value).split("-")[0] + "-" + ("0" + month.toString()).slice(-2);
        ListController.listAccounts(month_ant);
    }
    static monthNext(envent) {
        envent.preventDefault();
        const month_input = document.querySelector('[data-month]');
        var month = parseInt((month_input.value).split("-")[1]);
        month += 1;
        const month_prox = (month_input.value).split("-")[0] + "-" + ("0" + month.toString()).slice(-2);
        ListController.listAccounts(month_prox);
    }
    static listInputMonth(envent) {
        envent.preventDefault();
        const month_input = document.querySelector('[data-month]');
        const month_input_value = month_input.value;
        const month_storage = sessionStorage.getItem("month_string");
        if (month_input.value != month_storage) {
            ListController.listAccounts(month_input_value);
        }
    }
}
