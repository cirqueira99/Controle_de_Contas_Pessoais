import { Listar } from "./list_accounts.js";
import { Conta } from "./Account.js";

export const criarConta = (evento) => {
    
  evento.preventDefault();
  
  const element_descricao = document.querySelector('[data-form-description]');
  const element_tipo = document.querySelector('[data-form-select]');
  const element_valor = document.querySelector('[data-form-money]');
  const element_data = document.querySelector('[data-form-date]');

  const descricao = element_descricao.value;
  const tipo = element_tipo.value;
  const valor = element_valor.value;
  const data_criacao = moment(element_data.value);
  const data = data_criacao.format('DD/MM/YYYY');
  
  const dados_conta = new Conta(descricao, tipo, valor, data);    
 
  dados_conta.cadastrarConta();
  
  const mes_atual = moment().format('YYYY-MM');
  Listar.listarContas(mes_atual);

  element_descricao.value = "";
  element_tipo.value = "Selecione um tipo...";
  element_valor.value = "";
  element_data.value = "";

}