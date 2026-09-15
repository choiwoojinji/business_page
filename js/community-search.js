document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("communitySearch");
    var list = document.getElementById("communityList");
    var empty = document.getElementById("communityEmpty");
    if (!input || !list || !empty) return;

    var items = Array.prototype.slice.call(list.children);

    input.addEventListener("input", function () {
        var query = input.value.trim().toLowerCase();
        var visibleCount = 0;

        items.forEach(function (item) {
            var text = item.textContent.toLowerCase();
            var match = text.indexOf(query) !== -1;
            item.hidden = !match;
            if (match) visibleCount++;
        });

        empty.hidden = visibleCount !== 0;
    });
});
