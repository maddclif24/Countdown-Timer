import Express from 'express';
const app = new Express();

app.get('/', (req, res) => {
    app.use(express.static('public'));
    res.send('./public/index.html');
});

app.listen(8083, () => {
    console.log('Example app listening on port 8083!');
});