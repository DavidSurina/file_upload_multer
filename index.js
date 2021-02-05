const express = require('express');
const app = express();

let port = 3000;

var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.img');
    }
})

var upload = multer({ storage: storage });


app.post('/upload-profile-pic', upload.single('profile_pic'), (req, res, next) => {
  console.log(req.file)
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
