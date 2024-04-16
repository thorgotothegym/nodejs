const path = require('node:path')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const { get404 } = require('./controller/error')

const adminRouter = require('./routes/admin')
const shopRoutes = require('./routes/shop')

// set ejs <-- native from express
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRouter)
app.use(shopRoutes)

app.use(get404)

app.listen(3000)
