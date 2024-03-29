// Projecto FullStack Kata FullStack DEV.f Master en Coding
// por Bernardo F. Martinez Meave @bfelipemm
// Stardate 20240227

const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5003;
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();

const app = express();

app.use(express.json()); //para recibir info por un formulario en body
app.use(express.urlencoded({ extended: false }));

app.use("/api/hobbittalk", require("./routes/hobbittalkRoutes"));
app.use("/api/users", require("./routes/usersRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Hobbitalk Server up on port ${port}`.cyan));
