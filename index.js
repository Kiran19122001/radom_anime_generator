const button = document.getElementById("btn")
const animeContainer=document.querySelector(".anime-container")
const image=document.querySelector(".container .anime-container img")
const name=document.getElementById("name")
const funCall = async () => {
    button.innerText = "Loading..."
    button.classList.add("disabled")
    name.innerText = "Updating..."
    image.src="spinner.svg"
    const response = await fetch('https://api.catboys.com/img')
    const result = await response.json()
    button.classList.remove("disabled")
    button.innerText="Get Anime"
    image.src = result.url
    setTimeout(() => {
        name.innerText=result.artist
    },1500)
    animeContainer.style.display="block"

    console.log(result)

}
button.addEventListener('click', () => {
    funCall()
})