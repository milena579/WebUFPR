// // server.mjs
// const { createServer } = require('http');
// const users = require('../mock/user');
// const comidas = require('../mock/comida');

// // instanciar o servidor


// const server = createServer((request, response) => {

//     console.log(`Metodo da request ${request.method} | Endpoint ${request.url}`)

//     if(request.url === "/Users" && request.method === "GET"){
//         response.writeHead(200, { 'Content-Type': 'Text/html' } )
//         response.end(JSON.stringify(users));
//     }
//     else if(request.url == "/Comidas" && request.method == "GET"){
//         response.writeHead(200, { 'Content-Type': 'Text/html' } )
//         response.end(JSON.stringify(comidas));
//     }
//     else{
//         response.writeHead(200, { 'Content-Type': 'text/html' });
        
//         response.end('<h1> Aula de web 1 </h1>');
//     }
//     //finalizar a resposta enviada ao cliente
// });

// // subindo o servidor
// server.listen(3000, () => {
// console.log('Servidor no ar');
// });



const express = require('express')
const comida = require('../mock/comida')
const app = express()
const port = 3000

//Metodos HTTP: GET, POST, PUT, DELETE

//QUERY PRAMS: request.query (FILTROS, ORDENAÇÃO, PAGINAÇÃO)

//ROUTE PARAMS:
// request.params(Identificar um recurso alteração/remoção)

//BODY (put/post): request.body
//Dados para criação alteração de um registro

//rota padrão
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//rota users
app.get('/Users', (req, res) => {
    console.log(req.query)
    res.send("milena users")
})

app.get('/Comidas', (req, res) => {
    express.response.json(JSON.stringify(comida))
})

app.delete('/Users/:id', (req, response) =>{
    console.log(req.params)
    response.json(req.params)
})

app.post('/Users', (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
