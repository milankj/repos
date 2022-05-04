const express = require('express')
const morgan = require("morgan")
const dotenv = require('dotenv')
const globalErrorHandler = require('./src/utils/globalError')
const cors = require("cors");
const InitiateMongoServer = require('./db')

InitiateMongoServer()


const rootRouter = require('./src/routes/root.router')
const userRouter = require("./src/routes/user.router");

const app = express();

app.use(cors());

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use(express.json())

app.use("/api/v1/user", userRouter);
app.use('/*', rootRouter)
app.use(globalErrorHandler)
dotenv.config({ path: './.env' })
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`app running on http://localhost:${port}`)
})