const path = require('path');
const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 8080;
require('dotenv').config();

app.use(express.static("app/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main", layoutsDir:'./views/layouts' }));
app.set("view engine", "handlebars");

const routes = require('./app/routing/apiRoutes');
const htmlRoutes = require('./app/routing/htmlRoutes');

app.use(routes);
app.use(htmlRoutes);

const db = require('./models');

db.sequelize.sync({force: true}).then(function(){

    app.listen(PORT, function(){
      console.log(`App is now listening on PORT ${PORT}`)
    });
  });