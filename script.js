const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const warning = document.getElementById("warning");

const maxLength = 200;

textarea.addEventListener("input", function () {

    let typed = textarea.value.length;
    let remaining = maxLength - typed;

    counter.textContent = `${typed}/${maxLength} characters`;

    if (typed >= maxLength) {
        warning.textContent = "Character limit reached!";
    } else {
        warning.textContent = "you can type more characters";
    }
});