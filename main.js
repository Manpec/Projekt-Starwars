
/**
 * This function runs only once when the page is loaded.
 * It sets up the start page so the user can start using the application
 */
function init() {
    addCategoriesToSelection();
    setUpStartPageAnimation();
<<<<<<< HEAD
    searchHandler();
  }


function searchHandler() {
  let results = []; //An empty array used to fill with the search results
  
  //Executes the search function when the user clicks the searchBtn
  document.getElementById('searchBtn').addEventListener('click', () => {
    executeSearch(results);
=======
    executeSearch();
  }


function executeSearch() {
  let results = []; // An empty array to fill using a loop
  //Executes the search function when the user clicks the searchBtn
  document.getElementById('searchBtn').addEventListener('click', () => {
    starwarsSearch(results);
>>>>>>> 6abef29b2826e0ac9347e35d66cbbd0048964726
    results = [] // Empty results array otherwise we keep building the array forever 
    }); 
  //Executes the search function when the user presses the enter key
  document.getElementById('search').addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
<<<<<<< HEAD
      executeSearch(results);
=======
      starwarsSearch(results);
>>>>>>> 6abef29b2826e0ac9347e35d66cbbd0048964726
      results = [] // Empty results array otherwise we keep building the array forever 
    }
  });
}

init();