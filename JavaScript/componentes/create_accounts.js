import { Listar } from "./list_accounts.js";
import { Conta } from "./Account.js";

export const criarConta = (evento) => {
    
  evento.preventDefault();
  
  const element_nome = document.querySelector('[data-form-name]');
  const element_tipo = document.querySelector('[data-form-select]');
  const element_valor = document.querySelector('[data-form-money]');
  const element_data = document.querySelector('[data-form-date]');

  const nome = element_nome.value;
  const tipo = element_tipo.value;
  const valor = element_valor.value;
  const data_criacao = moment(element_data.value);
  const data = data_criacao.format('DD/MM/YYYY');
  
  const dados_conta = new Conta(nome, tipo, valor, data);    
 
  dados_conta.cadastrarConta();
  
  const mes_atual = moment().format('YYYY-MM');
  Listar.listarContas(mes_atual);

  element_nome.value = "";
  element_tipo.value = "Selecione um tipo...";
  element_valor.value = "";
  element_data.value = "";

}