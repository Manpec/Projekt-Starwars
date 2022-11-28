addCategoriesToSelection();

async function addCategoriesToSelection() {
  try{
  let response = await fetch('https://swapi.dev/api/');
  let data = await response.json();
  let arrayOfCategories = Object.keys(data);
  for (i = 0; i < arrayOfCategories.length; i++) {
      let category = arrayOfCategories[i];
      document.getElementById(
          'select'
          ).innerHTML += `<option value="${category}">${category}</option>`;
        };
} catch(err){
  console.log('There was an error!!', err);
};
};