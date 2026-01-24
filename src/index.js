function updateTime() {
  let rowOneElement = document.querySelector("#row-one");
  let rowOneDateElement = rowOneElement.querySelector(".date");
  let rowOneTimeElement = rowOneElement.querySelector(".time");
  let rowOneTime = moment().tz("UTC");

  rowOneDateElement.innerHTML = rowOneTime.format("MMMM Do YYYY");
  rowOneTimeElement.innerHTML = `${rowOneTime.format("h:mm:ss")} <small>${rowOneTime.format("A")}</small>`;
}

function updateCityTime(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  //console.log(cityTime.format("MMM Do YYYY"));
  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML += ` 
  <div class="city">
    <div>
        <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div>
            <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
          </div>
          </div>`;
}

updateTime(); // Initial call to set time immediately
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#timezone-select");
citiesSelectElement.addEventListener("change", updateCityTime);
