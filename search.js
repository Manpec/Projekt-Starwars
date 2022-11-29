
function searchHandler() {
  
  let results = []; //An empty array used to fill with the search results
  
  //Executes the search function when the user clicks the searchBtn
  document.getElementById('searchBtn').addEventListener('click', () => {
    executeSearch(results);
    results = []; // Empty results array otherwise we keep building the array forever 
    }); 
  //Executes the search function when the user presses the enter key
  document.getElementById('search').addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
      executeSearch(results);
      results = []; // Empty results array otherwise we keep building the array forever 
    }
  });
}

async function executeSearch(results) {
  startSearchSpinner();
  
  let selectedCategory = document.getElementById('select').value;
  let searchInput = document.getElementById('search').value;
  // The second input variable is neccesary because if you clear the searchInput insted of the input the search results will not be specified
  let input = document.getElementById('search');
  input.value = ''; // Clears input field after searching

  let url = `https://swapi.dev/api/${selectedCategory}/?search=${searchInput}`;

  do {
    let res = await fetch(`${url}`);
    if(res.ok) {
      let data = await res.json();
      url = data.next; // use the next url in the array
      results.push(...data.results); //Puts the result into the array results
      renderSeachData(results, selectedCategory); //results = an array of objectresults, select = the option we chose-> people, vehicles, starships, planets, movies
    
      if (data.count === 0) {   // If search term can't be found show this message
        document.getElementById('result').innerHTML = `Couldn't find what you're looking for. Please try again!`;
      } 
  }

  } while (url); //The do...while statements will be executed as long as the url string contains something

}

function startSearchSpinner() {
  document.getElementById('mainTitle').innerHTML = ''; //Removes animation
  let loader = `<div class="boxLoading"></div>`; //loading spinner starts
  document.getElementById('loading').innerHTML = loader; //div id loading gets html
}

