const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
// const pokeArr = []


const getPokemons = async () => {
    const response = await fetch(baseUrl)
    const data = await response.json()
    console.log(data)
    return data

}

getPokemons().then(data => {
    data.results.forEach(pokemon => {
        console.log(pokemon)
        pokeArr.push(pokemon)
    }
    )
    pokeArr.forEach((poke, idx) => {
        // console.log(poke)
        // console.log(idx)
        const pokeCard = document.createElement("div")
        pokeCard.className = "cards"
        pokeCard.innerHTML = `
            <h5 class="card-title flex row-3 mx-4">${poke.name}</h5>
            <a href="${poke.url}" class="btn btn-primary">View</a>
        `
        document.querySelector(".all-pokes").appendChild(pokeCard)
    })
})


console.log(pokeArr)