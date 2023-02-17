import { AccountInterface } from './../interfaces/account-interface';
import { ButtonsController } from './../functionalities/create_buttons';
import { locale } from "moment";

export class Account implements AccountInterface{
  description: string;
  type_account: string;
  cost: number;
  date_account: string;
  payment: Boolean;
  id?: string;

  constructor(description: string = "", type_account: string = "", cost: number = 0, date_account: string = "", payment= false){      
    this.description = description;
    this.type_account = type_account;
    this.cost = cost;
    this.date_account = date_account;
    this.payment = payment;
  }

  get infoAccount(){
    var dados = [ this.description, this.type_account, this.type_account, this.date_account, this.payment ];
    
    return dados;  
  }
  
  public static async getAccount(id: string): Promise<AccountInterface>{
    return await fetch(`http://localhost:3005/contas/${id}`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json();
        }
        throw new Error('Não foi possível encontrar a contas!')
    })
  }
  
  public static async getAccounts(): Promise<AccountInterface[]>{
    return await fetch(`http://localhost:3005/contas`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json();
        }
        throw new Error('Não foi possível encontrar as contas!')
    })
  }

  registerAccount(){
    return fetch(`http://localhost:3005/contas`, {
      method: 'POST', 
      headers: {
          'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
          description: this.description,
          type_account: this.type_account,
          cost: this.cost,
          date_account: this.date_account,
          payment: this.payment
      })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível cadastar a conta!');
    })
  }

  static async updateAccount(id: string, date_account: string, description:string, type_account:string, cost: number, payment: boolean){    
    return fetch(`http://localhost:3005/contas/${id}`, {
      method: 'PUT',
      headers: { 
          'Content-type' : 'application/json'
      },
      body: JSON.stringify({
        description:  description,
        type_account:  type_account,
        cost: cost,
        date_account:  date_account,
        payment: payment
      })
    })
    .then( resposta => {
        if(resposta.ok){ 
          location.reload();
          return resposta.json() 
        }

        throw new Error('Não foi possível detalhar um cliente')
    })
  }

  public static deleteAccount(id: string){  
    
    return fetch(`http://localhost:3005/contas/${id}`, {
        method: 'DELETE'
    })
    .then( resposta => { 
        if(resposta.ok){
          location.reload();
        }else{
          throw new Error('Não foi possível deletar a conta');
        }
    });
  }

}

