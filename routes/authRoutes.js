const router = require("express").Router();
const passport = require('passport');
const db = require("../models")

router
    .route("/auth/facebook/")
    .get(passport.authenticate('facebook'))

router
    .route('/auth/facebook/callback')
    .get(passport.authenticate('facebook', { failureRedirect: '/' }), function (req, res) {
        //actually i dont think i want to redirect. should just return the status and any user tokens
        console.log("finished fb auth")
        console.log({req})
        console.log({res})
        // res.redirect('/');
    });

console.log("adding auth/login route")
router
    .route("/auth/login")
    .post(passport.authenticate("local"), function (req, res) {
        console.log("finished local auth")
        console.log({req})
        console.log({res})
    });

router
    .route("/auth/signup")
    .post(function (req, res) {
        db.User.findOne({ where: { email: req.body.email } })
            .then(function (existingUser) {
                if (existingUser === null) {
                    db.User.create(req.body)
                        .then(function () {
                            res.redirect(307, "/auth/login");
                        })
                        .catch(function (error) {
                            //the error returned from mongoose is not friendly so set a more friendly error description
                            let errorDescription = 'something went wrong'
                            switch (error.code) {
                                case 11000:
                                        errorDescription = `this email already exists`
                                    break;
                            
                                default:
                                    break;
                            }

                            res.status(401).json({
                                errorCode: error.code,
                                errorDescription,
                            });
                        });
                } else {
                    res.status(401).json('There is already a user with this email address')
                }
            })
            .catch(function (error) {
                //the error returned from sequalize is a big object so need to get the actual error message
                const errorDescription = 'something went wrong'
                
                res.status(401).json({
                    errorCode: error.code,
                    errorDescription,
                });
            });
    });

router
    .route("/logout")
    .get(function (req, res) {
        req.logout();
        res.redirect("/");
    });

router
    .route("/auth/user_data")
    .get(function (req, res) {

        if (!req.user) {
            // The user is not logged in, send back an empty object
            return res.json({});
        }

        return res.json(req.user);

    });

module.exports = router;
