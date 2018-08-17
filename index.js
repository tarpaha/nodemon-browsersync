const express = require('express');
const app = express();
const port = 3000;

const isProduction = 'production' === process.env.NODE_ENV;

app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile('index.html');
});

function startBrowserSync() {
    const browserSync = require('browser-sync');
    browserSync({
        files: ['public/**/*'],
        online: false,
        open: false,
        port: port + 1,
        proxy: 'localhost:' + port,
        ui: false
    });
}

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
    if(!isProduction) {
        startBrowserSync();
    }
});
