function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Paris
  let ParisElement = document.querySelector("#paris");
  if (ParisElement) {
    let ParisDateElement = ParisElement.querySelector(".date");
    let ParisTimeElement = ParisElement.querySelector(".time");
    let ParisTime = moment().tz("Europe/Paris");

    ParisDateElement.innerHTML = ParisTime.format("MMMM Do YYYY");
    ParisTimeElement.innerHTML = ParisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Japan
  let japanElement = document.querySelector("#japan");
  if (japanElement) {
    let japanDateElement = japanElement.querySelector(".date");
    let japanTimeElement = japanElement.querySelector(".time");
    let japanTime = moment().tz("Asia/Tokyo");

    japanDateElement.innerHTML = japanTime.format("MMMM Do YYYY");
    japanTimeElement.innerHTML = japanTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //South Africa
  let southAfricaElement = document.querySelector("#south-africa");
  if (southAfricaElement) {
    let southAfricaDateElement = southAfricaElement.querySelector(".date");
    let southAfricaTimeElement = southAfricaElement.querySelector(".time");
    let southAfricaTime = moment().tz("Africa/Johannesburg");

    southAfricaDateElement.innerHTML = southAfricaTime.format("MMMM Do YYYY");
    southAfricaTimeElement.innerHTML = southAfricaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
let cityTimeZone = event.target.value;
if (cityTimeZone==="current") {
  cityTimeZone = moment.tz.guess();
}
let cityName = cityTimeZone.replace('_', " ").split("/")[1];
let cityTime = moment().tz(cityTimeZone);
let citiesElement = document.querySelector("#cities");
citiesElement.innerHTML =`
<div class = "city">
<div>
<h2>${cityName}</h2>
<div class = "date">${cityTime.format("MMMM Do YYYY")}</div>
</div>
<div class = "time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
"A"
)}</small></div>
</div>
<a href="/">All cities</a>
`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
