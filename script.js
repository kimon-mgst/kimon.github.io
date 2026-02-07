const charaData = [
  {
    id: "amon",
    name: "飯田亜門",
    text: "不憫。",
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
    text: "ただのメロ。",
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
    text: "どしはな先輩。",
    grade: "3年",
    className: "B組",
    color: "#4fff83",
    images: {
      uniform: "images/motanikoiti.png",
      casual: "images/motanikoiti.png"
    }
  },

  /* ===== 追加キャラ ===== */

  {
    id: "onizuka",
    name: "鬼塚門斗",
    text: "強気で雑、だけど情に厚い。",
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
    text: "静かで芯が強い。",
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
    text: "理屈派で距離感が独特。",
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
    text: "明るくて風みたいな存在。",
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
    text: "空気を読むのがうまい。",
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
    text: "負けず嫌いな努力家。",
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
    text: "恒一の妹。冷静。",
    grade: "1年",
    className: "C組",
    color: "#6c4c76",
    images: {
      uniform: "images/naoha_uniform.png",
      casual: "images/naoha_casual.png"
    }
  }
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
