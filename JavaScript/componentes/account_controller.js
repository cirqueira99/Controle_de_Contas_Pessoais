import { ListController } from "./list_accounts.js";
import { Account } from "./Account.js";
import { modalConfirm } from "./modal-confirm.js";

const createAccount = async (description, type_account, cost, date_account, date_list) => {
  const account = new Account(description, type_account, cost, date_account);    
  
  try {
    await account.registerAccount();  
    ListController.listAccounts( date_list.substr(0, 7) );
    
  } catch (error) {
    console.log(error);
  }
}

const deleteAccount = async (event) => {
  const id_account = event.target.id.slice(1);   
  const account = new Account();

  try {
    await account.deleteAccount(id_account); 
  } catch (error) {
    console.log("error: " + error);
  }
}

const confirmDeleteAccout = (event) => {
  const id_account = event.target.id.slice(1);   
  const modal = document.getElementsByClassName('modal-dialog')[0];
  const btn_yes = document.getElementsByClassName('btn-yes')[0];
  const btn_not = document.getElementsByClassName('btn-not')[0];
  
  modalConfirm(modal, 'Confirmar exclusão?');
  
  btn_yes.setAttribute('id', `c${id_account}`)
  btn_yes.addEventListener('click', deleteAccount);

  btn_not.addEventListener('click', function() {
    modal.style.display = "none";
  })  
}

const confirmPayAccout = (event) => {
  const id_account = event.target.id.slice(1);   
  const modal = document.getElementsByClassName('modal-dialog')[0];
  const btn_yes = document.getElementsByClassName('btn-yes')[0];
  const btn_not = document.getElementsByClassName('btn-not')[0];
  
  modalConfirm(modal, 'Confirmar exclusão?');
  
  btn_yes.setAttribute('id', `c${id_account}`)
  btn_yes.addEventListener('click', verifyAccount);

  btn_not.addEventListener('click', function() {
    modal.style.display = "none";
  });  
  
}

const verifyAccount = async (event) => {
  const id_account = event.target.id.slice(1);
  const account_class = new Account();

  try { 
    const account = await account_class.getAccount(id_account);
    await account_class.updateAccount(account.id, account.date_account, account.description, account.type_account, account.cost, true); 
  }
  catch(erro){
    console.log("error: " + erro);
  }  
}

export const AccountController = {
  createAccount,
  confirmDeleteAccout,
  confirmPayAccout,
}