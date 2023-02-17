export const modalConfirm = (modal, message) => {
  const modal_message = document.getElementsByClassName('modal-title')[0];
  
  modal.style.display = 'block';
  modal_message.innerHTML = message;

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

};