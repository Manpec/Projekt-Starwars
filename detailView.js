/**
 *      Buggar
 * 
 *      - Fixa min fetch så jag använder promises och inte async await (fattar fortfarande inte promises så gjorde såhär sålänge bara för att få det att funka hahaha så jag kunde göra allt annat)
 * 
 *      - När man trycker på more knappen, sen back to search knappen och sen more knappen igen försvinner allting
 * 
 *      
 *      Styling saker
 *      - När man försöker trycka på more för filmerna blir det lite jobbigt med animationen, kanske att vi gör more knappen fast eller har animationen när man trycker på detaljvyn 
 * 
 *      - När searchrutan försvinner i detaljvyn flyttar sig loggan
 * 
 *      - När sökrutan visas igen lägger elementen sig vågrätt istället för lodrätt
 */


/**
 * Functions that will hide the result and show the detailview of the choosen category
 * Id is used to identify the selected index of the data array
 */
function showDetailInfoStarships(data, id) {
    moreButtonPressed();
    document.getElementById('detailView').innerHTML += 
        `<span id="name">${data[id].name}</span>
        <div>
          <ul>
            <li><strong>Carco Capacity:</strong> ${data[id].cargo_capacity}</li>
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

    document.getElementById('backBtn').addEventListener('click', backToSearch);
}

async function showDetailInfoSpecies(data, id) {
    moreButtonPressed();
    document.getElementById('detailView').innerHTML += 
        `<span id="name">${data[id].name}</span>
        <div>
          <ul>
            <li><strong>Average Height:</strong> ${data[id].average_height}</li>
            <li><strong>Average Lifespan:</strong> ${data[id].average_lifespan}</li>
            <li><strong>Classification:</strong> ${data[id].classification}</li>
          </ul>
          <ul>
            <li><strong>Skin Colors:</strong> ${data[id].skin_colors}</li>
            <li><strong>Eye Colors:</strong> ${data[id].eye_colors}</li>
            <li><strong>Hair Colors:</strong> ${data[id].hair_colors}</li>
          </ul>
          <ul>
            <li><strong>Homeworld:</strong> ${await fetchAttributeInfo(data[id].homeworld)}</li>
            <li><strong>Language:</strong> ${data[id].language}</li>
            <li><strong>Designation:</strong> ${data[id].designation}</li>
          </ul>
        </div>
        <button id="backBtn">Back to Search</button>`; 

    document.getElementById('backBtn').addEventListener('click', backToSearch);
}


function showDetailInfoPlanets(data, id) {
    moreButtonPressed();
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

    document.getElementById('backBtn').addEventListener('click', backToSearch);
}

async function showDetailInfoPeople(data, id) {    
    moreButtonPressed();
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
            <li><strong>Homeworld:</strong> ${await fetchAttributeInfo(data[id].homeworld)}</li>
            <li><strong>Number of Movies:</strong> ${data[id].films.length}</li>
            <li><strong>Number of Vehicles:</strong> ${data[id].vehicles.length}</li>
          </ul>
        </div>
        <button id="backBtn">Back to Search</button>`; 

    document.getElementById('backBtn').addEventListener('click', backToSearch);
}

showDetailInfoVehicles(data, id) {
    moreButtonPressed();
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

    document.getElementById('backBtn').addEventListener('click', backToSearch);
}

function showDetailInfoFilms(data, id) {
    moreButtonPressed();

    document.getElementById('detailView').innerHTML += 
        `<span id="name">${data[id].title}</span>
        <div>
          <ul>
            <li><strong>Director:</strong> ${data[id].director}</li>
            <li><strong>Film Number:</strong> ${data[id].episode_id}</li>
            <li><strong>Producer:</strong> ${data[id].producer}</li>
          </ul>
          <ul>
            <li><strong>Release Date:</strong> ${data[id].release_date}</li>
            <li><strong>Number of Characters:</strong> ${data[id].characters.length}</li>
            <li><strong>Opening Crawl:</strong> ${data[id].opening_crawl}</li>
          </ul>
        </div>
        <button id="backBtn">Back to Search</button>`; 

    document.getElementById('backBtn').addEventListener('click', backToSearch);
}

/**
 * Hides the search results and displays the detail view
 */
function moreButtonPressed() {
    let result = document.getElementById('result');
    result.style.display = 'none';
    document.getElementById('searchHeader').style.display = 'none';
}

/**
 * Hides the detailview and show the search page again
 */
function backToSearch() {    
    let detailView = document.getElementById('detailView'); 
    detailView.style.display = 'none';
    result.style.display = 'block';
    document.getElementById('searchHeader').style.display = 'block';
}

/**
 * Fetches the correct attribute based on the response that is in the data object and returns it to
 * be shown for the user.
 */
async function fetchAttributeInfo(url) {
    let fetchedData = '';

    let response = await fetch(url);
    if(response.ok) {
        fetchedData = await response.json();

    }

/*    fetch(url)
        .then((response) => {
            if (response.ok) {
            return response.json();
            }
        })
        .then((data) => {
            console.log(data.name)
            fetchedData = data.name;
        })
        .catch(() => {
            return '';
        });*/

      return fetchedData.name;
}



