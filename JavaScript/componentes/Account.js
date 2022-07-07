export class Conta{
  
  constructor(descricao="", tipo="", valor=0, data="0"){
    this.descricao = descricao;
    this.tipo = tipo;
    this.valor = parseFloat(valor);
    this.data = data;
    this.pagamento = false;
  }

  cadastrarConta(){
    return fetch(`http://localhost:3000/contas`, {
      method: 'POST', 
      headers: {
          'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
          descricao: this.descricao,
          tipo: this.tipo,
          valor: this.valor,
          data: this.data,
          pagamento: this.pagamento
      })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar uma conta')
    })
  }
  
  atualizaConta(id, data, descricao, tipo, valor, pagamento) {
    return fetch(`http://localhost:3000/contas/${id}`, {
        method: 'PUT',
        headers: { 
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
          descricao: descricao,
          tipo: tipo,
          valor: valor,
          data: data,
          pagamento: pagamento
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar um cliente')
    })
  }

  deletaConta = (id) => { 
    
    return fetch(`http://localhost:3000/contas/${id}`, {
        method: 'DELETE'
    })
    .then( resposta => { 
        if(!resposta.ok){
        throw new Error('Não foi possível deletar a conta')
        }
    })
  }
  

  buscaDadosContas = () => {
    return fetch(`http://localhost:3000/contas`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar as contas')
    })
  }

}