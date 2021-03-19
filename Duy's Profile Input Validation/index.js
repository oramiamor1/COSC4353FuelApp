const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const { check, validationResult } = require('express-validator')

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

app.listen(port, () => console.log('server running'))