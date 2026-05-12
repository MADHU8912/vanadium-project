const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {

    res.send("Vanadium Backend Running");

});

app.get("/health", (req, res) => {

    res.status(200).json({

        status: "OK",

        app: "Vanadium",

        docker: "Running",

        deployment: "Cloudflare"

    });

});

const PORT = 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});