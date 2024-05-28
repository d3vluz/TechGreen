let formSignin = document.querySelector("#signin");
let formSignup = document.querySelector("#signup");
let btnColor = document.querySelector(".btnColor");

document.querySelector('#btnSignin').addEventListener('click', () => {
    document.getElementById("signup").style.display = "none";
    document.getElementById("signin").style.display = "block";
    btnColor.style.left = "0px";
    btnColor.style.background = "linear-gradient(to right, var(--cor-tres), var(--cor-quatro));"
});

document.querySelector('#btnSignup').addEventListener('click', () => {
    document.getElementById("signin").style.display = "none";
    document.getElementById("signup").style.display = "block";
    btnColor.style.left = "110px";
    btnColor.style.background = "linear-gradient(to left, var(--cor-tres), var(--cor-quatro));";
});

function validarSenha() {
    var senha = this.value;
    var length = senha.length >= 8;
    var uppercase = /[A-Z]/.test(senha);
    var lowercase = /[a-z]/.test(senha);
    var number = /[0-9]/.test(senha);
    var special = /[!@#$%^&*(),.?":{}|<>]/.test(senha);

    document.getElementById("length").style.color = length ? "green" : "red";
    document.getElementById("uppercase").style.color = uppercase ? "green" : "red";
    document.getElementById("lowercase").style.color = lowercase ? "green" : "red";
    document.getElementById("number").style.color = number ? "green" : "red";
    document.getElementById("special").style.color = special ? "green" : "red";
}

document.getElementById("senhaSignup").addEventListener("input", validarSenha);

function validarSenhaIguais() {
    var senha = document.getElementById("senhaSignup").value;
    var confirmarSenha = document.getElementById("confirmarsenhaSignup").value;
    if (senha !== confirmarSenha) {
        alert("A senha e a confirmação de senha não são iguais!");
        return false; 
    }
    return true; 
}

document.getElementById("signup").addEventListener("submit", function(event) {
    if (!validarSenhaIguais()) {
        event.preventDefault(); 
    }
});

document.getElementById('signin').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('emailSignin').value;
    const senha = document.getElementById('senhaSignin').value;

    try {
        const response = await fetch('/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha })
        });

        const result = await response.text(); 
        
        if (response.status === 401 || response.status === 404) {
            alert(result);
        } else if (response.status === 200) {
            window.location.href = '/home'; 
        } else {
            alert('Erro ao tentar fazer login.');
        }
    } catch (error) {
        alert('Erro ao tentar fazer login.');
    }
});

document.getElementById('signup').addEventListener('submit', async function(event) {
    event.preventDefault();

    const nome = document.getElementById('nomeSignup').value;
    const sobrenome = document.getElementById('sobrenomeSignup').value
    const email = document.getElementById('emailSignup').value;
    const senha = document.getElementById('senhaSignup').value;
    const celular = document.getElementById('celularSignup').value; 

    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, sobrenome, email, senha, celular })
        });

        const result = await response.text(); 
        
        if (response.status === 400) {
            alert(result);
        } else if (response.status === 200) {
            window.location.href = '/home'; 
        } else {
            alert('Erro ao tentar fazer login.');
        }
    } catch (error) {
        alert('Erro ao tentar fazer login.');
    }

});