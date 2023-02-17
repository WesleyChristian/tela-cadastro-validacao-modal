const form = document.querySelector("#register-form");
const inputEmail = document.querySelector("#email");
const inputName = document.querySelector("#name")
const inputLastname = document.querySelector("#lastname")
const inputSenha = document.querySelector("#password")
const inputConfSenha = document.querySelector("#passconfirmation")
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const msgModalHeader = document.querySelector("#text-modal-header");
const msgModalBody = document.querySelector("#text-modal-body");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (inputEmail.value === "" || !isEmailValid(inputEmail.value)) {
        isEmailValid();
        return;
    }
   
    if (inputName.value === "") {
        isNameValid();
        return;
    }

    if (inputLastname.value === "") {
        isLastnameValid();
        return;
    }

    if (!validadePassword(inputSenha.value, 8)) {
        isPasswordValid(inputSenha);
        return;
    }
    
    if (!validadePassword(inputConfSenha.value, 8)) {
        isConfPasswordValid(inputConfSenha);
        return;
    }

    form.submit();
});

function isEmailValid(email) {
    const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);

    if (emailRegex.test(email)) {
        return true;
    }
    msgModalHeader.textContent = "Campo E-mail obrigatório";
    msgModalBody.textContent = "Insira um e-mail no padrão nome@email.com";

    toggleModal();

    return false;
};

function isNameValid() {
    msgModalHeader.textContent = "Campo Nome obrigatório";
    msgModalBody.textContent = "O campo precisa ter pelo menos 3 caracteres";

    toggleModal();
};

function isLastnameValid() {
    msgModalHeader.textContent = "Campo Sobrenome obrigatório";
    msgModalBody.textContent = "O campo precisa ter pelo menos 3 caracteres";

    toggleModal();
};

function validadePassword(password, minDigits) {
    if (password.length >= minDigits) {
        return true;
    }
    return false;
};

function isPasswordValid() {
    msgModalHeader.textContent = "Campo Senha obrigatório";
    msgModalBody.textContent = "O campo precisa ter pelo menos 8 caracteres";

    toggleModal();
}

function isConfPasswordValid() {
    msgModalHeader.textContent = "Campo Confirmação de senha obrigatório";
    msgModalBody.textContent = "O campo precisa ter pelo menos 8 caracteres";

    toggleModal();
};


const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};
  
[closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});
