app.get('/about', (req, res) => {
    res.send('About Page');
});
app.get('/contact', (req, res) => {
    res.send('Contact Page');
});


const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Bienvenue sur mon serveur Express !");
});


app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
