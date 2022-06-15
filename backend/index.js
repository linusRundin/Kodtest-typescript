/**
 * This file is used to setup a 
 * local hosting of the server
 */

const express = require("express");
const cors = require("cors");
const routes = require("./routes")

const app = express();

app.use(cors());
app.use(express.json());

/**
 * This routes the different functions to the URL
 */
app.use("/comment", routes);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.use((req, res) => {
    res.status(404).send('404: Page not found');
  });

  // set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});