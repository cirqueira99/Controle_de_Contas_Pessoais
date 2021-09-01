import { listarContas } from "./list_accounts.js";

const removeDatasRepetidas = (lista, data_mes) => { 

  const datasUnicas = []
  lista.forEach((elemento => { 
    const mes_lista = moment(elemento.data, 'DD/MM/YYYY').format('YYYY-MM')
    
    if( (datasUnicas.indexOf(elemento.data) === -1) && (mes_lista == data_mes) ){
        datasUnicas.push(elemento.data)
    }
  }))
  return datasUnicas
}

const ordenaDatas = (data) => { 
  data.sort((a, b) => {
      const primeiraData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD');
      const segundaData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD');
     return segundaData - primeiraData
  })
}

const mesProx = () => {
  const mes_input = pegaMesInput();
  
  const mes_add = moment(mes_input).add(1, 'month').format('YYYY-MM');

  listarContas(mes_add);
}

const mesAnt = () => {
  const mes_input = pegaMesInput();
  const mes_subtract = moment(mes_input).subtract(1, 'month').format('YYYY-MM');

  const mes_teste = sessionStorage.getItem('mes_storage');
  console.log(mes_teste)


  listarContas(mes_subtract);
}

const pegaMesInput = () => {
  const mes_input = document.querySelector('[data-mes]').value;
  const mes = moment(mes_input, 'YYYY-MM').format('YYYY-MM');

  return mes;
}

const novaListagemMes = () => {
  const mes_input = document.querySelector('[data-mes]').value;
  
  if(mes_input != sessionStorage.getItem('mes_storage')){
    sessionStorage.clear();
    sessionStorage.getItem('mes_storage', mes_input);
    listarContas(mes_input);
  }
}

export const Datas = {
  removeDatasRepetidas,
  ordenaDatas,
  mesAnt,
  mesProx,
  novaListagemMes
}