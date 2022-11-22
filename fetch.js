
addCategoriesToSelection();


function addCategoriesToSelection() {
  fetch("https://swapi.dev/api/")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
        console.log(data);
      let arrayOfCategories = Object.keys(data); 
      for (i = 0; i < arrayOfCategories.length; i++) {
        let category = arrayOfCategories[i];
        document.getElementById("select").innerHTML += `<option value="${category}">${category}</option>`;
      }
    });
}



function starwarsSearch(){
    let select =document.getElementById('select').value;
    let search = document.getElementById('search').value;
    let selection = select;
    let input = search;
    fetch(`https://swapi.dev/api/${selection}/${input}`)
    .then(response => {
        if(response.ok) {
       return response.json();     
   } 
   
})
.then(dataSelection => {
    let selection = document.getElementById('select').value;
    if(selection == 'films') {  
        return document.getElementById("result").innerHTML=`<br><h2>${dataSelection.title}</h2><br><h4>Episode ${dataSelection.episode_id}</h4><br><br>${dataSelection.opening_crawl}`  
    }
    else if(selection == 'vehicles') {  
        return document.getElementById("result").innerHTML=`<br><h2>${dataSelection.name}</h2><br><h4>Model: ${dataSelection.model}</h4><br><br>Manufacturer: ${dataSelection.manufacturer}`  
    }
    else if(selection == 'people') {  
        return document.getElementById("result").innerHTML=`<br><h2>${dataSelection.name}</h2><br><h4>gender: ${dataSelection.gender}</h4><br><br>Height: ${dataSelection.height} cm`  
    }

})



.catch(() => {
 
 document.getElementById("result").innerHTML=`ERROR number does not exist, try another number`  
})
}
