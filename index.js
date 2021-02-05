const express = require("express");
const app = express();

const port = 3000;

app.post('/upload-profile-pic', (req, res, next) => {
    
})

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
