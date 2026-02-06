let currentImg = "";

function openChara(name, text, img, color) {
  document.getElementById("modal-name").textContent = name;
  document.getElementById("modal-text").textContent = text;
  document.getElementById("modal-img").src = img;

  document.documentElement.style.setProperty("--accent", color);

  const modal = document.getElementById("chara-modal");
  modal.classList.add("active");
}

function closeChara() {
  const modal = document.getElementById("chara-modal");
  modal.classList.remove("active");
}
