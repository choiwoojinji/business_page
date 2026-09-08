document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector(".menu-toggle");
    var gnb = document.querySelector(".gnb");

    if (!toggle || !gnb) return;

    toggle.addEventListener("click", function () {
        var isOpen = gnb.classList.toggle("open");
        toggle.setAttribute("aria-expanded", isOpen);
    });
});
