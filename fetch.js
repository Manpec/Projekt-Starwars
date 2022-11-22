
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
    .then(data => {
            console.log(data) 
         document.getElementById("result").innerHTML=`${data.name}`  
})
}
