const apriContatti = document.getElementById("apri-contatti");
const chiudiContatti = document.getElementById("chiudi-contatti");
const overlay = document.getElementById("overlay-contatti");

apriContatti.addEventListener("click", () => {
  overlay.removeAttribute("hidden");
});

chiudiContatti.addEventListener("click", () => {
  overlay.setAttribute("hidden", "");
});

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.setAttribute("hidden", "");
  }
});