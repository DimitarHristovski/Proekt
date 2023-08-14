document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addItemButton");
  const cardContainer = document.querySelector(".cards");

  addButton.addEventListener("click", function () {
    const titleInput = document.getElementById("input-field-1");
    const descriptionInput = document.getElementById("text-field");
    const typeInput = document.getElementById("input-field-3");
    const priceInput = document.getElementById("input-field-4");
    const imageURLInput = document.getElementById("input-field-5");
    const isPublishedCheckbox = document.getElementById("isPublished");

    const newItem = {
      title: titleInput.value,
      description: descriptionInput.value,
      type: typeInput.value,
      price: priceInput.value,
      imageURL: imageURLInput.value,
      isPublished: isPublishedCheckbox.checked,
    };

    const existingItems = JSON.parse(localStorage.getItem("items")) || [];

    existingItems.push(newItem);
    localStorage.setItem("items", JSON.stringify(existingItems));

    console.log("New item added:", newItem);

    createCard(newItem, cardContainer);

    titleInput.value = "";
    descriptionInput.value = "";
    typeInput.value = "";
    priceInput.value = "";
    imageURLInput.value = "";
    isPublishedCheckbox.checked = false;
  });

  function createCard(item, container) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.border = "1px solid #ccc";
    card.style.borderRadius = "8px";
    card.style.padding = "10px";
    card.style.margin = "10px";

    const cardContent = document.createElement("div");
    cardContent.classList.add(
      "card-content",
      "flex",
      "justify-between",

      "bg-cream",
      "flex-col"
    );
    cardContent.style.backgroundColor = "#FCEBD5";
    card.appendChild(cardContent);

    const cardImage = document.createElement("img");
    cardImage.classList.add("card-image");
    cardImage.src = item.imageURL;
    cardImage.alt = "Item Image";
    cardContent.appendChild(cardImage);

    const titleDescContainer = document.createElement("div");
    titleDescContainer.classList.add(
      "titleDescContainer",
      "flex",
      "justify-between",
      "p-3",
      "bg-cream"
    );
    cardContent.appendChild(titleDescContainer);

    const left = document.createElement("div");
    left.classList.add("left", "flex", "flex-col");
    titleDescContainer.appendChild(left);

    const right = document.createElement("div");
    right.classList.add("right");
    titleDescContainer.appendChild(right);

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title", "f-size");
    cardTitle.style.fontFamily = "'Reenie Beanie', cursive";
    cardTitle.textContent = item.title;
    left.appendChild(cardTitle);

    const cardPrice = document.createElement("p");
    cardPrice.classList.add("card-price");

    cardPrice.style.padding = "10px 16px";
    cardPrice.style.color = "#FCEBD5";
    cardPrice.style.backgroundColor = "#A16A5E";
    cardPrice.style.borderRadius = "10px";
    cardPrice.textContent = item.price;
    right.appendChild(cardPrice);

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container", "flex", "flex-col", "p-3");
    cardContent.appendChild(infoContainer);

    const cardDescription = document.createElement("p");
    cardDescription.classList.add("card-description");
    cardDescription.textContent = item.description;
    infoContainer.appendChild(cardDescription);

    const footerContainer = document.createElement("div");
    footerContainer.classList.add(
      "footer-container",
      "flex",
      "justify-between",
      "p-3",
      "bg-brown"
    );
    cardContent.appendChild(footerContainer);

    let sendAuctionBtn = document.createElement("button");
    sendAuctionBtn.classList.add(
      "text-white",
      "bg-blue-500",
      "px-2",
      "py-1",
      "rounded"
    );
    sendAuctionBtn.textContent = "Send to Auction";
    footerContainer.appendChild(sendAuctionBtn);

    let publishBtn = document.createElement("button");
    publishBtn.classList.add(
      "text-white",
      "bg-green-500",
      "px-2",
      "py-1",
      "rounded"
    );
    publishBtn.textContent = item.isPublished ? "Unpublish" : "Publish";
    footerContainer.appendChild(publishBtn);

    let removeBtn = document.createElement("button");
    removeBtn.classList.add(
      "text-white",
      "bg-red-500",
      "px-2",
      "py-1",
      "rounded"
    );
    removeBtn.textContent = "Remove";
    footerContainer.appendChild(removeBtn);

    let editBtn = document.createElement("button");
    editBtn.classList.add(
      "text-brown-500",
      "bg-white",
      "px-2",
      "py-1",
      "rounded",
      "border",
      "border-brown-500"
    );
    editBtn.textContent = "Edit";
    footerContainer.appendChild(editBtn);
    container.appendChild(card);
    console.log(card);
  }
});
