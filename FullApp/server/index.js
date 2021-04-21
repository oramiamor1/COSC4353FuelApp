const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

app.post("/register", async (req, res) => {
    user = req.body.user;
    pass = req.body.pass;
    try {
      console.log(req.body)
      //this will encrypt the password once it is made
      const newTodo = await pool.query(
        `INSERT INTO UserCredentials VALUES(0001,'${user}',crypt('firstpass',gen_salt('${pass}'))); `
      );
  
      res.json(newTodo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
});


app.listen(5000, () => {
    console.log("server has started on port 5000");
});