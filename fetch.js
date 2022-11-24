
function starwarsSearch() {
  let loader = `<div class="boxLoading"></div>`;//loader gets html
  document.getElementById('loading').innerHTML = loader; //div id loading gets html
  let select = document.getElementById('select').value; // Selects id select
  let search = document.getElementById('search').value; // selects id search
  
  fetch(`${api}${select}/?search=${search}`) //Puts in url + value from select and search
    .then((response) => { 
      if (response.ok) {
        return response.json();
      }
    })

    .then((data) => {
      console.log('data',data.results);
      renderData(data.results, select) //data.results = an array of objectresults, select = the option we chose-> people, vehicles, starships, planets, movies
      document.getElementById('loading').innerHTML = ``;//removes html from id loading when call is done
    })
   

  }
