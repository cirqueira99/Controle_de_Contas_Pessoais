


export class ModalConfirm {
  
  constructor(){}

  public static modalConfirm(modal: HTMLElement, message: string){
    const modal_message = document.getElementsByClassName('modal-title')[0];
    
    modal.style.display = 'block';
    modal_message.innerHTML = message;
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  
  };

}