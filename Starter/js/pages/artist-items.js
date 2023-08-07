// Function to populate the modal with data
function populateModalWithData() {
  // Assuming you have a div to display the data in the modal
  const modalDataContainer = document.querySelector(".modal-data-container");

  // Clear previous data if any
  modalDataContainer.innerHTML = "";

  // Loop through the itemsData array and create elements for each item
  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
        <h3 class="text-white">${item.title}</h3>
        <p class="text-white">${item.description}</p>
        <p class="text-white">${item.type}</p>
        <p class="text-white">${item.price}</p>
        <img src="${item.imageURL}" alt="${item.title}" class="w-24 h-24">
      `;
    modalDataContainer.appendChild(itemDiv);
  });
}

// Event listener for the button click to open the modal
const openButton = document.getElementById("openModal");
openButton.addEventListener("click", () => {
  // First, populate the modal with data
  populateModalWithData();

  // Then show the modal
  const modal = document.getElementById("extralarge-modal");
  modal.classList.remove("hidden");
});

