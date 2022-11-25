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
        `<div class='renderContent'>
            <p>Name: ${data[i].name}</p>
            <p>Model: ${data[i].model}</p>
            <p>Manufacturer: ${data[i].manufacturer}</p>
            <button class="moreBtn" id=${i}>More</button>
        </div>`;
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
        `<div class='renderContent'>
            <p>Name: ${data[i].name}</p>
            <p>Classification: ${data[i].classification}</p>
            <p>Language: ${data[i].language}</p>
            <button class="moreBtn" id=${i}>More</button>
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
        `<div class='renderContent'>
            <p>Name: ${data[i].name}</p>
            <p>Climate: ${data[i].climate}</p>
            <p>Population: ${data[i].population}</p>
            <button class="moreBtn" id=${i}>More</button>
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
        `<div class='renderContent'>
            <p>Name: ${data[i].name}</p>
            <p>Birth year: ${data[i].birth_year}</p>
            <p>Gender: ${data[i].gender}</p>
            <button class="moreBtn" id=${i}>More</button>
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
        for (let i = 0; i < data.length; i++) { //for loop based on the length of the search results we get     
          renderResults.innerHTML += 
          `<div class='renderContent'>
            
              <p>Name: ${data[i].name}</p>
              <p>Model: ${data[i].model}</p>
              <p>Manufacturer: ${data[i].manufacturer}</p>
              <button class="moreBtn" id="${i}">More</button>
          
          </div>` //renders all the results    
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
            `<div class='renderContent'>
                 <h1>EPISODE: ${data[i].episode_id}</h1>
                 <p><h3>TITLE: ${data[i].title}</h3<br><br></p><p> ${data[i].opening_crawl}</p>
                 <button class="moreBtn" id=${i}>More</button>
            </div> `  //renders all the results
          }
  
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