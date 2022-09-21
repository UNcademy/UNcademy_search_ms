const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const db = require('./models/index')
const cors = require('cors')
var shell = require("shelljs");
require("dotenv").config();

async function updateDatabase() {
     await db.sequelize.sync({ force: true }).then(() => {
        console.log('yes re-sync done!');
})
}
var argumentsArr = process.argv

async function update() {
     await updateDatabase();
     shell.exec("npx sequelize-cli db:seed:all");
     console.log("Models updated");
     process.exit()
}
if (argumentsArr[2] == "updateDatabase") {
     update();
}

const http = require('http');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }))

require("./routes")(app);

const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

