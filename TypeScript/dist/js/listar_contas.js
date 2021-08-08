System.register([], function (exports_1, context_1) {
    "use strict";
    var criaNovaLinha, listarContas, listar;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            criaNovaLinha = (id, data, nome, tipo, valor, pagamento) => {
            };
            exports_1("listarContas", listarContas = () => {
            });
            exports_1("listar", listar = {
                listarContas,
                criaNovaLinha
            });
        }
    };
});
