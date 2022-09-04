// dont show api key in js or public file\
const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;

const loadTemp = (city) => {
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
   fetch(url)
      .then(response => response.json())
      .then(data => shohTemperature(data))
}

const shohTemperature = (data) => {
   // const tempDisplay = document.getElementById('temperature');
   // tempDisplay.innerText = data.main.temp;
   setInnerTextById('temperature', data.main.temp);
   setInnerTextById('condition', data.weather[0].main);
}

const setInnerTextById = (id, text) => {
   const tempDisplay = document.getElementById(id);
   tempDisplay.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function () {
   const searchField = document.getElementById('search-field');
   const city = searchField.value;
   document.getElementById('city').innerText = city ? city : 'Dhaka';

   loadTemp(city)
})

loadTemp('dhaka')