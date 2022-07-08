import { startElementsPage } from './functionalities/load_components.js';
import { Data } from './functionalities/datas.js';
import { ListarContas } from './controllers/list_accounts.js';
startElementsPage();
var mes_storage = sessionStorage.getItem('mes_storage');
if (mes_storage == null) {
    mes_storage = Data.retornaMesAtual();
    sessionStorage.setItem('mes_storage', mes_storage);
}
ListarContas.listar(mes_storage);
window.addEventListener("scroll", (event) => {
    var scroll_y = window.scrollY;
    scroll_y < 399 ? document.getElementById('bak-to-top').style.display = 'none' : document.getElementById('bak-to-top').style.display = 'block';
});
