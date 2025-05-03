const userCtn = document.getElementById('user_ctn');
const passCtn = document.getElementById('pass_ctn');

const user = document.getElementById('input_user');
const pass = document.getElementById('input_pass');

const errorMessage = document.getElementById('error_message');

function validateCredentials() {
    
    if(user.value === "shoro" && pass.value === "1234") {
        window.location.href = "main.html";
    } else {
        
        if(user.value !== "shoro") {
            userCtn.style.backgroundColor = "rgb(240, 123, 125)";
            user.style.backgroundColor = "rgb(240, 123, 125)";
            errorMessage.innerText = "¡Usuario Incorrecto!";
            errorMessage.style.display = "inline";
        }

        if(pass.value !== "1234") {
            passCtn.style.backgroundColor = "rgb(240, 123, 125)";
            pass.style.backgroundColor = "rgb(240, 123, 125)";
            errorMessage.innerText = "¡Contraseña Incorrecta!";
            errorMessage.style.display = "inline";
        }

        if(user.value !== "shoro" && pass.value !== "1234") {
            errorMessage.innerText = "¡Usuario y Contraseña Incorrectos!";
            errorMessage.style.display = "inline";
        }

    }
    
};

user.addEventListener("focus", function() {
    userCtn.style.backgroundColor = "white";
    user.style.backgroundColor = "white";
    passCtn.style.backgroundColor = "white";
    pass.style.backgroundColor = "white";
});

pass.addEventListener("focus", function() {
    userCtn.style.backgroundColor = "white";
    user.style.backgroundColor = "white";
    passCtn.style.backgroundColor = "white";
    pass.style.backgroundColor = "white";
});


document.getElementById("verify_btn").addEventListener("click", function() {
    validateCredentials();
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        validateCredentials();
    }
});


// ERASE INPUT VALUE BUTTON

const eraseInputValueBtn = document.querySelectorAll('.erase_input_value_btn');

eraseInputValueBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        user.value = "";
        pass.value = "";
    });
});
