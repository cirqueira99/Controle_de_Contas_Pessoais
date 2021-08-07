import { Conta } from "./Conta.js"
import { buscarDadosContas } from "./listar_contas.js"


export const atualizarConta = async (id) => {
  try { 
    const lista_contas = await buscarDadosContas();
    
    lista_contas.forEach(elemento => {
      if(elemento.id == id){
        const conta = new Conta();
        conta.atualizaCliente(elemento.id, elemento.data, elemento.nome, elemento.tipo, elemento.valor, true);
      }
    })
  }
  catch(erro){
    console.log(erro)
  }  
}