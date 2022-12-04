function searchHandler() {
  let results = []; //An empty array used to fill with the search results
  //Executes the search function when the user clicks the searchBtn
  document.getElementById('searchBtn').addEventListener('click', () => {
    executeSearch(results);
    results = []; // Empty results array otherwise we keep building the array forever
    enableSearchInDetailView();
  });
  //Executes the search function when the user presses the enter key
  document.getElementById('search').addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
      executeSearch(results);
      results = []; // Empty results array otherwise we keep building the array forever
      enableSearchInDetailView();
    }
  });
}

async function executeSearch(results) {
  startSearchSpinner();

  let selectedCategory = document.getElementById('select').value;
  let searchInput = document.getElementById('search').value;
  let errorMessage = document.getElementById('result');
  // The second input variable is neccesary because if you clear the searchInput insted of the input the search results will not be specified
  let input = document.getElementById('search');
  input.value = ''; // Clears input field after searching

  let url = `https://swapi.py4e.com/api/${selectedCategory}/?search=${searchInput}`;

  do {
    let response = await fetch(`${url}`).catch(errorHandler); // We catch the unwanted error with our function errorHander (displays in main.js)
    if (response.ok) {
      let data = await response.json();
      url = data.next; // use the next url in the array
      results.push(...data.results); //Puts the result into the array results
      renderSeachData(results, selectedCategory); //results = an array of objectresults, select = the option we chose-> people, vehicles, starships, planets, movies

      if (data.count === 0) {
        // If search term can't be found show this message
        errorMessage.innerHTML = `Couldn't find what you're looking for. Please try again!`;
        errorMessage.classList.remove('result');
        errorMessage.classList.add('error');
      }
    }
  } while (url); //The do...while statements will be executed as long as the url string contains something
  document.getElementById('loading').innerHTML = ''; //Stops the loading spinner
}

function startSearchSpinner() {
  document.getElementById('mainTitle').innerHTML = ''; //Removes animation
  let loader = `<div class="boxLoading"></div>`; //loading spinner starts
  document.getElementById('loading').innerHTML = loader; //div id loading gets html
}

function enableSearchInDetailView() {
  document.getElementById('detailView').innerHTML = ''; //empty detailsView to search again
  document.getElementById('images').innerHTML = ''; //empty image to search again
  document.getElementById('result').innerHTML = ''; //Empty result before new search is done
  let newResult = document.getElementById('result'); //Find result id
  newResult.style.display = 'grid'; //Tell result id to display grid again
}
