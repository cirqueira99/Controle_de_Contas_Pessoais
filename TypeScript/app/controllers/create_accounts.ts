import { ListarContas } from './list_accounts.js';
import { Conta } from './../models/accounts.js';
import { Data } from '../functionalities/datas.js'; 
export class ContaController {
  public static criarConta(evento: Event): void{
    evento.preventDefault();  
    const element_nome: HTMLInputElement = <HTMLInputElement>document.querySelector('[data-form-name]');  
    const element_categoria: HTMLSelectElement = <HTMLSelectElement>document.querySelector('[data-form-select]');
    const element_valor: HTMLInputElement = <HTMLInputElement>document.querySelector('[data-form-money]');
    const element_data: HTMLInputElement = <HTMLInputElement>document.querySelector('[data-form-date]');

    const nome: string = element_nome.value;
    const categoria: string = element_categoria.value;
    const valor_string: string | number = element_valor.value;
    const valor = parseFloat(valor_string);
    const data: string = element_data.value
    const data_convertida: string = data.split("-")[2]+"/"+data.split("-")[1]+"/"+data.split("-")[0];
    //const data_criacao = moment(element_data.value);
    //const data = data_criacao.format('DD/MM/YYYY');

    const conta: Conta = new Conta(nome, categoria, valor, data_convertida)
    conta.cadastrarConta();    
    
    
    ListarContas.listar( Data.retornaMesAtual() );

    element_nome.value = "";
    element_categoria.value = "Selecione uma categoria...";
    element_valor.value = "";
    element_data.value = "";
  }
}