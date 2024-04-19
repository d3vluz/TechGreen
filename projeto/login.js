var formSignin = document.querySelector("#signin");
var formSignup = document.querySelector("#signup");
var btnColor = document.querySelector(".btnColor");

document.querySelector('#btnSignin').addEventListener('click', () => {
    document.getElementById("signup").style.display = "none";
    document.getElementById("signin").style.display = "block";
    btnColor.style.left = "0px";
    btnColor.style.background = "linear-gradient(to left, #D6F4D2, #08c256)";
});

document.querySelector('#btnSignup').addEventListener('click', () => {
    document.getElementById("signin").style.display = "none";
    document.getElementById("signup").style.display = "block";
    btnColor.style.left = "110px";
    btnColor.style.background = "linear-gradient(to right, #D6F4D2, #08c256)";
});
