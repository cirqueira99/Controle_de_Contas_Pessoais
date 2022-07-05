import { Conta } from "../models/accounts.js";
import { Data } from "../functionalities/datas.js";
import { Botao } from "../functionalities/create_buttons.js";

export class ListarContas {
  private static criarNovaLinha(id: number, data: Date, descricao: string, tipo: string, valor: number, pagamento: boolean ): HTMLElement{ // mudar para "HTMLTableElement.rows"
    const money: string = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    const table_tr: HTMLTableRowElement = document.createElement('tr');
    
    const td_pagar: HTMLElement = document.createElement('td');
    td_pagar.classList.add('text-center');
    td_pagar.classList.add('table-buttons');
    
    const td_excluir: HTMLElement = document.createElement('td');
    td_excluir.classList.add('text-center');
    td_excluir.classList.add('table-buttons');
    
    const conteudo = 
    `
      <th style="with: 15%;" class="text-center" scope="row">${data}</th>
      <td style="with: 25%;">${descricao}</td>
      <td style="with: 20%;">${tipo}</td>
      <td style="with: 20%;" class="text-center">${money}</td>
    `;

    table_tr.innerHTML = conteudo;

    pagamento==true ? td_pagar.appendChild(Botao.BotaoContaPaga()) : td_pagar.appendChild(Botao.BotaoPagarConta(id));
    table_tr.appendChild(td_pagar);

    td_excluir.appendChild(Botao.BotaoDeleta(id));
    table_tr.appendChild(td_excluir);

    return table_tr;
  }  

  public static async listar(data_mes: string){
    try {

      const table_list: HTMLTableElement = document.querySelector('[data-table-list]');
      table_list.classList.add('border-light');
      table_list.innerHTML = "";

      const element_total: HTMLElement  = document.getElementById('v_total');
      const element_pago: HTMLElement = document.getElementById('v_pago');
      const element_pend: HTMLElement = document.getElementById('v_pend');

      var total: number | string = 0.0;
      var pago: number | string = 0.0;
      var pend: number | string = 0.0;

      const mes_input: HTMLInputElement = document.querySelector('[data-mes]');
      mes_input.value = data_mes;

      const lista_contas: Object = await Conta.buscarDadosContas(); 
    
      const datasUnicas: Array<string> = Data.removeDatasRepetidas(lista_contas, data_mes);   
          
      datasUnicas.forEach( (dia: string)=>{
        for( var [key, value] of Object.entries(lista_contas) ){
          if( value.data === dia ){          
            table_list.appendChild(this.criarNovaLinha(value.id, value.data, value.descricao, value.tipo, value.valor, value.pagamento));
            
            value.pagamento == true? pago += value.valor : pend += value.valor;
          }          
        }
      }) 
      
      total = pago + pend;
      total = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      pago = pago.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      pend = pend.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      
      element_total.innerText = total;
      element_pago.innerText = pago;
      element_pend.innerText = pend;
        
      }
    catch(erro){
      console.log(erro)
    }  
  }

  public static mesAnt(envent: Event): void{
    envent.preventDefault()
    const mes_input: HTMLInputElement = <HTMLInputElement>document.querySelector('[data-mes]');
    console.log(typeof(mes_input.value))
    var mes: number = parseInt( (mes_input.value).split("-")[1] );
    mes -= 1;
    
    const mes_ant: string = (mes_input.value).split("-")[0] + "-" + ("0"+mes.toString()).slice(-2)
    
    ListarContas.listar(mes_ant)
  }

  public static mesProx(envent: Event): void{
    envent.preventDefault()
    const mes_input: HTMLInputElement = <HTMLInputElement>document.querySelector('[data-mes]');
    var mes: number = parseInt( (mes_input.value).split("-")[1] );
    mes += 1;
    
    const mes_prox: string = (mes_input.value).split("-")[0] + "-" + ("0"+mes.toString()).slice(-2)
  
    ListarContas.listar(mes_prox)
  }

  public static listarImputMes(envent: Event){
    envent.preventDefault()
    const mes_input: HTMLInputElement = <HTMLInputElement>document.querySelector('[data-mes]');
    const mes_input_value: string = mes_input.value;
    const mes_storage: string = sessionStorage.getItem("mes_string");
    
    if( mes_input.value != mes_storage ){
      ListarContas.listar(mes_input_value);
    }
  }
}

