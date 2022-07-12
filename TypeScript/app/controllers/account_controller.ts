import { ListController } from './list_accounts.js';
import { Account } from '../models/accounts.js';
import { DateClass } from '../functionalities/datas.js'; 
export class AccountController {
  public static createNewAccount(evento: Event): void{
    evento.preventDefault();  

    const element_description: HTMLInputElement = <HTMLInputElement>document.querySelector('[data-form-description]');  
    const element_type_account: HTMLSelectElement = <HTMLSelectElement>document.querySelector('[data-form-select]');
    const element_cost: HTMLInputElement = <HTMLInputElement>document.querySelector('[data-form-money]');
    const elemnet_date_account: HTMLInputElement = <HTMLInputElement>document.querySelector('[data-form-date]');  

    const description: string = element_description.value;
    const type_account: string = element_type_account.value;
    const cost_string: string | number = element_cost.value;
    const cost = parseFloat(cost_string);
    const data: string = elemnet_date_account.value
    const date_converted: string = data.split("-")[2]+"/"+data.split("-")[1]+"/"+data.split("-")[0];

    const account: Account = new Account(description, type_account, cost, date_converted)
    account.registerAccount();    
    
    ListController.listAccounts( elemnet_date_account.value.substring(0, 7) );
    location.reload()

    element_description.value = "";
    element_type_account.value = "Selecione uma categoria...";
    element_cost.value = "";
    elemnet_date_account.value = "";
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