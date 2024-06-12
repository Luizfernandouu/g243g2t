const btn = document.querySelector("#btnlogin");
const inputUsuario = document.querySelector("#usuario");
const inputSenha = document.querySelector("#senha");

(()=>{
    let usuario = localStorage.getItem("usuario");
    if(usuario){
        wimdow.location.href = "http://www.oul.com.br";
    }
})();

btn.onclick = (e) =>{
    e.preventDefault();
    let senha = inputSenha.value;
    if(!usuario && !senha){
        inputUsuario.focus();
        return ;
    }
    if(usuario === "jj"){
        if(senha === "123"){

            localStorage.setItem("usuario",usuario);
            window.location.href = "http://www.uol.com.br"
        }else{
            inputUsuario.focus();
        }
    }
}