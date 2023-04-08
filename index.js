const search = document.querySelector('#search');
const subject = document.querySelector('#pokemon_name');
const container = document.getElementById('container');
const card = document.createElement('div');


container.append(card)
card.className = "card"
function pokemonSearch(){
let num = subject.value;
fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
.then(res => res.json())
.then(data => {
    const results = data.results;
   console.log(data)
    results.forEach(result => {
        //console.log(result)
         
          fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
          .then(res => res.json())
          .then(data => {
            
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
            


          })
       
            })
        })
      

    
    }