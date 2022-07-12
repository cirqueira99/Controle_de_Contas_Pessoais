import { startElementsPage } from './functionalities/load_components.js';
import { DateClass } from './functionalities/datas.js';
import { ListController } from './controllers/list_accounts.js';
startElementsPage();
var month_storage = sessionStorage.getItem('month_storage');
if (month_storage == null) {
    month_storage = DateClass.retornCurrentMonth();
    sessionStorage.setItem('month_storage', month_storage);
}
ListController.listAccounts(month_storage);
window.addEventListener("scroll", (event) => {
    var scroll_y = window.scrollY;
    scroll_y < 399 ? document.getElementById('bak-to-top').style.display = 'none' : document.getElementById('bak-to-top').style.display = 'block';
});
