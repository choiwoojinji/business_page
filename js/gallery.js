document.addEventListener("DOMContentLoaded", function () {
    var images = Array.prototype.slice.call(document.querySelectorAll(".gallery-list img"));
    var lightbox = document.getElementById("lightbox");

    if (!lightbox || images.length === 0) return;

    var lightboxImg = lightbox.querySelector(".lightbox-img");
    var closeBtn = lightbox.querySelector(".lightbox-close");
    var prevBtn = lightbox.querySelector(".lightbox-prev");
    var nextBtn = lightbox.querySelector(".lightbox-next");
    var current = 0;

    function show(index) {
        current = (index + images.length) % images.length;
        lightboxImg.src = images[current].src;
        lightboxImg.alt = images[current].alt;
    }

    function open(index) {
        show(index);
        lightbox.classList.add("open");
    }

    function close() {
        lightbox.classList.remove("open");
    }

    images.forEach(function (img, index) {
        img.addEventListener("click", function () {
            open(index);
        });
    });

    closeBtn.addEventListener("click", close);
    prevBtn.addEventListener("click", function () { show(current - 1); });
    nextBtn.addEventListener("click", function () { show(current + 1); });

    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) close();
    });

    document.addEventListener("keydown", function (e) {
        if (!lightbox.classList.contains("open")) return;
        if (e.key === "Escape") close();
        if (e.key === "ArrowLeft") show(current - 1);
        if (e.key === "ArrowRight") show(current + 1);
    });
});
