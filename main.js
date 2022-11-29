
/**
 * This function runs only once when the page is loaded.
 * It sets up the start page so the user can start using the application
 */
function init() {
    addCategoriesToSelection();
    setUpStartPageAnimation();
    searchHandler();
  }


function searchHandler() {
  let results = []; //An empty array used to fill with the search results
  
  //Executes the search function when the user clicks the searchBtn
  document.getElementById('searchBtn').addEventListener('click', () => {
    executeSearch(results);
    results = [] // Empty results array otherwise we keep building the array forever 
    }); 
  //Executes the search function when the user presses the enter key
  document.getElementById('searchBtn').addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
      executeSearch(results);
      results = [] // Empty results array otherwise we keep building the array forever 
    }
  });
}

init();