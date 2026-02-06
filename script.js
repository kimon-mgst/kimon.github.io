let currentImages = {};

function openChara(name, text, images, color, grade, className) {
  document.getElementById("modal-name").textContent = name;
  document.getElementById("modal-text").textContent = text;
  document.getElementById("modal-grade").textContent = "学年：" + grade;
  document.getElementById("modal-class").textContent = "クラス：" + className;

  currentImages = images;
  document.getElementById("modal-img").src = images.uniform;

  document.documentElement.style.setProperty("--accent", color);
  document.getElementById("chara-modal").classList.add("active");
}

function changeCostume(type) {
  if (currentImages[type]) {
    document.getElementById("modal-img").src = currentImages[type];
  }
}

function closeChara() {
  document.getElementById("chara-modal").classList.remove("active");
}
