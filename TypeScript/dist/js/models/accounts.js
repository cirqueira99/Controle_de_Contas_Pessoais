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
    constructor(description = "", type_account = "", cost = 0, date_account = "", payment = false) {
        this.description = description;
        this.type_account = type_account;
        this.cost = cost;
        this.date_account = date_account;
        this.payment = payment;
    }
    get infoAccount() {
        var dados = [this.description, this.type_account, this.type_account, this.date_account, this.payment];
        return dados;
    }
    static getAccount(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield fetch(`http://localhost:3005/contas/${id}`)
                .then(resposta => {
                if (resposta.ok) {
                    return resposta.json();
                }
                throw new Error('Não foi possível encontrar a contas!');
            });
        });
    }
    static getAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield fetch(`http://localhost:3005/contas`)
                .then(resposta => {
                if (resposta.ok) {
                    return resposta.json();
                }
                throw new Error('Não foi possível encontrar as contas!');
            });
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
            throw new Error('Não foi possível cadastar a conta!');
        });
    }
    static updateAccount(id, date_account, description, type_account, cost, payment) {
        return __awaiter(this, void 0, void 0, function* () {
            return fetch(`http://localhost:3005/contas/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    description: description,
                    type_account: type_account,
                    cost: cost,
                    date_account: date_account,
                    payment: payment
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
