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
        renderResults.innerHTML += 
        `<div>
            <ul class="d-flex flex-row">
              <li>Name: ${data[i].name}</li>
              <li>Model: ${data[i].model}</li>
              <li>Manufacturer: ${data[i].manufacturer}</li>
              <li><button class="moreBtn" id=${i}>More</button></li>
              </ul>
          </div>`; //renders all the results
      }
        // Adding eventlisteners to every moreBtn
        document.querySelectorAll('.moreBtn').forEach(button => {
          button.addEventListener('click', () => {
            //sends the data and the id of the button that is clicked.
            showDetailInfoStarships(data, button.id);
          });
        });
      break;
      case 'species':
        for (let i = 0; i < data.length; i++) {
          renderResults.innerHTML += 
          `<div>
              <ul class="d-flex flex-row">
                <li>Name: ${data[i].name}</li>
                <li>Classification: ${data[i]. classification}</li>
                <li>Language: ${data[i].language}</li>
                <li><button class="moreBtn" id=${i}>More</button></li>
                </ul>
            </div>`;
        }
        // Adding eventlisteners to every moreBtn
        document.querySelectorAll('.moreBtn').forEach(button => {
          button.addEventListener('click', () => {
            //sends the data and the id of the button that is clicked.
            showDetailInfoSpecies(data, button.id);
          });
        });
      break;

      case 'planets':
        for (let i = 0; i < data.length; i++) {
          renderResults.innerHTML +=
          `<div>
              <ul class="d-flex flex-row">
                <li>Name: ${data[i].name}</li>
                <li>Climate: ${data[i].climate}</li>
                <li>Population: ${data[i].population}</li>
                <li><button class="moreBtn" id=${i}>More</button></li>
                </ul>
            </div>`;
        }
        // Adding eventlisteners to every moreBtn
        document.querySelectorAll('.moreBtn').forEach(button => {
          button.addEventListener('click', () => {
            //sends the data and the id of the button that is clicked.
            showDetailInfoPlanets(data, button.id);
          });
        });
      break;

      case 'people':
        for (let i = 0; i < data.length; i++) {
          renderResults.innerHTML += 
          `<div>
            <ul class="d-flex flex-row justify-content-evenly<">
              <li><strong>Name:</strong> ${data[i].name}</li>
              <li>Birth year: ${data[i].birth_year}</li>
              <li>Gender: ${data[i].gender}</li>
              <li><button class="moreBtn" id=${i}>More</button></li>
            </ul>
            </div>`;
        }
        // Adding eventlisteners to every moreBtn
        document.querySelectorAll('.moreBtn').forEach(button => {
          button.addEventListener('click', () => {
            //sends the data and the id of the button that is clicked.
            showDetailInfoPeople(data, button.id);
          });
        });
      break;

      case 'vehicles':
        for (let i = 0; i < data.length; i++) {
          //for loop based on the length of the search results we get
          renderResults.innerHTML += 
          `<div>
            <ul class="d-flex flex-row">
              <li>Name: ${data[i].name}</li>
              <li>Model: ${data[i].model}</li>
              <li>Manufacturer: ${data[i].manufacturer}</li>
              <li><button class="moreBtn" id=${i}>More</button></li>
              </ul>
          </div>`; //renders all the results
        }
        // Adding eventlisteners to every moreBtn
        document.querySelectorAll('.moreBtn').forEach(button => {
          button.addEventListener('click', () => {
            //sends the data and the id of the button that is clicked.
            showDetailInfoVehicles(data, button.id);
          });
        });
        break;

        case 'films':
          for (let i = 0; i < data.length; i++) { //for loop based on the length of the search results we get
            renderResults.innerHTML += 
            `<div>
            <ul class="d-flex flex-row">
              <li>EPISODE:${data[i].episode_id}</li>
              <li>TITLE: ${data[i].title}</li>  
              <li><button class="moreBtn" id=${i}>More</button></li>
              </ul>
          </div>`;
          } // <br><br></p><p> ${data[i].opening_crawl}</p>
        // Adding eventlisteners to every moreBtn
        document.querySelectorAll('.moreBtn').forEach(button => {
          button.addEventListener('click', () => {
            //sends the data and the id of the button that is clicked.
            showDetailInfoFilms(data, button.id);
          });
        });
          break;

    default:
      renderResults.innerHTML += 
      `<div class='renderContent'>
        <p>Couldn't find what you're looking for. Please try again!</p>
      </div>`;
      break;
  }
}