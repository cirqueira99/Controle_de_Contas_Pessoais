import { ListController } from "./list_accounts.js";
import { Account } from "./Account.js";

const createAccount = (description, type_account, cost, date_account, date_list) => {
  
  const account = new Account(description, type_account, cost, date_account);    
  account.registerAccount();  

  ListController.listAccounts( date_list.substr(0, 7) );
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
  confirmPayAccout,
}