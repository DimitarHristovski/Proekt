function navigateTo(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.classList.remove("hidden");
    } else {
      section.classList.add("hidden");
    }
  });

  const navbar = document.getElementById("navbar");
  navbar.classList.remove("no-navbar");
}

const topContainer = document.querySelector(".top");
const bottomContainer = document.querySelector(".bottom");

const imgElement = document.createElement("img");
imgElement.src = "https://picsum.photos/seed/picsum/200/100";
imgElement.alt = "Random Image";
imgElement.classList.add("custom-image-class");

topContainer.appendChild(imgElement.cloneNode(true));
bottomContainer.appendChild(imgElement.cloneNode(true));

for (let i = 0; i < 20; i++) {
  const randomImg = document.createElement("img");
  randomImg.src = `https://picsum.photos/seed/${i}/200/100`;
  randomImg.alt = `Random Image ${i}`;
  randomImg.style.margin = "5px";

  if (Math.random() < 0.5) {
    topContainer.appendChild(randomImg);
  } else {
    bottomContainer.appendChild(randomImg);
  }
}
