


function cadastrar() {
    var emailCadastro = document.getElementById('emailCadastro').value;
    var passwordCadastro = document.getElementById('passwordCadastro').value;

    // emailHelp
    var emailHelp = document.getElementById(`emailHelp`)

    if (emailCadastro === '' || passwordCadastro === '') {
        alert('Insira seus dados!');
        return;
    } else {
        var listaCadastros = JSON.parse(localStorage.getItem('listaCadastros')) || [];
        

        var usuarioExistente = listaCadastros.find(function(usuario) {
            return usuario.Email === emailCadastro;
        });

        if (usuarioExistente) {
            alert('E-mail já cadastrado. Informe outro para continuar!');
            emailHelp.innerHTML = 'Informe outro e-mail!'
            emailHelp.style.color = 'red'
            return;
        } else {
            listaCadastros.push({ Email: emailCadastro, Senha: passwordCadastro });

            localStorage.setItem('listaCadastros', JSON.stringify(listaCadastros));

           
            if (window.location.pathname !== '/login') {
                window.location.href = '/login';
            }

            alert('Cadastro realizado com sucesso!');
        }
    }
}
