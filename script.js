let currentImages = {};

function openChara(name, text, images, color) {
  document.getElementById("modal-name").textContent = name;
  document.getElementById("modal-text").textContent = text;

  currentImages = images; // ← 今開いてるキャラの画像セット
  document.getElementById("modal-img").src = images.uniform;

  document.documentElement.style.setProperty("--accent", color);

  const modal = document.getElementById("chara-modal");
  modal.classList.add("active");
}

function changeCostume(type) {
  if (currentImages[type]) {
    document.getElementById("modal-img").src = currentImages[type];
  }
}

function closeChara() {
  const modal = document.getElementById("chara-modal");
  modal.classList.remove("active");
}
