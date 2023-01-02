console.log("CONTENT MANAGER.JS LOADED");

// generate random uuid
const tilt = $("#test_tilt").tilt({
  maxTilt: 7,
  speed: 1000,
});
let content = {
  pages: {
    1: {
      1: {
        content:
          " Enhances Cognitive function and memory, and anti-inflammatory effects.",
        title: "Bilberry fruit",
        iconName: "fa-regular fa-blueberries",
      },
      2: {
        content:
          "May increase acetylcholine levels, a neurotransmitter involved in learning and memory",
        title: "DMAE",
        iconName: "fa-brands fa-envira",
      },
      3: {
        content: "Emotional regulation, sharpness and working memory.",
        title: "Green Tea",
        iconName: "fa-solid fa-leaf",
      },
      4: {
        content:
          "Increases brain chemicals involved in thinking, learning and memory.",
        title: "Bacopa Monnieri",
        iconName: "fa-solid fa-brain-circuit",
      },
      image: "Assets/braingain.png",
    },
    2: {
      1: {
        content:
          "Helps with age-related cognitive decline and maintenance of healthy brain cells.",
        title: "Magnesium",
        iconName: "fa-solid fa-trillium",
      },
      2: {
        content:
          "Has antidioxant properties and inhibits breakdown of acetylcholine.",
        title: "Huperzine A",
        iconName: "fa-duotone fa-ear-deaf",
      },
      3: {
        content:
          "Enhances Memory and cognitive performance, helps with age-related cognitive decline.",
        title: "Zinc",
        iconName: "fa-duotone fa-leafy-green",
      },
      4: {
        content:
          "Improves neurotransmitter synthesis, attention, executive functions and memory.",
        title: "Phosphatidylserine",
        iconName: "fa-duotone fa-head-side-brain",
      },
      image: "Assets/hey.png",
    },
    3: {
      1: {
        content:
          "Our vitamin choices are focused on protection of the brain and neurotransmitter synthesis",
        title: "Vitamins",
        iconName: "fa-duotone fa-capsules",
      },
      2: {
        content:
          "nerve impulse regulation, improves mood while reducing anxiety and stress.",
        title: "Gaba",
        iconName: "fa-duotone fa-brain-arrow-curved-right",
      },
      3: {
        content:
          "Nerve impulse regulation and oxygen transportation to the brain.",
        title: "Iron",
        iconName: "fa-regular fa-starfighter-twin-ion-engine",
      },
      4: {
        content:
          "Supports attention and focus, reduces brain fog and improves the structure and function of brain cells",
        title: "DHA & EPA",
        iconName: "fa-duotone fa-arrows-to-eye",
      },
      image: "Assets/bnf.png",
    },
  },
};

let page = 1;
let header_1 = {
    headerElem: document.getElementById("header_1"),
    contentElem: document.getElementById("header_1_content"),
    iconElem: document.getElementById("header_1_icon"),
  },
  header_2 = {
    headerElem: document.getElementById("header_2"),
    contentElem: document.getElementById("header_2_content"),
    iconElem: document.getElementById("header_2_icon"),
  },
  header_3 = {
    headerElem: document.getElementById("header_3"),
    contentElem: document.getElementById("header_3_content"),
    iconElem: document.getElementById("header_3_icon"),
  },
  header_4 = {
    headerElem: document.getElementById("header_4"),
    contentElem: document.getElementById("header_4_content"),
    iconElem: document.getElementById("header_4_icon"),
  },
  image = {
    headerElem: document.getElementById("image"),
  };

image.headerElem.style.backgroundImage = `${content.pages[page].image}`; // CHANGE IT TO URL() IN PRODUCTION
function updatePage() {
  // update dots
  if (page == 1) {
    dot1.className = activeClass;
    dot2.className = inactiveClass;
    dot3.className = inactiveClass;
  } else if (page == 2) {
    dot1.className = inactiveClass;
    dot2.className = activeClass;
    dot3.className = inactiveClass;
  } else if (page == 3) {
    dot1.className = inactiveClass;
    dot2.className = inactiveClass;
    dot3.className = activeClass;
  }

  // update headers
  header_1.headerElem.style.opacity = 0;
  header_1.contentElem.style.opacity = 0;
  header_2.headerElem.style.opacity = 0;
  header_2.contentElem.style.opacity = 0;
  header_3.headerElem.style.opacity = 0;
  header_3.contentElem.style.opacity = 0;
  header_4.headerElem.style.opacity = 0;
  header_4.contentElem.style.opacity = 0;

  setTimeout(() => {
    header_1.headerElem.innerHTML = content.pages[page][1].title;
    header_1.iconElem.className = content.pages[page][1].iconName;
    header_1.headerElem.style.opacity = 1;

    header_1.contentElem.innerHTML = content.pages[page][1].content;
    header_1.contentElem.style.opacity = 1;

    header_2.headerElem.innerHTML = content.pages[page][2].title;
    header_2.iconElem.className = content.pages[page][2].iconName;
    header_2.headerElem.style.opacity = 1;
    header_2.contentElem.innerHTML = content.pages[page][2].content;
    header_2.contentElem.style.opacity = 1;

    header_3.headerElem.innerHTML = content.pages[page][3].title;
    header_3.iconElem.className = content.pages[page][3].iconName;
    header_3.headerElem.style.opacity = 1;

    header_3.contentElem.innerHTML = content.pages[page][3].content;
    header_3.contentElem.style.opacity = 1;

    header_4.headerElem.innerHTML = content.pages[page][4].title;
    header_4.iconElem.className = content.pages[page][4].iconName;
    header_4.headerElem.style.opacity = 1;
    header_4.contentElem.innerHTML = content.pages[page][4].content;
    header_4.contentElem.style.opacity = 1;

    image.headerElem.style.backgroundImage = `url(${content.pages[page].image})`;
    image.headerElem.srcset = `${content.pages[page].image} auto, ${content.pages[page].image} auto`;
  }, 300);
}

setInterval(() => {
  if (page < 3) {
    page++;
    updatePage();
  } else {
    page = 1;
    updatePage();
  }
}, 4000);

let rightArrow = document.getElementById("rightArrow");
let leftArrow = document.getElementById("leftArrow");

let dot1 = document.getElementById("dot1"),
  dot2 = document.getElementById("dot2"),
  dot3 = document.getElementById("dot3"),
  activeClass = "fa-regular fa-circle-dot",
  inactiveClass = "fa-solid fa-circle-dot";

dot1.onclick = () => {
  page = 1;
  updatePage();
  dot1.className = activeClass;
};

dot2.onclick = () => {
  page = 2;
  updatePage();
  dot2.className = activeClass;
};

dot3.onclick = () => {
  page = 3;
  updatePage();
  dot3.className = activeClass;
};
// check if the user is on the second section

window.onkeydown = (e) => {
  if (e.key == "ArrowRight") {
    if (page < 3) {
      page++;
      updatePage();
    } else {
      page = 1;
      updatePage();
    }
  } else if (e.key == "ArrowLeft") {
    if (page > 1) {
      page--;
      updatePage();
    } else {
      page = 3;
      updatePage();
    }
  }
};

rightArrow.addEventListener("click", () => {
  if (page < 3) {
    page++;
  } else {
    page = 1;
  }
  updatePage();
});

leftArrow.addEventListener("click", () => {
  if (page > 1) {
    page--;
  } else {
    page = 3;
  }
  updatePage();
});
