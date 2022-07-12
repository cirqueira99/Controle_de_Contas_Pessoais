import { ListController } from './list_accounts.js';
import { Account } from '../models/accounts.js';
export class AccountController {
  public static createNewAccount(description: string, type_account:string, cost: number, date_converted: string, date_list: string): void{    

    const account: Account = new Account(description, type_account, cost, date_converted)
    account.registerAccount();    
    
    ListController.listAccounts( date_list.substring(0, 7) );
    location.reload()
    
  }

  public static confirmPayAccount(event: Event): void{
    const button_element: HTMLButtonElement = <HTMLButtonElement>event.target;
    const id: string = button_element.id;

    var result = confirm("Você realmente deseja PAGAR essa conta?");
    
    if(result == true){ Account.updateAccount(id.substring(1)); }        
  }

  public static confirmDeleteAccout(event: Event){
    const button_element: HTMLButtonElement = <HTMLButtonElement>event.target;
    const id: string = button_element.id;

    var result = confirm("Você realmente deseja EXCLUIR essa conta?");

    if(result == true){
      Account.deleteAccount(id.substring(1));
    }
  }
}