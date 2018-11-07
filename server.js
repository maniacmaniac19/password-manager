const path = require('path');
const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 8080;
const session = require('express-session')
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const userInViews = require('./middleware/userInViews');
require('dotenv').config();

const sess = {
  secret: process.env.sessionSecret,
  cookie: {},
  resave: false, 
  saveUnitialized: true
};

if(app.get('env') === 'production'){
  sess.cookie.secure = true;
}

const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

passport.use(strategy);

app.use(session(sess));
app.use(express.static("app/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main", layoutsDir:'./views/layouts' }));
app.set("view engine", "handlebars");



app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});


const routes = require('./app/routing/apiRoutes');
const htmlRoutes = require('./app/routing/htmlRoutes');
const authRoutes = require('./app/routing/auth');

app.use(userInViews());
app.use(routes);
app.use(htmlRoutes);
app.use(authRoutes);

const db = require('./models');

db.sequelize.sync({force: true}).then(function(){

    app.listen(PORT, function(){
      console.log(`App is now listening on PORT ${PORT}`)
    });
  });