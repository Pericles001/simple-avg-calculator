/**
 * Create json object to describe temperature of a city
 */

const dataset = [
  {
    city: "Amsterdam",
    temperature: -6.7,
  },
  {
    city: "London",
    temperature: 3.7,
  },
  {
    city: "Madrid",
    temperature: 10.5,
  },
  {
    city: "New York",
    temperature: 14.5,
  },
  {
    city: "Tokyo",
    temperature: 7.5,
  },
];

/**
 * Method to fill html table with data from dataset
 */

(function fillData(){
const table = document.getElementById("table");
for (let i = 0; i < dataset.length; i++) {
  const row = table.insertRow(i + 1);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.innerHTML = dataset[i].city;
  cell2.innerHTML = dataset[i].temperature;
}
})();

/**
 * Method to calculate average of even numbers in dataset
 */

    (function even(){
      let sum = 0;
      let count = 0;
      for (let i = 0; i < dataset.length; i++) {
        if (dataset[i].temperature % 2 === 0) {
          sum += dataset[i].temperature;
          count++;
        }
      }
      const average = sum / count;
      const averageElement = document.getElementById("avg_even");
      averageElement.innerHTML = `<span>Moyenne: ${average.value}</span>`;
      console.log(average);
    })()