/* ===============================
   キャラデータ
================================ */

const charaData = [
  {
    id: "amon",
    name: "飯田亜門",
    text: "不憫",
    grade: "3年",
    className: "C組",
    color: "#e74fff",
    images: {
      uniform: "images/amon_uniform.png",
      casual: "images/amon_casual.png"
    }
  },
  {
    id: "azuma",
    name: "東馬柊",
    text: "メロ",
    grade: "3年",
    className: "A組",
    color: "#4fa3ff",
    images: {
      uniform: "images/azumasyu.png",
      casual: "images/azumadyu.png"
    }
  },
  {
    id: "motani",
    name: "茂谷恒一",
    text: "どしはな",
    grade: "3年",
    className: "B組",
    color: "#4fff83",
    images: {
      uniform: "images/motanikoiti.png",
      casual: "images/motanikoiti.png"
    }
  },
  {
    id: "onizuka",
    name: "鬼塚門斗",
    text: "ヤクザ",
    grade: "3年",
    className: "A組",
    color: "#5c398a",
    images: {
      uniform: "images/onizuka_uniform.png",
      casual: "images/onizuka_casual.png"
    }
  },
  {
    id: "yuki",
    name: "結城ひより",
    text: "母",
    grade: "3年",
    className: "C組",
    color: "#5574bd",
    images: {
      uniform: "images/yuki_uniform.png",
      casual: "images/yuki_casual.png"
    }
  },
  {
    id: "sanjouin",
    name: "三千院朔",
    text: "世界",
    grade: "2年",
    className: "F組",
    color: "#c35442",
    images: {
      uniform: "images/saku_uniform.png",
      casual: "images/saku_casual.png"
    }
  },
  {
    id: "mochizuki",
    name: "望月澪",
    text: "可愛い子ぶる",
    grade: "2年",
    className: "F組",
    color: "#b1eeff",
    images: {
      uniform: "images/mio_uniform.png",
      casual: "images/mio_casual.png"
    }
  },
  {
    id: "uriu",
    name: "瓜生蔓奈",
    text: "稲妻",
    grade: "1年",
    className: "C組",
    color: "#5a78bf",
    images: {
      uniform: "images/uriu_uniform.png",
      casual: "images/uriu_casual.png"
    }
  },
  {
    id: "suzuki",
    name: "鈴木凛",
    text: "スズラニアン",
    grade: "1年",
    className: "D組",
    color: "#4850bc",
    images: {
      uniform: "images/rin_uniform.png",
      casual: "images/rin_casual.png"
    }
  },
  {
    id: "motani-nao",
    name: "茂谷直葉",
    text: "一番冷静",
    grade: "1年",
    className: "C組",
    color: "#6c4c76",
    images: {
      uniform: "images/naoha_uniform.png",
      casual: "images/naoha_casual.png"
    }
  }
];

/* ===============================
   状態
================================ */

let currentIndex = 0;
let currentImages = {};

/* ===============================
   キャラ一覧生成
================================ */

function renderCharacterList() {
  const list = document.getElementById("character-list");
  list.innerHTML = "";

  charaData.forEach((c, index) => {
    const div = document.createElement("div");
    div.className = "character";
    div.onclick = () => openCharaByIndex(index);

    div.innerHTML = `
      <img src="${c.images.uniform}" alt="${c.name}">
      <p>${c.name}</p>
    `;

    list.appendChild(div);
  });
}

/* ===============================
   モーダル
================================ */

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
    document.getElementById("modal-grade").textContent = `学年：${c.grade}`;
    document.getElementById("modal-class").textContent = `クラス：${c.className}`;
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

/* ===============================
   初期化
================================ */

window.addEventListener("load", () => {
  renderCharacterList();

  const hash = location.hash;
  if (hash.startsWith("#chara=")) {
    const id = hash.replace("#chara=", "");
    const index = charaData.findIndex(c => c.id === id);
    if (index !== -1) openCharaByIndex(index);
  }
});
