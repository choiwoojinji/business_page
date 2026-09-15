document.addEventListener("DOMContentLoaded", function () {
    var stats = document.querySelectorAll(".stats strong[data-target]");
    if (!stats.length) return;

    function animate(el) {
        var target = parseInt(el.getAttribute("data-target"), 10) || 0;
        var duration = 800;
        var start = null;

        function step(timestamp) {
            if (start === null) start = timestamp;
            var progress = Math.min((timestamp - start) / duration, 1);
            el.textContent = Math.round(progress * target);
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target;
            }
        }

        requestAnimationFrame(step);
    }

    if (!("IntersectionObserver" in window)) {
        stats.forEach(animate);
        return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            animate(entry.target);
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.6 });

    stats.forEach(function (el) {
        observer.observe(el);
    });
});
