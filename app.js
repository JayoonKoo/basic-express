import express from 'express'

const app = express();

app.use(express.json());

app.post('/', (req, res, next) => {
	console.log(req.body);
	res.send('ok');
})

app.listen(8080);