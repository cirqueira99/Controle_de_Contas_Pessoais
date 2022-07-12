
import { AccountController } from './account_controller.js'

const validForms = (event) => {
  // event.preventDefault();
  var valid = true;
  const element_description = document.querySelector('[data-form-description]'); 
  const element_type_account = document.querySelector('[data-form-select]');
  const element_cost = document.querySelector('[data-form-money]');
  const element_date_account = document.querySelector('[data-form-date]');

  const elements_form = [element_description, element_type_account, element_cost, element_date_account]

  elements_form.forEach((element) => {
    if(element.value == ''){
      element.style.border = '1px solid #a60000';
      element.setCustomValidity("Campo vazio!");

      valid = false;
    }else{
      element.style.border = 'none'
      element.style.borderBottom = '1px solid #082745';
      element.setCustomValidity("");
      
    }
  })

  if(valid == true){
    const description = element_description.value;
    const type_account = element_type_account.value;
    const cost = element_cost.value;
    const date_account = moment(element_date_account.value).format('DD/MM/YYYY');

    AccountController.createAccount(description, type_account, cost, date_account, element_date_account.value)

    element_description.value = "";
    element_type_account.value = "Selecione um tipo de conta...";
    element_cost.value = "";
    element_date_account.value = "";
  }
}


const validInput = (element) => {
  const input_element = element.target;
  
  if(input_element.value == ''){
    input_element.style.border = '1px solid #a60000';
    input_element.setCustomValidity("Campo vazio!");
  }else{
    input_element.style.border = 'none'
    input_element.style.borderBottom = '1px solid #082745';
    input_element.setCustomValidity("");
  }
}

export const Valid = {
  validForms,
  validInput
}