const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

let sayac=0;

app.get('/', (req, res) => {
    res.render('index', {sayac:sayac})
});

app.get('/arttir', (req, res) => {
    sayac++;
    res.redirect('/');
});


app.get('/azalt', (req, res) => {
    sayac--;
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});

