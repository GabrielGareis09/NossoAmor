// ==============================
// LISTA DE FOTOS
// ==============================
const photos = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg", "41.jpg", "42.jpg", "43.jpg", "44.jpg"
];

// ==============================
// ELEMENTOS
// ==============================
const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");
const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");
const lightboxCounter = document.getElementById("lightboxCounter");
const heartsContainer = document.querySelector(".hearts");

let currentIndex = 0;

// ==============================
// CRIAR GALERIA
// ==============================
function createGallery() {
    gallery.innerHTML = "";

    photos.forEach((photo, index) => {
        const item = document.createElement("div");
        item.classList.add("gallery-item");

        const img = document.createElement("img");
        img.alt = `Momento ${index + 1}`;
        img.loading = "lazy";
        img.src = `imagem/${photo}`;

        // Se der erro, tenta com .JPG maiúsculo
        img.onerror = function () {
            this.onerror = null;
            this.src = `../imagem/${photo.replace(".jpg", ".JPG")}`;

            this.onerror = function () {
                this.style.display = "none";
                item.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#d990aa;font-size:13px;text-align:center;padding:10px;">Foto não encontrada<br>${photo}</div>`;
            };
        };

        item.appendChild(img);
        item.addEventListener("click", () => openLightbox(index));
        gallery.appendChild(item);
    });
}

// ==============================
// LIGHTBOX
// ==============================
function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeLightboxFunc() {
    lightbox.classList.add("hidden");
    document.body.style.overflow = "";
}

function updateLightbox() {
    const photo = photos[currentIndex];
    lightboxImg.src = `../imagem/${photo}`;
    lightboxImg.onerror = function () {
        this.src = `../imagem/${photo.replace(".jpg", ".JPG")}`;
    };
    lightboxCounter.textContent = `${currentIndex + 1} / ${photos.length}`;
}

function showNext() {
    currentIndex = (currentIndex + 1) % photos.length;
    updateLightbox();
}

function showPrev() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updateLightbox();
}

// Eventos
closeLightbox.addEventListener("click", closeLightboxFunc);
nextImage.addEventListener("click", showNext);
prevImage.addEventListener("click", showPrev);

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightboxFunc();
});

document.addEventListener("keydown", (e) => {
    if (lightbox.classList.contains("hidden")) return;

    if (e.key === "Escape") closeLightboxFunc();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
});

// ==============================
// CORAÇÕES
// ==============================
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerHTML = "♥";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (10 + Math.random() * 14) + "px";
    heart.style.animationDuration = (7 + Math.random() * 5) + "s";
    heart.style.animationDelay = Math.random() * 2 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 14000);
}

setInterval(createHeart, 1100);

// Inicializa
createGallery();