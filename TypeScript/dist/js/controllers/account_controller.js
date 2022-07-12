import { ListController } from './list_accounts.js';
import { Account } from '../models/accounts.js';
export class AccountController {
    static createNewAccount(description, type_account, cost, date_converted, date_list) {
        const account = new Account(description, type_account, cost, date_converted);
        account.registerAccount();
        ListController.listAccounts(date_list.substring(0, 7));
        location.reload();
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
