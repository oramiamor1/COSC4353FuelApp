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
    response.sendFile(path.join(__dirname + '/login.html'))
})

app.post('/regisData',[
    check('user1')
    .not().isEmpty().withMessage('Username cannot be empty.')
    .isLength({
        max:50
    }).withMessage('50 characters max for full name.')
    .trim(),

    check('pass1')
    .not().isEmpty().withMessage('Password cannot be empty.')
    .isLength({
        max:100
    }).withMessage('100 characters max for address.'),
] ,(request, response) => {
    const errors = validationResult(request);

    if(!errors.isEmpty()){
        return response.status(422).json({errors: errors.array()});
    }
    response.status(202).json({
        success:'Ok',
    })
})

app.post('/logData',[
    check('user')
    .not().isEmpty().withMessage('Name cannot be empty.')
    .isLength({
        min:4
    }).withMessage('Username is incorrect')
    .trim(),

    check('pass')
    .not().isEmpty().withMessage('Password cannot be empty.')
    .isLength({
        min:6
    }).withMessage('Password is incorrect'),
] ,(request, response) => {
    const errors = validationResult(request);

    if(!errors.isEmpty()){
        return response.status(422).json({errors: errors.array()});
    }

    response.status(202).json({
        success:'Ok',
    });  
    
});

app.listen(port, () => console.log('server started'))
