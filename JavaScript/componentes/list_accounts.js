import { Botao } from './create_buttons.js'
import { Datas } from './datas.js';
import { Conta } from './Account.js';



const criarNovaLinha = (id, data, descricao, tipo, valor, pagamento) => {  
  const table_tr = document.createElement('tr');
  
  const td_pagar = document.createElement('td');
  td_pagar.classList.add('text-center');
  td_pagar.classList.add('table-buttons');
  
  const td_excluir = document.createElement('td');
  td_excluir.classList.add('text-center');
  td_excluir.classList.add('table-buttons');
  
  const money = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  
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
};



const listarContas = async (data_mes) =>  {
  try {
    console.log(data_mes)
    const mes_input = document.querySelector('[data-mes]');
    mes_input.value = data_mes;
    sessionStorage.setItem('mes_storage', data_mes)

    const table_list = document.querySelector('[data-table-list]');
    table_list.classList.add('border-light');
    table_list.innerHTML = "";

    const v_total = document.getElementById('v_total');
    const v_pago = document.getElementById('v_pago');
    const v_pend = document.getElementById('v_pend');

    var total = 0.0;
    var pago = 0.0;
    var pend = 0.0;

    const conta = new Conta();
    const lista = await conta.buscaDadosContas();  
    

    const datasUnicas = Datas.removeDatasRepetidas(lista, data_mes);
    
    datasUnicas.forEach( (dia)=>{
      const dataMoment = moment(dia, 'DD/MM/YYYY');

      lista.forEach(elemento => {
        const dia = moment(elemento.data, 'DD/MM/YYYY');
        const diff = dataMoment.diff(dia);
        if(diff === 0){
          table_list.appendChild(criarNovaLinha(elemento.id, elemento.data, elemento.descricao, elemento.tipo, elemento.valor, elemento.pagamento));
          
          elemento.pagamento == true ? pago += elemento.valor : pend += elemento.valor; 
        }        
      })

    } )
    
    total = pago + pend;
    total = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    pago = pago.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    pend = pend.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    v_total.innerText = total;
    v_pago.innerText = pago;
    v_pend.innerText = pend;
      
  }
  catch(erro){
    console.log(erro)
  }  
}

const mesAnt = () => {
  const mes_input = document.querySelector('[data-mes]').value;
  const mes_subtract = moment(mes_input).subtract(1, 'month').format('YYYY-MM'); 

  Listar.listarContas(mes_subtract);
}

const mesProx = () => {
  const mes_input = document.querySelector('[data-mes]').value;   
  const mes_add = moment(mes_input).add(1, 'month').format('YYYY-MM');

  Listar.listarContas(mes_add);
}

const listarInputMes = () => {
  var mes_storage = sessionStorage.getItem('mes_storage');
  const mes_input = document.querySelector('[data-mes]').value;

  if( mes_input != mes_storage ){
    sessionStorage.removeItem('mes_storage');
    mes_storage = mes_input;
    sessionStorage.setItem('mes_storage', mes_storage);
    Listar.listarContas(mes_input);
  }
}


export const Listar = {
  listarContas,
  criarNovaLinha,
  mesAnt,
  mesProx,
  listarInputMes
}