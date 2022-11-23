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
  fetch(`https://swapi.dev/api/${select}/?search=${search}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log('data',data.results);
      renderData(data.results, select) //data.results = an array of objectresults, select = the option we chose-> people, vehicles, starships, planets, movies
    })

  }

  function renderData (data, option){ //data = data.results to get the array of resultobjects
   let renderResults = document.getElementById("result") //gets the div in where we are gonna render our search results
   renderResults.innerHTML='' //Resets the innerHTML to prevent previous searches to render on the website
    switch (option) { //a switch which gets the parameter option which is one of [people, starships, and so on]
      case 'starships':
                for (let i = 0; i < data.length; i++) { //for loop based on the length of the search results we get
                  renderResults.innerHTML += 
                  `<div class='renderContent'><p>Name: ${data[i].name}</p><p>Model: ${data[i].model}</p><p>Manufacturer: ${data[i].manufacturer}</p>`  //renders all the results
                  
                  
                }
               
        break;
    
      default:
        break;
    }
    



  }
