const charaData = [
    {
    id: "amon",
    name: "飯田亜門",
    text: "不憫",
    grade: "3年",
    class: "C組",
    color: "#e74fff",
    images: {
      uniform: "images/.png",
      casual: "images/.png"
    }
  },
  {
    id: "azuma",
    name: "東馬柊",
    text: "ただのメロ。",
    grade: "3年",
    class: "A組",
    color: "#4fa3ff",
    images: {
      uniform: "images/azumasyu.png",
      casual: "images/azumadyu.png"
    }
  },
  {
    id: "motani",
    name: "茂谷恒一",
    text: "どしはな先輩",
    grade: "3年",
    class: "B組",
    color: "#4fff83",
    images: {
      uniform: "images/motanikoiti.png",
      casual: "images/motanikoiti.png"
    }
  },
  // ↓ ここからダミー9人
  ...Array.from({ length: 7 }, (_, i) => ({
    id: `chara${i+3}`,
    name: `キャラ${i+3}`,
    text: "後で設定が入る。",
    grade: "2年",
    class: "C組",
    color: "#88c999",
    images: {
      uniform: "images/dummy.png",
      casual: "images/dummy.png"
    }
  }))
];

let currentIndex = 0;
let currentImages = {};

function openCharaByIndex(index) {
  const c = charaData[index];
  currentIndex = index;
  currentImages = c.images;

  const img = document.getElementById("modal-img");
  img.classList.remove("show");

  setTimeout(() => {
    img.src = c.images.uniform;
    document.getElementById("modal-name").textContent = c.name;
    document.getElementById("modal-text").textContent = c.text;
    document.getElementById("modal-grade").textContent = "学年：" + c.grade;
    document.getElementById("modal-class").textContent = "クラス：" + c.class;
    document.documentElement.style.setProperty("--accent", c.color);
    img.classList.add("show");
  }, 150);

  document.getElementById("chara-modal").classList.add("active");
  history.replaceState(null, "", `#chara=${c.id}`);
}

function changeCostume(type) {
  if (!currentImages[type]) return;
  const img = document.getElementById("modal-img");
  img.classList.remove("show");
  setTimeout(() => {
    img.src = currentImages[type];
    img.classList.add("show");
  }, 150);
}

function prevChara() {
  openCharaByIndex((currentIndex - 1 + charaData.length) % charaData.length);
}

function nextChara() {
  openCharaByIndex((currentIndex + 1) % charaData.length);
}

function closeChara() {
  document.getElementById("chara-modal").classList.remove("active");
  history.replaceState(null, "", location.pathname);
}

window.addEventListener("load", () => {
  const hash = location.hash;
  if (hash.startsWith("#chara=")) {
    const id = hash.replace("#chara=", "");
    const index = charaData.findIndex(c => c.id === id);
    if (index !== -1) openCharaByIndex(index);
  }
});
