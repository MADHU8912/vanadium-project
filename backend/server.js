const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());


// Home Route

app.get("/", (req, res) => {

    res.send("Vanadium Backend Running");

});


// Status Route

app.get("/api/status", (req, res) => {

    res.json({

        backend: "Running",

        docker: "Active",

        jenkins: "Connected",

        githubActions: "Working"

    });

});


const PORT = 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});