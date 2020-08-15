const toggleMenu = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggleMenu.addEventListener("click", () => {
  nav.style.display === "block"
    ? (nav.style.display = "none")
    : (nav.style.display = "block");
});
