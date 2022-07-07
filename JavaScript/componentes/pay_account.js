
import { Conta } from "./Account.js"

export const verificaConta = async (id) => {
  try { 
    const conta = new Conta();
    const lista_contas = await conta.buscaDadosContas();
    
    lista_contas.forEach(elemento => {
      if(elemento.id == id){
        conta.atualizaConta(elemento.id, elemento.data, elemento.nome, elemento.tipo, elemento.valor, true);
      }
    })
  }
  catch(erro){
    console.log(erro)
  }  
}

export const confirmPayAccout = (evento) => {
  const botao = evento.target;
  const id = botao.id;
  var result = confirm("Você realmente deseja PAGAR essa conta?");
    
  if(result == true){ verificaConta(id.substring(1)); }    
  
}