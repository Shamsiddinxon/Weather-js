let elForm = document.querySelector(".form");
let elResult =document.querySelector(".site-wrapp")
let elInput = document.querySelector(".input")
elResult.classList.add("none")

function renderWeather(data) {
    let html = `
    <div class="data_box">
    <p class="harorat">${data.current.temp_c}<span>&#8451</span></p>
    <p class="location">${data.location.name}</p>
    <p class="country">${data.location.country}</p>
    </div>
    <div class="icon_box">
    <img class="weather-icon" src="${data.current.condition.icon}" alt="icon" />
    <p class="icon_text">${data.current.condition.text}</p>
    </div>
    `;
    elResult.innerHTML = null;
    elResult.insertAdjacentHTML("beforeend", html);
    elResult.classList.remove("none")
  }


const getData = async function (agg) {
    const reques = await fetch(`https://api.weatherapi.com/v1/current.json?key=266dfd511fd1453295a135131220402&q=${agg}&aqi=no`);

    const data = await reques.json();

    console.log(data);
    renderWeather(data)
}


elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    let value = elInput.value

    getData(value)
} )




































// {https://api.openweathermap.org/data/2.5/weather?q=toshkent&appid=0c607f0340398eb987b562515eb4425a}