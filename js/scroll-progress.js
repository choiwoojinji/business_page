document.addEventListener("DOMContentLoaded", function () {
    var bar = document.getElementById("scrollProgressBar");
    if (!bar) return;

    function update() {
        var scrollTop = window.scrollY;
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = percent + "%";
    }

    update();
    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);
});
