
import { startElementsPage } from "./componentes/load_components.js";
import { ListController } from "./componentes/list_accounts.js";



startElementsPage();

var month_storage = sessionStorage.getItem('month_storage');

if(month_storage == null){
  month_storage = moment().format('YYYY-MM');
  sessionStorage.setItem('month_storage', month_storage);
}

ListController.listAccounts(month_storage);

window.addEventListener("scroll", (event) => {
  var scroll_y = window.scrollY;

  scroll_y < 399 ? document.getElementById('bak-to-top').style.display = 'none': document.getElementById('bak-to-top').style.display = 'block';
})


