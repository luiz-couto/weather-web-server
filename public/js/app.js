console.log('Client side javascript!');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = '';
            messageTwo.textContent = data.error;
            return;
        }
        messageOne.textContent = data.location;
        messageTwo.textContent = 'Info: ' + data.forecastData.weatherDes + '\n' + 'Temperature: ' + data.forecastData.temperature + ' °C\n' + 'FeelsLike: ' + data.forecastData.feelsLike + ' °C\n' + 'Humidity: ' + data.forecastData.humidity + ' %';
    })
});
});