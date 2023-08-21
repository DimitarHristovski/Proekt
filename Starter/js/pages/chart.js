document.addEventListener("DOMContentLoaded", () => {
  fetchAndPopulateArtists();
  createChart();
});
function artistItemArray(artistItems) {
  return items.filter((item) => item.artist === artistItems);
}

function createChart() {
  const labels = [];
  const data = {
    labels: labels,
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
  const myChart = new Chart(document.getElementById("myChart"), config, data);
  document.querySelector("#last7").addEventListener("click", () => {
    const chartData = getLastDays(7);
    updateChartData(myChart, chartData);
    console.log("Updated chart data:", chartData);
  });

  document.querySelector("#last14").addEventListener("click", () => {
    const chartData = getLastDays(14);
    updateChartData(myChart, chartData);
    console.log("Updated chart data:", chartData);
  });

  document.querySelector("#last30").addEventListener("click", () => {
    const chartData = getLastDays(30);
    updateChartData(myChart, chartData);
    console.log("Updated chart data:", chartData);
  });

  document.querySelector("#last365").addEventListener("click", () => {
    const chartData = getDataForLastOneYear();
    updateChartData(myChart, chartData);
    console.log("Updated chart data:", chartData);
  });

  getDataForLastOneYear;
}

function updateChartData(myChart, chartData, artistItems) {
  const soldData = artistItemArray(artistItems); // Use selectedPerson here

  chartData.salesData = soldData.map((items) =>
    items.reduce((sum, item) => sum + item.priceSold, 0)
  );
  console.log(soldData);

  myChart.data.labels = chartData.dateLabel;
  myChart.data.datasets[0].data = chartData.salesData;
  myChart.update();
}

function getDataForLastOneYear() {
  monthsLabel = [];
  let monthsArray = [];
  let monthName = new Array(
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
    "December"
  );
  let d = new Date();
  d.setDate(1);
  for (i = 0; i <= 11; i++) {
    monthsArray.push(new Date(d));
    d.setMonth(d.getMonth() - 1);
  }

  monthsLabel = monthsArray.map(
    (month) =>
      `${monthName[new Date(month).getMonth()]} ${new Date(
        month
      ).getFullYear()}`
  );

  let data = [];

  monthsArray.forEach((day) => {
    let soldData = artistItemArray(artistItems).filter((item) =>
      getMonthstoCompare(item.dateSold, day)
    );

    data.push(soldData);
  });
  salesDataforEachDay = [];
  data.forEach((array) => {
    let sales = 0;
    array.forEach((item) => {
      sales = sales + item.priceSold;
    });
    salesDataforEachDay.push(sales);
  });
  chartData = {
    dateLabel: monthsLabel,
    salesData: salesDataforEachDay,
  };
  return chartData;
}

function getLastDays(days) {
  let previousDays = [];
  let today = Date.parse(new Date());
  let oneDay = 86400000;

  for (let i = 0; days > i; i++) {
    let eachDay = oneDay * i;
    let previousDay = new Date(today - eachDay);
    previousDays.push(previousDay);
  }

  let lastDays = previousDays.map(
    (day) => `${day.toLocaleDateString("en-GB")}`
  );
  let data = [];

  previousDays.forEach((day) => {
    let soldData = artistItemArray(artistItems).filter((item) =>
      getDatestoCompare(item.dateSold, day)
    );

    data.push(soldData);
  });
  salesDataforEachDay = [];
  data.forEach((array) => {
    let sales = 0;
    array.forEach((item) => {
      sales = sales + item.priceSold;
    });
    salesDataforEachDay.push(sales);
  });
  chartData = {
    dateLabel: lastDays,
    salesData: salesDataforEachDay,
  };

  return chartData;
}
function getMonthstoCompare(date1, date2) {
  dateOne = new Date(date1);
  dateTwo = new Date(date2);

  if (
    dateOne.getMonth() === dateTwo.getMonth() &&
    dateOne.getFullYear() === dateTwo.getFullYear()
  ) {
    return true;
  } else {
    return false;
  }
}

function getDatestoCompare(date1, date2) {
  dateOne = new Date(date1);
  dateTwo = new Date(date2);

  if (
    dateOne.getDate() === dateTwo.getDate() &&
    dateOne.getMonth() === dateTwo.getMonth() &&
    dateOne.getFullYear() === dateTwo.getFullYear()
  ) {
    return true;
  } else {
    return false;
  }
}
