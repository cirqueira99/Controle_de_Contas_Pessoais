import { AccountController } from "../controllers/account_controller.js";

export class Valid {

  public static validFomrs() {
    var valid = true;
    const element_description: HTMLInputElement = <HTMLInputElement>document.querySelector('[data-form-description]');  
    const element_type_account: HTMLSelectElement = <HTMLSelectElement>document.querySelector('[data-form-select]');
    const element_cost: HTMLInputElement = <HTMLInputElement>document.querySelector('[data-form-money]');
    const element_date_account: HTMLInputElement = <HTMLInputElement>document.querySelector('[data-form-date]');  

    const elements_form = [element_description, element_type_account, element_cost, element_date_account];

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
      const description: string = element_description.value;
      const type_account: string = element_type_account.value;
      const cost_string: string | number = element_cost.value;
      const cost = parseFloat(cost_string);
      const data: string = element_date_account.value
      const date_converted: string = data.split("-")[2]+"/"+data.split("-")[1]+"/"+data.split("-")[0];

      AccountController.createNewAccount(description, type_account, cost, date_converted, element_date_account.value);

      element_description.value = "";
      element_type_account.value = "Selecione uma categoria...";
      element_cost.value = "";
      element_date_account.value = "";
    }

  }

  public static validInput(element: Event) {
    const input_element: HTMLInputElement | HTMLSelectElement = <HTMLInputElement | HTMLSelectElement>element.target;
    
    if(input_element.value == ''){
      input_element.style.border = '1px solid #a60000';
      input_element.setCustomValidity("Campo vazio!");
    }else{
      input_element.style.border = 'none'
      input_element.style.borderBottom = '1px solid #082745';
      input_element.setCustomValidity("");
    }  
  }
}