const passwordInput = document.getElementById("password");
const enterButton = document.getElementById("enterButton");
const errorMessage = document.getElementById("errorMessage");
const heartsContainer = document.querySelector(".hearts");
const secretPassword = "16";
const nextPage = "historia.html";


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


enterButton.addEventListener("click", enterSite);
passwordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        enterSite();
    }
});


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


setInterval(createHeart, 900);