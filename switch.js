function renderData(data, option) {
  document.getElementById('result').innerHTML = ''; //Resets the innerHTML to prevent previous searches to render on the website
  switch (
    option //a switch which gets the parameter option which is one of [people, starships, and so on]
  ) {
    case 'starships':
      printStarshipToResultTag(data);
      generateMoreBtn(showDetailInfoStarships, data);
      break;
      case 'species':
        printSpeciesToResultTag(data);
        generateMoreBtn(showDetailInfoSpecies, data);
      break;

      case 'planets':
        printPlanetsToResultTag(data);
        generateMoreBtn(showDetailInfoPlanets, data);
      break;

      case 'people':
        printPeopleToResultTag(data);
        generateMoreBtn(showDetailInfoPeople, data);
      break;
      case 'vehicles':
        printVehiclesToResultTag(data);
        generateMoreBtn(showDetailInfoVehicles, data);
        break;
        case 'films':
          printFilmsToResultTag(data);
          generateMoreBtn(showDetailInfoFilms, data);
          break;
    default:
      printErrorToResultTag();
      break;
  }
}


function printStarshipToResultTag(data){
  for (let i = 0; i < data.length; i++) { //for loop based on the length of the search results we get
        document.getElementById('result').innerHTML += 
    `<div class ="infoCards">
        <ul">
          <li>Name: ${data[i].name}</li>
          <li>Model: ${data[i].model}</li>
          <li>Manufacturer: ${data[i].manufacturer}</li>
          <li><button class="moreBtn" id=${i}>More</button></li>
          </ul>
      </div>`; 
  } 
}

function printSpeciesToResultTag(data){
  for (let i = 0; i < data.length; i++) { //for loop based on the length of the search results we get
    document.getElementById('result').innerHTML += 
    `<div class ="infoCards">
        <ul>
          <li>Name: ${data[i].name}</li>
          <li>Classification: ${data[i]. classification}</li>
          <li>Language: ${data[i].language}</li>
          <li><button class="moreBtn" id=${i}>More</button></li>
          </ul>
      </div>`;
  }
}

function printPlanetsToResultTag(data){
  for (let i = 0; i < data.length; i++) { //for loop based on the length of the search results we get
    document.getElementById('result').innerHTML += 
    `<div class ="infoCards">
        <ul>
          <li>Name: ${data[i].name}</li>
          <li>Climate: ${data[i].climate}</li>
          <li>Population: ${data[i].population}</li>
          <li><button class="moreBtn" id=${i}>More</button></li>
          </ul>
      </div>`;
  }
}

function printPeopleToResultTag(data){
  for (let i = 0; i < data.length; i++) { //for loop based on the length of the search results we get
    document.getElementById('result').innerHTML += 
    `<div class ="infoCards">
      <ul>
        <li><strong>Name:</strong> ${data[i].name}</li>
        <li>Birth year: ${data[i].birth_year}</li>
        <li>Gender: ${data[i].gender}</li>
        <li><button class="moreBtn" id=${i}>More</button></li>
      </ul>
      </div>`;
  }
}

function printVehiclesToResultTag(data){
  for (let i = 0; i < data.length; i++) { //for loop based on the length of the search results we get
    document.getElementById('result').innerHTML += 
    `<div class ="infoCards">
      <ul>
        <li>Name: ${data[i].name}</li>
        <li>Model: ${data[i].model}</li>
        <li>Manufacturer: ${data[i].manufacturer}</li>
        <li><button class="moreBtn" id=${i}>More</button></li>
        </ul>
    </div>`; 
  }
}

function printFilmsToResultTag(data){
  
  for (let i = 0; i < data.length; i++) { //for loop based on the length of the search results we get
    document.getElementById('result').innerHTML += 
    `<div class ="infoCards">
    <ul>
      <li>EPISODE:${data[i].episode_id}</li>
      <li>TITLE: ${data[i].title}</li>  
      <li><button class="moreBtn" id=${i}>More</button></li>
      </ul>
  </div>`;
  } // <br><br></p><p> ${data[i].opening_crawl}</p>
}

function printErrorToResultTag(){
  document.getElementById('result').innerHTML += 
  `<div class='renderContent'>
    <p>Couldn't find what you're looking for. Please try again!</p>
  </div>`;
}

/**
 * Generates the click-eventlistener for all the available more buttons for the search result
 * And calls the correct function based on the parameter from the switch case. 
 */
function generateMoreBtn(func, data) {

          // Adding eventlisteners to every moreBtn
          document.querySelectorAll('.moreBtn').forEach(button => {
          button.addEventListener('click', () => {
            //sends the data and the id of the button that is clicked.  
            func(data, button.id);
          });
        });

}