const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
const city = document.getElementById('city-name').value;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
fetch('url')
.then(res => res.json())
.then(data => {
    console.log(data);
})