import { ListController } from './list_accounts.js';
import { Account } from '../models/accounts.js';
export class AccountController {
    static createNewAccount(evento) {
        evento.preventDefault();
        const element_description = document.querySelector('[data-form-description]');
        const element_type_account = document.querySelector('[data-form-select]');
        const element_cost = document.querySelector('[data-form-money]');
        const elemnet_date_account = document.querySelector('[data-form-date]');
        const description = element_description.value;
        const type_account = element_type_account.value;
        const cost_string = element_cost.value;
        const cost = parseFloat(cost_string);
        const data = elemnet_date_account.value;
        const date_converted = data.split("-")[2] + "/" + data.split("-")[1] + "/" + data.split("-")[0];
        const account = new Account(description, type_account, cost, date_converted);
        account.registerAccount();
        ListController.listAccounts(elemnet_date_account.value.substring(0, 7));
        location.reload();
        element_description.value = "";
        element_type_account.value = "Selecione uma categoria...";
        element_cost.value = "";
        elemnet_date_account.value = "";
    }
    static confirmPayAccount(event) {
        const button_element = event.target;
        const id = button_element.id;
        var result = confirm("Você realmente deseja PAGAR essa conta?");
        if (result == true) {
            Account.updateAccount(id.substring(1));
        }
    }
    static confirmDeleteAccout(event) {
        const button_element = event.target;
        const id = button_element.id;
        var result = confirm("Você realmente deseja EXCLUIR essa conta?");
        if (result == true) {
            Account.deleteAccount(id.substring(1));
        }
    }
}
