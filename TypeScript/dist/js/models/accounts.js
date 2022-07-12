var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Account {
    constructor(description = "", type_account = "", cost = 0.00, date_account = "") {
        this.description = description;
        this.type_account = type_account;
        this.cost = cost;
        this.date_account = date_account;
        this.payment = false;
    }
    get infoAccount() {
        var dados = [this.description, this.type_account, this.type_account, this.date_account, this.payment];
        return dados;
    }
    static searchAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            return fetch(`http://localhost:3005/contas`)
                .then((resposta) => __awaiter(this, void 0, void 0, function* () {
                if (resposta.ok) {
                    return yield resposta.json();
                }
                throw new Error('Não foi possível listar as contas');
            }));
        });
    }
    static searchAccountUni(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lista_contas = yield this.searchAccounts();
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
    registerAccount() {
        return fetch(`http://localhost:3005/contas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                description: this.description,
                type_account: this.type_account,
                cost: this.cost,
                date_account: this.date_account,
                payment: this.payment
            })
        })
            .then(resposta => {
            if (resposta.ok) {
                return resposta.body;
            }
            throw new Error('Não foi possível criar uma conta');
        });
    }
    static updateAccount(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_int = parseInt(id);
            const conta = yield this.searchAccountUni(id_int);
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
                    description: dados[0],
                    type_account: dados[1],
                    cost: dados[2],
                    date_account: dados[3],
                    payment: true
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
    static deleteAccount(id) {
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
}
