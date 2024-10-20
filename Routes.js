const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.render('Signup');
});

app.post('/uploadProfilePicture', (req, res, next) => {
    upload(req, res, function (err) {
        if (err) {
            // Handle errors during file upload
            res.send(err);
        } else {
            // Success message after a successful upload
            res.send("Success, Image uploaded!");
        }
    });
});