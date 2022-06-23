import { Botao } from './create_buttons.js'
import { Datas } from './datas.js';



const criarNovaLinha = (id, data, nome, categoria, valor, pagamento) => {   
  const table_tr = document.createElement('tr');
  table_tr.setAttribute('id', id)

  const td_pagar = document.createElement('td');
  td_pagar.classList.add('text-center');
  td_pagar.classList.add('table-buttons');

  const td_excluir = document.createElement('td');
  td_excluir.classList.add('text-center');
  td_excluir.classList.add('table-buttons');

  const money = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  
  const conteudo = 
  `
    <th class="text-center" scope="row">${data}</th>
    <td>${nome}</td>
    <td>${categoria}</td>
    <td class="text-center">${money}</td>
  `;

  table_tr.innerHTML = conteudo;

  pagamento==true ? td_pagar.appendChild(Botao.BotaoContaPaga()) : td_pagar.appendChild(Botao.BotaoPagarConta());
  table_tr.appendChild(td_pagar);

  td_excluir.appendChild(Botao.BotaoDeleta());
  table_tr.appendChild(td_excluir);

  return table_tr;
};

const buscarDadosContas = () => {
  return fetch(`http://localhost:3000/contas`)
  .then(resposta => {
      if(resposta.ok){
          return resposta.json()
      }
      throw new Error('Não foi possível listar as contas')
  })
}

const listarContas = async (data_mes) =>  {
  try {
    const table_list = document.querySelector('[data-table-list]');
    table_list.classList.add('border-light');
    table_list.innerHTML = "";

    const v_total = document.getElementById('v_total');
    const v_pago = document.getElementById('v_pago');
    const v_pend = document.getElementById('v_pend');

    var total = 0.0;
    var pago = 0.0;
    var pend = 0.0;

    const lista = await buscarDadosContas();  
    
    const mes_input = document.querySelector('[data-mes]');
    mes_input.value = data_mes;

    const datasUnicas = Datas.removeDatasRepetidas(lista, data_mes);
    
    datasUnicas.forEach( (dia)=>{
      const dataMoment = moment(dia, 'DD/MM/YYYY');

      lista.forEach(elemento => {
        const dia = moment(elemento.data, 'DD/MM/YYYY');
        const diff = dataMoment.diff(dia);

        if(diff === 0){
          table_list.appendChild(criarNovaLinha(elemento.id, elemento.data, elemento.nome, elemento.categoria, elemento.valor, elemento.pagamento));
          
          elemento.pagamento == true? pago += elemento.valor : pend += elemento.valor; 
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
  console.log(mes_input)  

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
  buscarDadosContas,
  mesAnt,
  mesProx, 
  listarInputMes
}