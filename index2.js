// ===========coponentes em tela e armazenando em variaveis===========
var botaomenu = document.querySelector("#botaomenu");
var menulateral = document.querySelector("#menu-lateral-id");
var fundomenu = document.querySelector("#fundo-menu-id");
var linksmenu = document.querySelectorAll(".lista-menu a");


// ============funcão executa uma ação=========
function abrirfecharmenu(){
menulateral.classList.toggle("aberto")
fundomenu.classList.toggle("visivel")
}

botaomenu.addEventListener("click", abrirfecharmenu)
fundomenu.addEventListener("click", abrirfecharmenu)

linksmenu.forEach(function(links) {
    links.addEventListener("click", abrirfecharmenu);
});
