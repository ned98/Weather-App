const key = '2987e576d8809d67e5a96a517ba5b0df';
// const proxy = 'https://cors-anywhere.herokuapp.com/';
// var getIP = 'http://ip-api.com/json/';

let dateDayName = $(".date-dayname");
let dateDay = $(".date-day");
let loc = $(".location");
let temp = $(".weather-temp");
let feelsLikeValue = $(".feels-like-value");
let humidityValue = $(".humidity-value");
let windValue = $(".wind-value");
let dayTwoName = $(".day-two-name");
let dayThreeName = $(".day-three-name");
let dayFourName = $(".day-four-name");
let dayFiveName = $(".day-five-name");
let inputValue = $(".input-value");

// GET DATE //
let date = new Date();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let currentDay = days[date.getDay()];
let currentShortMonth = shortMonths[date.getMonth()];
let currentDate = date.getDate(); // 	Get the day as a number (1-31)
let year = date.getFullYear();    //    Get the year as a four digit number (2020)



$(document).ready(function () {

    if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(function (position) {
            let city = 'Sofia';
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`)
                //fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputValue.val('Sofia')}&appid=${key}&units=metric`)
                .then(response => {
                    return response.json();
                })
                .then(data => {

                    dateDayName.html(currentDay);
                    dateDay.html(currentDate + " " + currentShortMonth + " " + year);
                    let city = data.city.name;
                    let country = data.city.country;

                    // Latest Temp
                    let current = data.list[0];
                    let dayTwo = data.list[3];

                    temp.html((Math.ceil(current.main.temp) + "°C"));
                    loc.html(city + ", " + country);
                    feelsLikeValue.html(Math.ceil(current.main.feels_like) + "°C");
                    humidityValue.html(current.main.humidity + "%");
                    windValue.html((Math.round(current.wind.speed)).toFixed(1) + " km/h");

                    dayTwoName.html();
                    dayThreeName.html();
                    dayFourName.html();
                    dayFiveName.html();

                })
                .catch(error => console.log(error));
        })
    }

})

//////////////////////////////////////////////////////////////////////////////////////
$('.location-button').bind('click', function () {
    // WEATHER API //
    if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(function (position) {

            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputValue.val()}&appid=${key}&units=metric`)
                .then(response => {
                    return response.json();
                })
                .then(data => {

                    dateDayName.html(currentDay);
                    dateDay.html(currentDate + " " + currentShortMonth + " " + year);

                    let city = data.city.name;
                    let country = data.city.country;

                    // Latest Temp
                    let current = data.list[0];
                    let dayTwo = data.list[3];

                    temp.html((Math.ceil(current.main.temp) + "°C"));
                    loc.html(city + ", " + country);
                    feelsLikeValue.html(Math.ceil(current.main.feels_like) + "°C");
                    humidityValue.html(current.main.humidity + "%");
                    windValue.html((Math.round(current.wind.speed)).toFixed(1) + " km/h");

                    dayTwoName.html();
                    dayThreeName.html();
                    dayFourName.html();
                    dayFiveName.html();

                    console.log(data);
                })
                .catch(error => console.log(error));
        })
    }

})





feather.replace()






    //     navigator.geolocation.getCurrentPosition(function (position) {
    //         let lat = position.coords.latitude;
    //         let lon = position.coords.longitude;
    //     },
    //         function (error) {
    //             console.log("The Locator was denied. :(")
    //         })