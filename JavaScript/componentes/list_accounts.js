import { ButtonsController } from './create_buttons.js'
import { DatesClass } from './datas.js';
import { Account } from './Account.js';



const createsNewLine = (id, date_account, description, type_account, cost, payment) => {  
  const table_tr = document.createElement('tr');
  
  const td_pay = document.createElement('td');
  td_pay.classList.add('text-center');
  td_pay.classList.add('table-buttons');
  
  const td_delete = document.createElement('td');
  td_delete.classList.add('text-center');
  td_delete.classList.add('table-buttons');
  
  const money = cost.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  
  const conteudo = 
  `
    <th style="with: 15%;" class="text-center" scope="row">${date_account}</th>
    <td style="with: 25%;">${description}</td>
    <td style="with: 20%;">${type_account}</td>
    <td style="with: 20%;" class="text-center">${money}</td>
  `;

  table_tr.innerHTML = conteudo;

  payment==true ? td_pay.appendChild(ButtonsController.ButtonPaidAccount()) : td_pay.appendChild(ButtonsController.ButtonPayAccount(id));

  table_tr.appendChild(td_pay);

  td_delete.appendChild(ButtonsController.ButtonDeleteAccount(id));
  table_tr.appendChild(td_delete);

  return table_tr;
};



const listAccounts = async (date_month) =>  {
  try {
    console.log(date_month)
    
    const month_input = document.querySelector('[data-month]');
    month_input.value = date_month;
    sessionStorage.setItem('month_storage', date_month)

    const table_list = document.querySelector('[data-table-list]');
    table_list.classList.add('border-light');
    table_list.innerHTML = "";

    const v_total = document.getElementById('v_total');
    const v_paid = document.getElementById('v_pago');
    const v_pendant = document.getElementById('v_pend');

    var total = 0.0;
    var paid = 0.0;
    var pendant = 0.0;

    const account = new Account();
    const list = await account.searchAccounts();   

    const dates_unrepeated = DatesClass.removesRepeatedDates(list, date_month);
    
    dates_unrepeated.forEach( (day)=>{
      const dataMoment = moment(day, 'DD/MM/YYYY');

      list.forEach(element => {
        const dia = moment(element.date_account, 'DD/MM/YYYY');
        const diff = dataMoment.diff(dia);
        if(diff === 0){
          table_list.appendChild(  createsNewLine(element.id, element.date_account, element.description, element.type_account, element.cost, element.payment));
          
          element.payment == true ? paid += element.cost : pendant += element.cost; 
        }        
      })

    } )
    
    total = paid + pendant;
    total = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    paid = paid.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    pendant = pendant.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    v_total.innerText = total;
    v_paid.innerText = paid;
    v_pendant.innerText = pendant;
      
  }
  catch(erro){
    console.log(erro)
  }  
}

const monthPrevious = () => {
  const month_input = document.querySelector('[data-month]').value;
  const month_subtract = moment(month_input).subtract(1, 'month').format('YYYY-MM'); 

  ListController.listAccounts(month_subtract);
}

const monthNext = () => {
  const month_input = document.querySelector('[data-month]').value;   
  const month_add = moment(month_input).add(1, 'month').format('YYYY-MM');

  ListController.listAccounts(month_add);
}

const listInputMonth = () => {
  var month_storage = sessionStorage.getItem('month_storage');
  const month_input = document.querySelector('[data-month]').value;

  if( month_input != month_storage ){
    sessionStorage.removeItem('month_storage');
    month_storage = month_input;
    sessionStorage.setItem('month_storage', month_storage);
    ListController.listAccounts(month_input);
  }
}


export const ListController = {
  listAccounts,
  createsNewLine,
  monthPrevious,
  monthNext,
  listInputMonth
}