

const express = require("express");
const functionality = require("./routes/functionality");
const app = express();
const connectDB = require("./db/connect");
// const notFound = require('./middleware/not-found')
require("dotenv").config();

//Middleware
app.use(express.json());

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

app.use("/api/v1/functionality", functionality);


const port = 3001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
