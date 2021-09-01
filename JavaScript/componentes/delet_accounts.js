
export const deletarConta = (evento) => { 
    const elemento_td = evento.target;
    const table_tr_id = elemento_td.parentElement.parentElement.id
    
    return fetch(`http://localhost:3000/contas/${table_tr_id}`, {
        method: 'DELETE'
    })
    .then( resposta => { 
        if(!resposta.ok){
        throw new Error('Não foi possível deletar a conta')
        }
    })
}
  
