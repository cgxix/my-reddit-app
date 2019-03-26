// This app starts a server and listens on port 3000 for connections
const express = require('express')
const app = express()
const port = 3000

// view a sample message at localhost 3000
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))