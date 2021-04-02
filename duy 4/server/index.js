const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const { check, validationResult } = require('express-validator')

//
const cors = require("cors");
const pool =require("./db");
//middleware
app.use(cors());

let urlencoded = express.urlencoded({extended: true})
app.use(express.json());
app.use(urlencoded);
app.use(express.static(__dirname + '/'))

app.get('/',(request, response) => {
    response.sendFile(path.join(__dirname + '/profile_dv.html'))
})

app.post('/formData',[
    check('fullname')
    .not().isEmpty().withMessage('Name cannot be empty.')
    .isLength({
        max:50
    }).withMessage('50 characters max for full name.')
    .trim(),

    check('address')
    .not().isEmpty().withMessage('Address cannot be empty.')
    .isLength({
        max:100
    }).withMessage('100 characters max for address.'),

    check('address2')
    .isLength({
        max:100
    }).withMessage('100 characters max for address 2.'),

    check('city')
    .not().isEmpty().withMessage('City cannot be empty.')
    .isLength({
        max:100
    }).withMessage('100 characters max for city.'),

    check('zipcode')
    .isPostalCode('US').withMessage('not a valid US Zipcode.')
    .isLength({
        min:5,
        max:9
    }).withMessage('Minimum of 5 characters and Maximum of 9 characters for Zipcode.')
] ,(request, response) => {
    const errors = validationResult(request);

    if(!errors.isEmpty()){
        return response.status(422).json({errors: errors.array()});
    }
    response.status(202).json({
        success:'Ok'
    })
})


//ROUTES//

//create a clientinformation
/*app.post("/formData", async(req, res) => {
    try{
        //console.log(req.body);
        const { fullname } = req.body;
        const newClientInfo = await pool.query(
            "INSERT INTO clientinformation (fullname,address,address2,city,state,zipcode) VALUES($1,$1,$1.$1,$1,$1)", 
            [fullname]);
    }
    catch(err){
        console.error(err.message);
    }
})*/

app.post("/profile", async (req, res) => {
    fullname = req.body.fullname;
    address = req.body.address;
    address2 = req.body.address2;
    city = req.body.city;
    state = req.body.state;
    zipcode = req.body.zipcode;

    try {
      console.log(req.body)
      const newTodo = await pool.query(
        `INSERT INTO clientinformation VALUES(0001,'${fullname}','${address}','${address2}','${city}','${state}','${zipcode}'); `
      );
  
      res.json(newTodo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
});


//create all clientinformation

app.listen(port, () => console.log('server running'))

//echo \"Error: no test specified\" && exit 1