
import { Conta } from "../models/conta.js";
import { Data } from "./datas.js";

export class ListarContas {

  criarNovaLinha(conta: any): HTMLElement{ 
    const table_tr: HTMLElement = document.createElement('tr');
    //table_tr.setAttribute('id', id)
    table_tr.classList.add('pointer')
    const td_pagar = document.createElement('td');
    td_pagar.classList.add('text-right');
    const td_excluir = document.createElement('td');

    

    return table_tr;
  }  

  async listar(data_mes: string){
    try {

      const table_list: HTMLTableElement = document.querySelector('[data-table-list]');
      table_list.classList.add('border-light');
      table_list.innerHTML = "";

      const element_total: HTMLElement  = document.getElementById('v_total');
      const element_pago: HTMLElement = document.getElementById('v_pago');
      const element_pend: HTMLElement = document.getElementById('v_pend');

      var total: number = 0.0;
      var pago: number = 0.0;
      var pend: number = 0.0;

      const mes_input: HTMLInputElement = document.querySelector('[data-mes]');
      mes_input.value = data_mes;

      const lista: Object = await Conta.buscarDadosContas(); 
    
      const datasUnicas: Array<string> = Data.removeDatasRepetidas(lista, data_mes);
      console.log(datasUnicas)
    
      datasUnicas.forEach( (dia: string)=>{
        for( var [key, value] of Object.entries(lista) ){
          if( value.data === dia ){
            table_list.appendChild(this.criarNovaLinha(value));
          }
          
        }
      })
      

    }
    catch(erro){
      console.log(erro)
    }  
  }

}

