


// REALIZA O LOGIN / VALIDAÇÃO 
function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var emailHelp = document.getElementById('emailHelp');
    var senhaHelp = document.getElementById(`senhaHelp`)
   
    var listaCadastros = JSON.parse(localStorage.getItem('listaCadastros')) || [];
    var verificaUser = listaCadastros.find(function (usuario) {
        return usuario.Email === email && usuario.Senha === password;
    });

    if (verificaUser) {
        emailHelp.innerText = 'Seja bem vindo!';
        emailHelp.style.color = '#28da11';
        senhaHelp.innerHTML = ':)'
        senhaHelp.style.color= '#28da11'
        
        setTimeout(function () {
            window.location.href = '/home';
        }, 2000);
    } else {
        emailHelp.innerText = 'E-mail ou senha inválidos!';
        emailHelp.style.color = 'red';
         
 
        document.getElementById(`email`).value = ""
        document.getElementById(`password`).value = ""
       
    }
}


function mensagem() {
    var mensagemElement = document.getElementById('mensagem');
    var contadorElement = document.getElementById('contador');
    var contador = 10;
    // Exibe o contador inicial
    contadorElement.innerText = contador;

    // Função que decrementa o contador a cada segundo
  var intervalo = setInterval(function(){
   contador --

   contadorElement.innerHTML = contador
   if(contador <= 0){
    mensagemElement.style.display = 'none'
    clearTimeout(intervalo)
   }
   }, 1000) 
}
function fecharMensagem(){
 document.getElementById(`mensagem`).style.display = 'none'
}