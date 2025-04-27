// Simula una base de datos en memoria
let productos = [];

function agregarProducto(nombre, precio) {
  const producto = {
    id: productos.length + 1,
    nombre,
    precio
  };
  productos.push(producto);
}

function obtenerProductos() {
  return productos;
}

function obtenerProductoPorId(id) {
  return productos.find(p => p.id === id);
}

function actualizarProducto(id, nombre, precio) {
  const producto = productos.find(p => p.id === id);
  if (producto) {
    producto.nombre = nombre;
    producto.precio = precio;
    return producto;
  }
  return null;
}

function eliminarProducto(id) {
  const index = productos.findIndex(p => p.id === id);
  if (index !== -1) {
    productos.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = {
  agregarProducto,
  obtenerProductos,
  obtenerProductoPorId,
  actualizarProducto,
  eliminarProducto
};
