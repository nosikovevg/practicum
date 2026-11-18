const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({data: 'message'})
})


app.get('/aga', (req, res) => {
    res.send("Helloooooooo!!!!!!!!")
})

app.get('/bum', (req, res) => {
    const options = [false, true];
    var approved = options[Math.floor(Math.random() * options.length)];
        
    res.json({approved: approved})
})




app.listen(3000, () => {
    console.log('Express web app on http://localhost:3000')
})
