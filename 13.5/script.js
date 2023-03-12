const weather = document.querySelector('.weather');
const curren = document.querySelector('.curren');
const forecast = document.querySelector('.forecast');
const wind = document.querySelector('.wind');
const locations = document.querySelector('.locations');
const sity = document.querySelector('.sity');
const time = document.querySelector('.time');
const main = document.querySelector('.main');
const temp = document.querySelector('.temp');
const now = new Date().toLocaleDateString();


navigator.geolocation.getCurrentPosition(
    function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=a94d0a5ac08570add4b47b8da933f247`;
        getForcast(url);
    }
);

function getForcast(url){
let httpRequest = new XMLHttpRequest();
httpRequest.onload = function () {
    const content = JSON.parse(httpRequest.responseText);
    let icon = document.createElement('img');
    icon.src = `http://openweathermap.org/img/wn/${content.list[0].weather[0].icon}.png`;
    sity.innerText = `${content.city.name}`;
    time.innerText = `${now}`;
    main.innerText = ` ${content.list[0].weather[0].main}`;
    temp.innerText = `${content.list[0].main.temp}`;
    weather.prepend(icon);
    wind.innerText = `${content.list[0].wind.speed}`;

    for (let i = 0; i < content.list.length; i = i + 8) {
        const day = document.createElement('div');
        day.classList.add('day');
        const dates = document.createElement('div');
        const date = document.createElement('div');
        const time = document.createElement('div');
        const icons = document.createElement('div');
        const img = document.createElement('img');
        const temps = document.createElement('div');
        date.innerText = `${content.list[i].dt_txt.split(' ')[0]}`;
        time.innerText = `${content.list[i].dt_txt.split(' ')[1]}`;
        img.src = `http://openweathermap.org/img/wn/${content.list[i].weather[0].icon}.png`;
        temps.innerText = `${content.list[i].main.temp} °C`;
        dates.append(date);
        dates.append(time);
        day.append(dates);
        icons.append(img);
        day.append(icons);
        day.append(temps);
        forecast.append(day);
    }
};
httpRequest.open('GET', url);
httpRequest.send();
};