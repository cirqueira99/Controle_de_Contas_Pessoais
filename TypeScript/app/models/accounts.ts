import { Botao } from './../functionalities/create_buttons';
import { locale } from "moment";

export class Conta{
  descricao: string;
  tipo: string;
  valor: number;
  data: string;
  pagamento: Boolean;

  constructor(descricao: string, tipo: string, valor: number, data: string){
    this.descricao = descricao;
    this.tipo = tipo;
    this.valor = valor;
    this.data = data;
    this.pagamento = false;
  }

  get dadosConta(){
    var dados = [ this.descricao, this.tipo, this.tipo, this.data, this.pagamento ];
    
    return dados;  
  }

  public static buscarDadosContas(): Object{
    return fetch(`http://localhost:3005/contas`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar as contas')
    })
  }

  public static async buscarDadosContaUni(id: number): Promise<Object>{
    try { 
      const lista_contas: object = await this.buscarDadosContas();
      
      for( var [key, value] of Object.entries(lista_contas) ){
        if(value.id == id){
          return value;
        }
      }
    }
    catch(erro){
      console.log(erro)
    }  
  }

  cadastrarConta() {
    return fetch(`http://localhost:3005/contas`, {
      method: 'POST', 
      headers: {
          'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
          descricao: this.descricao,
          tipo: this.tipo,
          valor: this.valor,
          data: this.data,
          pagamento: this.pagamento
      })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar uma conta')
    })
  }

  public static async atualizarConta(id: string){
    const id_int: number = parseInt(id);    
    const conta: object = await this.buscarDadosContaUni(id_int); 
    const dados: Array<string | number | boolean> = [];

    for( var [key, value] of Object.entries(conta) ) { dados.push(value) }
    
    return fetch(`http://localhost:3005/contas/${id}`, {
      method: 'PUT',
      headers: { 
          'Content-type' : 'application/json'
      },
      body: JSON.stringify({
        descricao:  dados[0],
        tipo:  dados[1],
        valor: dados[2],
        data:  dados[3],
        pagamento: true
      })
    })
    .then( resposta => {
        if(resposta.ok){ 
          location.reload();
          return resposta.json() 
        }

        throw new Error('Não foi possível detalhar um cliente')
    })
  }

  public static deletarConta(id: string){
   
    
    return fetch(`http://localhost:3005/contas/${id}`, {
        method: 'DELETE'
    })
    .then( resposta => { 
        if(resposta.ok){
          location.reload();
        }else{
          throw new Error('Não foi possível deletar a conta');
        }
    });
  }

  public static confirmPayAccout(evento: Event): void{
    const botao: HTMLButtonElement = <HTMLButtonElement>evento.target;
    const id: string = botao.id;

    var result = confirm("Você realmente deseja PAGAR essa conta?");
    
    if(result == true){ Conta.atualizarConta(id.substring(1)); }        
  }

  public static confirmDeleteAccout(evento: Event){
    const botao: HTMLButtonElement = <HTMLButtonElement>evento.target;
    const id: string = botao.id;

    var result = confirm("Você realmente deseja EXCLUIR essa conta?");

    if(result == true){
      Conta.deletarConta(id.substring(1));
    }
  }

}

