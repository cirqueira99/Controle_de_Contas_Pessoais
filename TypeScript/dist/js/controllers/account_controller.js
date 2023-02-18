var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ListController } from './list_accounts.js';
import { Account } from '../models/accounts.js';
import { ModalConfirm } from '../functionalities/modal-confirm.js';
export class AccountController {
    static createNewAccount(description, type_account, cost, date_converted, date_list) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = new Account(description, type_account, cost, date_converted);
            try {
                yield account.registerAccount();
                ListController.listAccounts(date_list.substring(0, 7));
                location.reload();
            }
            catch (error) {
                console.log('error: ' + error);
            }
        });
    }
    static deleteAccount(event) {
        return __awaiter(this, void 0, void 0, function* () {
            const element = event.target;
            const id_account = element.id.slice(1);
            try {
                yield Account.deleteAccount(id_account);
            }
            catch (error) {
                console.log("error: " + error);
            }
        });
    }
    static confirmPayAccount(event) {
        const element = event.target;
        const id_account = element.id.slice(1);
        const modal = document.getElementsByClassName('modal-dialog')[0];
        const btn_yes = document.getElementsByClassName('btn-yes')[0];
        const btn_not = document.getElementsByClassName('btn-not')[0];
        ModalConfirm.modalConfirm(modal, 'Confirmar pagamento?');
        btn_yes.setAttribute('id', `c${id_account}`);
        btn_yes.addEventListener('click', AccountController.verifyAccount);
        btn_not.addEventListener('click', function () {
            modal.style.display = "none";
        });
    }
    static verifyAccount(event) {
        return __awaiter(this, void 0, void 0, function* () {
            const element = event.target;
            const id_account = element.id.slice(1);
            try {
                const account = yield Account.getAccount(id_account);
                yield Account.updateAccount(account.id, account.date_account, account.description, account.type_account, account.cost, true);
            }
            catch (error) {
                console.log("error: " + error);
            }
        });
    }
    static confirmDeleteAccout(event) {
        const element = event.target;
        const id_account = element.id.slice(1);
        const modal = document.getElementsByClassName('modal-dialog')[0];
        const btn_yes = document.getElementsByClassName('btn-yes')[0];
        const btn_not = document.getElementsByClassName('btn-not')[0];
        ModalConfirm.modalConfirm(modal, 'Confirmar exclusão?');
        btn_yes.setAttribute('id', `c${id_account}`);
        btn_yes.addEventListener('click', this.deleteAccount);
        btn_not.addEventListener('click', function () {
            modal.style.display = "none";
        });
    }
}
