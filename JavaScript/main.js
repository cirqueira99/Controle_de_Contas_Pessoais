
import { startElementsPage } from "./componentes/load_components.js";
import { ListController } from "./componentes/list_accounts.js";


startElementsPage();

var month_storage = sessionStorage.getItem('month_storage');

if(month_storage == null){
  month_storage = moment().format('YYYY-MM');
  sessionStorage.setItem('month_storage', month_storage);
}

ListController.listAccounts(month_storage);

const div_btnUp = document.getElementsByClassName('back-to-top')[0];

window.addEventListener("scroll", (event) => {
  const scroll_y = window.scrollY;

  scroll_y < 400 ? div_btnUp.style.display = 'none': div_btnUp.style.display = 'block';

})


