// footer.js
document.addEventListener("DOMContentLoaded", function () {
    // Load footer content
    fetch("footer.html")
        .then(response => response.text())
        .then(html => {
            document.querySelector("body").insertAdjacentHTML("beforeend", html);
        });
});
