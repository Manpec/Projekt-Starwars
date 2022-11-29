
<<<<<<< HEAD
async function executeSearch(results) {
  startSearchSpinner();
  
  let selectedCategory = document.getElementById('select').value;
  let searchInput = document.getElementById('search').value;
  // The second input variable is neccesary because if you clear the searchInput insted of the input the search results will not be specified
  let input = document.getElementById('search').value;
  input = ''; // Clears input field after searching

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
=======
async function starwarsSearch(results) {
  startSearchSpinner();
  
  let select = document.getElementById('select').value;
  let search = document.getElementById('search').value;
  let input = document.getElementById('search');
  input.value = ''; // Clears input field after searching
  let url = `https://swapi.dev/api/${select}/?search=${search}`;

  do {
    // Do while can cause site to crash and start an endless loop if executed wrong. Make sure the condition is not always true
    let res = await fetch(`${url}`);
    let data = await res.json();
    url = data.next; // use the next url in the array
    results.push(...data.results); //Puts the result into the array results
    renderSeachData(results, select); //results = an array of objectresults, select = the option we chose-> people, vehicles, starships, planets, movies
    
    if (data.count === 0) {
      // If search term can't be found show this message
      document.getElementById(
        'result'
      ).innerHTML = `Couldn't find what you're looking for. Please try again!`;
    } 
  } while (url); //The do...while statements combo defines a code block to be executed once, and repeated as long as a condition is true
>>>>>>> 6abef29b2826e0ac9347e35d66cbbd0048964726

}

function startSearchSpinner() {
  document.getElementById('mainTitle').innerHTML = ``; //Removes animation
  let loader = `<div class="boxLoading"></div>`; //loading spinner starts
  document.getElementById('loading').innerHTML = loader; //div id loading gets html
}

