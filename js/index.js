function Card(image, name) {
  this.image = image;
  this.name = name;


  this.render = function() {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("myCard");

    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", this.imageUrl);

    const nameElement = document.createElement("h2");
    nameElement.textContent = this.name;

    cardContainer.appendChild(imageElement);
    cardContainer.appendChild(nameElement);

    return cardContainer;
  };
}

 const Button = document.querySelector("#btn");
 const Input = document.querySelector("#input-pokemon");
 const  Container = document.querySelector("#container");
 const newUrl = document.querySelector("#img-input");
 const pokName = document.querySelector("#poki-name");
 const createButton = document.querySelector("#createNewEl");
const container2 = document.querySelector(".container2");
let cardImg = newUrl.value;
let cardName = pokName.value;


 createButton.addEventListener('click' , function(){
  
  const card1 = new Card(cardImg, cardName);
  const card1Element = card1.render();
  container2.appendChild(card1Element);


 }) 




 function showPage(page){
  document.querySelectorAll(".divs").forEach(div => {
    div.style.display = 'none';
  });
  document.querySelector(`#${page}`).style.display = 'block';
 }     
 document.querySelectorAll('.buttons').forEach(button => {
  button.addEventListener('click' , function() {
    showPage(this.dataset.page);
  })
 })


         Button.disabled = true;
          Input.onkeyup = () => {
    
         if(Input.value.length > 0){
             Button.disabled = false;

         }else {
             Button.disabled = true;
        }

      }
      async function getPokemon(){ 
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
        const jsonData = await response.json();
        console.log(jsonData)
        const results = jsonData.results;
        console.log(results)
        results.forEach(result => {
          
          fetch(result.url)
          .then(res => res.json())
          .then(data => {
            console.log(data.sprites)
            const imgKey = Object.keys(data.sprites)
            const sources = []
            imgKey.forEach(key => {
              if(typeof data.sprites[key] === 'string'){
              sources.push(data.sprites[key])
              }
            })
            console.log(sources)
            const card = document.createElement("div");
            card.className="card";
            const Image = document.createElement('img');
            sources.forEach(source => {
              Image.src = source;
            })
            card.append(Image)

            const pokiName = document.createElement('h3');
            pokiName.className = "poki-name";
            pokiName.innerHTML = data.name;
            card.append(pokiName);
            
            const abilities = data.abilities;
            for(let i = 0; i < 2 ; i++){
               
              
              const span1 = document.createElement('span');
              span1.innerHTML = abilities[i].ability.name;
              card.append(span1)
              }
          
            Container.append(card)
          })
          
        })
        

      }
        console.log(Container)
        Button.addEventListener('click' , function() {
          
          
          fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
          .then(res => res.json())
          .then(data => {
              const results = data.results;
              console.log(results);
          
              results.forEach(result => {
                  if(result.name.includes(Input.value)){
                    Container.innerHTML = "";
                    let url = `${result.url}`
                  
                    fetch(url)
                    .then(res => res.json())
                    .then(data => {
                      
                      console.log(data)
                      const card = document.createElement('div');
                      card.className= 'card';
                      Container.append(card)
          
                     const abilities = data.abilities;
                    
          
                      
                    
                       const imgKey = Object.keys(data.sprites)
          
                       const sources= []
                       imgKey.forEach(key => {
                        if(typeof data.sprites[key] === 'string'){
                        sources.push(data.sprites[key])
                        }
                        
                        console.log(sources)
                      
                        
                       }) 
                      
                        
                       const image = document.createElement('img')
                       sources.forEach(source => {
                         
                         image.src = source;
                       
                       })
                       card.append(image)
          
                       console.log(data.name)
                       const pokiName = document.createElement('h3');
                       pokiName.style.color = "white"
                       pokiName.innerHTML = data.name;

                       card.append(pokiName)
          
                       for(let i = 0; i < 2 ; i++){
                         
                        console.log(abilities[i].ability.name)
                        const Span = document.createElement('span');
                        Span.innerHTML = abilities[i].ability.name;
                        card.appendChild(Span)
                        }

                        
                       
                       
                     search.disabled = true;
                     subject.value = "";
      })
    }
  
  })

          
})
         
        })               

    getPokemon()
    
