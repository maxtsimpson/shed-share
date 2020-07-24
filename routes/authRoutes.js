const router = require("express").Router();
const passport = require('passport');
const db = require("../models")

router
    .route("/auth/facebook/")
    .get(passport.authenticate('facebook'))

router
    .route('/auth/facebook/callback')
    .get(passport.authenticate('facebook', { failureRedirect: '/' }), function (req, res) {
        res.redirect('/');
    });

router
    .route("/auth/login")
    .post(passport.authenticate("local"), function (req, res) {
        res.json(req.user);
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
                        .catch(function (err) {
                            //the error returned from sequalize is a big object so need to get the actual error message
                            res.status(401).json(err.errors[0].message);
                        });
                } else {
                    res.status(401).json('There is already a user with this email address')
                }
            })
            .catch(function (err) {
                //the error returned from sequalize is a big object so need to get the actual error message
                res.status(401).json(err.errors[0].message);
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
