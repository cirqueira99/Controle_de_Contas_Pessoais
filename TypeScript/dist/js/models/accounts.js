var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Conta {
    constructor(descricao, tipo, valor, data) {
        this.descricao = descricao;
        this.tipo = tipo;
        this.valor = valor;
        this.data = data;
        this.pagamento = false;
    }
    get dadosConta() {
        var dados = [this.descricao, this.tipo, this.tipo, this.data, this.pagamento];
        return dados;
    }
    static buscarDadosContas() {
        return fetch(`http://localhost:3005/contas`)
            .then(resposta => {
            if (resposta.ok) {
                return resposta.json();
            }
            throw new Error('Não foi possível listar as contas');
        });
    }
    static buscarDadosContaUni(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lista_contas = yield this.buscarDadosContas();
                for (var [key, value] of Object.entries(lista_contas)) {
                    if (value.id == id) {
                        return value;
                    }
                }
            }
            catch (erro) {
                console.log(erro);
            }
        });
    }
    cadastrarConta() {
        return fetch(`http://localhost:3005/contas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                descricao: this.descricao,
                tipo: this.tipo,
                valor: this.valor,
                data: this.data,
                pagamento: this.pagamento
            })
        })
            .then(resposta => {
            if (resposta.ok) {
                return resposta.body;
            }
            throw new Error('Não foi possível criar uma conta');
        });
    }
    static atualizarConta(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_int = parseInt(id);
            const conta = yield this.buscarDadosContaUni(id_int);
            const dados = [];
            for (var [key, value] of Object.entries(conta)) {
                dados.push(value);
            }
            return fetch(`http://localhost:3005/contas/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    descricao: dados[0],
                    tipo: dados[1],
                    valor: dados[2],
                    data: dados[3],
                    pagamento: true
                })
            })
                .then(resposta => {
                if (resposta.ok) {
                    location.reload();
                    return resposta.json();
                }
                throw new Error('Não foi possível detalhar um cliente');
            });
        });
    }
    static deletarConta(id) {
        return fetch(`http://localhost:3005/contas/${id}`, {
            method: 'DELETE'
        })
            .then(resposta => {
            if (resposta.ok) {
                location.reload();
            }
            else {
                throw new Error('Não foi possível deletar a conta');
            }
        });
    }
    static confirmPayAccout(evento) {
        const botao = evento.target;
        const id = botao.id;
        var result = confirm("Você realmente deseja PAGAR essa conta?");
        if (result == true) {
            Conta.atualizarConta(id.substring(1));
        }
    }
    static confirmDeleteAccout(evento) {
        const botao = evento.target;
        const id = botao.id;
        var result = confirm("Você realmente deseja EXCLUIR essa conta?");
        if (result == true) {
            Conta.deletarConta(id.substring(1));
        }
    }
}
