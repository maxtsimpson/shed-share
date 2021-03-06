require('dotenv').config();

const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { Strategy: FacebookStrategy } = require('passport-facebook');

const db = require('../models');

let baseURL
process.env.NODE_ENV === 'development' ? baseURL = 'http://localhost:3001' : baseURL = ''

/**
 * Sign in using Email and Password.
 */
passport.use(new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
      usernameField: "email"
    },
    function(email, password, done) {
      // When a user tries to sign in this code runs
      console.log(`finding user from mongo email: ${email}`)
      db.User.findOne({
          email: email
      })
      .then(function(dbUser) {
        
        console.log({dbUser})
        // If there's no user with the given email
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect email."
          });
        }
        
        console.log('user found password matching now')
        // If there is a user with the given email, but the password the user gives us is incorrect
        if (!dbUser.isValidPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }

        console.log('local passport auth successful')
        // If none of the above, return the user
        return done(null, dbUser);
      })
      .catch(error => {
        console.log('error in passport local auth');
        console.log({error})
      });
    }
  ));

  passport.use(new FacebookStrategy({
    clientID: process.env.FB_APPID,
    clientSecret: process.env.FB_SECRET,
    callbackURL: baseURL + 'auth/facebook/callback',
    profileFields: ['name', 'email']
  },
  function(accessToken, refreshToken, profile, done) {

    db.User.findOrCreate({
        where: { 
          facebook: profile.id,
        },
        defaults: {
          //this should just use the properties from the where clause  
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
        }
      },
      )
      .then((user) => {
        return done(null, user[0])
      })
      .catch((err) => console.log(err))
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


// Exporting our configured passport
module.exports = passport;