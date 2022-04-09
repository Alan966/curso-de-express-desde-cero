const express = require('express')
const router = express.Router()
// const logger = (req, res, next) => {
//     const userloggued = false
//     if(userloggued){
//         next()
//     }else{
//         res.send('No puede acceder')
//     }

// }


// router.route('/users')
// .get( (req, res) => {
//     res.send('Accediendo a Usuarios')
// })
// .post((req, res) => {
//         res.send('Accediendo a Usuarios')
//     }
// )
// .put( (req, res) => {
//     res.send('Accediendo a Usuarios')
// })
// .delete( (req, res) => {
//     res.send('Accediendo a Usuarios')
// })

// router.use(logger)

router.get('/users', (req, res) => {
    resizeBy.send('Accediendo a usuarios')
})

router.get('/create-users', (req, res) => {
    res.send('Accediendo a usuarios')
})

module.exports = router
