
    case 'starships':
      for (let i = 0; i < data.length; i++) {
        //for loop based on the length of the search results we get
        renderResults.innerHTML += 
        `<div>
            <ul class="d-flex flex-row">
              <li>Name: ${data[i].name}</li>
              <li>Model: ${data[i].model}</li>
              <li>Manufacturer: ${data[i].manufacturer}</li>
            </ul>
            <button class="moreBtn" id=${i}>More</button>
          </div>`; //renders all the results
      }

    case 'species':
      for (let i = 0; i < data.length; i++) {
        renderResults.innerHTML += 
        `<div>
            <ul class="d-flex flex-row">
              <li>Name: ${data[i].name}</li>
              <li>Classification: ${data[i]. classification}</li>
              <li>Language: ${data[i].language}</li>
            </ul>
            <a href="#">More</a>
          </div>`;
      }

    case 'planets':
      for (let i = 0; i < data.length; i++) {
        renderResults.innerHTML +=
        `<div>
            <ul class="d-flex flex-row">
              <li>Name: ${data[i].name}</li>
              <li>Climate: ${data[i].climate}</li>
              <li>Population: ${data[i].population}</li>
            </ul>
            <button class="moreBtn" id=${i}>More</button>
          </div>`;
      }

    case 'people':
      for (let i = 0; i < data.length; i++) {
        renderResults.innerHTML += 
        `<div>
          <ul class="d-flex flex-row">
            <li>Name: ${data[i].name}</li>
            <li>Birth year: ${data[i].birth_year}</li>
            <li>Gender: ${data[i].gender}</li>
          </ul>
          <button class="moreBtn" id=${i}>More</button>
          </div>`;
      }

    case 'vehicles':
      for (let i = 0; i < data.length; i++) {
        //for loop based on the length of the search results we get
        renderResults.innerHTML += 
        `<div>
          <ul class="d-flex flex-row">
            <li>Name: ${data[i].name}</li>
            <li>Model: ${data[i].model}</li>
            <li>Manufacturer: ${data[i].manufacturer}</li>
          </ul>
          <button class="moreBtn" id="${i}">More</button>
        </div>`; //renders all the results
      }
