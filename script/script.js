const btnTeste = document.querySelector("#btnTeste");
const escreve = documnet.querySelector("#textoheader");
btnTeste.onclick = () =>{
    alert("fiu do taiaio")
}
const nome ="LUIZ".split("");

const escreveNome = (pos){
    if(pos < nome.length){
        let saida = "";
        for(let i = 0; i < pos; i++){
         saida += nome[pos];
           setTimeout(() => {
            escreve.innerHTML = saida;
            pos++;
            escreveNome(pos);
           }, 1100);
        }
    }
}
(()=>{
    escreveNome(0);
   
})();