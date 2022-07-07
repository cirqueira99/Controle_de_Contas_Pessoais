import { Conta } from "./account.js";

export const confirmDeleteAccout = (evento) => {
    const botao = evento.target;
    const id = botao.id;
    var result = confirm("Você realmente deseja EXCLUIR essa conta?");
      
    if(result == true){ 
        const conta = new Conta
        conta.deletaConta(id.substring(1)) 
    }    
    
  }