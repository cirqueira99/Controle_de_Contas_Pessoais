System.register(["./conta"], function (exports_1, context_1) {
    "use strict";
    var conta_1, conta;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (conta_1_1) {
                conta_1 = conta_1_1;
            }
        ],
        execute: function () {
            conta = new conta_1.Conta('Ingles', 'Educação', 45.50, new Date());
            console.log(conta.dadosConta);
        }
    };
});
