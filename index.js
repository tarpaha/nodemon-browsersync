const browserSync = require('browser-sync');

const express = require('express');
const app = express();
const port = 3000;

const isProduction = 'production' === process.env.NODE_ENV;

app.get('/', function (req, res) {
  res.send('<body>Hello World!</body>');
});

app.use(express.static('public'));

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
    if(!isProduction) {
        browserSync({
            files: ['**/*'],
            online: false,
            open: false,
            port: port,
            proxy: 'localhost:' + port,
            ui: false
        });
    }
});
