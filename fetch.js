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
  //let selection = select;
  //let input = search;
  fetch(`https://swapi.dev/api/${select}/?search=${search}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log('data',data.results);
      renderData(data.results, select)
    })
    
  
  

  //results.values(data)

  }

  function renderData (data, option){
   let renderResults = document.getElementById("result")
   renderResults.innerHTML='' //Resets the innerHTML to prevent previous searches to render on the website
    switch (option) {
      case 'starships':
                for (let i = 0; i < data.length; i++) {
                  renderResults.innerHTML += 
                  `<div class='renderContent'><p>${data[i].name}</p><p>Model: ${data[i].model}</p><p>Manufacturer: ${data[i].manufacturer}</p>`  
                  
                  
                }
               
        break;
    
      default:
        break;
    }
    



  }
