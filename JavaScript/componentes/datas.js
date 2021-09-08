const removeDatasRepetidas = (lista, data_mes) => { 

  const datasUnicas = []
  lista.forEach((elemento => { 
    const mes_lista = moment(elemento.data, 'DD/MM/YYYY').format('YYYY-MM')
    
    if( (datasUnicas.indexOf(elemento.data) === -1) && (mes_lista == data_mes) ){
        datasUnicas.push(elemento.data)
    }
  }))

  ordenaDatas(datasUnicas)

  return datasUnicas
}

const ordenaDatas = (data) => { 
  data.sort((a, b) => {
      const primeiraData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD');
      const segundaData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD');
     return segundaData - primeiraData
  })
}

const pegaMesInput = () => {
  const mes_input = document.querySelector('[data-mes]').value;
  const mes = moment(mes_input, 'YYYY-MM').format('YYYY-MM');

  return mes;
}

export const Datas = {
  removeDatasRepetidas,
  ordenaDatas
}