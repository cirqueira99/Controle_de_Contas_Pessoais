import { Conta } from "./Account.js"
import { buscarDadosContas } from "./list_accounts.js"


export const atualizarConta = async (id) => {
  try { 
    const lista_contas = await buscarDadosContas();
    
    lista_contas.forEach(elemento => {
      if(elemento.id == id){
        const conta = new Conta();
        conta.atualizaConta(elemento.id, elemento.data, elemento.nome, elemento.tipo, elemento.valor, true);
      }
    })
  }
  catch(erro){
    console.log(erro)
  }  
}