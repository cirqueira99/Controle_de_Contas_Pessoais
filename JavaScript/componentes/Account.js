export class Account{
  
  constructor(description = "", type_account = "", cost = 0.00, date_account = ""){
    this.description = description;
    this.type_account = type_account;
    this.cost = parseFloat(cost);
    this.date_account = date_account;
    this.payment = false;
  }

  registerAccount(){
    return fetch(`http://localhost:3000/contas`, {
      method: 'POST', 
      headers: {
          'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
          description: this.description,
          type_account: this.type_account,
          cost: this.cost,
          date_account: this.date_account,
          payment: this.payment
      })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar uma conta')
    })
  }
  
  updateAccount(id, date_account, description, type_account, cost, payment) {
    return fetch(`http://localhost:3000/contas/${id}`, {
        method: 'PUT',
        headers: { 
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
          description: description,
          type_account: type_account,
          cost: cost,
          date_account: date_account,
          payment: payment
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar um cliente')
    })
  }

  deleteAccount = (id) => { 
    
    return fetch(`http://localhost:3000/contas/${id}`, {
        method: 'DELETE'
    })
    .then( resposta => { 
        if(!resposta.ok){
        throw new Error('Não foi possível deletar a conta')
        }
    })
  }
  

  searchAccounts = () => {
    return fetch(`http://localhost:3000/contas`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar as contas')
    })
  }

}