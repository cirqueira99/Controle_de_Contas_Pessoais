export class Conta{
  
  constructor(nome="", tipo="", valor=0, data="0"){
    this.nome = nome;
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
          nome: this.nome,
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
  
  atualizaCliente(id, data, nome, tipo, valor, pagamento) {
    return fetch(`http://localhost:3000/contas/${id}`, {
        method: 'PUT',
        headers: { 
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
          nome: nome,
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
  // get dados(){
  //   return this._cpf;
  // }
}