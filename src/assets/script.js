
function mostrarMenu(){
    let menu = document.getElementById("menu");
    
    if (getComputedStyle(menu).display == 'none' ){
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

function cadastrarNewsLetter(){
   
    let email = document.getElementById("cadastra-email").value
    console.log(email);

}
