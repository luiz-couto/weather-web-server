const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = (path.join(__dirname, '../public'));

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index',{
        title: 'Weather',
        name: 'Luiz'
    });
});

app.get('/about', (req, res) => {
    res.render('about',{
        title: 'About me',
        name: 'Luiz'
    });
});

app.get('/help', (req, res) => {
    res.render('help',{
        title: 'Help',
        message: 'Some help message!'
    });
});

app.get('/weather',(req, res) => {
    res.send({
        location: 'Brazil',
        forecast: 30
    });
});


app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});