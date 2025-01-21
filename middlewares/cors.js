const cors = require("cors");

const corsMiddleware = cors({
  origin: [
    "http://127.0.0.1:5500",
    "www.cardsproject.co.il",
    "http://localhost:5173",
    "http://localhost:3000",
    "https://react-project-tqe4.onrender.com",
    "https://cardsservice.onrender.com",
    "https://fedoruk-cards.vercel.app",
    "https://fedoruk-cards-git-main-vov-feds-projects.vercel.app",
    "https://fedoruk-cards-vov-feds-projects.vercel.app",
    "https://astonishing-daffodil-cf4e9a.netlify.app"
  ],
});

module.exports = corsMiddleware;