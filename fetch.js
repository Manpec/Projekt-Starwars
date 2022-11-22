addCategoriesToSelection();


function addCategoriesToSelection() {
  fetch("https://swapi.dev/api/")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      let arrayOfCategories = Object.keys(data); 
      for (i = 0; i < arrayOfCategories.length; i++) {
        let category = arrayOfCategories[i];
        document.getElementById("select").innerHTML += `<option value="${category}">${category}</option>`;
      }
    });
}

function starwarsSearch() {
  let select = document.getElementById("select").value;
  console.log(select);
  let search = document.getElementById("search").value;
  console.log(search);
  let selection = select;
  let input = search;
  fetch(`https://swapi.dev/api/${select}/?search=${search}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      document.getElementById("result").innerHTML = `${data.name}`;
    })
    .catch((data) => {
      document.getElementById(
        "result"
      ).innerHTML = `ERROR number does not exist, try another number`;
    });

