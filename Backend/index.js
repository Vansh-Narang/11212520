
const express = require("express");
require("dotenv").config();
const Routes = require("./routes/productRoutes");
const app = express();
var cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(
    cors({
        origin: "*",
    })
);
// Middleware
app.use(express.json());

app.use("/api/v1", Routes);

// CORS Configuration
app.listen(PORT, () => {
    console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});

app.get("*", (req, res) => {
    res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});
