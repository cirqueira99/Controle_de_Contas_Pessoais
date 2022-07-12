import { ListController } from "./list_accounts.js";
import { Account } from "./Account.js";

const createAccount = (evento) => {
    
  evento.preventDefault();
  
  const element_description = document.querySelector('[data-form-description]');
  const element_type_account = document.querySelector('[data-form-select]');
  const element_cost = document.querySelector('[data-form-money]');
  const element_date_account = document.querySelector('[data-form-date]');
  
  const description = element_description.value;
  const type_account = element_type_account.value;
  const cost = element_cost.value;
  const date_account = moment(element_date_account.value).format('DD/MM/YYYY');

  const account = new Account(description, type_account, cost, date_account);    
  account.registerAccount();  

  ListController.listAccounts( element_date_account.value.substr(0, 7) );

  element_description.value = "";
  element_type_account.value = "Selecione um tipo de conta...";
  element_cost.value = "";
  element_date_account.value = "";
}

const confirmDeleteAccout = (evento) => {
  const button_element = evento.target;
  const id = button_element.id;
  var result = confirm("Você realmente deseja EXCLUIR essa conta?");
    
  if(result == true){ 
      const account = new Account
      account.deleteAccount(id.substring(1)) 
  }      
}

const verifyAccount = async (id) => {
  try { 
    const account = new Account();
    const list_accounts = await account.searchAccounts();
    
    list_accounts.forEach(element => {
      if(element.id == id){
        account.updateAccount(element.id, element.date_account, element.description, element.type_account, element.cost, true);
      }
    })
  }
  catch(erro){
    console.log(erro)
  }  
}

const confirmPayAccout = (event) => {
  const button_element = event.target;
  const id = button_element.id;
  var result = confirm("Você realmente deseja PAGAR essa conta?");
    
  if(result == true){ verifyAccount(id.substring(1)); }    
  
}

export const AccountController = {
  createAccount,
  confirmDeleteAccout,
  confirmPayAccout
}