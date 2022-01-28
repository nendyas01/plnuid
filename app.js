var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var quotesRouter = require('./routes/quotes');
var blokgarduRouter = require('./routes/blokgardu');
var jointingRouter = require('./routes/jointing');
var jtmRouter = require('./routes/jtm');
var jtrRouter = require('./routes/jtr');
var mvcableRouter = require('./routes/mvcable');
var mvcellRouter = require('./routes/mvcell');
var busbarRouter = require('./routes/busbar');
var lvcableRouter = require('./routes/lvcable');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/quotes', quotesRouter);
app.use('/blokgardu', blokgarduRouter);
app.use('/jointing', jointingRouter);
app.use('/jtm', jtmRouter);
app.use('/jtr', jtrRouter);
app.use('/mvcable', mvcableRouter);
app.use('/mvcell', mvcellRouter);
app.use('/busbar', busbarRouter);
app.use('/lvcable', lvcableRouter);

app.use("/blokgardu/:id",blokgarduRouter);
app.use("/jointing/:assetgroup",jointingRouter);
app.use("/busbar/:id",busbarRouter);
app.use("/lvcable/:id",lvcableRouter);

module.exports = app;
