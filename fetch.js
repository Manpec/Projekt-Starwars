document.getElementById("searchBtn").addEventListener("click", starwarsSearch);
document.getElementById("searchBtn").addEventListener("click", empty);  
document.getElementById('search').addEventListener('keyup', (event) => {
  if (event.code === 'Enter') {
    starwarsSearch();
  }
});
function empty() {  
  results = [];  //Empty results array
}
let results = [];
async function starwarsSearch() {
  document.getElementById('mainTitle').innerHTML = ``; //Removes animation 
  let loader = `<div class="boxLoading"></div>`; //loader gets html
  document.getElementById('loading').innerHTML = loader; //div id loading gets html
  let select = document.getElementById('select').value;
  let search = document.getElementById('search').value;
  let result = document.getElementById('result');
 
  let url = (`https://swapi.dev/api/${select}/?search=${search}`);
  
  do {
    let res = await fetch(`${url}`);
    let data = await res.json();
    url = data.next;  // use the next url in the array
    results.push(...data.results);  //Puts the result into the array results
    renderData(results, select);
    document.getElementById('loading').innerHTML = ``; //removes html from id loading when call is done
    if (data.count === 0) {
      // If search term can't be found show this message
      result.innerHTML = `Couldn't find what you're looking for. Please try again!`;
    } else {
console.log(results)
    //  console.log('data', data.results);

    }
  } while(url)
  
  return results;
}

/*OLD FETCH
function starwarsSearch() {
  let loader = `<div class="boxLoading"></div>`;//loader gets html
  document.getElementById('loading').innerHTML = loader; //div id loading gets html
  let select = document.getElementById('select').value;
  console.log(select);
  let search = document.getElementById('search').value;
  console.log(search);
  let result = document.getElementById('result');
  let input = document.getElementById('search');
  input.value = ''; // Clears input field after searching
  fetch(`https://swapi.dev/api/${select}/?search=${search}`)
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
      document.getElementById('loading').innerHTML = ``;//removes html from id loading when call is done
      document.getElementById('mainTitle').innerHTML = ``;//removes html from id loading when call is done
    });
}
*/