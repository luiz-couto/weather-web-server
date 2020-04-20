console.log('Client side javascript!');

fetch('http://localhost:3000/weather?address=boston').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error);
            return;
        }
        console.log(data.location);
        console.log(data.forecastData);
    })
})