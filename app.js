const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const userRouter = require('./routes/userRouter');
const homepageRouter = require('./routes/homepageRouter');
const hotelsRouter = require('./routes/hotelsRouter');
const offersRouter = require('./routes/offersRouter');
const holidayThemesRouter = require('./routes/holidayThemesRouter');
const regionsHotelRouter = require('./routes/regionHotelsRouter');
const reservationRouter = require('./routes/reservationRouter');

const app = express();

//MIDDLEWARES
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//ROUTES
app.use('/user', userRouter);
app.use('/anasayfa', homepageRouter);
app.use('/oteller', hotelsRouter);
app.use('/kampanyalar', offersRouter);
app.use('/tatil-temalari', holidayThemesRouter);
app.use('/bolgeler', regionsHotelRouter);
app.use('/rezervasyon-bilgileri', reservationRouter);

module.exports = app;
