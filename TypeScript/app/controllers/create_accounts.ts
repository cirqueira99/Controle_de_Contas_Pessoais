import { ListarContas } from './list_accounts.js';
import { Conta } from './../models/accounts.js';
import { Data } from '../functionalities/datas.js'; 
export class ContaController {
  public static criarConta(evento: Event): void{
    evento.preventDefault();  
    const element_descricao: HTMLInputElement = <HTMLInputElement>document.querySelector('[data-form-description]');  
    const element_tipo: HTMLSelectElement = <HTMLSelectElement>document.querySelector('[data-form-select]');
    const element_valor: HTMLInputElement = <HTMLInputElement>document.querySelector('[data-form-money]');
    const element_data: HTMLInputElement = <HTMLInputElement>document.querySelector('[data-form-date]');  

    const descricao: string = element_descricao.value;
    const tipo: string = element_tipo.value;
    const valor_string: string | number = element_valor.value;
    const valor = parseFloat(valor_string);
    const data: string = element_data.value
    const data_convertida: string = data.split("-")[2]+"/"+data.split("-")[1]+"/"+data.split("-")[0];
    //const data_criacao = moment(element_data.value);
    //const data = data_criacao.format('DD/MM/YYYY');

    const conta: Conta = new Conta(descricao, tipo, valor, data_convertida)
    conta.cadastrarConta();    
    
    
    ListarContas.listar( Data.retornaMesAtual() );

    element_descricao.value = "";
    element_tipo.value = "Selecione uma categoria...";
    element_valor.value = "";
    element_data.value = "";
  }
}