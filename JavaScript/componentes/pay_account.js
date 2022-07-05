
import { atualizarConta } from "./update_accounts.js";
import { Listar } from "./list_accounts.js";

export const PagarConta = (evento) => {
  const botao = evento.target;
  const id = botao.id;
  const mes_storage = sessionStorage.getItem('mes_storage')
  console.log('pag '+mes_storage)
  atualizarConta(id.substring(1)).then(
    Listar.listarContas(mes_storage)
  );

}
