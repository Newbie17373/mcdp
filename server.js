const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

const port = 3000;

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

app.listen(port, (error) => {
	error ? console.log(error) : console.log(`listening port ${port}`);
});

app.get('/', (req, res) => {
	res.sendFile(createPath('index'));
});

app.get('/contacts', (req, res) => {
	res.sendFile(createPath('index'));
});

app.get('/index.html', (req, res) => {
	res.redirect('/');
});

app.get('/index.html', (req, res) => {
	res.redirect('/');
});

app.use((req, res) => {
	res.status(404).sendFile(createPath('error'));
});
