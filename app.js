// const inputField = document.querySelector("#inputField").value
const searchBtn = document.querySelector("#searchBtn")
const searchForm = document.querySelector("form")
const foodContianer = document.querySelector(".foodContianer")
const App_Id = "abeb80a6"
const Api_key = "93060b9a332609c3fd5562cf0b2624bf"
const BaseURL = "https://api.edamam.com/doc/open-api/recipe-search-v2.json"

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    searchInput = e.target.querySelector("#inputField").value
    console.log(searchInput)
})

async function dataApi() {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputField}`);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
dataApi();