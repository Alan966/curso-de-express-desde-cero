const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const app = express() 


// app.use('/static',express.static(path.join(__dirname, 'public')))
// app.use('/files',express.static(path.join(__dirname, 'files')))

app.engine('handlebars', exphbs.engine({defaultLayout:'main'}))
app.set('view engine', 'handlebars')
// app.set('layout', path.join(__dirname, 'views/layouts/main'))
app.set('views', path.join(__dirname, 'views'))

// app.use(expressLayouts)


const users = [
    {
        name: 'John',
        age: 25
    }, 
    {
        name: 'Jane',
        age: 30
    }, 
    {
        name: 'Bob',
        age: 35
    }
]

const title = 'Aplicacion con express'
app.get('/', (req, res) => {
    res.render('index',{users, title})
})

app.get('/admin', (req, res) => {
    res.render('admin')
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
    console.log('Aplicacion ejecutandose ')
})