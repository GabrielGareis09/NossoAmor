const passwordInput = document.getElementById("password");
const enterButton = document.getElementById("enterButton");
const errorMessage = document.getElementById("errorMessage");

const heartsContainer = document.querySelector(".hearts");

// ==============================
// CONFIGURAÇÃO
// ==============================

// Coloque aqui a palavra que ela deverá digitar
const secretPassword = "16";

// Página para onde ela será enviada
const nextPage = "historia.html";


// ==============================
// LOGIN
// ==============================

function enterSite() {

    const password = passwordInput.value.trim().toLowerCase();

    if (password === secretPassword) {

        errorMessage.textContent = "Preparando nossa história... ❤️";

        setTimeout(() => {
            window.location.href = nextPage;
        }, 800);

    } else {

        errorMessage.textContent =
            "Hmm... essa não é a nossa palavra secreta. ❤️";

        passwordInput.classList.add("shake");

        setTimeout(() => {
            passwordInput.classList.remove("shake");
        }, 400);
    }
}


// Clique no botão
enterButton.addEventListener("click", enterSite);


// Apertar Enter no teclado
passwordInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        enterSite();
    }

});


// ==============================
// CORAÇÕES FLUTUANDO
// ==============================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = "♥";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (10 + Math.random() * 15) + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 6) + "s";

    heart.style.animationDelay =
        Math.random() * 3 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 13000);
}


// Cria novos corações
setInterval(createHeart, 900);