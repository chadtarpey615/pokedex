// const cards = document.getElementsByClassName("card")


// fetch("https://pokeapi.glitch.me/v1/pokemon").then((response) => response.json()).then((data) => console.log(data))


const baseUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151'
const pokeArr = []
const getPokemons = async () => {
    const response = await fetch(baseUrl)
    const data = await response.json()
    console.log(data)
    return data

}

getPokemons().then(data => {
    data.results.forEach(pokemon => {
        pokeArr.push(pokemon.name)
    }
    )
    pokeArr.forEach((poke, idx) => {
        console.log(poke)
        console.log(idx)
        const pokeCard = document.createElement("div")
        pokeCard.className = "cards"
        pokeCard.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${poke}</h5>
        </div>
        `
        document.querySelector(".card").appendChild(pokeCard)
    })
})


console.log(pokeArr)










