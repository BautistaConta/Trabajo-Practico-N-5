const express = require('express');
const app = express();
const productosRoutes = require('./routes/productosRoutes');

app.use(express.json());

// Usar las rutas
app.use('/api', productosRoutes);

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor API REST corriendo en http://localhost:3000');
});
