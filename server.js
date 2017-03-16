const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Router
router(app);

app.listen(process.env.PORT || 8080, function() {
  console.log('Server started, listening on port:', 8080);
});
