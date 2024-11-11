function topo (){
    window.scrollTo(
        {
            top:onabort,
            left: 0,
            behavior: 'smooth'
        }
    )
}

function login() {
    var logar = 0;
    var usuario = document.getElementById ("usuario").Value;
    var senha = document.getElementById ("senha").Value;

    if(usuario == "admin && senha == 1234"){
        window.location = "index.html" ;
        logado = 1;
    }

    if(logado == 0){
        alert("Acesso negado. Dados incorretos")
    }
}

function cadastro() {
    alert("Cadastradro com sucesso!");
    window.location.href = "index.html";
}