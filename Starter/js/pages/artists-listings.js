function appendArtItem(item, index) {
  if (item.isPublished) {
    return;
  }

  const artContainer = document.getElementById("art-items");

  const artItem = document.createElement("div");
  artItem.classList.add("art-item", "py-4");
  artItem.style.color = index % 2 === 0 ? "#A16A5E" : "#FCEBD5";
  artContainer.appendChild(artItem);

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = item.title;
  artItem.appendChild(image);

  const infoContainer = document.createElement("div");
  infoContainer.classList.add(
    "info-container",
    "flex",
    "justify-between",
    "p-3",
    "bg-cream"
  );
  infoContainer.style.backgroundColor = index % 2 === 0 ? "#FCEBD5" : "#A16A5E";
  artItem.appendChild(infoContainer);

  const artist = document.createElement("h1");
  artist.textContent = `${item.artist}`;
  artist.classList.add("f-size");
  artist.style.fontFamily = "'Reenie Beanie', cursive";
  artist.style.color = index % 2 === 0 ? "#A16A5E" : "#FCEBD5";
  infoContainer.appendChild(artist);

  const price = document.createElement("p");
  price.textContent = `$${item.price}`;
  artist.classList.add("items-center");
  price.style.padding = "10px 16px";
  price.style.color = index % 2 === 0 ? "#FCEBD5" : "#A16A5E";
  price.style.backgroundColor = index % 2 === 0 ? "#A16A5E" : "#FCEBD5";
  price.style.borderRadius = "10px";
  infoContainer.appendChild(price);

  const titleDescContainer = document.createElement("div");
  titleDescContainer.classList.add("title-desc-container", "p-3");
  titleDescContainer.style.backgroundColor =
    index % 2 === 0 ? "#FCEBD5" : "#A16A5E";
  titleDescContainer.style.color = index % 2 === 0 ? "#A16A5E" : "#FCEBD5";
  artItem.appendChild(titleDescContainer);

  const title = document.createElement("h1");
  title.textContent = item.title;
  title.style.fontSize = "1.2rem";
  title.style.color = index % 2 === 0 ? "#A16A5E" : "#FCEBD5";
  titleDescContainer.appendChild(title);

  const description = document.createElement("p");
  description.textContent = item.description;
  titleDescContainer.appendChild(description);
}

function main() {
  items.forEach((item, index) => appendArtItem(item, index));
}

main();

// Function to toggle the visibility of the modal
function toggleModal() {
  const modal = document.getElementById("medium-modal");
  modal.classList.toggle("hidden");
}

// Add click event listener to the button
document
  .getElementById("open-modal-btn")
  .addEventListener("click", toggleModal);

/*
  #A16A5E darkercream
  #FCEBD5 lightercream*/
