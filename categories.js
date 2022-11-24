let api = 'https://swapi.dev/api/'

addCategoriesToSelection();


function addCategoriesToSelection() {
  
  fetch(api)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      let arrayOfCategories = Object.keys(data); 
      for (i = 0; i < arrayOfCategories.length; i++) {
        let category = arrayOfCategories[i];
        document.getElementById('select').innerHTML += `<option value="${category}">${category}</option>`;
      }
    });
}