const cors = require("cors");

const corsMiddleware = cors({
  origin: [
    "//https://f-card-lyart.vercel.app/",
    "https://cardsservice.onrender.com"
    "http://localhost:3000/"
  ],
});

module.exports = corsMiddleware;
