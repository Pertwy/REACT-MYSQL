const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

app.use(cors())
app.use(express.json)

// const db = mysql.createConnection({
//     user:"root",
//     host: "127.0.0.1",
//     port:"3306",
//     password: "password",
//     database:"employeesystem"
// })
const db = mysql.createConnection({
    name:  "test-test", 
    host: "127.0.0.1", 
    port: "3306", 
    user: "root", 
    password: "password"
  });

db.connect((err) => {
    if(err){
      console.log("nope");
      return;
    }
    console.log('Connection established');
  });

app.post("/create", (req, res) =>{
    console.log(req.body)
    const name = req.body.name
    const age = req.body.age
    const country = req.body.country
    const position = req.body.position
    const wage = req.body.wage

    db.query("INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)", 
    {name, age, country, position, wage},
    (err, result) => {
        if (err){
            console.log(err)
        } else {
            res.send("Values Inserted")
        }
    })
})

// db.end((err) => {
//     // The connection is terminated gracefully
//     // Ensures all remaining queries are executed
//     // Then sends a quit packet to the MySQL server.
//   });

app.listen(5000, ()=>{console.log(
        "Server is running on Port 5000")})