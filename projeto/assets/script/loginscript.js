let formSignin = document.querySelector("#signin");
var formSignup = document.querySelector("#signup");
var btnColor = document.querySelector(".btnColor");


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
function confPassword(password, confirm) {
    if (password !== confirm) {
        const err = new Error('Senha diferente')
            err.input = 'confirmPassword'
            throw err
    }
}
function validatePassword(password) {
    let regexMaiuscula = /[A-Z]/;
    let regexMinuscula = /[a-z]/;
    let regexEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let regexNumero = /[0-9]/;
    console.log(regexMinuscula.test(password))

    if (password.length  < 8 ||  
        (!regexMaiuscula.test(password) || 
        !regexMinuscula.test(password) || 
        !regexEspecial.test(password) ||
        !regexNumero.test(password))) {
            const err = new Error('Senha inválida')
            err.input = 'password'
            throw err
    }
}
inputUsers = {
    email: document.getElementById('email'), 
    password: document.getElementById('senha'),
    confirmPassword: document.getElementById('confirmarsenha')
}
const form = document.getElementById('signup'); 
form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    try {
        validatePassword(inputUsers.password.value)
        inputUsers.password.classList.remove('error');
        document.getElementById('password-error').textContent = '';
        confPassword(inputUsers.password.value, inputUsers.confirmPassword.value)
        inputUsers.confirmPassword.classList.remove('error');
        document.getElementById('confirmPassword-error').textContent = '';
    }
    catch(err) {
        document.querySelector(`#${err.input}-error`).classList.add('error');
        document.querySelector(`#${err.input}-error`).textContent = err.message
    }

})
