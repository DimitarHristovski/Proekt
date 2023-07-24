async function fetchData() {
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

  // Clear loading state
  firstRowContainer.innerHTML = "";
  secondRowContainer.innerHTML = "";

  // Display images for the first row
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

  // Display images for the second row
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
