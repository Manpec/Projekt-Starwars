/**
 * This function runs only once when the page is loaded.
 * It sets up the start page so the user can start using the application
 */
function init() {
  addCategoriesToSelection();
  toggleThemeSong();
  setUpStartPageAnimation();
  searchHandler();
}

init();
