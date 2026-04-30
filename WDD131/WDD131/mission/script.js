const themeMenu = document.querySelector("#theme");

themeMenu.addEventListener("change", function () {
    document.body.className = themeMenu.value;
});