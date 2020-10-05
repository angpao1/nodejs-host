const express = require('express')
const cors = require('cors')
const productRoutes = require('./routes/product.route')
const http = require('http');

const app = express()
app.use(express.json())
app.use(cors())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/products', productRoutes)

const httpServer = http.createServer(app);

// const port = 4000
// app.listen(port, () => {
//     console.log('Listening on port ' + port)
// })

httpServer.listen(4000, () => {
	console.log('HTTP Server running on port 4000');
});
