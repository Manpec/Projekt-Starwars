
/**
 * This function runs only once when the page is loaded.
 * It sets up the start page so the user can start using the application
 */
function init() {
    addCategoriesToSelection();
    setUpStartPageAnimation();
    executeSearch();
  }


function executeSearch() {
  let results = []; // An empty array to fill using a loop
  //Executes the search function when the user clicks the searchBtn
  document.getElementById('searchBtn').addEventListener('click', () => {
    starwarsSearch(results);
    results = [] // Empty results array otherwise we keep building the array forever 
    }); 
  //Executes the search function when the user presses the enter key
  document.getElementById('search').addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
      starwarsSearch(results);
      results = [] // Empty results array otherwise we keep building the array forever 
    }
  });
}

init();