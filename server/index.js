const express = require("express");
const app = express();

// Configuraciones y middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
const itemsRoutes = require("./routes/items");
app.use("/api/items", itemsRoutes);

// // Puerto de escucha
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Servidor escuchando en el puerto ${port}`);
// });

module.exports = app;