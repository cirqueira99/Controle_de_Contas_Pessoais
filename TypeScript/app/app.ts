import { Conta } from "./conta";
import { listar } from "./listar_contas";


const conta = new Conta('Ingles', 'Educação', 45.50, new Date());

console.log(conta.dadosConta);