
//#region Display Detail Info
/**
 * Functions that will hide the result and show the detailview of the choosen category
 * Id is used to identify the selected index of the data array
 */
function showDetailInfoStarships(data, id) {
  moreButtonPressed();

  //newObj = data.map((item, i)=>({...item, image: starshipsImages[i]}));

  document.getElementById('detailView').innerHTML += 
        `<span id="name">${data[id].name}</span>
        <div class="allInfo">
          <ul>
            <li><strong>Cargo Capacity:</strong> ${data[id].cargo_capacity}</li>
            <li><strong>Passengers:</strong> ${data[id].passengers}</li>
            <li><strong>Starship Class:</strong> ${data[id].starship_class}</li>
          </ul>
          <ul>
            <li><strong>Crew:</strong> ${data[id].crew}</li>
            <li><strong>Hyperdrive Rating:</strong> ${data[id].hyperdrive_rating}</li>
            <li><strong>Length:</strong> ${data[id].length}</li>
          </ul>
          <ul>
            <li><strong>Manufacturer:</strong> ${data[id].manufacturer}</li>
            <li><strong>Model:</strong> ${data[id].model}</li>
            <li><strong>Manufacturer:</strong> ${data[id].manufacturer}</li>
          </ul>
        </div>
        <button id="backBtn">Back to Search</button>`;

  // document.getElementById("images").innerHTML += `<img src=${newObj[id].image} width="250px">`;

  document.getElementById('backBtn').addEventListener('click', backToSearch);
}

async function showDetailInfoSpecies(data, id) {
  moreButtonPressed();

  // newObj = data.map((item, i)=>({...item, image: speciesImages[i]}));

  document.getElementById('detailView').innerHTML += 
        `<span id="name">${data[id].name}</span>
        <div>
          <ul>
            <li><strong>Average Height:</strong> ${data[id].average_height}</li>
            <li><strong>Average Lifespan:</strong> ${
              data[id].average_lifespan
            }</li>
            <li><strong>Classification:</strong> ${data[id].classification}</li>
          </ul>
          <ul>
            <li><strong>Skin Colors:</strong> ${data[id].skin_colors}</li>
            <li><strong>Eye Colors:</strong> ${data[id].eye_colors}</li>
            <li><strong>Hair Colors:</strong> ${data[id].hair_colors}</li>
          </ul>
          <ul>
            <li><strong>Homeworld:</strong> ${await fetchAttributeInfo(
              data[id].homeworld
            )}</li>
            <li><strong>Language:</strong> ${data[id].language}</li>
            <li><strong>Designation:</strong> ${data[id].designation}</li>
          </ul>
        </div>
        <button id="backBtn">Back to Search</button>`;

  // document.getElementById("images").innerHTML += `<img src=${newObj[id].image} width="250px">`;

  document.getElementById('backBtn').addEventListener('click', backToSearch);
}

function showDetailInfoPlanets(data, id) {
  moreButtonPressed();

  //newObj = data.map((item, i)=>({...item, image: planetsImages[i]}));

  document.getElementById('detailView').innerHTML += 
        `<span id="name">${data[id].name}</span>
        <div>
          <ul>
            <li><strong>Climate:</strong> ${data[id].climate}</li>
            <li><strong>Diameter:</strong> ${data[id].diameter}</li>
            <li><strong>Gravity:</strong> ${data[id].gravity}</li>
          </ul>
          <ul>
            <li><strong>Orbital Period:</strong> ${data[id].orbital_period}</li>
            <li><strong>Population:</strong> ${data[id].population}</li>
            <li><strong>Rotation Period:</strong> ${data[id].rotation_period}</li>
          </ul>
          <ul>
            <li><strong>Surface Water:</strong> ${data[id].surface_water}</li>
            <li><strong>Terrain:</strong> ${data[id].terrain}</li>
            <li><strong>Number of Films:</strong> ${data[id].films.length}</li>
          </ul>
        </div>
        <button id="backBtn">Back to Search</button>`;

  // document.getElementById("images").innerHTML += `<img src=${newObj[id].image} width="250px">`;

  document.getElementById('backBtn').addEventListener('click', backToSearch);
}

async function showDetailInfoPeople(data, id) {
  moreButtonPressed();

  //newObj = data.map((item, i) => ({ ...item, image: peopleImages[i] }));

  document.getElementById('detailView').innerHTML += 
        `<span id="name">${data[id].name}</span>
        <div>
          <ul>
            <li><strong>Birth Year:</strong> ${data[id].birth_year}</li>
            <li><strong>Eye Color:</strong> ${data[id].eye_color}</li>
            <li><strong>Gender:</strong> ${data[id].gender}</li>
          </ul>
          <ul>
            <li><strong>Hair Color:</strong> ${data[id].hair_color}</li>
            <li><strong>Height:</strong> ${data[id].height} cm</li>
            <li><strong>Skin Color:</strong> ${data[id].skin_color}</li>
          </ul>
          <ul>
            <li><strong>Homeworld:</strong> ${await fetchAttributeInfo(
              data[id].homeworld
            )}</li>
            <li><strong>Number of Movies:</strong> ${data[id].films.length}</li>
            <li><strong>Number of Vehicles:</strong> ${
              data[id].vehicles.length
            }</li>
          </ul>
        </div>
        <button id="backBtn">Back to Search</button>`;

  //document.getElementById('images').innerHTML += `<img src=${newObj[id].image} width="250px">`;

  document.getElementById('backBtn').addEventListener('click', backToSearch);
}

function showDetailInfoFilms(data, id) {
    moreButtonPressed();

    //newObj = data.map((item, i)=>({...item, image: movieImages[i]}));

    document.getElementById('detailView').innerHTML += 
        `<div class="">
        <div class="">
        <span id="name">${data[id].title}</span>
        <div>
          <ul>
            <li><strong>Director:</strong> ${data[id].director}</li>
            <li><strong>Film Number:</strong> ${data[id].episode_id}</li>
            <li><strong>Producer:</strong> ${data[id].producer}</li>
            <li><strong>Release Date:</strong> ${data[id].release_date}</li>
            <li><strong>Number of Characters:</strong> ${data[id].characters.length}</li>
            <li><strong>Opening Crawl:</strong> ${data[id].opening_crawl}</li>
          </ul>
        </div>
        </div>
        </div>
        <button id="backBtn">Back to Search</button>
        `;
    //document.getElementById('images').innerHTML += `<img src=${newObj[id].image} width="250px">`;
    document.getElementById('backBtn').addEventListener("click", backToSearch);
}

function showDetailInfoVehicles(data, id) {
    moreButtonPressed();

  //newObj = data.map((item, i) => ({ ...item, image: vehiclesImages[i] }));

  document.getElementById('detailView').innerHTML += 
        `<span id="name">${data[id].name}</span>
        <div>
          <ul>
            <li><strong>Cargo Capacity:</strong> ${data[id].cargo_capacity}</li>
            <li><strong>Vehicle Class:</strong> ${data[id].vehicle_class}</li>
            <li><strong>Crew:</strong> ${data[id].crew}</li>
          </ul>
          <ul>
            <li><strong>Length:</strong> ${data[id].length}</li>
            <li><strong>Manufacturer:</strong> ${data[id].manufacturer}</li>
            <li><strong>Max Atmospering Speed:</strong> ${data[id].max_atmosphering_speed}</li>
          </ul>
          <ul>
            <li><strong>Model:</strong> ${data[id].model}</li>
            <li><strong>Passengers:</strong> ${data[id].passengers}</li>
            <li><strong>Number of Films:</strong> ${data[id].films.length}</li>
          </ul>
        </div>
        <button id="backBtn">Back to Search</button>`;

  //document.getElementById('images').innerHTML += `<img src=${newObj[id].image} width="250px">`;

  document.getElementById('backBtn').addEventListener('click', backToSearch);
}

//#endregion

/**
 * Hides the search results and displays the detail view
 */
function moreButtonPressed() {
  let result = document.getElementById('result');
  result.style.display = 'none';
  document.getElementById('searchHeader').style.visibility = 'hidden'; //SearchHeader hidden
}

/**
 * Hides the detailview and show the search page again
 */
function backToSearch() {
  document.getElementById('detailView').innerHTML = ``; //Empty detailsView
  document.getElementById('images').innerHTML = ``;
  result.style.display = 'grid'; // Go back to display grid
  document.getElementById('searchHeader').style.visibility = 'visible'; //SearchHeader visible
}

/**
 * Fetches the correct attribute based on the response that is in the data object and returns it to
 * be shown for the user.
 */
async function fetchAttributeInfo(url) {
  try {
    if(url){

      const res = await fetch(url);
      let data = await res.json();
      return data.name;
    }else{
      return "n/a"
    }
  } catch (err) {
    console.log(err);
  }
}