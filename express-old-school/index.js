const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express()
const userRoutes = require('./routes/users')
const indexRoutes = require('./routes/index')


//settings
app.set('port', (process.env.PORT || 3000))
app.set('title', 'Aplicacion con express')

// Routes 
// app.get('/', (req, res) => {
//     res.send('Inicio')
// })

// const users = {name: 'Pablo', age: 20}


// app.get('/users', (req, res) => {
    // res.format({
    //     'text/html': () => {
    //         res.send({
    //             text: 'Bienvenidos'
    //         })
    //     }
    // })
    // res.json(users)

    // res.sendFile(path.join(__dirname, 'file.txt'))
    // res.download(path.join(__dirname, 'file.txt'))
    // res.redirect('/login')
    // res.status(200).send('Todo correcto')+
    // res.status(500).end()
// })



// all
// app.all('/users', (req, res, next) => {
//     console.log('Primera url')
//     next()
// })

// app.get('/users/:id_user/courses/:id_course', (req, res) => {
//     res.send('Parametro recibido: ' + req.params.id_user + ' '+ req.params.id_course)
// })

// const f1 = (req, res, next) => {
//     console.log('Funcion Inicial')
//     next()
// }

// const f2 =  (req, res, next) => {
//     console.log('Segunda Funcion')
//     next()
// }

// const f3 =  (req, res, next) => {
//     console.log('Segunda Funcion')
//     next()
// }


// app.get('/users', [f1, f2, f3], (req, res) => 
// {
//     res.send('Funcion Final Ejecutada')
// })

// app.get('/login', (req, res) => {
//     res.send('Inicio de secion')
// })

// console.log(app.locals.settings)

//Midlewares 
// const erroHandling = (err, req, res, next) => {
//     res.status(500).send('Ha ocurrido un error')
// }

//Midlewares creados por terceros 
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))



app.get('/admin', (req, res) => {
    const name = req.paramse.name
    res.send('Panel de administracion')
})

//Routes 
// app.use(indexRoutes)
// app.use(userRoutes)
app.post('/admin', (req, res) => {
    let name = req.body.name
    console.log(name)
    res.send('Usuario registrado')
})


// app.use(erroHandling)

app.listen(app.get('port'), () => {
    console.log(`${app.get('title')} corriendo en el puerto` +  app.get('port'))
})