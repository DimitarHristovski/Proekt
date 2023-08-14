let selectedArtist = null;

const uniqueArtists = [...new Set(items.map((item) => item.artist))];
if (uniqueArtists.length > 0) {
  selectedArtist = uniqueArtists[0];
}

function artistItemArray(artist) {
  return items.filter((item) => item.artist === artist);
}

function updateChart(labels, salesData) {
  const myChart = Chart.instances[0];
  myChart.data.labels = labels;
  myChart.data.datasets[0].data = salesData;
  myChart.update();
}

function createChart() {
  const data = {
    labels: [],
    datasets: [
      {
        label: "Sales Amount",
        backgroundColor: "#a26a5e",
        borderColor: "rgb(255, 99, 132)",
        hoverBackgroundColor: "#d44c2e",
        data: [],
      },
    ],
  };

  const config = {
    type: "bar",
    data,
    options: {
      indexAxis: "y",
    },
  };
  new Chart(document.getElementById("myChart"), config);

  document.querySelectorAll(".p-1").forEach((button) => {
    button.addEventListener("click", () => {
      if (selectedArtist) {
        const days = parseInt(button.dataset.days);
        const labels = getLastDays(days).dateLabel;
        const salesData = getLastDays(days).salesData;
        updateChart(labels, salesData);
      }
    });
  });
}

function getDataForLastOneYear() {
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthsArray = [];
  let d = new Date();
  d.setDate(1);
  for (let i = 0; i <= 11; i++) {
    monthsArray.push(new Date(d));
    d.setMonth(d.getMonth() - 1);
  }

  const monthsLabel = monthsArray.map(
    (month) => `${monthName[month.getMonth()]} ${month.getFullYear()}`
  );

  const data = monthsArray.map((month) => {
    const soldData = artistItemArray(selectedArtist).filter((item) =>
      getMonths(item.dateSold, month)
    );
    return soldData.reduce((sum, item) => sum + item.priceSold, 0);
  });

  return {
    dateLabel: monthsLabel,
    salesData: data,
  };
}

function getLastDays(days) {
  const previousDays = [];
  const today = Date.parse(new Date());
  const oneDay = 86400000;

  for (let i = 0; i < days; i++) {
    const eachDay = oneDay * i;
    const previousDay = new Date(today - eachDay);
    previousDays.push(previousDay);
  }

  const lastDays = previousDays.map((day) => day.toLocaleDateString("en-GB"));

  const data = previousDays.map((day) => {
    const soldData = artistItemArray(selectedArtist).filter((item) =>
      DatesCompare(item.dateSold, day)
    );
    return soldData.reduce((sum, item) => sum + item.priceSold, 0);
  });

  return {
    dateLabel: lastDays,
    salesData: data,
  };
}

function getMonths(date1, date2) {
  const dateOne = new Date(date1);
  const dateTwo = new Date(date2);

  return (
    dateOne.getMonth() === dateTwo.getMonth() &&
    dateOne.getFullYear() === dateTwo.getFullYear()
  );
}

function DatesCompare(date1, date2) {
  const dateOne = new Date(date1);
  const dateTwo = new Date(date2);

  return (
    dateOne.getDate() === dateTwo.getDate() &&
    dateOne.getMonth() === dateTwo.getMonth() &&
    dateOne.getFullYear() === dateTwo.getFullYear()
  );
}

function updateChart(labels, salesData) {
  console.log("Updating chart with data:", labels, salesData);
  const myChart = Chart.instances[0];
  myChart.data.labels = labels;
  myChart.data.datasets[0].data = salesData;
  myChart.update();
}
document.addEventListener("DOMContentLoaded", () => {
  createChart();
});
