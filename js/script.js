/**
 * Create json object to describe temperature of a city
 */

const dataset = [
  {
    city: "Amsterdam",
    temperature: -6,
  },
  {
    city: "London",
    temperature: 3,
  },
  {
    city: "Madrid",
    temperature: 10,
  },
  {
    city: "New York",
    temperature: 14,
  },
  {
    city: "Tokyo",
    temperature: 7,
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
      averageElement.innerHTML = `<span>Moyenne des nombres paires: ${average}</span>`;
      console.log(average);
    })();

    /**
     * Method to calculate min and max temperature in dataset
     */
    (function minMax(){
      let min = dataset[0].temperature;
      let max = dataset[0].temperature;
      for (let i = 0; i < dataset.length; i++) {
        if (dataset[i].temperature < min) {
          min = dataset[i].temperature;
        }
        if (dataset[i].temperature > max) {
          max = dataset[i].temperature;
        }
      }
      const minElement = document.getElementById("min");
      const maxElement = document.getElementById("max");
      minElement.innerHTML = `<span>Température minimale: ${min}</span>`;
      maxElement.innerHTML = `<span>Température maximale: ${max}</span>`;
      console.log(min);
      console.log(max);
    })();