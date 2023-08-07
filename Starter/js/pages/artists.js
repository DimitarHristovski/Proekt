/*async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null;
  }
}

async function displayImages() {
  const data = await fetchData();
  const errorMessageContainer = document.getElementById("error-message");

  if (!data) {
    errorMessageContainer.textContent =
      "Error fetching data. Please try again later.";
    return;
  }

  const firstRowContainer = document.getElementById("first-row");
  const secondRowContainer = document.getElementById("second-row");

  firstRowContainer.innerHTML = "";
  secondRowContainer.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("w-1/3");
    imageContainer.classList.add("m-2");

    const image = document.createElement("img");
    image.src = data[i].thumbnailUrl;
    image.alt = `Image ${i + 1}`;
    image.classList.add("animate-slide-right");
    image.classList.add("w-200");
    imageContainer.appendChild(image);
    firstRowContainer.appendChild(imageContainer);
  }

  for (let i = 3; i < 6; i++) {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("w-1/3");
    imageContainer.classList.add("m-2");

    const image = document.createElement("img");
    image.src = data[i].thumbnailUrl;
    image.alt = `Image ${i + 1}`;
    image.classList.add("animate-slide-left");

    imageContainer.appendChild(image);
    secondRowContainer.appendChild(imageContainer);
  }
}

displayImages();

const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
let activeSlide = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${activeSlide * 100}%)`;
  carouselItems.forEach((item, index) => {
    if (index === activeSlide) {
      item.classList.add("active-slide");
    } else {
      item.classList.remove("active-slide");
    }
  });
}

function nextSlide() {
  activeSlide = (activeSlide + 1) % carouselItems.length;
  updateCarousel();
}

function prevSlide() {
  activeSlide = (activeSlide - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
}

updateCarousel();*/
// Function to create a carousel item and set its background image
/*function createCarouselItem(item) {
  const carouselItem = document.createElement("div");
  carouselItem.classList.add(
    "carousel-item",
    "w-1/3",
    "px-4",
    "h-64",
    "bg-center",
    "bg-cover",
    "bg-gray-300"
  );
  carouselItem.style.backgroundImage = `url('${item.image}')`;
  carouselItem.alt = item.title;
  return carouselItem;
}

function populateCarousel() {
  const carouselTrack = document.getElementById("carouselTrack");

  items.forEach((item) => {
    const carouselItem = createCarouselItem(item);
    carouselTrack.appendChild(carouselItem);
  });
}

populateCarousel();*/

let selectedPerson = "";

function fetchAndPopulateArtists() {
  const selectElement = document.getElementById("artists");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        const optionElement = document.createElement("option");
        optionElement.value = user.name;
        optionElement.textContent = user.name;
        selectElement.appendChild(optionElement);
      });

      localStorage.setItem("artists", JSON.stringify(data));
      selectElement.addEventListener("change", function () {
        const selectedName = this.value;
        localStorage.setItem("selectedName", selectedName);
        selectedPerson = selectedName;
        console.log(selectedPerson);

        displayAppendedName();
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
document.addEventListener("DOMContentLoaded", () => {
  fetchAndPopulateArtists();
});

function displayAppendedName() {
  const appendedNameElement = document.getElementById("appendedName","appned");
  const selectedName = localStorage.getItem("selectedName");
  if (selectedName) {
    appendedNameElement.textContent = selectedName;
  } else {
    appendedNameElement.textContent = "No name selected.";
  }
}
function calculateTotalItemsSold(soldItems) {
  return soldItems.length;
}

function calculateTotalIncome(soldItems) {
  return soldItems.reduce((sum, item) => sum + item.priceSold, 0);
}

const totalItemsSoldElement = document.getElementById("totalItemsSold");
const totalIncomeElement = document.getElementById("totalIncome");

const totalItemsSold = calculateTotalItemsSold(items);
const totalIncome = calculateTotalIncome(items);

totalItemsSoldElement.textContent = `${totalItemsSold}/${items.length}`;
totalIncomeElement.textContent = `$${totalIncome}`;
