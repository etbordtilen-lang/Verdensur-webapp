let selectedCityTimeZone = null;

function updateTime() {
  let rowOneElement = document.querySelector("#current-location");
  if (rowOneElement) {
    let rowOneDateElement = rowOneElement.querySelector(".current-date");
    let rowOneTimeElement = rowOneElement.querySelector(".current-time");
    let rowOneHeader = rowOneElement.querySelector(".current-city");
    let userTimeZone = moment.tz.guess();
    let userCityName = userTimeZone.replace("_", " ").split("/")[1];
    let userTime = moment().tz(userTimeZone);

    rowOneHeader.innerHTML = `${userCityName}`;
    rowOneDateElement.innerHTML = userTime.format("MMMM Do YYYY");
    rowOneTimeElement.innerHTML = `${userTime.format("h:mm:ss")} <small>${userTime.format("A")}</small>`;
  }

  if (selectedCityTimeZone) {
    let cityName = selectedCityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(selectedCityTimeZone);
    let selectedCityElement = document.querySelector("#selected-city");
    selectedCityElement.innerHTML = `
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
}

function updateCityTime(event) {
  selectedCityTimeZone = event.target.value;

  updateTime();
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#timezone-select");
citiesSelectElement.addEventListener("change", updateCityTime);
