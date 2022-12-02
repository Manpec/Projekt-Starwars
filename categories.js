/**
 * Setting the categories for the dropdown list using async/await with fetch
 */
async function addCategoriesToSelection() {
  let response = await fetch("https://swapi.py4e.com/api/").catch(errorHandler); // We catch the unwanted error with our function errorHander (displays in main.js)
  if (response.ok) {
    let data = await response.json();
    let arrayOfCategories = Object.keys(data); //returns an array of strings representing the values from the fetched object
    for (i = 0; i < arrayOfCategories.length; i++) {
      let category = arrayOfCategories[i];
      document.getElementById(
        "select"
      ).innerHTML += `<option value="${category}">${category}</option>`;
    }
  }
}
