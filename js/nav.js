document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector(".menu-toggle");
    var gnb = document.querySelector(".gnb");

    if (!toggle || !gnb) return;

    toggle.addEventListener("click", function () {
        var isOpen = gnb.classList.toggle("open");
        toggle.setAttribute("aria-expanded", isOpen);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var scrollTopBtn = document.querySelector(".scroll-top");
    if (!scrollTopBtn) return;

    window.addEventListener("scroll", function () {
        scrollTopBtn.classList.toggle("show", window.scrollY > 400);
    });

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var sections = document.querySelectorAll("section[id]");
    var navLinks = document.querySelectorAll(".gnb > li > a[href^='#']");

    if (!sections.length || !navLinks.length || !("IntersectionObserver" in window)) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var id = entry.target.getAttribute("id");
            navLinks.forEach(function (link) {
                link.classList.toggle("active", link.getAttribute("href") === "#" + id);
            });
        });
    }, { rootMargin: "-50% 0px -50% 0px" });

    sections.forEach(function (section) {
        observer.observe(section);
    });
});
