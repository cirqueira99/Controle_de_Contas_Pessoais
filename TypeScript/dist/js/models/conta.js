export class Conta {
    constructor(nome, tipo, valor, data) {
        this.nome = nome;
        this.tipo = tipo;
        this.valor = valor;
        this.data = data;
        this.pagamento = false;
    }
    get dadosConta() {
        var dados = [this.nome, this.tipo, this.tipo, this.data, this.pagamento];
        return dados;
    }
    cadastrarConta() {
    }
    atualizarConta() {
    }
    deletarConta() {
    }
    static buscarDadosContas() {
        return fetch(`http://localhost:3000/contas`)
            .then(resposta => {
            if (resposta.ok) {
                return resposta.json();
            }
            throw new Error('Não foi possível listar as contas');
        });
    }
}
