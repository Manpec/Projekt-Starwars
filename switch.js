
  function renderData (data, option){ //data = data.results to get the array of resultobjects
    let renderResults = document.getElementById('result') //gets the div in where we are gonna render our search results
    renderResults.innerHTML=``//Resets the innerHTML to prevent previous searches to render on the website
 
     switch (option) { //a switch which gets the parameter option which is one of [people, starships, and so on]
       case 'starships':
                 for (let i = 0; i < data.length; i++) { //for loop based on the length of the search results we get
                   renderResults.innerHTML += 
                   `<div class='renderContent'><p>Name: ${data[i].name}</p><p>Model: ${data[i].model}</p><p>Manufacturer: ${data[i].manufacturer}</p></div>`  //renders all the results                                
                 }              
         break;
         case 'vehicles':
           for (let i = 0; i < data.length; i++) { //for loop based on the length of the search results we get     
             renderResults.innerHTML += 
             `<div class='renderContent'><div class="vehicles"><p>Name: ${data[i].name}</p><p>Model: ${data[i].model}</p><p>Manufacturer: ${data[i].manufacturer}</p></div></div>`  //renders all the results           
           }
   
           break;
           case 'films':
             for (let i = 0; i < data.length; i++) { //for loop based on the length of the search results we get
               
               renderResults.innerHTML += 
               `<div class='renderContent'><div class="star-wars"><div class="crawl"><p><h1>EPISODE: ${data[i].episode_id}</h1></p><p><h3>TITLE: ${data[i].title}</h3<br><br></p><p> ${data[i].opening_crawl}</p></div></div></div>`  //renders all the results
             }
             default:
 
               break;
               
     }
     
     error(); // Start function error
   }
 