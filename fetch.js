document.getElementById("searchBtn").addEventListener("click", starwarsSearch);

function starwarsSearch() {
  let loader = document.getElementById('loading')
  loader.innerHTML =`<div class="boxLoading"></div>` //div id loading gets html
  let select = document.getElementById('select').value;
  let search = document.getElementById('search')
  let result = document.getElementById('result');
  fetch(`https://swapi.dev/api/${select}/?search=${search.value}`)
  .then((response) => {
    if (response.ok) {
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
    loader.innerHTML = ``; //removes html from id loading when call is done
  });
  search.value = ''; // Clears input field after searching
}

