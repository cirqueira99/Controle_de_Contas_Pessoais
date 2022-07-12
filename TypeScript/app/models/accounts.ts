import { ButtonsController } from './../functionalities/create_buttons';
import { locale } from "moment";

export class Account{
  description: string;
  type_account: string;
  cost: number;
  date_account: string;
  payment: Boolean;

  constructor(description: string = "", type_account: string = "", cost: number = 0.00, date_account: string = ""){
    this.description = description;
    this.type_account = type_account;
    this.cost = cost;
    this.date_account = date_account;
    this.payment = false;
  }

  get infoAccount(){
    var dados = [ this.description, this.type_account, this.type_account, this.date_account, this.payment ];
    
    return dados;  
  }

  static async searchAccounts(): Promise<Object>{
    return fetch(`http://localhost:3005/contas`)
    .then(async resposta => {
        if(resposta.ok){
            return await resposta.json()
        }
        throw new Error('Não foi possível listar as contas')
    })
  }

  public static async searchAccountUni(id: number): Promise<Object>{
    try { 
      const lista_contas: object = await this.searchAccounts();
      
      for( var [key, value] of Object.entries(lista_contas) ){
        if(value.id == id){
          return value;
        }
      }
    }
    catch(erro){
      console.log(erro)
    }  
  }

  registerAccount() {
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
        throw new Error('Não foi possível criar uma conta')
    })
  }

  public static async updateAccount(id: string){
    const id_int: number = parseInt(id);    
    const conta: object = await this.searchAccountUni(id_int); 
    const dados: Array<string | number | boolean> = [];

    for( var [key, value] of Object.entries(conta) ) { dados.push(value) }
    
    return fetch(`http://localhost:3005/contas/${id}`, {
      method: 'PUT',
      headers: { 
          'Content-type' : 'application/json'
      },
      body: JSON.stringify({
        description:  dados[0],
        type_account:  dados[1],
        cost: dados[2],
        date_account:  dados[3],
        payment: true
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

