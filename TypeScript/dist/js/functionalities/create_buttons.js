import { Conta } from "../models/accounts.js";
export class Botao {
    static BotaoDeleta(id) {
        const botaoDeleta = document.createElement('button');
        botaoDeleta.setAttribute('type', 'button');
        botaoDeleta.setAttribute('id', id);
        botaoDeleta.classList.add('btn');
        botaoDeleta.classList.add('table_butpagar');
        const but_span = document.createElement('span');
        but_span.innerHTML = `<i class="fas fa-trash-alt"></i>`;
        botaoDeleta.appendChild(but_span);
        botaoDeleta.classList.add('btn-secondary');
        botaoDeleta.addEventListener('click', Conta.deletarConta);
        return botaoDeleta;
    }
    static PagarConta(evento) {
        const botao = evento.target;
        const id = botao.id;
        Conta.atualizarConta(id);
    }
    static BotaoPagarConta(id) {
        const botaoPagar = document.createElement('button');
        botaoPagar.setAttribute('type', 'button');
        botaoPagar.setAttribute('id', id);
        botaoPagar.classList.add('btn');
        botaoPagar.innerText = 'pagar';
        botaoPagar.classList.add('btn-success');
        botaoPagar.classList.add('table_butpagar');
        botaoPagar.addEventListener('click', this.PagarConta);
        return botaoPagar;
    }
    static BotaoContaPaga() {
        const botaoPago = document.createElement('button');
        botaoPago.setAttribute('type', 'button');
        botaoPago.classList.add('btn');
        botaoPago.classList.add('table_butpagar');
        const but_span = document.createElement('span');
        but_span.innerHTML = `<i class='fas fa-check'>`;
        botaoPago.appendChild(but_span);
        botaoPago.classList.add('btn-info');
        botaoPago.disabled = true;
        return botaoPago;
    }
}
