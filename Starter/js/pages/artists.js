let selectedPerson = "";
let artistItems = [];
function fetchAndPopulateArtists() {
  const selectElement = document.getElementById("artists");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      data.forEach((user) => {
        const optionElement = document.createElement("option");
        optionElement.value = user.name;
        optionElement.textContent = user.name;
        selectElement.appendChild(optionElement);
      });

      console.log(artistItems);
      localStorage.setItem("artists", JSON.stringify(data));
      selectElement.addEventListener("change", function () {
        const selectedName = this.value;
        localStorage.setItem("selectedName", selectedName);
        selectedPerson = selectedName;

        let personItems = JSON.parse(localStorage.getItem("artistsItems"));

        artistItems = personItems.filter(
          (item) => item.artist === selectedPerson
        );

        const totalItemsSoldElement = document.getElementById("totalItemsSold");
        const totalIncomeElement = document.getElementById("totalIncome");
        const itemsPublish = itemsPublished(artistItems);

        const soldProducts = dateSold(itemsPublish);

        const totalIncome = calculateTotalIncome(artistItems);
        console.log(itemsPublish);

        totalItemsSoldElement.textContent = `${soldProducts.length}/${itemsPublish.length}`;
        totalIncomeElement.textContent = `$${totalIncome}`;
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
  const appendedNameElements =
    document.getElementsByClassName("appendedArtist");
  const selectedName = localStorage.getItem("selectedName");

  if (selectedName) {
    for (const element of appendedNameElements) {
      element.textContent = selectedName;
    }
  } else {
    for (const element of appendedNameElements) {
      element.textContent = "No name selected.";
    }
  }
}

function calculateTotalItemsSold(soldItems) {
  return soldItems.length;
}
function itemsPublished(items) {
  return items.filter((item) => item.isPublished);
}
function dateSold(items) {
  const currentTime = new Date().toLocaleDateString("en-US");

  return items.filter(
    (item) => new Date(item.dateSold).toLocaleDateString("en-US") >= currentTime
  );
}

function calculateTotalIncome(soldItems) {
  return soldItems.reduce((sum, item) => sum + item.priceSold, 0);
}

const totalItemsSold = calculateTotalItemsSold(items);
