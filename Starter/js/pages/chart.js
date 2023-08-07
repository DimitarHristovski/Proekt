/*
function calculateTotalItemsSold(soldItems) {
  return soldItems.length;
}

function calculateTotalIncome(soldItems) {
  return soldItems.reduce((sum, item) => sum + item.priceSold, 0);
}

const totalItemsSoldElement = document.getElementById("totalItemsSold");
const totalIncomeElement = document.getElementById("totalIncome");
const soldItemsListElement = document.querySelector(".sold-items-list");

const totalItemsSold = calculateTotalItemsSold(soldItems);
const totalIncome = calculateTotalIncome(soldItems);

totalItemsSoldElement.textContent = `${totalItemsSold}/${soldItems.length}`;
totalIncomeElement.textContent = `$${totalIncome}`;

soldItems.forEach((item) => {
  const itemElement = document.createElement("div");
  itemElement.textContent = `Item: $${item.priceSold}`;
  soldItemsListElement.appendChild(itemElement);
});
*/
