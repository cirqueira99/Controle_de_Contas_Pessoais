import { Listar } from "./list_accounts.js";
import { Conta } from "./Account.js";

export const createAccout = (evento) => {
    
  evento.preventDefault();
  
  const element_descricao = document.querySelector('[data-form-description]');
  const element_tipo = document.querySelector('[data-form-select]');
  const element_valor = document.querySelector('[data-form-money]');
  const element_data = document.querySelector('[data-form-date]');
  console.log("el "+element_data.value)
  
  const descricao = element_descricao.value;
  const tipo = element_tipo.value;
  const valor = element_valor.value;
  const data_criacao = moment(element_data.value).format('DD/MM/YYYY');
  console.log("d_c "+data_criacao)

  const dados_conta = new Conta(descricao, tipo, valor, data_criacao);    
 
  dados_conta.cadastrarConta();  

  Listar.listarContas( element_data.value.substr(0, 7) );

  element_descricao.value = "";
  element_tipo.value = "Selecione um tipo...";
  element_valor.value = "";
  element_data.value = "";
}