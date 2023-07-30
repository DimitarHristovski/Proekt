/*function filterByArtist(selectedArtist) {
  const artContainer = document.getElementById("art-items");
  artContainer.innerHTML = "";

  if (selectedArtist === "Choose") {
    items.forEach((item, index) => appendArtItem(item, index));
  } else {
    const filteredItems = items.filter(
      (item) => item.artist === selectedArtist && !item.isPublished
    );
    filteredItems.forEach((item, index) => appendArtItem(item, index));
  }
}

function main() {
  items.forEach((item, index) => {
    if (!item.isPublished) {
      appendArtItem(item, index);
    }
  });
  filterByArtist("Choose");
}

main();

const artistsFilter = document.getElementById("artists-filter");
artistsFilter.addEventListener("change", () => {
  const selectedArtist = artistsFilter.value;
  filterByArtist(selectedArtist);
});
*/
function filterItems() {
  const titleFilter = document.getElementById("title-filter");
  const artistFilter = document.getElementById("artists-filter");
  const minPriceFilter = document.getElementById("min-price");
  const maxPriceFilter = document.getElementById("max-price");
  const typeFilter = document.getElementById("type-filter");

  const selectedTitle = titleFilter.value;
  const selectedArtist = artistFilter.value;
  const minPrice = parseFloat(minPriceFilter.value);
  const maxPrice = parseFloat(maxPriceFilter.value);
  const selectedType = typeFilter.value;

  const artContainer = document.getElementById("art-items");
  artContainer.innerHTML = "";

  const filteredItems = items.filter((item) => {
    const matchesTitle =
      selectedTitle === "Choose" || item.title === selectedTitle;
    const matchesArtist =
      selectedArtist === "Choose" || item.artist === selectedArtist;
    const isWithinPriceRange =
      isNaN(minPrice) ||
      isNaN(maxPrice) ||
      (item.price >= minPrice && item.price <= maxPrice);
    const matchesType = selectedType === "Choose" || item.type === selectedType;

    return matchesTitle && matchesArtist && isWithinPriceRange && matchesType;
  });

  filteredItems.forEach((item, index) => appendArtItem(item, index));
}

function main() {
  items.forEach((item, index) => {
    if (!item.isPublished) {
      appendArtItem(item, index);
    }
  });
  filterItems();
}

main();

// Event listeners for the filters
const titleFilter = document.getElementById("title-filter");
const artistsFilter = document.getElementById("artists-filter");
const minPriceFilter = document.getElementById("min-price");
const maxPriceFilter = document.getElementById("max-price");
const typeFilter = document.getElementById("type-filter");

titleFilter.addEventListener("change", filterItems);
artistsFilter.addEventListener("change", filterItems);
minPriceFilter.addEventListener("input", filterItems);
maxPriceFilter.addEventListener("input", filterItems);
typeFilter.addEventListener("change", filterItems);

function addArtistOptions() {
  const artistsFilter = document.getElementById("artists-filter");

  // Extract unique artist names from the items array
  const uniqueArtists = [...new Set(items.map((item) => item.artist))];

  // Create and append options for each artist
  uniqueArtists.forEach((artist) => {
    const option = document.createElement("option");
    option.value = artist;
    option.textContent = artist;
    artistsFilter.appendChild(option);
  });
}

// Call the addArtistOptions function to populate the artists
addArtistOptions();

function addTitleOptions() {
  const titleFilter = document.getElementById("title-filter");

  // Extract unique item titles from the items array
  const uniqueTitles = [...new Set(items.map((item) => item.title))];

  // Create and append options for each item title
  uniqueTitles.forEach((title) => {
    const option = document.createElement("option");
    option.value = title;
    option.textContent = title;
    titleFilter.appendChild(option);
  });
}

// Call the addTitleOptions function to populate the titles
addTitleOptions();

// ... Your existing code ...

function resetFilters() {
  const titleFilter = document.getElementById("title-filter");
  const artistsFilter = document.getElementById("artists-filter");
  const minPriceFilter = document.getElementById("min-price");
  const maxPriceFilter = document.getElementById("max-price");
  const typeFilter = document.getElementById("type-filter");

  // Reset all filter options to their default values
  titleFilter.value = "Choose";
  artistsFilter.value = "Choose";
  minPriceFilter.value = "";
  maxPriceFilter.value = "";
  typeFilter.value = "Choose";

  // Reapply the filters
  filterItems();
}

// ... Rest of your JavaScript code ...
