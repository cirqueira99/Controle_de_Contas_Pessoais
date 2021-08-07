System.register([], function (exports_1, context_1) {
    "use strict";
    var Conta;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Conta = class Conta {
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
            };
            exports_1("Conta", Conta);
        }
    };
});
