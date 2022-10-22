const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000

const categories = require('./data/categories.json');
app.use(cors())

app.get('/', (req, res) => {
    res.send('News Api Running!')
})

app.get('/news-categories',(req ,res) =>{
    res.send(categories)
})

app.listen(port, () => {
    console.log(`News server running on 5000 port ${port}`)
})