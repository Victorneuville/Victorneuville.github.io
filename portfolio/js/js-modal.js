var temp = null;

function open_modal(modal) {
    if(window.innerWidth <= 1080){
        var modal_temp = document.getElementById(modal);
        temp = modal_temp;
        temp.style.display = "block";
        document.documentElement.style.overflow = 'hidden';
    }
}
function close_modal() {
    temp.style.display = "none";
    document.documentElement.style.overflow = 'visible';
}
window.onclick = function(event) {
  if (event.target == temp) {
      temp.style.display = "none";
      document.documentElement.style.overflow = 'visible';
  }
}
