const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const viewRouter = require('./routes/viewRoutes');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// 1) Global MIDDLEWARES
// Serving static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  cors({
    origin: 'http://localhost:3000', // ✅ frontend origin
    credentials: true, // ✅ allow cookies
  })
);
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],

        baseUri: ["'self'"],

        scriptSrc: [
          "'self'",
          'https://unpkg.com',
          'https://api.mapbox.com',
          'https://cdnjs.cloudflare.com',
        ],

        styleSrc: [
          "'self'",
          "'unsafe-inline'",
          'https://unpkg.com',
          'https://api.mapbox.com',
          'https://fonts.googleapis.com', // ✅ FIX FOR GOOGLE FONTS CSS
        ],

        fontSrc: [
          "'self'",
          'https://fonts.gstatic.com', // ✅ FIX FOR GOOGLE FONTS FILES
        ],

        imgSrc: [
          "'self'",
          'data:',
          'blob:',
          'https://*.openstreetmap.org',
          'https://unpkg.com',
          'https://api.mapbox.com',
        ],

        connectSrc: [
          "'self'",
          'data:',
          'blob:',
          'https://*.openstreetmap.org',
          'https://api.mapbox.com',
          'https://*.cloudflare.com',
          'https://cdnjs.cloudflare.com',
          'https://unpkg.com',
          'http://127.0.0.1:3000',
          'http://localhost:3000',
          // ✅ ADD THESE FOR PARCEL HMR
          'ws://localhost:*',
          'ws://127.0.0.1:*',
        ],

        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    },
  })
);

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  })
);

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/', viewRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);

app.all('*', (req, res, next) => {
  console.log('Unknown route accessed:', req.originalUrl); // 👈 This will log
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
