import express from "express";

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.get('/pie-chart', (req, res) => {
    res.sendFile(__dirname + 'pie-chart.html');
});

app.get('/line-chart', (req, res) => {
    res.sendFile(__dirname + 'line-chart.html');
});
app.listen(3002, () =>{
    console.log("Server is running on port 3002");
})