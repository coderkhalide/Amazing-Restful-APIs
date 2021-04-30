const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
require('dotenv').config()
require('./startup/router')(app)
require('./startup/prods')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('listening on port ' + PORT))