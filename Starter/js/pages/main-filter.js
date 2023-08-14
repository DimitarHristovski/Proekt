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

  const uniqueArtists = [...new Set(items.map((item) => item.artist))];

  uniqueArtists.forEach((artist) => {
    const option = document.createElement("option");
    option.value = artist;
    option.textContent = artist;
    artistsFilter.appendChild(option);
  });
}

addArtistOptions();

function addTitleOptions() {
  const titleFilter = document.getElementById("title-filter");

  const uniqueTitles = [...new Set(items.map((item) => item.title))];

  uniqueTitles.forEach((title) => {
    const option = document.createElement("option");
    option.value = title;
    option.textContent = title;
    titleFilter.appendChild(option);
  });
}

addTitleOptions();

function resetFilters() {
  const titleFilter = document.getElementById("title-filter");
  const artistsFilter = document.getElementById("artists-filter");
  const minPriceFilter = document.getElementById("min-price");
  const maxPriceFilter = document.getElementById("max-price");
  const typeFilter = document.getElementById("type-filter");

  titleFilter.value = "Choose";
  artistsFilter.value = "Choose";
  minPriceFilter.value = "";
  maxPriceFilter.value = "";
  typeFilter.value = "Choose";

  filterItems();
}
