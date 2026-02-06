function openChara(name, text, img) {
  document.getElementById("modal-name").textContent = name;
  document.getElementById("modal-text").textContent = text;
  document.getElementById("modal-img").src = img;
  document.getElementById("chara-modal").style.display = "block";
}

function closeChara() {
  document.getElementById("chara-modal").style.display = "none";
}
