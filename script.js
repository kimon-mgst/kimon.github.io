/* =========================
   CHARACTER DATA（完成版）
========================= */

const charaData = [
  {
    id: "amon",
    name: "飯田亜門",
    yomi: "いいだ",
    text: <p>
    チーム内で一番不憫<br>
    一応エースではあるがエースだと思われてない<br>
    東馬とは幼馴染
  </p>,
    grade: "3年",
    className: "C組",
    color: "#e74fff",
    icon: "images/amon.png",
    images: {
      uniform: "images/amon_uniform.png",
      casual: "images/amon_casual.png"
    }
  },
  {
    id: "azuma",
    name: "東馬柊",
    yomi: "あずま",
    text: "メロ",
    grade: "3年",
    className: "A組",
    color: "#4fa3ff",
    icon: "images/syu.png",
    images: {
      uniform: "images/syu_seihuku.PNG",
      casual: "images/azumasyu.png"
    }
  },
  {
    id: "motani",
    name: "茂谷恒一",
    yomi: "もたに",
    text: "どしはな",
    grade: "3年",
    className: "B組",
    color: "#4fff83",
    icon: "images/koiti.png",
    images: {
      uniform: "images/kou_seihuku.PNG",
      casual: "images/motanikoiti.png"
    }
  },

  /* ===== 追加キャラ ===== */

  {
    id: "onizuka",
    name: "鬼塚門斗",
    yomi: "おにづか",
    text: "ヤクザ",
    grade: "3年",
    className: "A組",
    color: "#5c398a",
    icon: "images/mondo.png",
    images: {
      uniform: "images/onizuka_uniform.png",
      casual: "images/onizuka_casual.png"
    }
  },
   {
    id: "yuki",
    name: "結城ひより",
    yomi: "ゆうき",
    text: "母",
    grade: "3年",
    className: "C組",
    color: "#5574bd",
    icon: "images/hiyori.png",
    images: {
      uniform: "images/yuki_uniform.png",
      casual: "images/yuki_casual.png"
    }
  },
  {
    id: "sanzenin",
    name: "三千院朔",
    yomi: "さんぜんいん",
    text: "世界",
    grade: "2年",
    className: "F組",
    color: "#c35442",
    icon: "images/saku.png",
    images: {
      uniform: "images/saku_uniform.png",
      casual: "images/saku_casual.png"
    }
  },
  {
    id: "mochizuki",
    name: "望月澪",
    yomi: "もちづき",
    text: "可愛い子ぶる",
    grade: "2年",
    className: "F組",
    color: "#b1eeff",
    icon: "images/mio.png",
    images: {
      uniform: "images/mio_uniform.png",
      casual: "images/mio_casual.png"
    }
  },
  {
    id: "uryu",
    name: "瓜生蔓奈",
    yomi: "うりゅう",
    text: "稲妻",
    grade: "1年",
    className: "C組",
    color: "#5a78bf",
    icon: "images/uriu.png",
    images: {
      uniform: "images/uriu_uniform.png",
      casual: "images/uriu_casual.png"
    }
  },
  {
    id: "suzuki",
    name: "鈴木凛",
    yomi: "すずき",
    text: "スズラニアン",
    grade: "1年",
    className: "D組",
    color: "#4850bc",
    icon: "images/rin.png",
    images: {
      uniform: "images/rin_uniform.png",
      casual: "images/rin_casual.png"
    }
  },
  {
    id: "motani-nao",
    name: "茂谷直葉",
    yomi: "もたに",
    text: "冷静",
    grade: "1年",
    className: "C組",
    color: "#6c4c76",
    icon: "images/naoha.png",
    images: {
      uniform: "images/naoha_uniform.png",
      casual: "images/naoha_casual.png"
    }
  }
];

/* =========================
   STATE
========================= */

let currentIndex = 0;
let currentImages = {};
let defaultOrder = [...charaData];

/* =========================
   LIST RENDER
========================= */

function renderCharacterList(list) {
  const area = document.getElementById("character-list");
  area.innerHTML = "";

  list.forEach((c, index) => {
    const div = document.createElement("div");
    div.className = "character";
    div.onclick = () => openCharaByIndex(index);

    div.innerHTML = `
      <img src="${c.icon}" alt="${c.name}">
      <p>${c.name}</p>
    `;
    area.appendChild(div);
  });
}

/* =========================
   SORT
========================= */

function sortChara(type) {
  let sorted = [...charaData];

  if (type === "grade") {
    sorted.sort((a, b) => b.grade.localeCompare(a.grade, "ja"));
  }

  if (type === "name") {
    sorted.sort((a, b) => a.yomi.localeCompare(b.yomi, "ja"));
  }

  if (type === "default") {
    sorted = [...defaultOrder];
  }

  renderCharacterList(sorted);
}

/* =========================
   MODAL
========================= */

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
    document.getElementById("modal-class").textContent = "クラス：" + c.className;
    document.getElementById("chara-modal")
      .style.setProperty("--chara-accent", c.color);
    img.classList.add("show");
  }, 150);

  document.getElementById("chara-modal").classList.add("active");
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
}

/* =========================
   INIT
========================= */

window.addEventListener("load", () => {
  renderCharacterList(charaData);
});