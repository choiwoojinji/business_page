document.addEventListener("DOMContentLoaded", function () {
    var sections = document.querySelectorAll(".reveal");
    if (!sections.length) return;

    if (!("IntersectionObserver" in window)) {
        sections.forEach(function (section) {
            section.classList.add("in-view");
        });
        return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -80px 0px" });

    sections.forEach(function (section) {
        observer.observe(section);
    });
});
