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
    userCard.className = "p-6 max-w-sm bg-white text-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-4"
    userCard.innerHTML = `
    <div class="flex flex-row">
    <img class="w-full rounded-t-lg bg-gray-300 fill-current"src=${data.sprites.front_default} alt="${data.name}">
    <div class="flex flex-col justify-between p-6 w-full h-auto">
        <h5 class="card-title">Pokemon: ${data.name}</h5>
        <p class="card-text">Weight: ${data.weight}lbs</p>
        <p class="card-text">Height: ${data.height}ft</p>
        <p class="card-text">Abilities: ${data.abilities[0].ability.name}</p>
        <p class="card-text">Moves: ${data.moves[0].move.name}</p>
        <h4 class="underline mt-2">STATS</h4>
        <p class="card-text">${data.stats[0].stat.name}: ${data.stats[0].base_stat}</p>
        <p class="card-text">${data.stats[1].stat.name}: ${data.stats[1].base_stat}</p>
        <p class="card-text">${data.stats[2].stat.name}: ${data.stats[2].base_stat}</p>
        <p class="card-text">${data.stats[3].stat.name}: ${data.stats[3].base_stat}</p>
        <p class="card-text">${data.stats[4].stat.name}: ${data.stats[4].base_stat}</p>
        <p class="card-text">${data.stats[5].stat.name}: ${data.stats[5].base_stat}</p>
        </div>
</div>
        `
    document.querySelector(".card").appendChild(userCard)
}











