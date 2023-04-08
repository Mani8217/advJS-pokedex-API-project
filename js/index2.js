document.addEventListener("DOMContentLoaded" , function(){

const search = document.querySelector('#search');
const subject = document.querySelector('#pokemon_name');
const container = document.getElementById('container');



search.disabled = true;
subject.onkeyup = () => {
    
if(subject.value.length > 0){
    search.disabled = false;
    
}else {
    search.disabled = true;
}
 
}


search.onclick = function pokemonSearch(){  
  container.innerHTML = "";
fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
.then(res => res.json())
.then(data => {
    const results = data.results;
    console.log(results);

    results.forEach(result => {
        if(result.name.includes(subject.value)){
          let url = `${result.url}`
        
          fetch(url)
          .then(res => res.json())
          .then(data => {
            
            console.log(data)
            const card = document.createElement('div');
            card.className= 'card';
            container.append(card)

           const abilities = data.abilities;
           console.log(data.name)
           const pokName = document.createElement('h3');
           pokName.innerHTML = data.name;
           card.append(pokName)

            
            for(let i = 0; i < 2 ; i++){
               
            console.log(abilities[i].ability.name)
            const span1 = document.createElement('span');
            span1.innerHTML = abilities[i].ability.name;
            card.appendChild(span1)
            }
             const imgKey = Object.keys(data.sprites)

             const sources= []
             imgKey.forEach(key => {
              
              sources.push(data.sprites[key])
              
              console.log(sources)
              
              const image = document.createElement('img')
              sources.forEach(source => {
                
                image.src = source;
              
              })
              
             
              card.append(image)
             }) 
            

           search.disabled = true;
           subject.value = "";
           

            

            
             
             
    

          
        
        
        
        
        
        
        
        
        
        
        })
        }
    })
})

}

})