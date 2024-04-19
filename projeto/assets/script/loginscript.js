var formSignin = document.querySelector("#signin");
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
