//Express.Js Server Bana kai Ap Frame Work hai
// NPM full foam : Node packege Manager
// Javascript ki go app hoti hai isko hum khata hai web application/Website
// Node.js Ki app ko hum love sa khata hai package
// Express Kindof ak liberary Ya Frame work hai
console.log("This is a express side server hello world");

//Es6
import express from 'express';
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello World Hassan!')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
