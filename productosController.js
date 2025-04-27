const model = require('../models/productosModel');

function listarProductos(req, res) {
  const productos = model.obtenerProductos();
  res.json(productos);
}

function agregarProducto(req, res) {
  const { nombre, precio } = req.body;
  if (!nombre || !precio) {
    return res.status(400).json({ error: 'Faltan datos' });
  }
  model.agregarProducto(nombre, precio);
  res.status(201).json({ mensaje: 'Producto agregado' });
}

// Opcionales
function obtenerProducto(req, res) {
  const id = parseInt(req.params.id);
  const producto = model.obtenerProductoPorId(id);
  if (!producto) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  res.json(producto);
}

function actualizarProducto(req, res) {
  const id = parseInt(req.params.id);
  const { nombre, precio } = req.body;
  const productoActualizado = model.actualizarProducto(id, nombre, precio);
  if (!productoActualizado) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  res.json({ mensaje: 'Producto actualizado', producto: productoActualizado });
}

function eliminarProducto(req, res) {
  const id = parseInt(req.params.id);
  const eliminado = model.eliminarProducto(id);
  if (!eliminado) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  res.json({ mensaje: 'Producto eliminado' });
}

module.exports = {
  listarProductos,
  agregarProducto,
  obtenerProducto,
  actualizarProducto,
  eliminarProducto
};
