const express = require('express')
const app=express()
require('dotenv').config()
// Or to make sure of location or not in the root folder
// require('dotenv').config({ path: path.resolve(__dirname, '.env') })

const PORT=process.env.PORT || 5000  // Provide default if env var isn't there for some reason
const USER_PASS=process.env.APP_PASSWORD || 'Pass'
const API_IP=process.env.IP || '127.0.0.1'

console.log(`Port is: ${PORT}, User password is ${USER_PASS}, API IP is ${API_IP}`)
console.log(process.env) // Output all the global and local vars available in this process

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
