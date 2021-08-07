System.register(["./Conta.js"], function (exports_1, context_1) {
    "use strict";
    var Conta_js_1, conta;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Conta_js_1_1) {
                Conta_js_1 = Conta_js_1_1;
            }
        ],
        execute: function () {
            conta = new Conta_js_1.Conta('Ingles', 'Educação', 45.50, new Date());
            console.log(conta.dadosConta);
        }
    };
});
