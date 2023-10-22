const cors = require("cors"); //cors provides Express middleware to enable CORS with various options.
const express = require("express"); //Express is for building the Rest apis
const app = express();

global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:8081" //http://localhost:8080.
};



app.use(cors(corsOptions));

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});