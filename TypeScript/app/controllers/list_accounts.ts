import { Account } from "../models/accounts.js";
import { DateClass } from "../functionalities/datas.js";
import { ButtonsController } from "../functionalities/create_buttons.js";

export class ListController {

  private static createsNewLine(id: number, date_account: Date, description: string, type_account: string, cost: number, payment: boolean ): HTMLElement { // mudar para "HTMLTableElement.rows"
    const money: string = cost.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    const table_tr: HTMLTableRowElement = document.createElement('tr');
    
    const td_pay: HTMLElement = document.createElement('td');
    td_pay.classList.add('text-center');
    td_pay.classList.add('table-buttons');
    
    const td_delete: HTMLElement = document.createElement('td');
    td_delete.classList.add('text-center');
    td_delete.classList.add('table-buttons');
    
    const conteudo = 
    `
      <td>${date_account}</td>
      <td>${description}</td>
      <td>${type_account}</td>
      <td>${money}</td>
    `;

    table_tr.innerHTML = conteudo;

    payment==true ? td_pay.appendChild(ButtonsController.ButtonPaidAccount()) : td_pay.appendChild(ButtonsController.ButtonPayAccount(id));
    table_tr.appendChild(td_pay);

    td_delete.appendChild(ButtonsController.ButtonDeleteAccount(id));
    table_tr.appendChild(td_delete);

    return table_tr;
  }  

  public static async listAccounts(data_month: string){
    try {
      console.log(data_month)
      const month_input: HTMLInputElement = document.querySelector('[data-month]');
      month_input.value = data_month;
      sessionStorage.setItem('month_storage', data_month);

      const table_list: HTMLTableElement = document.querySelector('[data-table-list]');
      table_list.classList.add('border-light');
      table_list.innerHTML = "";

      const element_total: HTMLElement  = document.getElementById('v_total');
      const element_paid: HTMLElement = document.getElementById('v_pago');
      const element_pendant: HTMLElement = document.getElementById('v_pend');

      var total: number | string = 0.0;
      var paid: number | string = 0.0;
      var pendant: number | string = 0.0;

      const list_accounts: Object = await Account.getAccounts();
    
      const dates_unrepeated: Array<string> = DateClass.removesRepeatedDates(list_accounts, data_month);   
      
      dates_unrepeated.forEach( (dia: string)=>{  
        for( var [key, value] of Object.entries(list_accounts) ){
          if( value.date_account === dia ){ 
            table_list.appendChild(this.createsNewLine(value.id, value.date_account, value.description, value.type_account, value.cost, value.payment));
            
            value.payment == true? paid += value.cost : pendant += value.cost;
          }          
        }
      }) 
      
      total = paid + pendant;
      total = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      paid = paid.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      pendant = pendant.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      
      element_total.innerText = total;
      element_paid.innerText = paid;
      element_pendant.innerText = pendant;
        
      }
    catch(erro){
      console.log(erro)
    }  
  }

  public static monthPrevious(envent: Event): void{
    envent.preventDefault()
    const month_input: HTMLInputElement = <HTMLInputElement>document.querySelector('[data-month]');
    
    var month: number = parseInt( (month_input.value).split("-")[1] );
    month -= 1;
    
    const month_ant: string = (month_input.value).split("-")[0] + "-" + ("0"+month.toString()).slice(-2)
    
    ListController.listAccounts(month_ant)
  }

  public static monthNext(envent: Event): void{
    envent.preventDefault()
    const month_input: HTMLInputElement = <HTMLInputElement>document.querySelector('[data-month]');
    var month: number = parseInt( (month_input.value).split("-")[1] );
    month += 1;
    
    const month_prox: string = (month_input.value).split("-")[0] + "-" + ("0"+month.toString()).slice(-2)
  
    ListController.listAccounts(month_prox)
  }

  public static listInputMonth(envent: Event){
    envent.preventDefault()
    const month_input: HTMLInputElement = <HTMLInputElement>document.querySelector('[data-month]');
    const month_input_value: string = month_input.value;
    const month_storage: string = sessionStorage.getItem("month_string");
    
    if( month_input.value != month_storage ){
      ListController.listAccounts(month_input_value);
    }
  }
}

