import { Botao } from './cria_botoes.js'
import { Datas } from './datas.js';



const criaNovaLinha = (id, data, nome, tipo, valor, pagamento) => {   
  const table_tr = document.createElement('tr');
  table_tr.setAttribute('id', id)
  table_tr.classList.add('pointer')
  const td_pagar = document.createElement('td');
  td_pagar.classList.add('text-right');
  const td_excluir = document.createElement('td');

  const money = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  
  const conteudo = `
                    <th class="text-center" scope="row">${data}</th>
                    <td>${nome}</td>
                    <td>${tipo}</td>
                    <td class="text-right">${money}</td>`;

  table_tr.innerHTML = conteudo;

  pagamento==true ? td_pagar.appendChild(Botao.BotaoContaPaga()) : td_pagar.appendChild(Botao.BotaoPagarConta());

  td_excluir.appendChild(Botao.BotaoDeleta());

  table_tr.appendChild(td_pagar);
  table_tr.appendChild(td_excluir);

  return table_tr;
};

export const buscarDadosContas = () => {
  return fetch(`http://localhost:3000/contas`)
  .then(resposta => {
      if(resposta.ok){
          return resposta.json()
      }
      throw new Error('Não foi possível listar as contas')
  })
}

export const listarContas = async (data_mes) =>  {
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

    const dataUnicas = Datas.removeDatasRepetidas(lista, data_mes);
    
    dataUnicas.forEach( (dia)=>{
      const dataMoment = moment(dia, 'DD/MM/YYYY');

      lista.forEach(elemento => {
        const dia = moment(elemento.data, 'DD/MM/YYYY');
        const diff = dataMoment.diff(dia);

        if(diff === 0){
          table_list.appendChild(criaNovaLinha(elemento.id, elemento.data, elemento.nome, elemento.tipo, elemento.valor, elemento.pagamento));
          
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
