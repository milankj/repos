const express = require('express')
const morgan = require("morgan");
const dotenv = require('dotenv')
const InitiateMongoServer = require('./db')

InitiateMongoServer()


const rootRouter = require('./router/rootRouter')

const app = express();

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use(express.json())

app.use('/*', rootRouter)


dotenv.config({ path: './.env' })
const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`app running on http://localhost:${port}`)
})