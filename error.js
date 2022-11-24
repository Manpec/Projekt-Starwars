function error() {
    let error = document.getElementById('result') // getting the right ID
    if(error.childNodes.length === 0 ) {          // checking to see if element is empty. could also use textContent instead of childNodes to allow comments within the element                   
      document.getElementById('result').innerHTML = `<h1>Error. Please try a different search</h1>`;    //If element is empty post error message
    }
   }
   