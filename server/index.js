const express = require("express");
const app = express();

// Configuraciones y middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware para habilitar CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', process.env.CORS_URL);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Rutas
const itemsRoutes = require("./routes/items");
app.use("/api/items", itemsRoutes);

// Puerto de escucha
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

// module.exports = app;