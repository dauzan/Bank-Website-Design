const dropdown = document.querySelector(".tp-bar .container .dropdown");
const dropdown_content = document.querySelector(".tp-bar .container .dropdown .language .dropdown-content");
const language = document.querySelector(".tp-bar .container .dropdown .language");

dropdown.addEventListener("click", () => {
    dropdown_content.classList.toggle("show");
    language.classList.toggle("bg");
});

window.onclick = event => {
    if (!event.target.matches(".language")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
                language.classList.remove("bg");
            }
        }
    }
}