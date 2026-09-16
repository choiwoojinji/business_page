document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contactForm");
    if (!form) return;

    var name = document.getElementById("contactName");
    var email = document.getElementById("contactEmail");
    var message = document.getElementById("contactMessage");
    var messageCount = document.getElementById("contactMessageCount");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function setError(input, errorEl, text) {
        errorEl.textContent = text;
        input.classList.toggle("invalid", !!text);
    }

    function validateName() {
        setError(name, document.getElementById("contactNameError"), name.value.trim() ? "" : "이름을 입력해주세요.");
    }

    function validateEmail() {
        var valid = emailPattern.test(email.value.trim());
        setError(email, document.getElementById("contactEmailError"), valid ? "" : "올바른 이메일 주소를 입력해주세요.");
    }

    function validateMessage() {
        setError(message, document.getElementById("contactMessageError"), message.value.trim() ? "" : "메시지를 입력해주세요.");
    }

    if (message && messageCount) {
        message.addEventListener("input", function () {
            messageCount.textContent = message.value.length + " / 500";
        });
    }

    name.addEventListener("blur", validateName);
    email.addEventListener("blur", validateEmail);
    message.addEventListener("blur", validateMessage);

    form.addEventListener("submit", function (e) {
        validateName();
        validateEmail();
        validateMessage();

        if (form.querySelector(".invalid")) {
            e.preventDefault();
        }
    });
});
