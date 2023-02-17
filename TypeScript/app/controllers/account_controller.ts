import { AccountInterface } from './../interfaces/account-interface';
import { ListController } from './list_accounts.js';
import { Account } from '../models/accounts.js';
import { ModalConfirm } from '../functionalities/modal-confirm.js';
export class AccountController {
  
  public static async createNewAccount(description: string, type_account:string, cost: number, date_converted: string, date_list: string){    
    const account: Account = new Account(description, type_account, cost, date_converted);
    
    try {
      await account.registerAccount();    
      ListController.listAccounts( date_list.substring(0, 7) );
      location.reload();    
    } catch (error) {
      console.log('error: ' + error);
    }
  }

  public static async deleteAccount(event: any) {
    const id_account: string = event.target.id.slice(1);   
    
    try {
      await Account.deleteAccount(id_account);
    } catch (error) {
      console.log("error: " + error);
    }
  }

  public static confirmPayAccount(event: any): void {
    const id_account: string = event.target.id.slice(1);   
    const modal: HTMLElement = <HTMLDivElement>document.getElementsByClassName('modal-dialog')[0];
    const btn_yes: HTMLElement = <HTMLButtonElement>document.getElementsByClassName('btn-yes')[0];
    const btn_not: HTMLElement = <HTMLButtonElement>document.getElementsByClassName('btn-not')[0];

    ModalConfirm.modalConfirm(modal, 'Confirmar exclusão?');
    
    btn_yes.setAttribute('id', `c${id_account}`);
    btn_yes.addEventListener('click', AccountController.verifyAccount);

    btn_not.addEventListener('click', function() {
      modal.style.display = "none";
    });
  }
    
  public static async verifyAccount(event: any){
    const id_account: string = event.target.id.slice(1);

    try { 
      const account: AccountInterface = await Account.getAccount(id_account);
      await Account.updateAccount(account.id, account.date_account, account.description, account.type_account, account.cost, true);
    }
    catch(error){
      console.log("error: " + error);
    }  
  }

  public static confirmDeleteAccout(event: any): void{
    const id_account: string = event.target.id.slice(1);   
    const modal: HTMLElement = <HTMLDivElement>document.getElementsByClassName('modal-dialog')[0];
    const btn_yes: HTMLElement = <HTMLButtonElement>document.getElementsByClassName('btn-yes')[0];
    const btn_not: HTMLElement = <HTMLButtonElement>document.getElementsByClassName('btn-not')[0];

    ModalConfirm.modalConfirm(modal, 'Confirmar exclusão?');
    
    btn_yes.setAttribute('id', `c${id_account}`);
    btn_yes.addEventListener('click', this.deleteAccount);

    btn_not.addEventListener('click', function() {
      modal.style.display = "none";
    });
  }
}