const cors = require("cors");

const corsOptions = {
  origin: [
    'https://f-card-lyart.vercel.app',
    'https://cardsservice.onrender.com',
    'http://localhost:10000'
  ],
  credentials: true,
  exposedHeaders: ['Content-Length', 'X-Total-Count'],
  preflightContinue: false,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

const corsMiddleware = cors(corsOptions)

module.exports = corsMiddleware;
