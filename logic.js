// const cards = document.getElementsByClassName("card")


// fetch("https://pokeapi.glitch.me/v1/pokemon").then((response) => response.json()).then((data) => console.log(data))

let userPoke;
// console.log("user", userPoke)
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
const pokeArr = []

const getValueInput = async () => {
    userPoke = await document.getElementById("pokemon").value
    const response = await fetch(`${baseUrl}${userPoke}`)
    const data = await response.json()
    console.log(data)
    const userCard = document.createElement("div")
    userCard.className = "card text-white bg-white-300 m-2 flex justify-center items-center border border-gray-300"
    userCard.innerHTML = `
    <div class="card-body">
    <img src=${data.sprites.front_default} alt="${data.name}">
        <h5 class="card-title">Pokemon: ${data.name}</h5>
        <p class="card-text">Weight: ${data.weight}</p>
        <p class="card-text">Height: ${data.height}</p>
        <p class="card-text">Abilities: ${data.abilities[0].ability.name}</p>
</div>
        `
    document.querySelector(".card").appendChild(userCard)
}
// const getPokemons = async () => {
//     const response = await fetch(baseUrl)
//     const data = await response.json()
//     console.log(data)
//     return data

// }

// getPokemons().then(data => {
//     data.results.forEach(pokemon => {
//         pokeArr.push(pokemon.name)
//     }
//     )
//     pokeArr.forEach((poke, idx) => {
//         console.log(poke)
//         console.log(idx)
//         const pokeCard = document.createElement("div")
//         pokeCard.className = "cards"
//         pokeCard.innerHTML = `
//         <div class="card-body">
//             <h5 class="card-title text-white">${poke}</h5>
//         </div>
//         `
//         document.querySelector(".card").appendChild(pokeCard)
//     })
// })


// console.log(pokeArr)










