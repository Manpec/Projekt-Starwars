

// Button and "press enter" search functionality
document.getElementById('searchBtn').addEventListener('click', starwarsSearch);
document.getElementById('search').addEventListener('keyup', (event) => {
  if (event.code === 'Enter') {
    starwarsSearch();
  }
});



function starwarsSearch() {
  document.getElementById('mainTitle').innerHTML = ``;
  let loader = `<div class="boxLoading"></div>`; //loader gets html
  document.getElementById('loading').innerHTML = loader; //div id loading gets html
  let select = document.getElementById('select').value;
  let search = document.getElementById('search')
  let result = document.getElementById('result');
  let input = document.getElementById('search');
  input.value = ''; // Clears input field after searching
  url = ("https://swapi.dev/api/")
  fetch(`${url}${select}/?search=${search}`)
    .then((response) => {
      if (response.ok) {
        console.log(response)
        
        return response.json();
      }
    })
    .then((data) => {
      if (data.count === 0) {
        // If search term can't be found show this message
        result.innerHTML = `Couldn't find what you're looking for. Please try again!`;
      } else {
        console.log('data', data.results);
        renderData(data.results, select); //data.results = an array of objectresults, select = the option we chose-> people, vehicles, starships, planets, movies
      }
      document.getElementById('loading').innerHTML = ``; //removes html from id loading when call is done
    });
}




