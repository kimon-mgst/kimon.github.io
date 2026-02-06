let currentImg = "";

function openChara(name, text, img) {
  document.getElementById("modal-name").textContent = name;
  document.getElementById("modal-text").textContent = text;
  document.getElementById("modal-img").src = img;
  currentImg = img;
  document.getElementById("chara-modal").style.display = "block";
}

function changeCostume(img) {
  document.getElementById("modal-img").src = img;
  currentImg = img;
}

function closeChara() {
  document.getElementById("chara-modal").style.display = "none";
}
