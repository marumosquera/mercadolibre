const express = require("express");
const app = express();

// Configuraciones y middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware para habilitar CORS
app.use(function(req, res, next) {
  const allowedOrigins = ['http://localhost:3000', 'https://mercadolibre-mosquera.vercel.app'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Rutas
const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);
