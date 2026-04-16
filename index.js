const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req,res) => {

}) 

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})
