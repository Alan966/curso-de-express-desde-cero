const express = require('express'); 
const router = express.Router();

const users = [
    {id: 1, name:'Juan'}, 
    {id: 2, name:'Pedro'},
    {id: 3, name:'Maria'},
]

router.get('/users', (req, res) => {
    res.status(200).json('Listando usuarios');
})

router.get('/user/:id', (req, res) => {
    const param = req.params.id
    if(param == users[0].id){
        res.status(200).json('Se encontro el usuario');
    }else{
        res.status(404).json('No se encontro el usuario');
    }
})

// router.post('/create-user', (req, res) => {
//     users.push(req.body); 
//     res.status(200).json('Usuario registrado');
// })

router.post('/create-user', (req, res) => {
    if(req.body.id != 1){
        users.push(req.body)
        res.status(200).json('Usuario registrado')
    }else{
        res.status(500).json('Error al registrar')
    }
})



module.exports = router;