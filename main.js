

axios.get("https://api.punkapi.com/v2/beers"
).then(reponse => {
    let data = reponse.data
    let out = data.map(el => 
        `<div class="card">
            <div class="title">
                <h2>${el.name}</h2>
                <span>${el.abv}%</span>
            </div>
            <content>
                <p class="tagline">${el.tagline}</p>
                <p>${el.brewers_tips}</p>
            </content>
            <img src="${el.image_url}"/>
        </div>`
        ).join("");
    let sortie = document.querySelector(".sortie");
    sortie.innerHTML =`${out}`
 
    })
    

    