document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("consultForm");
    var result = document.getElementById("consultResult");
    if (!form || !result) return;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var email = form.email.value.trim();

        if (!emailPattern.test(email)) {
            result.textContent = "올바른 이메일 주소를 입력해주세요.";
            result.classList.add("error");
            return;
        }

        result.classList.remove("error");
        result.textContent = "상담 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.";
        form.reset();
    });
});
