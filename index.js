const express = require("express");

const app = express();
var userRoutes = require("./routes/user.router");
var indexRoutes = require("./routes/index.router");

//EJS
app.set('view engine', 'pug');
app.set('views','./views');


//Routes
app.use("/",indexRoutes);
app.use("/users",userRoutes);



const PORT = process.env.PORT || 8000;

app.listen(PORT), console.log(`Server started on port ${PORT}`);
