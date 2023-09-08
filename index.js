const fullLogPage = document.getElementById("logPage");
const successLog = document.getElementById("sucessLog");
const log = document.getElementById("log");
const myWork = document.getElementById("toMyWorks");
const emailInput = document.getElementById("emailInput");
const verficEmail = document.getElementById("invalidEmail");

function loged() {
    let email = emailInput.value;
    if (email == "") {
        verficEmail.innerText = "Endereço inválido";
        emailInput.classList.remove("myEmail");
        emailInput.classList.add("invalidEmail")
    } else  {
        fullLogPage.style.display = "none";
        successLog.style.display = "flex"
    }
};

function clickCheck(event) {
    if (event.keyCode === 13) {
        loged()
    }
};

function showMyPrevious() {
    window.open("https://codepen.io/hudsonF13")
};

log.addEventListener("click", loged);
myWork.addEventListener("click", showMyPrevious);
emailInput.addEventListener("keydown", clickCheck);