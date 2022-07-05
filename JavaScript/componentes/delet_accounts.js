
export const deletarConta = (evento) => { 
    const botao = evento.target;
    const id = botao.id;
    
    return fetch(`http://localhost:3000/contas/${id.substring(1)}`, {
        method: 'DELETE'
    })
    .then( resposta => { 
        if(!resposta.ok){
        throw new Error('Não foi possível deletar a conta')
        }
    })
}
  
