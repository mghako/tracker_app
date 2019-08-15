const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

// Load config file
dotenv.config({
    path: './config.env'
})
const app = express();

// Logging in Dev Mode
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}




//profile route
app.use('/api/v2/profile', require('./routes/profile'))

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`)
})