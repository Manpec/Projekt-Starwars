addCategoriesToSelection();

function addCategoriesToSelection() {
  fetch('https://swapi.dev/api/')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      let arrayOfCategories = Object.keys(data);
      for (i = 0; i < arrayOfCategories.length; i++) {
        let category = arrayOfCategories[i];
        document.getElementById(
          'select'
        ).innerHTML += `<option value="${category}">${category}</option>`;
      }
    });
}

function starwarsSearch() {
  let loader = `<div class="boxLoading"></div>`;//loader gets html
  document.getElementById('loading').innerHTML = loader; //div id loading gets html
  let select = document.getElementById('select').value;
  console.log(select);
  let search = document.getElementById('search').value;
  console.log(search);
  let result = document.getElementById('result');
  let input = document.getElementById('search');
  input.value = ''; // Clears input field after searching
  fetch(`https://swapi.dev/api/${select}/?search=${search}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      if (data.count === 0) {
        // If search term can't be found show this message
        result.innerHTML = `Couldn't find what you're looking for. Please try again!`;
      } else {
        console.log('data', data.results);
        renderData(data.results, select); //data.results = an array of objectresults, select = the option we chose-> people, vehicles, starships, planets, movies
      }
      document.getElementById('loading').innerHTML = ``;//removes html from id loading when call is done
    });
}

function renderData(data, option) {
  //data = data.results to get the array of resultobjects
  let renderResults = document.getElementById('result'); //gets the div in where we are gonna render our search results
  renderResults.innerHTML = ''; //Resets the innerHTML to prevent previous searches to render on the website
  switch (
    option //a switch which gets the parameter option which is one of [people, starships, and so on]
  ) {
    case 'starships':
      for (let i = 0; i < data.length; i++) {
        //for loop based on the length of the search results we get
        renderResults.innerHTML += `<div class='renderContent'><p>Name: ${data[i].name}</p><p>Model: ${data[i].model}</p><p>Manufacturer: ${data[i].manufacturer}</p><a href="#">More</a></div>`; //renders all the results
      }
      break;
    case 'species':
      for (let i = 0; i < data.length; i++) {
        renderResults.innerHTML += `<div class='renderContent'><p>Name: ${data[i].name}</p><p>Classification: ${data[i].classification}</p><p>Language: ${data[i].language}</p><a href="#">More</a></div>`;
      }
      break;
    case 'planets':
      for (let i = 0; i < data.length; i++) {
        renderResults.innerHTML += `<div class='renderContent'><p>Name: ${data[i].name}</p><p>Climate: ${data[i].climate}</p><p>Population: ${data[i].population}</p><a href="#">More</a></div>`;
      }
      break;
    case 'people':
      for (let i = 0; i < data.length; i++) {
        renderResults.innerHTML += `<div class='renderContent'><p>Name: ${data[i].name}</p><p>Birth year: ${data[i].birth_year}</p><p>Gender: ${data[i].gender}</p><a href="#">More</a></div>`;
      }
      break;
      case 'vehicles':
        for (let i = 0; i < data.length; i++) { //for loop based on the length of the search results we get     
          renderResults.innerHTML += 
          `<div class='renderContent'><div class="vehicles"><p>Name: ${data[i].name}</p><p>Model: ${data[i].model}</p><p>Manufacturer: ${data[i].manufacturer}</p><a href="#">More</a></div></div>`  //renders all the results           
        }

        break;
        case 'films':
          for (let i = 0; i < data.length; i++) { //for loop based on the length of the search results we get
            
            renderResults.innerHTML += 
            `<div class='renderContent'><div class="star-wars"><div class="crawl"><p><h1>EPISODE: ${data[i].episode_id}</h1></p><p><h3>TITLE: ${data[i].title}</h3<br><br></p><p> ${data[i].opening_crawl}</p><a href="#">More</a></div></div></div>`  //renders all the results
          }
          break;
    default:
      renderResults.innerHTML += `<div class='renderContent'><p>Couldn't find what you're looking for. Please try again!</p></div>`;
      break;
  }
}
