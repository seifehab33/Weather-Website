//============================= Search Input =============================//
var searchInput = document.getElementById("searchInput");

var find = document.getElementById("find");

var alert = document.getElementById("alertsearchInput");

//============================= Today =============================//
let cityName = document.getElementById("cityName");

let todayTem = document.getElementById("todayTem");

let todayIcon = document.getElementById("todayIcon");

let todayText = document.getElementById("todayText");

let willRain = document.getElementById("willRain");

let wind = document.getElementById("wind");

let direction = document.getElementById("direction");

//============================= Tomorrow =============================//
let tomIcon = document.getElementById("tomIcon");

let TomMinTem = document.getElementById("tomMinTem");

let TomMaxTem = document.getElementById("tomMaxTem");

let TomText = document.getElementById("tomText");

//============================= after Tomorrow =============================//

let aftomIcon = document.getElementById("afTomIcon");

let afTomMinTem = document.getElementById("ftomMinx");

let afTomMaxTem = document.getElementById("ftomMax");

let ftomText = document.getElementById("ftomText");

//============================= Date =============================//
let yesName = document.getElementById("yesName");

let yesDate = document.getElementById("yesDate");

var todayName = document.getElementById("todayName");

var tomName = document.getElementById("tomName");

//============================= Get Date =============================//
var date = new Date();

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var today = days[date.getDay()];

console.log(today);

var tom = "";

var aftertom = "";

if (date.getDay() == 6) {

    tom = days[0];

    aftertom - days[1];

} else {

    tom = days[date.getDay() + 1];
    console.log(tom);

    aftertom = days[date.getDate() + 2];
    console.log(aftertom)

}

var monthNum = date.getMonth() + 1;
console.log(monthNum);
var monthName = "";

if (monthNum == 1) { monthName = "January"; }
else if (monthNum == 2) { monthName = "February"; }
else if (monthNum == 3) { monthName = "March"; }
else if (monthNum == 4) { monthName = "April"; }
else if (monthNum == 5) { monthName = "May"; }
else if (monthNum == 6) { monthName = "June"; }
else if (monthNum == 7) { monthName = "Julay"; }
else if (monthNum == 8) { monthName = "August"; }
else if (monthNum == 9) { monthName = "September"; }
else if (monthNum == 0) { monthName = "Octobar"; }
else if (monthNum == 11) { monthName = "Novamber"; }
else if (monthNum == 12) { monthName = "December"; }
console.log(monthName);

var month = date.getDate() + monthName;
yesName.innerHTML = today;
console.log(today);

yesDate.innerHTML = month;
console.log(month);

todayName.innerHTML = tom;
console.log(tom);

tomName.innerHTML = aftertom;
console.log(tom);



//////////////////////////////////////////////////////end of date////////////////////////////////////////////////////
//  https://api.weatherapi.com/v1/forecast.json?key=f123d6597efc4ae787c193756212109&q=${q}&days=3
var time = new Date();
var date1 = "";
console.log(time.getHours());
if ((parseInt((time.getMonth() + 1) / 10)) == 0) {
    if (parseInt(time.getHours() / 10) == 0) {
        date1 = time.getFullYear() + '-' + '0' + (time.getMonth() + 1) + '-' + time.getDate() + " " + '0' + time.getHours() + ":" + "00";
    } else {
        date1 = time.getFullYear() + '-' + '0' + (time.getMonth() + 1) + '-' + time.getDate() + " " + time.getHours() + ":" + "00";
    }
} else {
    if (parseInt(time.getHours() / 10) == 0) {
        date1 = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate() + " " + '0' + time.getHours() + ":" + "00";
    } else {
        date1 = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate() + " " + time.getHours() + ":" + "00";
    }
}
console.log(date1);

async function todayandtomandaftertom(klma) {

    var data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=b7a95557a39f495f9da12349212609&q=${klma}&days=3`);

    console.log(data);
    if (data.ok == true) {
        alertSearchInput.classList.add("d-none");
        data = await data.json();
        
         //////////////////////start of toDay Data////////////////////////

    let toText = data.current.condition.text;
    let todMaxTem = data.current.temp_c;
    let todMaxWind = data.current.wind_kph;
    let todWillRain = data.forecast.forecastday[0].day.daily_chance_of_rain;
    let todayWindDir = data.current.wind_dir;
    let todIconCode = data.current.condition.code;
    let hager = data.current.condition.icon;
    let todIsDay = data.current.is_day;
    let file = "";

    if (todIsDay == 0) {
      file = "day";
    } else {
      file = "night";
    }
    let ic = [];
    ic = await fetch(` https://www.weatherapi.com/docs/conditions.json`);
    ic = await ic.json();
    let toiconNum = "";
    for (let i = 0; i < ic.length; i++) {
      if (ic[i].code == todIconCode) {
        toiconNum = ic[i].icon;
        console.log(ic[i].icon);
      }
    }

    ////////////////////End of Today Data////////////////////////////////////////////////


    /////////////start of tommorrow Data////////////////////////////////////////////////

    let tomMaxTem = data.forecast.forecastday[1].day.maxtemp_c;
    let tomMinTem = data.forecast.forecastday[1].day.mintemp_c;
    let tomText = data.forecast.forecastday[1].day.condition.text;
    let tomIconCode = data.forecast.forecastday[1].day.condition.code;
    let toiconNum1 = "";
    for (let i = 0; i < ic.length; i++) {
      if (ic[i].code == tomIconCode) {
        toiconNum1 = ic[i].icon;
      }
    }

    //////////////////////////End Of Tommorrow Data//////////////////////////



    ////////////////////////Start Of After Tommorrow Data//////////////////


    let fTomMaxTem = data.forecast.forecastday[2].day.maxtemp_c;
    let fTomMinTem = data.forecast.forecastday[2].day.mintemp_c;
    let fTomText2 = data.forecast.forecastday[2].day.condition.text;
    let afTomIconCode = data.forecast.forecastday[2].day.condition.code;
    var toiconNum2 = "";
    for (let i = 0; i < ic.length; i++) {
      if (ic[i].code == afTomIconCode) {
        toiconNum2 = ic[i].icon;
      }
    }

    ///////////////End Of After Tommorrow Data///////////////////


    ////////////////////today////////////////////////
    cityName.innerHTML = data.location.name;
    todayTem.innerHTML = todMaxTem;


        todayIcon.setAttribute("src", `http:${data.current.condition.icon}`);
        todayText.innerHTML = toText;
        willRain.innerHTML = todWillRain;
        wind.innerHTML = todMaxWind;
        direction.innerHTML = todayWindDir;
        //////////////////////////tom//////////////////////////////////

        tomIcon.setAttribute("src", `http:${data.forecast.forecastday[0].day.condition.icon}`);
        TomMaxTem.innerHTML = tomMaxTem;
        TomMinTem.innerHTML = tomMinTem;
        TomText.innerHTML = tomText;
        /////////////////////////aftom/////////////////////////////////////////////


        aftomIcon.setAttribute("src", `http:${data.forecast.forecastday[1].day.condition.icon}`);
        afTomMaxTem.innerHTML = fTomMaxTem;
        afTomMinTem.innerHTML = fTomMinTem;
        ftomText.innerHTML = fTomText2;
        console.log(afTomText);
    }
    else if (searchInput.value == "") {
        alertSearchInput.classList.add("d-none");
        console.clear();
    }
    else if (data.ok != true && searchInput.value != "") {
        alertSearchInput.classList.remove("d-none");
        console.clear();

    }
    // cityName.innerHTML= `<img src="https:${data.forecast.forecastday[1].day.condition.icon}">`
    // console.log(data.forecast.forecastday[1].day.condition.icon);
}

todayandtomandaftertom("cai");

searchInput.addEventListener("keyup", function () {
    todayandtomandaftertom(searchInput.value);
})