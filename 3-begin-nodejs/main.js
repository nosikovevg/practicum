const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Helloooooooo!!!!!!!!")
})

app.listen(3000, () => {
    console.log('Express web app on http://localhost:3000')
})
