
let userPoke;
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
const pokeArr = []
const clearValueInput = async (id) => {
    document.getElementById(id).remove()
}

console.log(userPoke)

const getValueInput = async () => {
    userPoke = await document.getElementById("pokemon").value
    console.log(userPoke)
    console.log("mew")
    const response = await fetch(`${baseUrl}${userPoke}`)
    const data = await response.json()
    const userCard = document.createElement("div")

    const { name, weight, height, abilities, moves, stats } = data
    userCard.innerHTML = `
    <div class="flex flex-row p-6 max-w-sm bg-white text-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-4" id=${data.id}>
    <div class="flex flex-col">
    <img class="w-full h-2/3 rounded-t-lg bg-gray-300 fill-current"src=${data.sprites.front_default} alt="${data.name}">
    <button onclick="clearValueInput(${data.id})"class="bg-blue-300 hover:bg-blue-400 w-full h-1/4 rounded-lg mt-2">Remove Pokemon</button>
        <button onclick="moreInfo(${name})"class="bg-blue-300 hover:bg-blue-400 w-full h-1/4 rounded-lg mt-2">More Info Pokemon</button>

    </div>
    <div class="flex flex-col justify-between border p-6 w-full h-auto" >
        <h5 class="card-title">Pokemon: ${name}</h5>
        <p class="card-text">Weight: ${weight}lbs</p>
        <p class="card-text">Height: ${height}ft</p>
        <p class="card-text">Abilities: ${abilities[0].ability.name}</p>
        <p class="card-text">Moves: ${moves[0].move.name}</p>

        <h4 class="underline mt-2">STATS</h4>
        <p class="card-text">${stats[0].stat.name}: ${stats[0].base_stat}</p>
        <p class="card-text">${stats[1].stat.name}: ${stats[1].base_stat}</p>
        <p class="card-text">${stats[2].stat.name}: ${stats[2].base_stat}</p>
        <p class="card-text">${stats[3].stat.name}: ${stats[3].base_stat}</p>
        <p class="card-text">${stats[4].stat.name}: ${stats[4].base_stat}</p>
        <p class="card-text">${stats[5].stat.name}: ${stats[5].base_stat}</p>
        </div>
</div>
        `
    document.querySelector(".card").appendChild(userCard)

}


const moreInfo = async (userPoke) => {
    console.log("after", userPoke)
    try
    {
        await console.log(userPoke)
    } catch (error)
    {
        console.log(error)
    }

}
    // const response = await fetch(`${baseUrl}${name}`)
    // const data = await response.json()
    // console.log("datata", data)
    // document.getElementById(id).children[1].classList.add("hidden")















