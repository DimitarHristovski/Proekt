document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addItemButton");
  const cardContainer = document.querySelector(".cards");

  addButton.addEventListener("click", function () {
    const titleInput = document.getElementById("Title");
    const descriptionInput = document.getElementById("Description");
    const typeInput = document.getElementById("Type");
    const priceInput = document.getElementById("Price");
    const imageURLInput = document.getElementById("Img-Url");
    const isPublishedCheckbox = document.getElementById("isPublished");
    if (
      !titleInput.value ||
      !descriptionInput.value ||
      typeInput.value === "Choose" ||
      !priceInput.value ||
      !imageURLInput.value
    ) {
      event.preventDefault();

      alert("Please fill out all required fields.");
      return;
    }
    const newItem = {
      title: titleInput.value,
      description: descriptionInput.value,
      type: typeInput.value,
      price: priceInput.value,
      imageURL: imageURLInput.value,
      isPublished: isPublishedCheckbox.checked,
      dateCreated: new Date().toISOString(), // Add the current date
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

  const video = document.getElementById("camera");
  const captureButton = document.getElementById("captureButton");
  const photoDiv = document.querySelector(".PhotoDiv");
  const imageUrlsInput = document.querySelector(".imageUrls");

  function startCamera() {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        video.srcObject = stream;
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
      });
  }

  function captureImage() {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Resize the captured image
    const resizedCanvas = document.createElement("canvas");
    const resizedContext = resizedCanvas.getContext("2d");
    const targetWidth = 200; // Set the target width
    const targetHeight = (canvas.height / canvas.width) * targetWidth;
    resizedCanvas.width = targetWidth;
    resizedCanvas.height = targetHeight;
    resizedContext.drawImage(canvas, 0, 0, targetWidth, targetHeight);

    const imageURL = resizedCanvas.toDataURL("image/jpeg"); // Convert to base64 URL

    const timestamp = new Date().getTime();
    localStorage.setItem(`image_${timestamp}`, imageURL);

    const imageUrls = JSON.parse(imageUrlsInput.value || "[]");
    imageUrls.push(imageURL);
    console.log(imageUrls);

    imageUrlsInput.value = JSON.stringify(imageURL);
    console.log(imageUrlsInput);
  }

  captureButton.addEventListener("click", () => {
    captureImage();
  });

  // Start camera when clicking on the PhotoDiv
  photoDiv.addEventListener("click", () => {
    startCamera();
  });

  document.addEventListener("DOMContentLoaded", function () {
    const addItemForm = document.querySelector("#addItemForm");
    addItemForm.addEventListener("submit", function (event) {
      const titleInput = document.querySelector("#Title");
      const descriptionInput = document.querySelector("#Description");
      const typeInput = document.querySelector("#Type");
      const priceInput = document.querySelector("#Price");
      const imgUrlInput = document.querySelector("#Img-Url");

      if (
        !titleInput.value ||
        !descriptionInput.value ||
        typeInput.value === "Choose" ||
        !priceInput.value ||
        !imgUrlInput.value
      ) {
        event.preventDefault(); // Prevent form submission

        // Display an error message or highlight the required fields
        alert("Please fill out all required fields.");
      }
    });
  });

  function createCard(item, container) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.setAttribute("data-card-id", item.id);
    card.innerHTML = `
      <div class="card-content flex justify-between bg-cream flex-col" style="background-color: #FCEBD5;">
        <img onclick="navigateTo('Photo-camera')"  class="card-image" src="${item.imageURL.slice(
          1
        )}"  alt="Item Image">
        
        <div class="titleDescContainer flex justify-between p-3 bg-cream">
          <div class="left flex flex-col">
            <h2 class="card-title f-size" style="font-family: 'Reenie Beanie', cursive;">${
              item.title
            }</h2>
            <span class="date">${getItemDate(item.dateCreated)}</span>
          </div>
          <div class="right">
            <p class="card-price" style="padding: 10px 16px; color: #FCEBD5; background-color: #A16A5E; border-radius: 10px;">$${
              item.price
            }</p>
          </div>
        </div>
        
        <div class="info-container flex flex-col p-3">
          <p class="card-description">${item.description}</p>
        </div>
        
        <div class="footer-container flex justify-between p-3 bg-brown">
          <button class="text-white bg-blue-500 px-2 py-1 rounded sendToAuctionBtn">Send to Auction</button>
          <button class="text-white bg-green-500 px-2 py-1 rounded publishBtn" >${
            item.isPublished ? "Publish" : "Unpublish"
          }</button>
          <button class="text-white bg-red-500 px-2 py-1 rounded removeBtn">Remove</button>
          <button class="text-brown-500 bg-white px-2 py-1 rounded border border-brown-500 editBtn">Edit</button>
        </div>
      </div>
    `;

    const sendAuctionBtn = card.querySelector(".sendToAuctionBtn");
    const publishBtn = card.querySelector(".publishBtn");
    const removeBtn = card.querySelector(".removeBtn");
    const editBtn = card.querySelector(".editBtn");
    card.setAttribute("data-card-id", item.id);

    sendAuctionBtn.addEventListener("click", function () {
      if (item.isAuctioning) {
        return;
      }

      // Disable the button
      sendAuctionBtn.disabled = true;

      // Add a class to change the color
      sendAuctionBtn.classList.add("disabled-button");

      sendAuctionBtn.id = item.id;
      const auctionsContainer = document.querySelector(".auctions");
      const cardImage = card.querySelector(".card-image");
      const titleDescContainer = card.querySelector(".titleDescContainer");
      const infoContainer = card.querySelector(".info-container");

      auctionsContainer.appendChild(cardImage.cloneNode(true));
      auctionsContainer.appendChild(titleDescContainer.cloneNode(true));
      auctionsContainer.appendChild(infoContainer.cloneNode(true));

      // Update the item's auctioning status and text
      item.isAuctioning = true;
      auctioningStatus.textContent = `Auctioning: ${item.isAuctioning}`;
    });

    publishBtn.addEventListener("click", function () {
      item.isPublished = !item.isPublished;
      //publishedStatus.textContent = `Published: ${item.isPublished}`;

      publishBtn.textContent = item.isPublished ? "Unpublish" : "Publish";
      console.log("Item publish status:", item.isPublished);
    });

    removeBtn.addEventListener("click", function () {
      container.removeChild(card);
      console.log("Removing item:", item.id);
    });

    editBtn.addEventListener("click", function () {
      const modal = document.querySelector("#extralarge-modal");
      modal.style.display = "block";
      document.getElementById("addItemButton").style.display = "none";
      document.getElementById("saveChangesButton").style.display = "block";
      const titleInput = modal.querySelector("#Title");
      const descriptionInput = modal.querySelector("#Description");
      const typeInput = modal.querySelector("#Type");
      const priceInput = modal.querySelector("#Price");
      const imgUrlInput = modal.querySelector("#Img-Url");
      const isPublishedInput = modal.querySelector("#isPublished");

      titleInput.value = item.title;
      descriptionInput.value = item.description;
      typeInput.value = item.type;
      priceInput.value = item.price;
      imgUrlInput.value = item.imageURL;
      isPublishedInput.checked = item.isPublished;

      isPublishedInput.disabled = false; // Enable isPublished checkbox for editing

      document
        .getElementById("saveChangesButton")
        .addEventListener("click", function () {
          // Update the item properties with the edited values
          item.title = titleInput.value;
          item.description = descriptionInput.value;
          item.type = typeInput.value;
          item.price = priceInput.value;
          item.imageURL = imgUrlInput.value;
          item.isPublished = isPublishedInput.checked;

          // Update the card content with the edited values
          const card = document.querySelector(`[data-card-id="${item.id}"]`);
          if (card) {
            card.querySelector(".card-title").textContent = item.title;
            card.querySelector(".card-description").textContent =
              item.description;
            const cardType = card.querySelectorAll(".card-type"); // Assuming .card-type is the class of the element displaying the card type
            cardType.textContent = item.type;
            const cardPrice = card.querySelector(".card-price");
            cardPrice.textContent = item.price;
            const cardImg = card.querySelector(".card-image");
            cardImg.src = item.imageURL;
            const publishBtn = card.querySelector(".publishBtn");
            publishBtn.textContent = item.isPublished ? "Unpublish" : "Publish";
          }

          // Close the modal
          modal.style.display = "none";
          document.getElementById("addItemButton").style.display = "block";
          saveChangesButton.style.display = "none";
        });
    });

    const cancelButton = document.getElementById("cancelButton");
    addButton.addEventListener("click", function () {
      modal.style.display = "block";
      addButton.style.display = "none";
      saveChangesButton.style.display = "none"; // Hide the Save Changes button
      // Rest of your code to populate the form fields...
    });
    cancelButton.addEventListener("click", function () {
      const modal = document.querySelector("#extralarge-modal");
      modal.style.display = "none";
    });
    container.appendChild(card);
  }

  function getItemDate(date) {
    // Parse the input date string into a JavaScript Date object
    const parsedDate = new Date(date);

    // Check if the parsed date is valid
    if (isNaN(parsedDate)) {
      return "Invalid Date";
    }

    // Extract day, month, and year components
    const day = parsedDate.getDate();
    const month = parsedDate.getMonth() + 1;
    const year = parsedDate.getFullYear();

    // Format the date as "dd.mm.yyyy"
    return `${day}.${month}.${year}`;
  }

  container.appendChild(card);
});
