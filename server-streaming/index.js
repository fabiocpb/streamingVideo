const express = require('express')
const app = express();

const routes = require('./routes/routes')

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/stream', routes)

const porta = 8181

app.get("/", (req, res) => {
    res.send("Testando...");
})

app.listen(porta, (error) => {
    if(!error){
        console.log("Aplicativo rodando na porta " + porta)
    }else{
        console.log("Algum erro ocorreu...")
    }
})