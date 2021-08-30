export class Conta{
  nome: string;
  tipo: string;
  valor: number;
  data: Date;
  pagamento: Boolean;

  constructor(nome: string, tipo: string, valor: number, data: Date){
    this.nome = nome;
    this.tipo = tipo;
    this.valor = valor;
    this.data = data;
    this.pagamento = false;
  }

  get dadosConta(){
    var dados = [ this.nome, this.tipo, this.tipo, this.data, this.pagamento ];
    
    
    return dados;  
  }

  cadastrarConta(): void{

  }

  atualizarConta(): void{

  }

  deletarConta(): void{

  }

  public static buscarDadosContas(): Object{
    return fetch(`http://localhost:3000/contas`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar as contas')
    })
  }
}