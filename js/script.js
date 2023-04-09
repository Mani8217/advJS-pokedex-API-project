document.addEventListener("DOMContentLoaded" , function(){
    const container = document.querySelector('#container');

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
    .then(res => res.json())
    .then(data => {
        const results = data.results;
        console.log(results)

    results.forEach(result => {
        let url = `${result.url}`

        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const card = document.createElement('div');
            card.className = 'card';
            container.append(card);

            const abilities = data.abilities;
            const imgKey = Object.keys(data.sprites);
             const sources = []
            imgKey.forEach(key => {
                if(typeof data.sprites[key] === 'string'){
                    sources.push(data.sprites[key])
                }


            })

            const image =document.createElement('img');
            sources.forEach(source => {
                image.src = source;
            })
            card.append(image);

            const pokName = document.createElement('h3');
            pokName.innerHTML = data.name;
            card.append(pokName)


            for(let i = 0; i < 2 ; i++){
               
                console.log(abilities[i].ability.name)
                const span1 = document.createElement('span');
                span1.innerHTML = abilities[i].ability.name;
                card.append(span1)
                }
        

        })
      })
    })
})

