function renderSeachData(data, option) {
  document.getElementById('loading').innerHTML = ``; //Stops the loading spinner
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

/**
 * Functions that adds the html to display the search results for the user
 */
//#region Print Result Tags
function printStarshipToResultTag(data) {
  for (let i = 0; i < data.length; i++) {
    //for loop based on the length of the search results we get
    document.getElementById('result').innerHTML += `<div class ="infoCards">
        <ul">
          <li><strong>Name:</strong> ${data[i].name}</li>
          <li><strong>Model:</strong> ${data[i].model}</li>
          <li><strong>Manufacturer:</strong> ${data[i].manufacturer}</li>
          <li><button class="moreBtn" id=${i}>More</button></li>
          </ul>
      </div>`;
  }
}

function printSpeciesToResultTag(data) {
  for (let i = 0; i < data.length; i++) {
    //for loop based on the length of the search results we get
    document.getElementById('result').innerHTML += `<div class ="infoCards">
        <ul>
          <li><strong>Name:</strong> ${data[i].name}</li>
          <li><strong>Classification:</strong> ${data[i].classification}</li>
          <li><strong>Language:</strong> ${data[i].language}</li>
          <li><button class="moreBtn" id=${i}>More</button></li>
          </ul>
      </div>`;
  }
}

function printPlanetsToResultTag(data) {
  for (let i = 0; i < data.length; i++) {
    //for loop based on the length of the search results we get
    document.getElementById('result').innerHTML += `<div class ="infoCards">
        <ul>
          <li><strong>Name:</strong> ${data[i].name}</li>
          <li><strong>Climate:</strong> ${data[i].climate}</li>
          <li><strong>Population:</strong> ${data[i].population}</li>
          <li><button class="moreBtn" id=${i}>More</button></li>
          </ul>
      </div>`;
  }
}

function printPeopleToResultTag(data) {
  for (let i = 0; i < data.length; i++) {
    //for loop based on the length of the search results we get
    document.getElementById('result').innerHTML += `<div class ="infoCards">
      <ul>
        <li><strong>Name:</strong> ${data[i].name}</li>
        <li><strong>Birth year:</strong> ${data[i].birth_year}</li>
        <li><strong>Gender:</strong> ${data[i].gender}</li>
        <li><button class="moreBtn" id=${i}>More</button></li>
      </ul>
      </div>`;
  }
}

function printVehiclesToResultTag(data) {
  for (let i = 0; i < data.length; i++) {
    //for loop based on the length of the search results we get
    document.getElementById('result').innerHTML += `<div class ="infoCards">
      <ul>
        <li><strong>Name:</strong> ${data[i].name}</li>
        <li><strong>Model:</strong> ${data[i].model}</li>
        <li><strong>Manufacturer:</strong> ${data[i].manufacturer}</li>
        <li><button class="moreBtn" id=${i}>More</button></li>
        </ul>
    </div>`;
  }
}

function printFilmsToResultTag(data) {
  for (let i = 0; i < data.length; i++) {
    //for loop based on the length of the search results we get
    document.getElementById('result').innerHTML += `<div class ="infoCards">
    <ul>
      <li><strong>Episode:</strong> ${data[i].episode_id}</li>
      <li><strong>Title:</strong> ${data[i].title}</li>  
      <li><button class="moreBtn" id=${i}>More</button></li>
      </ul>
  </div>`;
  } // <br><br></p><p> ${data[i].opening_crawl}</p>
}

function printErrorToResultTag() {
  document.getElementById('result').innerHTML += `<div class='renderContent'>
    <p>Couldn't find what you're looking for. Please try again!</p>
  </div>`;
}
//#endregion

/**
 * Generates the click-eventlistener for all the available more buttons for the search result
 * And calls the correct function based on the parameter from the switch case.
 */
function generateMoreBtn(func, data) {
  // Adding eventlisteners to every moreBtn
  document.querySelectorAll('.moreBtn').forEach((button) => {
    button.addEventListener('click', () => {
      //sends the data and the id of the button that is clicked.
      func(data, button.id);
    });
  });
}
