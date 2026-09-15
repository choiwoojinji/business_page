document.addEventListener("DOMContentLoaded", function () {
    var bar = document.getElementById("announceBar");
    var closeBtn = bar ? bar.querySelector(".announce-close") : null;
    if (!bar || !closeBtn) return;

    try {
        if (localStorage.getItem("announceDismissed") === "1") {
            bar.remove();
            return;
        }
    } catch (e) {}

    closeBtn.addEventListener("click", function () {
        bar.remove();
        try {
            localStorage.setItem("announceDismissed", "1");
        } catch (e) {}
    });
});
