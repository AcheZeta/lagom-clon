const showHour = document.getElementById('hour');
const showWeather = document.getElementById('weather');
const showDay = document.getElementById('day');
const showMonth = document.getElementById('day');


const showtime = () => {
    const hour = new Date().getHours()
    const min = new Date().getMinutes()
    const day = new Date().getDate()

    showHour.innerHTML = `${hour}:${min}`;
    showWeather.innerHTML = `Weather`;
    showDay.innerHTML = `${day}`;
}


setInterval(showtime, 1000)