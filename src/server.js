const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require('./database')

app.use(bodyParser.urlencoded({extended:true}))

app.get('/produtos',(req, res, next) => {
    res.send(database.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(database.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = database.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send (produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = database.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco,
        id: req.params.id
    })
    res.send (produto)
})

app.delete('/produtos/:id',(req, res, next) => {
    const produto = database.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor iniciado na porta ${porta}.`)
})