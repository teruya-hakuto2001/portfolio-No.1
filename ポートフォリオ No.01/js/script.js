function change_open(){
    var modal_open = document.getElementById("modal_bgc");
    modal_open.classList.toggle("open");
    modal_open.classList.remove("close");
}
function change_close(){
    var modal_close = document.getElementById("modal_bgc");
    modal_close.classList.toggle("close");
    modal_close.classList.remove("open");
}
