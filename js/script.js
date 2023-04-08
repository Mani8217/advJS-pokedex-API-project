const search = document.querySelector('#search');
const subject = document.querySelector('#pokemon_name');
const container = document.getElementById('container');


fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
.then(res => res.json())
.then(data => {
    const results = data.results;
    results.forEach(result => {
      
      fetch(result.url)
      .then(response => response.json())
      .then(data => {
       
        let pokiname = data.name;
        let urls = data.sprites; 
      
         Object.keys(urls).forEach((key) => {
            
            console.log(urls[key]);
            
            
         })
       
        
        
        
       
        container.innerHTML += `<div class="card">
            
             <div class="card-body">
             <h5 class="card-title">${pokiname}</h5>
             </div>
          </div>`;
        
       
       
        
      })
   
        
    })
   
    
})


