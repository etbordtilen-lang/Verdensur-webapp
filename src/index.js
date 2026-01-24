function updateTime() {
  let rowOneElement = document.querySelector("#row-one");
  let rowOneDateElement = rowOneElement.querySelector(".date");
  let rowOneTimeElement = rowOneElement.querySelector(".time");
  let rowOneTime = moment().tz("UTC");

  rowOneDateElement.innerHTML = rowOneTime.format("MMMM Do YYYY");
  rowOneTimeElement.innerHTML = `${rowOneTime.format("h:mm:ss")} <small>${rowOneTime.format("A")}</small>`;

  // Repeat for row two
  let rowTwoElement = document.querySelector("#row-two");
  let rowTwoDateElement = rowTwoElement.querySelector(".date");
  let rowTwoTimeElement = rowTwoElement.querySelector(".time");
  let rowTwoTime = moment().tz("Asia/Tokyo");

  rowTwoDateElement.innerHTML = rowTwoTime.format("MMMM Do YYYY");
  rowTwoTimeElement.innerHTML = `${rowTwoTime.format("h:mm:ss")} <small>${rowTwoTime.format("A")}</small>`;

  // Repeat for row three
  let rowThreeElement = document.querySelector("#row-three");
  let rowThreeDateElement = rowThreeElement.querySelector(".date");
  let rowThreeTimeElement = rowThreeElement.querySelector(".time");
  let rowThreeTime = moment().tz("Europe/Copenhagen");

  rowThreeDateElement.innerHTML = rowThreeTime.format("MMMM Do YYYY");
  rowThreeTimeElement.innerHTML = `${rowThreeTime.format("h:mm:ss")} <small>${rowThreeTime.format("A")}</small>`;

  // Repeat for row four
  let rowFourElement = document.querySelector("#row-four");
  let rowFourDateElement = rowFourElement.querySelector(".date");
  let rowFourTimeElement = rowFourElement.querySelector(".time");
  let rowFourTime = moment().tz("America/New_York");

  rowFourDateElement.innerHTML = rowFourTime.format("MMMM Do YYYY");
  rowFourTimeElement.innerHTML = `${rowFourTime.format("h:mm:ss")} <small>${rowFourTime.format("A")}</small>`;
}

function updateCityTime(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  //console.log(cityTime.format("MMM Do YYYY"));
  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = ` 
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
